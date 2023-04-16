import React from 'react'
import { Button, Card, Form, Input, Typography } from 'antd'
import { MailOutlined, UserOutlined } from '@ant-design/icons'

import Layout from 'Layout/Layout'

const { Title } = Typography

const LoginPage: React.FunctionComponent = () => {
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
            layout="vertical"
          >
            <Form.Item name="name" label="Name">
              <Input prefix={<UserOutlined />} />
            </Form.Item>
            <Form.Item name="email" label="E mail">
              <Input prefix={<MailOutlined />} />
            </Form.Item>
            <Button type="primary" block>
              Login
            </Button>
          </Form>
        </Card>
      </div>
    </Layout>
  )
}
export default LoginPage
