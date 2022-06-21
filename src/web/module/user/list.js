import { Button, Space, Table, Modal, Popconfirm, Input } from 'antd';
import React, { useState, useEffect } from 'react';
import { doGet, doPut, doDelete, doPost } from '../common/utils/http';

const { Column } = Table;

export function UserList() {
    const [isModalVisible, setModalVisible] = useState(false);
    const [users, setUsers] = useState(null);

    const [account, setAcc] = useState('');
    const [psw, setPsw] = useState('');
    
    const getUsers = () => {
        return doGet('/api/users').then(data => {
            setUsers(data);
        });
    }

    useEffect(() => {
        console.log('call getUsers');
        getUsers()
    }, []);

    const addUser = () => {
        const userInfo = {account, psw, id: UserList.updateUserId};
        setAcc('');
        setPsw('');
        const action = UserList.updateUserId ? doPost('/api/user', userInfo) : doPut('/api/user', userInfo);
        action.then(() => {
            getUsers();
            setModalVisible(false);
        });
        UserList.updateUserId = undefined;
    }

    const delItem = (id) => {
        doDelete('/api/' + id).then(() => {
            getUsers();
        });
    }

    const updateUser = ({account, psw, id}) => {
        UserList.updateUserId = id;
        setAcc(account);
        setPsw(psw);
        setModalVisible(true);
    }

    return (
        <>
            <Space
                style={{
                    marginBottom: 16,
                }}
            >
                <Button onClick={() => { setModalVisible(true) }}>添加</Button>
            </Space>
            {
                users ? <Table dataSource={users}>
                    <Column title="账号" dataIndex="account" key="account" />
                    <Column title="创建时间" dataIndex="createTime" key="createTime" />
                    <Column title="操作" key="action" render={
                        (record) => {
                            return record.id === '0' ? null : <Space size="middle">
                                <a onClick={() => { updateUser(record) }}>修改</a>
                                <Popconfirm
                                    title="确认删除这条数据?"
                                    onConfirm={(e) => {
                                        delItem(record.id);
                                    }}
                                    okText="Yes"
                                    cancelText="No"
                                >
                                    <a>删除</a>
                                </Popconfirm>
                            </Space>
                        }
                    } />
                </Table> : null
            }

            <Modal title="维护账号" visible={isModalVisible} onOk={addUser} onCancel={() => { setModalVisible(false); }}>
                {/* <CreateAccount defaultValue={defaultUser}></CreateAccount>
                 */}
                <>
                    <div className="field">
                        <div className="field-label">
                            <label className="label required">账号：</label>
                        </div>
                        <div className="field-body">
                            <Input
                                onChange={(e) => {
                                    setAcc(e.target.value);
                                }}
                                value={account}
                                placeholder="请输入账号"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <div className="field-label">
                            <label className="label required">密码：</label>
                        </div>
                        <div className="field-body">
                            <Input
                                onChange={(e) => {
                                    setPsw(e.target.value);
                                }}
                                value={psw}
                                placeholder="请输入密码"
                            />
                        </div>
                    </div>
                </>
            </Modal>
        </>
    );
}