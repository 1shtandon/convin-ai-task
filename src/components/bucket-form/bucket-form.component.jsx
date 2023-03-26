// a form to create a new bucket or edit an existing one

import { Button, Form, Input, message, Modal } from 'antd';

import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { addBucket } from '../../store/Bucket/bucket.action';

import { selectBucketList } from '../../store/Bucket/bucket.selector';


const BucketForm = ({ visible, onCancel, bucketId }) => {

    const [form] = Form.useForm();

    const dispatch = useDispatch();

    const bucketList = useSelector(selectBucketList);

    const [bucket, setBucket] = useState({});

    useEffect(() => {

        if (bucketId) {

            const bucket = bucketList.find((bucket) => bucket.id === bucketId);

            setBucket(bucket);

            form.setFieldsValue(bucket);

        }

    }, [bucketId, bucketList, form]);

    const onFinish = (values) => {

        if (bucketId) {

            const bucket = bucketList.find((bucket) => bucket.id === bucketId);

            const updatedBucket = { ...bucket, ...values };

            dispatch(addBucket(updatedBucket));

            message.success('Bucket updated successfully');

        } else {

            dispatch(addBucket(values));

            message.success('Bucket added successfully');

        }

        onCancel();

    };

    return (

        <Modal

            visible={visible}

            title={bucketId ? 'Edit Bucket' : 'Add Bucket'}

            okText="Save"

            onCancel={onCancel}

            footer={null}

        >

            <Form

                form={form}

                name="basic"

                initialValues={{ remember: true }}

                onFinish={onFinish}

            >

                <Form.Item

                    label="Bucket Name"

                    name="name"

                    rules={[{ required: true, message: 'Please input your bucket name!' }]}

                >

                    <Input />

                </Form.Item>

                <Form.Item

                    label="Bucket Link"

                    name="link"

                    rules={[{ required: true, message: 'Please input your bucket link!' }]}

                >

                    <Input />

                </Form.Item>

                <Form.Item>

                    <Button type="primary" htmlType="submit">

                        Submit

                    </Button>

                </Form.Item>

            </Form>

        </Modal>

    );

};

export default BucketForm;

