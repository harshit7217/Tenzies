export default function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white",
  };
  return (
    <button
      onClick={() => props.hold(props.id)}
      style={styles}
      aria-pressed={props.isHeld}
      aria-label={`Die showing ${props.value}, ${
        props.isHeld ? "held" : "not held"}`
    }>
      {props.value}
    </button>
  );
}
