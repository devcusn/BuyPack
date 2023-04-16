import React from 'react'
import { Button, Card, Form, Input, Typography } from 'antd'
import { MailOutlined, UserOutlined } from '@ant-design/icons'

import Layout from 'Layout/Layout'
import { auth } from 'services/mock-api/auth/endpoints'
import { useNavigate } from 'react-router-dom'

const { Title } = Typography

const LoginPage: React.FunctionComponent = () => {
  const [form] = Form.useForm()
  const navigate = useNavigate()
  const loginHandler = async (values: { FullName: string; email: string }) => {
    const response = await auth({ data: values })
    if (response) {
      navigate('/products')
    }
  }

  return (
    <Layout isHeader={false}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh'
        }}
      >
        <Card>
          <Title level={3} style={{ textAlign: 'center' }}>
            Log In
          </Title>

          <Form
            style={{
              width: '400px'
            }}
            form={form}
            layout="vertical"
            onFinish={loginHandler}
          >
            <Form.Item name="FullName" label="Name">
              <Input prefix={<UserOutlined />} />
            </Form.Item>
            <Form.Item name="email" label="E mail">
              <Input prefix={<MailOutlined />} />
            </Form.Item>
            <Button type="primary" block htmlType="submit">
              Login
            </Button>
          </Form>
        </Card>
      </div>
    </Layout>
  )
}
export default LoginPage
