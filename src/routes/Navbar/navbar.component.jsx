import { UserOutlined, VideoCameraOutlined, VideoCameraAddOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, Modal, theme, Input } from 'antd';
import React from 'react';
import Mycard from '../../components/card/card.component';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import {
    selectBucketList
} from '../../store/Bucket/bucket.selector';

import { addBucket, editBucketAction, deleteBucketAction } from '../../store/Bucket/bucket.action';
import "./navbar.style.css"


const NavBar = () => {
    const { Header, Content, Sider } = Layout;
    const bucketList = useSelector(selectBucketList);

    const [isModalOpen, setIsModalOpen] = useState(false);

    // grab the value from input
    const [inputValue, setInputValue] = useState('');

    // grab the bucket id whem edit button is clicked
    const [bucketToEdit, setBucketToEdit] = useState(-1);



    const showModal = () => {
        setIsModalOpen(true);
    };

    const dispatch = useDispatch();
    const items1 = [
        {
            key: '0',
            label: (
                "Convin"
            ),
        },
        {
            key: '1',
            label: (
                <a href='/'>Home</a>
            ),
        },
        {
            key: '2',
            label: (
                <a href='/history'>History</a>
            ),
        }];

    const items3 = [
        {
            key: 'add',
            label: 'Add Bucket',
            onClick: () => {
                dispatch(addBucket('New Bucket', bucketList));
            }
        }
    ];

    const items2 = [UserOutlined].map((icon, index) => {
        const key = String(index + 1);
        return {
            key: `sub${key}`,
            icon: <VideoCameraAddOutlined />,
            label: `Buckets (${bucketList.length})`,
            children: bucketList.map((bucket, j) => {
                const subKey = String(j + 1);
                return {
                    key: subKey,
                    icon: <VideoCameraOutlined />,
                    label: (
                        <a href={`/bucket/${bucket.id}`}>{bucket.name}</a>
                    ),
                    onClick: () => {
                        console.log('click', subKey);
                    },
                    // add edit and delete bucket
                    children: [
                        {
                            key: `edit ${subKey}`,
                            label: 'Edit Bucket',
                            onClick: () => {
                                // set the bucket id to edit
                                setBucketToEdit(bucket.id);
                                // show modal
                                showModal();
                            }
                        },
                        {
                            key: `delete ${subKey}`,
                            label: 'Delete Bucket',
                            onClick: () => {
                                dispatch(deleteBucketAction(bucketList, bucket.id));
                            }
                        }
                    ]

                };
            }),
        };

    });


    const handleOk = () => {
        console.log('inputValue', inputValue);
        // dispatch edit bucket action
        setIsModalOpen(false);
        if (inputValue == '' || inputValue == null)
            alert('Please enter a valid bucket name');
        else
            dispatch(editBucketAction(bucketList, bucketToEdit, inputValue));

    };

    // handle input change
    const handleInputChange = (e) => {
        // if empty string then return
        setInputValue(e.target.value);
    };


    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout
            style={{
                height: '100vh',
            }}
        >
            <Header className="header">
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" items={items1} />
            </Header>
            <Layout>
                <Sider className='sider'
                    width={200}
                    style={{
                        background: colorBgContainer,
                        backgroundColor: '#000',
                    }}
                >
                    <Menu
                        mode="inline"
                        items={items3}
                    />
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{
                            height: '100%',
                            borderRight: 0,
                        }}
                        items={items2}
                    />



                </Sider>
                <Layout
                    style={{
                        padding: '0 24px 24px',
                    }}
                >

                    <Content
                        style={{
                            padding: 50,
                            background: colorBgContainer,
                        }}
                    >
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>



            <Modal title="Edit Bucket" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Input placeholder="Enter new bucket name" onChange={handleInputChange} />
            </Modal>
        </Layout>
    );
};
export default NavBar;