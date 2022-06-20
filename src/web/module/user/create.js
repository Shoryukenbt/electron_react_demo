import React, { useState } from 'react';
import { Input } from 'antd';

const fromFields = [
    {
        name: 'account',
        filedDisplay: '账号',
        tip: '请输入账号'
    },
    {
        name: 'password',
        filedDisplay: '密码',
        tip: '请输入密码'
    }
]

function FormFiled(props) {
    return (
        <div className="field">
            <div className="field-label">
                <label className="label required">{props.filedDisplay}：</label>
            </div>
            <div className="field-body">
                <Input
                    defaultValue={props.defaultValue}
                    placeholder={props.tip}
                />
            </div>
        </div>
    );
}
export function CreateAccount(props) {
    console.log('CreateAccount', props);
    return (
        <div>
            {
                fromFields.map(item => <FormFiled key={item.name}
                    defaultValue={props.defaultValue ? props.defaultValue[item['name']] : ''}
                    filedDisplay={item.filedDisplay}
                    tip={item.tip}></FormFiled>)
            }
        </div>
    );
}