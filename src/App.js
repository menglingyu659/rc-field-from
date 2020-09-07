import React, { useEffect, Component } from "react";
import Form, { Field } from "./component";
import { Input, Button } from "antd";

function Comp(props) {
  const { children } = props;
  console.log(children);
  const a = React.Children.map(children, (item) => {
    console.log(item, "i");
    return React.cloneElement(
      item,
      {
        value: "value",
      },
      <a href="">89</a>
    );
  });
  console.log(a, "a");
  return <div>{a}</div>;
}

// function App() {
//   const [form] = Form.useForm();
//   console.log(form);
//   useEffect(() => {
//     form.setFieldsValue({
//       username: "梦",
//     });
//   });

//   const onFinish = (val) => {
//     console.log("success", val);
//   };

//   const onFinishFailed = (val) => {
//     console.log("faild", val);
//   };

//   const onReset = () => {
//     form.resetFields();
//   };
//   return (
//     <div>
//       <Form
//         form={form}
//         onFinish={onFinish}
//         onFinishFailed={onFinishFailed}
//       >
//         <Field label="账号" name="username">
//           <Input placeholder="input username"></Input>
//         </Field>
//         <Field label="密码" name="password">
//           <Input placeholder="input password"></Input>
//         </Field>
//         <Button type="primary" onClick={() => {}}>
//           提交
//         </Button>
//         <Button onClick={onReset}>重置</Button>
//       </Form>
//     </div>
//   );
//   //   return (
//   //     <div>
//   //       <Comp>
//   //         <>
//   //           <div></div>
//   //           <div></div>
//   //         </>
//   //       </Comp>
//   //     </div>
//   //   );
// }

class App extends Component {
  formRef = React.createRef();

  componentDidMount = () => {
    console.log("com");
    this.formRef.current.setFieldsValue({
      username: "asfsaf",
      password: "pass",
    });
  };

  onFinish = (val) => {
    console.log(val, "val");
  };

  onFinishFailed = (err) => {
    console.log(err, "err");
  };

  render() {
    return (
      <div>
        <h3>MyRCFieldForm</h3>
        <Form
          ref={this.formRef}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        >
          <Field name="username">
            <Input placeholder="Username" />
          </Field>
          <Field name="password">
            <Input placeholder="Password" />
          </Field>
          <button>Submit</button>
        </Form>
      </div>
    );
  }
}

export default App;
