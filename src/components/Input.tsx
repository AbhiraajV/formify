import React from "react";

interface IconTypeProps {
  width: string;
  height: string;
  color: string;
}

type IconType = (props: IconTypeProps) => JSX.Element;
type input = {
  icon?: {
    icon: IconType;
    iconStyle: IconTypeProps;
  };
  name: string;
  type: string;
  placeholder: string;
};
export type inputs = input[];

type Props = {
  inputs: inputs;
  setUserInput: React.Dispatch<
    React.SetStateAction<{
      [k: string]: string;
    }>
  >;
  userInput: {
    [k: string]: string;
  };
};

function Input({ inputs, setUserInput, userInput }: Props) {
  console.log(inputs[0].icon?.iconStyle);
  return (
    <>
      {inputs.map(({ name, type, placeholder, icon }, key) => (
        <div key={key} className="flex items-center justify-center gap-2">
          <label className="Label">{name}</label>
          {icon &&
            React.createElement(icon.icon, {
              width: icon.iconStyle.width,
              height: icon.iconStyle.height,
              color: icon.iconStyle.color,
            })}

          <input
            type={type}
            className="Input"
            placeholder={placeholder}
            value={userInput[name] ? userInput[name] : ""}
            onChange={(e) =>
              setUserInput((prev) => {
                return { ...prev, [name]: e.target.value };
              })
            }
          />
        </div>
      ))}
    </>
  );
}

export default Input;
