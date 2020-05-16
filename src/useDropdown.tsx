import React, { useState, FunctionComponent, Dispatch } from "react";

const useDropdown = (
  label: string,
  defaultState: string,
  options: string[]
) => {
  const [state, updateState] = useState(defaultState);
  const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;
  const Dropdown: FunctionComponent = () => (
    <label htmlFor={id}>
      {label}
      <select
        id={id}
        value={state}
        onChange={(event) => updateState(event.target.value)}
        onBlur={(event) => updateState(event.target.value)}
        disabled={options.length === 0}
      >
        <option>ALL</option>
        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </label>
  );

  return [state, Dropdown, updateState] as [
    string,
    FunctionComponent,
    Dispatch<string>
  ];
};

export default useDropdown;
