
import React from 'react';
import { Button, Form, Input, notification } from 'antd';
import { createUserApi } from '../util/api';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    const navigate = useNavigate();

    const onFinish = async (values) => {
        const { firstName, lastName, email, phone, password } = values;

        const res = await createUserApi(firstName, lastName, email, phone, password);

        if (res) {
            notification.success({
                message: "CREATE USER",
                description: "Success",
            })
            navigate("/login");
        }
        else {
            notification.error({
                message: "CREATE USER",
                description: "error",
            })
        }


        console.log('>>> Success:', res);
    };

    return (
        <div style={{ margin: 50 }}>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
                onFinish={onFinish}
                autoComplete="off"
                layout='vertical'
            >
                <Form.Item
                    label="firstName"
                    name="firstName"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your firstName!',
                        },
                    ]}
                >
                    <Input placeholder='Họ' />
                </Form.Item>
                <Form.Item
                    label="lastName"
                    name="lastName"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your lastName!',
                        },
                    ]}
                >
                    <Input placeholder='Tên' />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Email!',
                        },
                    ]}
                >
                    <Input placeholder='Email' />
                </Form.Item>
                <Form.Item
                    label="Phone"
                    name="phone"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Phone!',
                        },
                    ]}
                >
                    <Input placeholder='Số điện thoại' />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input.Password placeholder='Mật khẩu' />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default RegisterPage;