import React, { useState, useLayoutEffect, useContext } from "react";
import { Context } from "./context";

function Field({ label, name, rules, children }) {
  const [, setState] = useState(null);
  const {
    getFieldValue,
    setFieldsValue,
    setRegister,
    setFieldError,
  } = useContext(Context);
  const forceUpdate = () => {
    setState({});
  };

  useLayoutEffect(() => {
    setRegister({
      [name]: forceUpdate,
    });
    setFieldsValue({ [name]: undefined });
  }, []);

  const newChildren = React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      value: getFieldValue(name),
      onChange(e) {
        setFieldsValue({ [name]: e.target.value });
      },
    });
  });

  return (
    <div>
      <label>
        <span>{label}</span>
        {newChildren}
      </label>
    </div>
  );
}

export default Field;
