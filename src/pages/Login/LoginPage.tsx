import React from 'react'
import { Button, Card, Form, Input, Typography } from 'antd'

import Layout from 'Layout/Layout'

const { Title } = Typography

const LoginPage: React.FunctionComponent = () => {
  return (
    <Layout>
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
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              width: '400px'
            }}
          >
            <Input placeholder="username" />
            <Input placeholder="email" />
            <Button>Login</Button>
          </Form>
        </Card>
      </div>
    </Layout>
  )
}
export default LoginPage
