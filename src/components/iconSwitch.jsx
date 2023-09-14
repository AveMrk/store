export default function IconSwitch(props) {
  return (
    <div class="icon">
      <span class="material-icons" onClick={props.onSwitch}>
        {props.icon}
      </span>
    </div>
  );
}