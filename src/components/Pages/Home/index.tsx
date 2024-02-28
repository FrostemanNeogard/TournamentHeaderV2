import { Link } from "react-router-dom";
import * as S from "./styled";
import { useState } from "react";

type Verb = "edit" | "view" | "create";

export const HomePage = () => {
  const [headerId, setHeaderId] = useState<string>();
  const [verb, setVerb] = useState<Verb | undefined>();

  const changeVerb = (verb: Verb | undefined) => {
    setVerb(verb);
  };

  const handleHeaderId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHeaderId(e.target.value);
  };

  const HeaderInteraction = (props: { verb: Verb }) => {
    const FinalButton = () => {
      switch (props.verb) {
        case "create":
          return (
            <button>
              <Link to={`edit/?id=${headerId}`}>Create</Link>
            </button>
          );
        case "edit":
          return (
            <button>
              <Link to={`edit/?id=${headerId}`}>Edit</Link>
            </button>
          );
        case "view":
          return (
            <button>
              <Link to={`render/?id=${headerId}`}>View</Link>
            </button>
          );
      }
    };

    return (
      <>
        <label htmlFor="header-id">
          Enter a name for the header you want to {props.verb}
        </label>
        <input
          type="text"
          name="header-id"
          onChange={handleHeaderId}
          value={headerId}
        />
        <button onClick={() => changeVerb(undefined)}>Back</button>
        <FinalButton />
      </>
    );
  };

  const HomeOptions = () => {
    return (
      <>
        <p>What would you like to do?</p>
        <button onClick={() => changeVerb("create")}>
          Create a new header
        </button>
        <button onClick={() => changeVerb("edit")}>
          Edit an existing header
        </button>
        <button onClick={() => changeVerb("view")}>
          View an existing header
        </button>
      </>
    );
  };

  return (
    <S.Main>
      <h1>Tournament Header Homepage</h1>
      {verb ? <HeaderInteraction verb={verb} /> : <HomeOptions />}
    </S.Main>
  );
};
