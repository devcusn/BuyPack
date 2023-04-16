import React from 'react'
import { Button, Card, Form, Input, Typography } from 'antd'

import Layout from 'layout/Layout'

import styles from './Payment.module.scss'
import { MailOutlined, UserOutlined } from '@ant-design/icons'

const { Title } = Typography

const PaymentPage: React.FunctionComponent = () => {
  const [form] = Form.useForm()

  const paymentHandler = () => {}
  return (
    <Layout>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          height: '100%',
          gap: '20px',
          padding: '20px'
        }}
      >
        <Card className={styles.productList}>
          <Title level={5}>Card Information</Title>
          <Form
            style={{
              width: '400px'
            }}
            form={form}
            layout="vertical"
            onFinish={paymentHandler}
          >
            <Form.Item
              name="FullName"
              label="name on the card"
              style={{ width: '100%' }}
              rules={[{ required: true, message: 'Full Name is required' }]}
            >
              <Input prefix={<UserOutlined />} />
            </Form.Item>
            <div style={{ display: 'flex', gap: '18px' }}>
              <Form.Item
                name="email"
                label="Card Number"
                style={{ width: '100%' }}
                rules={[
                  { required: true, message: 'Email is required' },
                  {
                    type: 'email',
                    message: 'Please enter a valid email address'
                  }
                ]}
              >
                <Input prefix={<MailOutlined />} />
              </Form.Item>
              <Form.Item
                name="email"
                label="expiration date"
                style={{ width: '100%' }}
                rules={[
                  { required: true, message: 'Email is required' },
                  {
                    type: 'email',
                    message: 'Please enter a valid email address'
                  }
                ]}
              >
                <Input prefix={<MailOutlined />} />
              </Form.Item>
              <Form.Item
                name="email"
                label="CVV/CVC"
                rules={[
                  { required: true, message: 'Email is required' },
                  {
                    type: 'email',
                    message: 'Please enter a valid email address'
                  }
                ]}
              >
                <Input prefix={<MailOutlined />} />
              </Form.Item>
            </div>
          </Form>
          <Title level={5}>Agreement</Title>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id
            arcu ultricies, hendrerit turpis ac, semper justo. Nam orci odio,
            semper id mauris nec, ornare luctus elit. Orci varius natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Mauris eu justo sapien. Nullam turpis magna, laoreet at finibus sit
            amet, ultrices et dolor. Suspendisse vestibulum gravida quam, nec
            interdum justo pulvinar nec. Aenean quam mauris, fermentum eu
            iaculis non, egestas a lorem. Sed ante justo, pulvinar dapibus enim
            id, euismod feugiat arcu. Mauris dictum sed tortor ut placerat. Sed
            leo ante, laoreet at egestas ut, dapibus et turpis. Duis non enim
            sed ante aliquet maximus eu et dui. Sed consequat iaculis libero, id
            pharetra purus blandit vitae. Etiam ut lobortis tortor, sed
            efficitur tortor. Duis facilisis quam sem, quis pulvinar erat
            aliquet sit amet. Aliquam velit orci, pellentesque eget varius
            finibus, sodales quis dolor.
          </div>
        </Card>
        <Card className={styles.basket}>
          <Title level={5}>Products</Title>
          <div></div>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button type="primary" block>
              Pay
            </Button>
          </div>
        </Card>
      </div>
    </Layout>
  )
}

export default PaymentPage
