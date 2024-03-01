import * as S from "./styled";
import { ChangeEventHandler, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "src/util/Firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { SetData } from "src/_types/playerData";

type Verb = "edit" | "view" | "create";

export const HomePage = () => {
  const [headerId, setHeaderId] = useState<string>("");
  const [verb, setVerb] = useState<Verb | undefined>();
  const [errorText, setErrorText] = useState<string>();
  const navigate = useNavigate();

  function changeVerb(verb: Verb | undefined) {
    setVerb(verb);
    if (verb === undefined) {
      setErrorText(undefined);
    }
  }

  function handleIdChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setHeaderId(value);
  }

  async function proceedWithDocument() {
    const exists = await checkIfDocumentIdExists(headerId);
    if (verb === "create") {
      if (exists) {
        setErrorText("A header already exists with the given ID.");
        return;
      } else {
        const docRef = doc(db, "tournament-sets", headerId);
        const emptyDocumentData: SetData = {
          playerOne: {
            tag: "",
            name: "Player One",
            score: 0,
          },
          playerTwo: {
            tag: "",
            name: "Player Two",
            score: 0,
          },
          centerText: "Winners Round 1",
          theme: "tekken8",
          reversed: false,
        };
        await setDoc(docRef, emptyDocumentData);
        navigate(`edit?id=${headerId}`);
      }
    }

    if (!exists) {
      setErrorText("Couldn't find a header with the given ID.");
      return;
    }

    switch (verb) {
      case "edit":
        navigate(`edit?id=${headerId}`);
        break;
      case "view":
        navigate(`render?id=${headerId}`);
        break;
    }
  }

  return (
    <S.Main>
      <h1>Tournament Header Homepage</h1>
      {errorText && <p>{errorText}</p>}
      {verb ? (
        <HeaderNav
          handleIdChange={handleIdChange}
          headerId={headerId}
          changeVerb={changeVerb}
          proceedWithDocument={proceedWithDocument}
          verb={verb}
        />
      ) : (
        <HomeOptions onChangeVerb={changeVerb} />
      )}
    </S.Main>
  );
};

const HeaderNav = (props: {
  handleIdChange: ChangeEventHandler<HTMLInputElement>;
  headerId: string;
  verb: string;
  changeVerb: Function;
  proceedWithDocument: Function;
}) => {
  const { handleIdChange, headerId, changeVerb, proceedWithDocument, verb } =
    props;

  return (
    <>
      <label htmlFor="header-id">
        Enter an ID for the header you want to {verb}.
      </label>
      <input
        type="text"
        name="header-id"
        onChange={handleIdChange}
        value={headerId}
        placeholder="Header ID"
      />
      <button onClick={() => changeVerb(undefined)}>Back</button>
      <button onClick={() => proceedWithDocument()}>Proceed</button>
    </>
  );
};

const HomeOptions = (props: {
  onChangeVerb: (verb: Verb | undefined) => void;
}) => {
  return (
    <>
      <p>What would you like to do?</p>
      <button onClick={() => props.onChangeVerb("create")}>
        Create a new header
      </button>
      <button onClick={() => props.onChangeVerb("edit")}>
        Edit an existing header
      </button>
      <button onClick={() => props.onChangeVerb("view")}>
        View an existing header
      </button>
    </>
  );
};

async function checkIfDocumentIdExists(documentId: string) {
  const docRef = doc(db, "tournament-sets", documentId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return true;
  } else {
    return false;
  }
}
