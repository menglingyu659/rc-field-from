import React from "react";

class createForm {
  store = {};
  register = {};
  callbacks = {};

  setRegister = (register) => {
    this.register = {
      ...this.register,
      ...register,
    };
  };

  setFieldsValue = (store) => {
    this.store = {
      ...this.store,
      ...store,
    };
    Object.keys(store).forEach((item) => {
      this.register[item]();
    });
  };

  getFieldValue = (name) => {
    return this.store[name];
  };

  getFieldsValue = () => {
    return this.store;
  };

  resetFields = () => {
    for (const prop in this.store) {
      this.store[prop] = "";
    }
    this.setFieldsValue(this.store);
  };

  getFieldError = () => {};

  // setFieldError = (e) => {
  //   this.err.push(e);
  // };

  validator = () => {
    const err = [];
    for (const prop in this.store) {
      if ([null, undefined, ""].includes(this.store[prop]))
        err.push({
          name: prop,
          message: `请填写${prop}`,
        });
    }
    return err;
  };

  setCallback = (callbacks) => {
    this.callbacks = callbacks;
  };

  submit = () => {
    const { onFinish, onFinishFailed } = this.callbacks;
    const err = this.validator();
    if (err.length !== 0) {
      onFinishFailed(err);
    } else {
      onFinish(this.store);
    }
  };

  getForm = () => ({
    setFieldsValue: this.setFieldsValue,
    getFieldValue: this.getFieldValue,
    getFieldsValue: this.getFieldsValue,
    setRegister: this.setRegister,
    resetFields: this.resetFields,
    getFieldError: this.getFieldError,
    submit: this.submit,
    setCallback: this.setCallback,
  });
}

function useForm(form) {
  const formRef = React.useRef();
  if (!formRef.current) {
    if (form) {
      formRef.current = form;
    } else {
      formRef.current = new createForm().getForm();
    }
  }
  return [formRef.current];
}

export default useForm;
