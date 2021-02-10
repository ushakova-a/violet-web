import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Form, Input, Button } from 'antd';
import { useHistory } from "react-router-dom";
import { ADD_LOGGED_IN_USER } from '../../store/keys';
import IStore from '../../store/interfases/i-store';
import UserSelector from '../../store/selectors/user-selector';
import './login-form.scss';

const connector = connect(
  (state: IStore) => ({
    usersById: UserSelector.getById(state),
  })
);

type TProps = ConnectedProps<typeof connector> & { [key: string]: any };

export default connector(function LoginForm(props: TProps) {

  const history = useHistory();

  const onFinish = (values: any) => {

    props.dispatch({
      type: ADD_LOGGED_IN_USER,
      patch: 'anna'
    });

    history.push("/feed");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      layout="vertical"
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
      name="basic"
      initialValues={{
        username: 'Anna'
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
        <Input placeholder="Введите имя" readOnly />
      </Form.Item>

      <Form.Item wrapperCol={{ span: 24 }}>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Далее
        </Button>
      </Form.Item>
    </Form >
  );
});
