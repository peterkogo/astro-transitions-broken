import { useState } from "react";

const style = {
  width: "50%",
  height: "100%",
  left: "50%",
  position: "absolute",
  background: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "2rem",
  fontWeight: "bold",
  userSelect: "none",
  flexDirection: "column",
} satisfies React.CSSProperties;

function Persistent() {
  const [id, _] = useState(Math.random());
  return (
    <a href="/foo/bar">
      <div style={style}>
        <p>Go to /foo/bar</p>
        <p style={{ fontSize: "0.5em" }}>This ID should stay the same: {id}</p>
      </div>
    </a>
  );
}

export default Persistent;
