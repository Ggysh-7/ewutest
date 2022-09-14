import React, { useState, useEffect } from 'react'
import { Button, Form, Input, Spin } from 'antd';
import Images from '../images/index'


export default function Login() {
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const [sHeight, setsHeight] = useState(window.innerHeight)
  const [sWidth, setsWidth] = useState(window.innerWidth)
  const [loading, setLoading] = useState(false)
  // React.useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     setsHeight(window.innerHeight)
  //     setsWidth(window.innerWidth)
  //   }
  //   console.log('local', localStorage.getItem('userId'), localStorage.getItem('token'), localStorage.getItem('role'), localStorage.getItem('manageOpenKeys'), localStorage.getItem('manageSelectItem'),)
  //   return () => {
  //     setsHeight(window.innerHeight)
  //     setsWidth(window.innerWidth)
  //   }
  // }, [])
  return (
    <div style={{
      width: sWidth,
      minWidth: 1920,
      minHeight: sHeight,
      display: 'flex',
      justifyContent: 'center'
    }}>
      <div style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        display: loading ? 'flex' : 'none',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255,255,255,0.2)',
        zIndex: 100,
      }}>
        <Spin
          style={{}}
          tip="登录中..."
          size="large"
          spinning={loading}
        />
      </div>
      <div style={{
        width: '100%',
        minWidth: 1920,
        minHeight: '100%',
        backgroundImage: 'url(' + Images.bg + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={{
          width: 551,
          height: 325,
          backgroundImage: 'url(' + Images.loginBg + ')',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
        }}>
          <Form
            name="basic"
            initialValues={{ remember: true, }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}>
              <Input placeholder='手机号'
                style={{
                  width: 326,
                  height: 41,
                  marginTop: 94,
                  color: "rgba(255,255,255,0.5)",
                  paddingLeft: 13,
                  backgroundImage: 'url(' + Images.loginInp + ')',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '100% 100%',
                  backgroundPosition: 'center',
                  backgroundColor: 'rgba(255,255,255,0)',
                  borderWidth: 0,
                  borderRadius: 2,
                  boxShadow: 'none',
                }} />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}>
              <Input.Password placeholder='密码'
                style={{
                  width: 326,
                  height: 41,
                  color: "rgba(255,255,255,0.5)",
                  paddingLeft: 13,
                  backgroundImage: 'url(' + Images.loginInp + ')',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '100% 100%',
                  backgroundPosition: 'center',
                  backgroundColor: 'rgba(255,255,255,0)',
                  borderWidth: 0,
                  borderRadius: 2,
                  boxShadow: 'none',
                }} />
            </Form.Item>

            <Form.Item>
              <Button type="primary"
                htmlType="submit"
                style={{
                  backgroundColor: 'rgba(255,255,255,0)',
                  border: 'none',
                  width: 337,
                  height: 56,
                  backgroundImage: 'url(' + Images.loginBtn + ')',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 14,
                  color: '#fff',
                  cursor: 'pointer'
                }}>
                登陆
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  )
}


