import * as S from "./styled";

export const Help = () => {
  return (
    <S.Main>
      <h1>How to use</h1>

      <div>
        <h2>Creating a header</h2>
        <ol>
          <li>Go to the "Home" page and press "Create a new header".</li>
          <li>
            Enter an ID for the header you want to create. This will be the
            "name" of your header. People can search for the ID to edit the
            header.{" "}
            <strong>
              Only give out the ID to those you want to have editing access.
            </strong>
          </li>
          <li>
            Press "Proceed". This will create your header and redirect you to
            the editor for your header.
          </li>
        </ol>
      </div>

      <div>
        <h2>Editing an existing header:</h2>
        <ol>
          <li>Go to the "Home" page and press "Edit an existing header".</li>
          <li>
            Enter the ID for the header you want to edit, then press "Proceed".
          </li>
          <li>When in the editor, make any appropriate changes.</li>
          <li>Press "Submit" to update your changes.</li>
        </ol>
      </div>

      <div>
        <h2>Inserting your header into streaming/recording software:</h2>
        <ol>
          <li>
            Create a new header from the "Home" page (or edit an existing
            header).
          </li>
          <li>While in the editor, press the "Copy render URL" button.</li>
          <li>
            Paste the copied URL into a browser source in your
            streaming/recording software of choice.{" "}
            <strong>
              Make sure to set the width and height to 1920x1080 pixels.
            </strong>
          </li>
          <li>
            You're all set! You can now edit your header remotely from any
            device via the editor.
          </li>
        </ol>
      </div>
    </S.Main>
  );
};
