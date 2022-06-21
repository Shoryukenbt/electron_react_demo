import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import {
    useNavigate
  } from "react-router-dom";
import { Layout, Menu, Modal } from 'antd';
import { UserList } from '../user/list'
import 'antd/dist/antd.css';
import './home.scss';
const { Sider, Content } = Layout;

function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

const menus = [
    getItem('账号管理', 'users'),
    getItem('退出登录', 'login')
];

export function Home() {
    const navigate = useNavigate();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const loginOut = () => {
        setIsModalVisible(true);
    }
    const modalOk = () => {
        setIsModalVisible(false);
        navigate('/login');
    }
    const modalCancel = () => {
        setIsModalVisible(false);
    }
    const onClick=({key}) => {
        if (key === 'login') {
            loginOut();
        } else {
            navigate('/' + key);
        }
    }
    return (
        <Layout>
            <Sider className="app-menus">
            <Menu
                onClick={onClick}
                defaultSelectedKeys={['users']}
                mode="inline"
                theme="dark"
                items={menus}
            />
            </Sider>
            <Content className="app-content">
                <Outlet />
                <Modal title="确认退出" visible={isModalVisible} onOk={modalOk} onCancel={modalCancel}>
                    <p>点击确定，将退出到登陆页面？</p>
                </Modal>
            </Content>
        </Layout>
    );
}