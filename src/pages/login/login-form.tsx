import React from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button, Checkbox } from 'antd';
import './login-form.scss';
import { useHistory } from "react-router-dom";

const layout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};
const tailLayout = {
  wrapperCol: { span: 24 },
};

export default connect((state: any) => ({ users: state.users }))(function LoginForm(props: any) {

  let history = useHistory();

  console.log(props)

  const onFinish = (values: any) => {
    console.log('Success:', values);

    console.log(props)

    history.push("/feed");

    // const currentUser: any = Object.values(props.users.byId).filter((user: any) => user.name === values.username);


    // props.dispatch({
    //   type: 'SET_CURRENT_USER',
    //   currentUser: {
    //     id: currentUser ? currentUser.id : values.username
    //   }
    // });

    // if (!currentUser) {
    //   props.dispatch({
    //     type: 'ADD_USER',
    //     patch: {
    //       id: values.username,
    //       name: values.username
    //     }
    //   });
    // }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      layout="vertical"
      {...layout}
      name="basic"
      initialValues={{
        username: '',
        remember: true
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        name="username"
        rules={[{
          required: true,
          max: 12,
          message: 'Oшибка валидации'
        }]}
      >
        <Input placeholder="Введите имя" />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Далее
        </Button>
      </Form.Item>
    </Form>
  );
});
