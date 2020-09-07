import React from "react";
import useForm from "./useForm";
import { Context } from "./context";

function Form({ form, onFinish, onFinishFailed, children }, ref) {
  const [formInstance] = useForm(form);
  const { setCallback, submit } = formInstance;
  React.useImperativeHandle(ref, () => formInstance);
  setCallback({ onFinish, onFinishFailed });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        submit();
      }}
    >
      <Context.Provider value={formInstance}>{children}</Context.Provider>
    </form>
  );
}
export default Form;
