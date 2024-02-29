import { doc, updateDoc } from "firebase/firestore";
import { useDocument } from "react-firebase-hooks/firestore";
import { db } from "src/util/Firebase";
import { PlayerData } from "src/_types/playerData";
import * as S from "./styled";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Editor = () => {
  const [queryParameters] = useSearchParams();
  const documentId = queryParameters.get("id") ?? "";
  const docRef = doc(db, "tournament-sets", documentId);
  const [value, loading, error] = useDocument(docRef);

  const [playerOneData, setPlayerOneData] = useState<PlayerData | undefined>();
  const [playerTwoData, setPlayerTwoData] = useState<PlayerData | undefined>();
  const [centerTextState, setCenterTextState] = useState<string>();
  const [isReversed, setIsReversed] = useState<boolean>();
  const [theme, setTheme] = useState<string>();

  useEffect(() => {
    if (loading) {
      return;
    }

    if (!value?.data()) {
      return;
    }

    const { playerOne, playerTwo, centerText, reversed, theme } =
      value!.data()!;
    setPlayerOneData(playerOne);
    setPlayerTwoData(playerTwo);
    setCenterTextState(centerText);
    setIsReversed(reversed);
    setTheme(theme);
  }, [loading]);

  if (loading) {
    return (
      <S.Editor>
        <h1>Loading...</h1>
      </S.Editor>
    );
  }

  if (!!error) {
    console.error(`An error ocurred: ${error}`);
    return (
      <S.Editor>
        <h1>An error ocurred.</h1>
      </S.Editor>
    );
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
      theme: theme,
    };

    await updateDoc(docRef, newDocumentData);
  };

  const updateCenter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCenterTextState(e.target.value);
  };

  const toggleReversed = () => {
    setIsReversed((prevState) => !prevState);
  };

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value);
  };

  if (loading || !playerOneData || !playerTwoData) {
    return (
      <S.Editor>
        <h1>Loading...</h1>
      </S.Editor>
    );
  }

  return (
    <S.Editor>
      <S.EditorHeading>ID: {documentId}</S.EditorHeading>
      <S.HorizontalDivider />
      <S.PlayersForm>
        <S.PlayerHeading>Player 1</S.PlayerHeading>
        <PlayerEditor player={playerOneData} setter={setPlayerOneData} />
      </S.PlayersForm>
      <S.HorizontalDivider />
      <S.PlayersForm>
        <S.PlayerHeading>Player 2</S.PlayerHeading>
        <PlayerEditor player={playerTwoData} setter={setPlayerTwoData} />
      </S.PlayersForm>
      <S.HorizontalDivider />
      <S.MiscallaneousDetails>
        <S.LabelledInput>
          <label htmlFor="">Center Text (for example: "Round 1 Winners")</label>
          <input type="text" onChange={updateCenter} value={centerTextState} />
        </S.LabelledInput>
        <S.LabelledInput>
          <label htmlFor="theme">Theme</label>
          <select
            name="theme"
            onChange={handleThemeChange}
            defaultValue={theme}
          >
            <option value={"tekken8"}>TEKKEN 8</option>
            <option value={"tekken7"}>TEKKEN 7</option>
          </select>
        </S.LabelledInput>
        <S.LabelledInput>
          <label htmlFor="reversed-button">Reversed</label>
          <button name="reversed-button" onClick={() => toggleReversed()}>
            {isReversed ? "Yes" : "No"}
          </button>
        </S.LabelledInput>
        <S.UpdateButton onClick={() => updateDocument()}>Update</S.UpdateButton>
      </S.MiscallaneousDetails>
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
    let newValue: number = Number(e.target.value);
    setPlayerScore(newValue);
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
      <S.LabelledInput>
        <label htmlFor="player-tag">Prefix/Sponsor</label>
        <input
          name="player-tag"
          type="text"
          value={playerTag ?? ""}
          onChange={handleTagChange}
        />
      </S.LabelledInput>

      <S.LabelledInput>
        <label htmlFor="player-name">Name</label>
        <input
          name="player-name"
          type="text"
          value={playerName}
          onChange={handleNameChange}
        />
      </S.LabelledInput>

      <S.LabelledInput>
        <label htmlFor="player-score">Score</label>
        <S.ScoreInput>
          <input
            name="player-score"
            type="number"
            value={Number(playerScore).toString()}
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
      </S.LabelledInput>
    </S.PlayerDiv>
  );
};

export default Editor;
