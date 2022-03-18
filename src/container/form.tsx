import React, { useEffect, useState } from "react";
import Input, { inputs } from "../components/Input";
import SetFormTypeComponent from "../components/set-form-type-component";

import MainForm from "./main-form";
import FormWrapper from "./form-wrapper";
import SubmitButton from "../components/form-submit-button";

type Form = {
  title: string;
  inputs: inputs;
};
export type Forms = Form[];
type Props = {
  forms: Forms;
};

function Form({ forms }: Props) {
  const [curForm, setCurForm] = useState(forms[0].title);
  const [userInput, setUserInput] = useState<{ [k: string]: string }>({
    "": "",
  });
  useEffect(() => {
    setUserInput({ "": "" });
  }, [curForm]);

  return (
    <FormWrapper
      children={
        <>
          <SetFormTypeComponent
            forms={forms}
            setCurForm={setCurForm}
            curForm={curForm}
          />
          <MainForm
            children={
              <Input
                inputs={
                  forms.filter((form) => form.title === curForm)[0].inputs
                }
                setUserInput={setUserInput}
                userInput={userInput}
              />
            }
          />
          <SubmitButton userInput={userInput} />
        </>
      }
    />
  );
}

export default Form;
