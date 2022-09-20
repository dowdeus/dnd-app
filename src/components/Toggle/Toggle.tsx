import { ChangeEventHandler } from "react";

type ToggleProps = {
  checked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

function Toggle({ checked, onChange }: ToggleProps) {
  return (
    <span className="toggle-control">
      <input
        className="dmcheck"
        type="checkbox"
        checked={checked}
        onChange={onChange}
        id="dmcheck"
      />
      <label htmlFor="dmcheck" />
    </span>
)
};
  
  export default Toggle;