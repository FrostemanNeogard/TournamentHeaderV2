import { doc, setDoc, updateDoc } from "firebase/firestore";
import { useDocument } from "react-firebase-hooks/firestore";
import { db } from "src/util/Firebase";
import { PlayerData } from "src/_types/playerData";
import * as S from "./styled";
import { useEffect, useState } from "react";

const Editor = (props: { documentId: string }) => {
  const { documentId } = props;
  const docRef = doc(db, "tournament-sets", documentId);
  const [value, loading, error] = useDocument(docRef);
  const { playerOne, playerTwo, centerText, reversed, theme } =
    value?.data() || {};

  if (!!error) {
    console.error(`An error ocurred: ${error}`);
  }

  const [playerOneData, setPlayerOneData] = useState<PlayerData>();
  const [playerTwoData, setPlayerTwoData] = useState<PlayerData>();
  const [centerTextState, setCenterTextState] = useState();

  const updateDocument = async () => {
    const newDocumentData = {
      playerOne: {
        name: playerOneData?.name,
        tag: playerOneData?.tag,
        score: playerOneData?.score ?? 0,
      },
      playerTwo: {
        name: playerTwoData?.name,
        tag: playerTwoData?.tag,
        score: playerTwoData?.score ?? 0,
      },
      centerText: centerTextState ?? "",
      reversed,
      theme,
    };

    await updateDoc(docRef, newDocumentData);
  };

  const updateCenter = (e) => {
    setCenterTextState(e.target.value);
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <S.Editor>
      <S.EditorHeading>Tournament Header Editor</S.EditorHeading>
      <S.VerticalDivider />
      <S.PlayersForm>
        <S.PlayerHeading>Player 1</S.PlayerHeading>
        <PlayerEditor player={playerOne} setter={setPlayerOneData} />
        <S.VerticalDivider />
        <S.PlayerHeading>Player 2</S.PlayerHeading>
        <PlayerEditor player={playerTwo} setter={setPlayerTwoData} />
      </S.PlayersForm>
      <S.VerticalDivider />
      <label htmlFor="">Center Text (for example: "Round 1 Winners")</label>
      <input type="text" onChange={updateCenter} />
      <S.VerticalDivider />
      <S.UpdateButton onClick={() => updateDocument()}>Update</S.UpdateButton>
    </S.Editor>
  );
};

const PlayerEditor = (props: { player: PlayerData; setter: Function }) => {
  const { player, setter } = props;

  const [playerName, setPlayerName] = useState(player.name);
  const [playerTag, setPlayerTag] = useState(player.tag);
  const [playerScore, setPlayerScore] = useState<number>(player.score);

  useEffect(() => {
    handleSubmit();
  }, [playerName, playerTag, playerScore]);

  const handleSubmit = () => {
    const newPlayerData = {
      name: playerName ?? "",
      tag: playerTag ?? "",
      score: Number(playerScore),
    };

    setter(newPlayerData);
  };

  const handleNameChange = async (e) => {
    setPlayerName(e.target.value);
    handleSubmit();
  };

  const handleTagChange = async (e) => {
    setPlayerTag(e.target.value);
    handleSubmit();
  };

  const handleScoreChange = async (e) => {
    setPlayerScore(e.target.value);
    handleSubmit();
  };

  return (
    <S.PlayerDiv>
      <label htmlFor="player-tag">Tag</label>
      <input
        name="player-tag"
        type="text"
        value={playerTag ?? ""}
        onChange={handleTagChange}
      />

      <label htmlFor="player-name">Name</label>
      <input
        name="player-name"
        type="text"
        value={playerName}
        onChange={handleNameChange}
      />

      <label htmlFor="player-score">Score</label>
      <input
        name="player-score"
        type="number"
        value={playerScore}
        onChange={handleScoreChange}
      />
    </S.PlayerDiv>
  );
};

export default Editor;
