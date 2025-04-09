import React, { FC } from "react";

import { useOpen } from "../src";

export const App: FC = () => {
  const { isOpen, open, close, toggle } = useOpen();

  return (
    <div>
      <h1>React useOpen hook demo</h1>
      <div style={{ display: "flex", gap: 8 }}>
        <button type="button" onClick={open}>
          Open
        </button>
        <button type="button" onClick={close}>
          Close
        </button>
        <button type="button" onClick={toggle}>
          Toggle
        </button>
      </div>
      <p>Is open? {isOpen ? "Yes" : "No"}</p>
      {isOpen && <p>I was hidden, but now I'm not :)</p>}
    </div>
  );
};
