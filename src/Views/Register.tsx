import React from "react";
import {Layout} from "../Components/Layout";
// import {useStore} from "../Store";
import {Form, Input, Button} from "antd";
import styled from "styled-components";
import {Rule} from "antd/lib/form";


const Wrapper = styled.div`
width: 600px;
margin: 100px auto;
box-shadow: 2px 2px 4px 0 rgba(0,0,0,0.2);
padding: 20px;
`;
const StyleH1 = styled.h1`
text-align: center;
`;

const layout = {
  labelCol: {span: 8},
  wrapperCol: {span: 16},
};
const tailLayout = {
  wrapperCol: {offset: 8, span: 16},
};

type InternalNamePath = (string | number)[];
type  Store = {
  [name: string]: any;
}
type ValidateErrorEntity = {
  values: Store;
  errorFields: {
    name: InternalNamePath;
    errors: string[];
  }[];
  outOfDate: boolean;
}

function Register() {

  const onFinish = (values: Store) => {
    console.log("Success:", values);
  };


  const onFinishFailed = (errorInfo: ValidateErrorEntity) => {
    console.log("Failed:", errorInfo);
  };
  const validators = {
    userName(rule: Rule, value: string) {
      if (/\W/.test(value)) return Promise.reject("不能出现字母下划线以外的字符");
      if (value.length < 4 || value.length > 10) return Promise.reject("用户名长度只能在4至10个字符");
      return Promise.resolve();
    }
  };
  // @ts-ignore
  const checkPassword = ({getFieldValue}) => ({
    validator(rule: Rule, value: string) {
      if (!value || getFieldValue("password") === value) {
        return Promise.resolve();
      }
      return Promise.reject("两次密码不匹配");
    }
  });

  // const {AuthStore} = useStore()
  return (
    <Layout>
      <Wrapper>
        <StyleH1>注册</StyleH1>
        <Form
          {...layout}
          name="basic"
          initialValues={{remember: true}}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={
              [
                {
                  required: true, message: "请输入用户名!",
                },
                {
                  validator: validators.userName
                }
              ]
            }
          >
            <Input/>
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={
              [
                {required: true, message: "请输入密码!"},
                {min: 4, message: "最少输入四位"},
                {max: 16, message: "最多输入十六位"}
              ]
            }
          >
            <Input.Password/>
          </Form.Item>
          <Form.Item
            label="再次确认密码"
            name="checkPassword"
            rules={
              [
                {required: true, message: "请确认密码!"},
                checkPassword
              ]
            }
          >
            <Input.Password/>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              注册
            </Button>
          </Form.Item>
        </Form>
      </Wrapper>

    </Layout>
  );
}

export {Register};