'use client'

import React from 'react';
import type { FormProps } from 'antd';
import { Row, Col, Layout, Form, Button, Input, Divider, notification } from 'antd';
import { PageHeader } from '@ant-design/pro-components';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import Head from 'next/head';
import "./styles.css";



const Login = () => {

    type FieldType = {
        email?: string;
        password?: string;
        remember?: string;
    }
    
    const onActionSubmit = (values) => {
        console.log('Success:', values);
    }
    

    return (
        <Layout className='login-layout'>
            <div className='login-form-container'>
                <Row justify='center' align='middle' >
                    <Col xs={24} md={12} lg={8}>
                        <div className='login-page-header'>
                            <PageHeader title="Fund The World"/>
                        </div>
                    </Col>
                </Row>
                <Row justify='center' align='middle'>
                    <Col className='login-header-col' xs={24} md={12} lg={8}>
                        <div>
                            <PageHeader title="Sign In" />
                        </div>
                    </Col>
                </Row>
                <Row justify="center" align="middle">
                    <Col xs={24} md={12} lg={8}>
                        <div className="login-form">
                            <Form name="login-form" className='login-form'  onFinish={onActionSubmit}>
                                <Form.Item name="email" rules={[
                                    {
                                        required: true,
                                        type: "email",
                                        message: "The input is not a valid email!",
                                    }
                                ]}>
                                    <Input
                                        prefix={<UserOutlined className="form-item-icon" />}
                                        placeholder="Email"
                                    />
                                </Form.Item>
                                <Form.Item
                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Password cannot be blank!"
                                        }
                                    ]}
                                >
                                    <Input.Password
                                        prefix={<LockOutlined className="form-item-icon"/>}
                                        placeholder="Password"
                                    />
                                </Form.Item>
                                <Divider />
                                <Form.Item>
                                    <Button type="primary" htmlType="submit" block>
                                        Sign In
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

export default Login;
