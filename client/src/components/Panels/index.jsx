export default function Panels(props) {
  return (
    <div hidden={props.value !== props.index}>
      <div>{props.children}</div>
    </div>
  );
}
