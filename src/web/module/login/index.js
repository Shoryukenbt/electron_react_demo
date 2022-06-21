import React, { useState } from 'react';
import {
  useNavigate
} from "react-router-dom";
import IconUser from './img/icon_user.png';
import IconPsw from './img/icon_password.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { doPost } from '../common/utils/http';
import './login.scss';

async function doLogin() {
  const account = document.getElementById('login_username').value;
  const psw = document.getElementById('login_psw').value;
  await doPost('/api/login', { account, psw });
}

export function Login(props) {
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();
  return (
    <div className="page-login">
      <div className="page-login-content">
        <div className="login-form">
          <h1>登录</h1>
          <h2>Login Management System</h2>
          <div className="login-field">
            <img src={IconUser} alt="用户名" />
            <input id="login_username" type="txt" placeholder="请输入账号" />
          </div>
          <div className="login-field">
            <img src={IconPsw} alt="密码" />
            <input
              id="login_psw"
              type="password"
              placeholder="请输入登录密码"
            />
          </div>
          <button type="button" onClick={() => {
            doLogin().then(data => { navigate('/users') })
              .catch(e => { setErrorMsg('账号或密码错误！')})
          }}>
            登录
          </button>
          {errorMsg ? (
            <p>
              <FontAwesomeIcon className="icon" icon={faExclamationCircle} />
              &nbsp;{errorMsg}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}