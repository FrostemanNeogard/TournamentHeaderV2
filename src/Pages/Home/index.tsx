import { Link } from "react-router-dom";
import * as S from "./styled";
import { useState, useMemo } from "react";

type Verb = "edit" | "view" | "create";

export const HomePage = () => {
  const [headerId, setHeaderId] = useState<string>();
  const [verb, setVerb] = useState<Verb | undefined>();

  const changeVerb = (verb: Verb | undefined) => {
    setVerb(verb);
  };

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setHeaderId(value);
  };

  const memoizedHeaderInteraction = useMemo(() => {
    return (
      <HeaderInteraction
        headerId={headerId}
        verb={verb}
        onChangeHeaderId={handleIdChange}
        onBack={() => changeVerb(undefined)}
      />
    );
  }, [headerId, verb]);

  return (
    <S.Main>
      <h1>Tournament Header Homepage</h1>
      {verb ? (
        memoizedHeaderInteraction
      ) : (
        <HomeOptions onChangeVerb={changeVerb} />
      )}
    </S.Main>
  );
};

const HeaderInteraction = (props: {
  headerId: string | undefined;
  verb: Verb | undefined;
  onChangeHeaderId: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBack: () => void;
}) => {
  const FinalButton = () => {
    switch (props.verb) {
      case "create":
        return (
          <button>
            <Link to={`edit/?id=${props.headerId}`}>Create</Link>
          </button>
        );
      case "edit":
        return (
          <button>
            <Link to={`edit/?id=${props.headerId}`}>Edit</Link>
          </button>
        );
      case "view":
        return (
          <button>
            <Link to={`render/?id=${props.headerId}`}>View</Link>
          </button>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <label htmlFor="header-id">
        Enter an ID for the header you want to {props.verb}.
      </label>
      <input
        type="text"
        name="header-id"
        onChange={props.onChangeHeaderId}
        value={props.headerId}
      />
      <button onClick={props.onBack}>Back</button>
      <FinalButton />
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
