import { doc, updateDoc } from "firebase/firestore";
import { useDocument } from "react-firebase-hooks/firestore";
import { db } from "src/util/Firebase";
import { PlayerData } from "src/_types/playerData";
import * as S from "./styled";
import { useEffect, useState } from "react";

const Editor = (props: { documentId: string }) => {
  const { documentId } = props;
  const docRef = doc(db, "tournament-sets", documentId);
  const [value, loading, error] = useDocument(docRef);

  const placeHolderPlayer = {
    name: "",
    score: 0,
    tag: "",
  };

  const [playerOneData, setPlayerOneData] = useState<PlayerData | undefined>();
  const [playerTwoData, setPlayerTwoData] = useState<PlayerData | undefined>();
  const [centerTextState, setCenterTextState] = useState<string>();
  const [isReversed, setIsReversed] = useState<boolean>();

  useEffect(() => {
    if (!loading) {
      const { playerOne, playerTwo, centerText, reversed } = value!.data()!;
      setPlayerOneData(playerOne);
      setPlayerTwoData(playerTwo);
      setCenterTextState(centerText);
      setIsReversed(reversed);
    }
  }, [loading]);

  if (loading) {
    return <h1>Loading</h1>;
  }

  if (!!error) {
    console.error(`An error ocurred: ${error}`);
  }

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
      reversed: isReversed,
    };

    await updateDoc(docRef, newDocumentData);
  };

  const updateCenter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCenterTextState(e.target.value);
  };

  const toggleReversed = () => {
    setIsReversed((prevState) => !prevState);
  };

  if (loading || !playerOneData || !playerTwoData) {
    return <h1>Loading...</h1>;
  }

  return (
    <S.Editor>
      <S.EditorHeading>Tournament Header Editor</S.EditorHeading>
      <S.PlayersForm>
        <S.PlayerHeading>Player 1</S.PlayerHeading>
        <PlayerEditor player={playerOneData} setter={setPlayerOneData} />
        <S.VerticalDivider />
        <S.PlayerHeading>Player 2</S.PlayerHeading>
        <PlayerEditor player={playerTwoData} setter={setPlayerTwoData} />
      </S.PlayersForm>
      <S.VerticalDivider />
      <label htmlFor="">Center Text (for example: "Round 1 Winners")</label>
      <input type="text" onChange={updateCenter} value={centerTextState} />
      <button onClick={() => toggleReversed()}>
        Reversed: {isReversed ? "yes" : "no"}
      </button>
      <S.UpdateButton onClick={() => updateDocument()}>Update</S.UpdateButton>
    </S.Editor>
  );
};

const PlayerEditor = (props: {
  player: PlayerData | undefined;
  setter: Function;
}) => {
  const { player, setter } = props;

  const [playerName, setPlayerName] = useState(player?.name);
  const [playerTag, setPlayerTag] = useState(player?.tag);
  const [playerScore, setPlayerScore] = useState<number>(player?.score ?? 0);

  useEffect(() => {
    handleSubmit();
  }, [playerName, playerTag, playerScore]);

  const handleSubmit = () => {
    const newPlayerData = {
      name: playerName ?? "",
      tag: playerTag ?? "",
      score: playerScore,
    };

    setter(newPlayerData);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerName(e.target.value);
    handleSubmit();
  };

  const handleTagChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerTag(e.target.value);
    handleSubmit();
  };

  const handleScoreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerScore(Number(e.target.value));
    handleSubmit();
  };

  const incrementScore = () => {
    setPlayerScore(playerScore + 1);
    handleSubmit();
  };

  const decrementScore = () => {
    setPlayerScore(playerScore - 1);
    handleSubmit();
  };

  const resetScore = () => {
    setPlayerScore(0);
    handleSubmit();
  };

  return (
    <S.PlayerDiv>
      <label htmlFor="player-tag">Prefix/Sponsor</label>
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
      <S.ScoreInput>
        <input
          name="player-score"
          type="number"
          value={playerScore}
          onChange={handleScoreChange}
        />

        <S.ScoreButtons>
          <S.IncrementButton type="button" onClick={() => incrementScore()}>
            +
          </S.IncrementButton>
          <S.DecrementButton type="button" onClick={() => decrementScore()}>
            -
          </S.DecrementButton>
          <button type="button" onClick={() => resetScore()}>
            Reset
          </button>
        </S.ScoreButtons>
      </S.ScoreInput>
    </S.PlayerDiv>
  );
};

export default Editor;
