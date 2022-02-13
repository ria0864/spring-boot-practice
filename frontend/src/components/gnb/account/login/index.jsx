import React, { useState, useRef } from 'react';
import { Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import S from './style';

function Input(props) {
  const { prefix, value = '', placeholder, type = 'text' } = props;

  const handleChange = (e) => {
    setId(e.target.value);
  };

  return (
    <>
      {prefix}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </>
  );
}

function FormItem(props) {
  const { rules, children } = props;
  const { required = true, message = '' } = rules;

  return <S.FormItem>{children}</S.FormItem>;
}

function Form(props) {
  const { handleSubmit, children } = props;

  return <S.Form onSubmit={handleSubmit}>{children}</S.Form>;
}

function Account() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const handleChangeId = (e) => {
    setId(e.target.value);
  };

  const handleChangePw = (e) => {
    setPw(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    console.log('Received values of form: ', id, pw);
  };

  return (
    <S.FormContainer>
      <Form handleSubmit={handleSubmit} values={(id, pw)}>
        <FormItem
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
            value={id}
            handleChange={handleChangeId}
          />
        </FormItem>
        <FormItem
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            value={pw}
            handleChange={handleChangePw}
          />
        </FormItem>
        <FormItem>
          <FormItem>
            <Checkbox>Remember me</Checkbox>
          </FormItem>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </FormItem>

        <FormItem>
          <Input type="submit" value="login" />
          Or <Link to="/account/register">register now!</Link>
        </FormItem>
      </Form>
    </S.FormContainer>
  );
}

export default Account;
