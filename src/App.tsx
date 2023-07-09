import { NoteBox } from "./NoteBox.tsx";
import { Envelope } from "./Envelope.tsx";
import { CoinBox } from "./CoinBox.tsx";
import { useAppDispatch } from "./appStore.ts";
import { css, Global } from "@emotion/react";
import { toggleResultMode } from "./registerSlice.ts";

const globalStyle = css`
  body {
    color: rgba(0, 0, 0, 0.87);
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5;
    letter-spacing: 0.00938em;
    background-color: rgb(255, 255, 255);
  }
`;

export const App = () => {
  const dispatch = useAppDispatch();

  return (
    <div>
      <Global styles={globalStyle} />
      <button onClick={() => dispatch(toggleResultMode())}>
        Berechnungsmodus
      </button>
      <CoinBox />
      <NoteBox />
      <Envelope />
    </div>
  );
};
