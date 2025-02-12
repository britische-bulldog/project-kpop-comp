'use client'

import React from 'react';
import type { FormProps } from 'antd';
import { Row, Col, Layout, Form, Button, Input, Divider, notification, Select, Checkbox } from 'antd';
import { PageHeader } from '@ant-design/pro-components';
import { LockOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';
import "./styles.css";



const Register = () => {

    type FieldType = {
        email?: string;
        password?: string;
        remember?: string;
    }

    const { Option } = Select;

    const tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      };
    
    const onActionSubmit = (values) => {
        console.log('Success:', values);
    }

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
          <Select style={{ width: 70 }}>
            <Option value="60">+60</Option>
            <Option value="65">+65</Option>
          </Select>
        </Form.Item>
      );
    

    return (
        <Layout className='register-layout'>
            <div className='register-form-container'>
                <Row justify='center' align='middle' >
                    <Col xs={24} md={12} lg={8}>
                        <div className='register-page-header'>
                            <PageHeader title="MDA Student Portal"/>
                        </div>
                    </Col>
                </Row>
                <Row justify='center' align='middle'>
                    <Col className='register-header-col' xs={24} md={12} lg={8}>
                        <div>
                            <PageHeader title="Register An Account!" />
                        </div>
                    </Col>
                </Row>
                <Row justify="center" align="middle">
                    <Col xs={24} md={12} lg={8}>
                        <div className="register-form">
                            <Form name="register-form" className='register-form'  onFinish={onActionSubmit}>
                                <Form.Item name="first_name" label="First Name" rules={[
                                    {
                                        required: true,
                                        message: "First Name cannot be blank!",
                                    }
                                ]}>
                                    <Input
                                        prefix={<UserOutlined className="form-item-icon" />}
                                        placeholder="First name"
                                    />
                                </Form.Item>
                                <Form.Item name="last_name" label="Last Name" rules={[
                                    {
                                        required: true,
                                        message: "Last Name cannot be blank!",
                                    }
                                ]}>
                                    <Input
                                        prefix={<UserOutlined className="form-item-icon" />}
                                        placeholder="Last Name"
                                    />
                                </Form.Item>
                                <Form.Item name="email" label="Email" rules={[
                                    {
                                        required: true,
                                        type: "email",
                                        message: "The input is not a valid email!",
                                    }
                                ]}>
                                    <Input
                                        prefix={<MailOutlined className="form-item-icon" />}
                                        placeholder="Email"
                                    />
                                </Form.Item>
                                <Form.Item name="confirm_email" label="Confirm Email" rules={[
                                    {
                                        required: true,
                                        type: "email",
                                        message: "The input is not a valid email!",
                                    },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                            if (!value || getFieldValue('email') === value) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject(new Error('Email does not match'))
                                        }
                                    })
                                ]}>
                                    <Input
                                        prefix={<MailOutlined className="form-item-icon" />}
                                        placeholder="Confirm Email"
                                    />
                                </Form.Item>
                                <Form.Item name="country" label="Country" rules={[
                                    {
                                        required: true,
                                        message: "Country cannot be blank!",
                                    }
                                ]}>
                                    <Input
                                        prefix={<UserOutlined className="form-item-icon" />}
                                        placeholder="Country"
                                    />
                                </Form.Item>
                                <Form.Item name="phone_number" label="Phone Number" rules={[
                                    {
                                        required: true,
                                        message: "Please input your phone number!",
                                    }
                                ]}>
                                    <Input
                                    addonBefore={prefixSelector} style={{ width: '100%'}}
                                        prefix={<UserOutlined className="form-item-icon" />}
                                        placeholder="Phone Number"
                                    />
                                </Form.Item>
                                <Form.Item
                                    name="password"
                                    label="Password"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Password cannot be blank!"
                                        }
                                    ]}
                                    hasFeedback
                                >
                                    <Input.Password
                                        prefix={<LockOutlined className="form-item-icon"/>}
                                        placeholder="Password"
                                    />
                                </Form.Item>
                                <Form.Item
                                    name="confirm_password"
                                    label="Confirm Password"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Please confirm your password!"
                                        },
                                        ({  getFieldValue }) => ({
                                            validator(_, value) {
                                                if (!value || getFieldValue('password') === value) {
                                                    return Promise.resolve();
                                                }
                                                return Promise.reject(new Error('Password does not match'))
                                            }
                                        })
                                    ]}
                                    hasFeedback
                                >
                                    <Input.Password
                                        prefix={<LockOutlined className="form-item-icon"/>}
                                        placeholder="Confirm Password"
                                    />
                                </Form.Item>
                                <Form.Item
                                    name="agreement"
                                    valuePropName="checked"
                                    rules={[
                                    {

                                        validator: (_, value) =>
                                        value ? Promise.resolve() : Promise.reject(new Error('Please check the agreement box')),
                                    },
                                    ]}
                                    {...tailFormItemLayout}
                                >
                                    <Checkbox>
                                    I have read the <a href="">agreement</a>
                                    </Checkbox>
                                </Form.Item>
                                <Divider />
                                <Form.Item>
                                    <Button type="primary" htmlType="submit" block>
                                        Register
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </div>
        </Layout>
    );
};

export default Register;
