import { navigate } from "astro:transitions/client";

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
} satisfies React.CSSProperties;

function Persistent() {
  return (
    <a href="/foo/bar">
      <div
        // onClick={() => {
        //   navigate("/foo/bar");
        // }}
        style={style}
      >
        Go to /foo/bar
      </div>
    </a>
  );
}

export default Persistent;
