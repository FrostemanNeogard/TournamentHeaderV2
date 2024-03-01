import { doc } from "firebase/firestore";
import { useDocument } from "react-firebase-hooks/firestore";
import { PlayerData } from "src/_types/playerData";
import { db } from "src/util/Firebase";
import * as S from "./styled";
import { useSearchParams } from "react-router-dom";

const PlayerCard = (props: { playerData: PlayerData; reversed?: boolean }) => {
  const { playerData, reversed } = props;
  const PlayerDetails = () => {
    if (reversed) {
      return (
        <h1>
          {playerData.tag && <span>{playerData.tag}</span>}

          {playerData.name}
        </h1>
      );
    }
    return (
      <h1>
        {playerData.name}
        {playerData.tag && <span>{playerData.tag}</span>}
      </h1>
    );
  };

  return (
    <S.Player>
      <h2>{playerData.score}</h2>
      <PlayerDetails />
    </S.Player>
  );
};

export const TournamentHeader = () => {
  const [queryParameters] = useSearchParams();
  const documentId = queryParameters.get("id") ?? "";
  const docRef = doc(db, "tournament-sets", documentId);
  const [value, loading, error] = useDocument(docRef);
  const { playerOne, playerTwo, centerText, reversed } = value?.data() || {};

  if (error) {
    console.error(`An error ocurred: ${error}`);
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <S.PlayerContainer>
      {value && (
        <PlayerCard playerData={reversed ? playerTwo : playerOne} reversed />
      )}
      <S.CenterText>{centerText}</S.CenterText>
      {value && <PlayerCard playerData={reversed ? playerOne : playerTwo} />}
    </S.PlayerContainer>
  );
};
