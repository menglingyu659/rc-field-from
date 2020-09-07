import React from "react";
import MyForm from "./MyForm";
import Field from "./MyField";
import useForm from "./useForm";

const Form = React.forwardRef(MyForm);
Form.useForm = useForm;
Form.Field = Field;

export { Field };
export default Form;
