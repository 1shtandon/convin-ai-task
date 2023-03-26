import { UserOutlined, VideoCameraOutlined, VideoCameraAddOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import React from 'react';
import Mycard from '../../components/card/card.component';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    selectBucketList
} from '../../store/Bucket/bucket.selector';

import { addBucket , editBucketAction , deleteBucketAction} from '../../store/Bucket/bucket.action';


const NavBar = () => {
    const { Header, Content, Sider } = Layout;
    const bucketList = useSelector(selectBucketList);

    const dispatch = useDispatch();
    const items1 = [
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
                dispatch(addBucket( 'New Bucket', bucketList ));
            }
        }
    ];

    console.log(bucketList);
    const items2 = [UserOutlined].map((icon, index) => {
        const key = String(index + 1);
        return {
            key: `sub${key}`,
            icon: <VideoCameraAddOutlined />,
            label: `Buckets`,
            children: bucketList.map((bucket, j) =>{
                const subKey = String(j + 1);
                return {
                    key: subKey,
                    icon: <VideoCameraOutlined />,
                    label: (
                        <a href={`/bucket/${subKey}`}>{bucket.name}</a>
                    ),
                    onClick: () => {
                        console.log('click', subKey);
                    },
                    // add edit and delete bucket
                    children: [
                        {
                            key: 'edit',
                            label: 'Edit Bucket',
                            onClick: () => {
                                
                                dispatch(editBucketAction( bucketList, bucket.id, 'Newname' ));
                            }
                        },
                        {
                            key: 'delete',
                            label: 'Delete Bucket',
                            onClick: () => {
                                dispatch(deleteBucketAction( bucketList, bucket.id  ));
                            }
                        }
                    ]

                };
            }),
        };

    });

    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout
            style={{
                height: '100vh'
            }}
        >
            <Header className="header">
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" items={items1} />
            </Header>
            <Layout>
                <Sider
                    width={200}
                    style={{
                        background: colorBgContainer,
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
                            padding: 24,
                            margin: 0,
                            background: colorBgContainer,
                        }}
                    >
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};
export default NavBar;