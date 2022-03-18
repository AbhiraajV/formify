import React, { useState } from "react";

type Props = {
  formTypes: String[];
};

function FormHooks({ formTypes }: Props) {
  if (formTypes.length === 0)
    throw new Error("Minimum One Form Type has to be added");
  const [formType, setFormType] = useState<String>(formTypes[0]);
  return { formType, setFormType };
}

export default FormHooks;
