import { doc, setDoc } from "firebase/firestore";
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
        tag: "",
        score: playerOneData?.score ?? 0,
      },
      playerTwo: {
        name: playerTwoData?.name,
        tag: "",
        score: playerTwoData?.score ?? 0,
      },
      centerText: centerTextState,
      reversed,
      theme,
    };

    // if (!playerOneData || !playerTwoData) {
    //   return;
    // }

    console.log("Updating shit:", newDocumentData);

    await setDoc(docRef, newDocumentData);
  };

  const updateCenter = (e) => {
    setCenterTextState(e.target.value);
  };

  return (
    <>
      {loading && <h1>Loading...</h1>}
      {!loading && (
        <>
          <PlayerEditor player={playerOne} setter={setPlayerOneData} />
          <PlayerEditor player={playerTwo} setter={setPlayerTwoData} />
          <label htmlFor="">Center</label>
          <input type="text" onChange={updateCenter} />
          <button onClick={() => updateDocument()}>Update</button>
        </>
      )}
    </>
  );
};

const PlayerEditor = (props: { player: PlayerData; setter: Function }) => {
  const { player, setter } = props;

  const [playerName, setPlayerName] = useState(player.name);
  const [playerTag, setPlayerTag] = useState(player.tag);
  const [playerScore, setPlayerScore] = useState<number>(player.score);

  const handleSubmit = () => {
    const newPlayerData = {
      name: playerName,
      tag: playerTag,
      score: playerScore,
    };
    setter(newPlayerData);
  };

  const handleNameChange = async (e) => {
    await setPlayerName(e.target.value);
    handleSubmit();
  };

  const handleTagChange = async (e) => {
    await setPlayerTag(e.target.value);
    handleSubmit();
  };

  const handleScoreChange = async (e) => {
    await setPlayerScore(e.target.value);
    handleSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* <label htmlFor="player-tag">Tag</label>
      <input
        name="player-tag"
        type="text"
        value={playerTag ?? ""}
        onChange={handleTagChange}
      /> */}

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
    </form>
  );
};

export default Editor;
