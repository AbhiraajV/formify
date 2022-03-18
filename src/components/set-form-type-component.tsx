import React, { useState } from "react";
import { Forms } from "../container/form";
import "./check.css";
type Props = {
  forms: Forms;
  curForm: string;
  setCurForm: React.Dispatch<React.SetStateAction<string>>;
};

function SetFormTypeComponent({ forms, curForm, setCurForm }: Props) {
  if (forms.length < 2) return <></>;
  return (
    <div>
      {forms.map(({ title }, key) => (
        <div className="form-type-change-buttons-container" key={key}>
          <div
            className="box"
            onClick={() => {
              console.log(title);
              setCurForm(title);
            }}
          >
            <>
              <input id="one" type="checkbox" checked={curForm === title} />
              <span className="check"></span>
              <label htmlFor={title}>{title}</label>
            </>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SetFormTypeComponent;
