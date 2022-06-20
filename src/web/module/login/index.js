import React, { useState } from 'react';
import {
  useParams,
  useNavigate,
  useLocation,
} from "react-router-dom";
import IconUser from './icon_user.png';
import IconPsw from './icon_password.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import './login.scss';

export function Login(props) {
    const [errorMsg, setErrorMsg] = useState('');
    const navigate = useNavigate();
    return (
        <div className="page-login">
        <div className="page-login-content">
          <div className="login-form">
            <h1>爱验机运营管理系统</h1>
            <h2>AIyanji Management System</h2>
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
            <button type="button" onClick={() => {navigate('/home')}}>
              登录
            </button>
            {errorMsg !== null ? (
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