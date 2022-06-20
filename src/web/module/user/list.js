import { Button, Space, Table, Modal, Popconfirm } from 'antd';
import React, { useState } from 'react';
import { CreateAccount } from './create';

const { Column } = Table;

const data = [
    {
        key: '1',
        account: 'John Brown',
        password: '',
        createTime: '2022-06-11 15:00:00',
    },
    {
        key: '2',
        account: 'John Brown1',
        password: '',
        createTime: '2022-06-11 15:00:00',
    },
    {
        key: '3',
        account: 'John Brown2',
        password: '',
        createTime: '2022-06-11 15:00:00',
    }
];



export function UserList() {
    const [isModalVisible, setModalVisible] = useState(false);
    const [users, setUsers] = useState(data);
    const [defaultUser, setDefaultUser] = useState(null);

    const addUser = () => {
        setUsers(data);
        setModalVisible(false);
    }

    const updateUser = (user) => {
        setDefaultUser(user);
        setModalVisible(true);
    }

    return (
        <>
            <Space
                style={{
                    marginBottom: 16,
                }}
            >
                <Button onClick={() => { setDefaultUser({});setModalVisible(true) }}>添加</Button>
            </Space>
            <Table dataSource={users}>
                <Column title="账号" dataIndex="account" key="account" />
                <Column title="创建时间" dataIndex="createTime" key="createTime" />
                <Column title="操作" key="action" render={
                    (record) => {
                        return <Space size="middle">
                            <a onClick={() => {updateUser(record)}}>修改</a>
                            <Popconfirm
                                title="确认删除这条数据?"
                                onConfirm={(e) => {
                                    setUsers(data);
                                }}
                                okText="Yes"
                                cancelText="No"
                            >
                                <a>删除</a>
                            </Popconfirm>
                        </Space>
                    }
                } />
            </Table>
            <Modal title="维护账号" visible={isModalVisible} onOk={addUser} onCancel={() => { setModalVisible(false);}}>
                <CreateAccount defaultValue={defaultUser}></CreateAccount>
            </Modal>
        </>
    );
}