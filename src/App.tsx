import React from "react";
import FormHooks from "./hooks/form-hooks";
import Form from "./container/form";
import Forms from "./Forms";
function App() {
  const { formType, setFormType } = FormHooks({
    formTypes: ["FORM-A", "FORM-B"],
  });
  return (
    <div>
      <Form forms={Forms} />
    </div>
  );
}

export default App;
