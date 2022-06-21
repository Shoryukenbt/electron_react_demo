const uuid = require('uuid');

const USERS = [
    {
        id: '0',
        account: 'admin',
        password: '',
        createTime: '2022-06-11 15:00:00',
    },
];

exports.findOne = function(id) {
    return USERS.find(u => u.id === id);
}
exports.add = function(user) {
    const exist = USERS.some(u => u.account === user.account);
    if (!exist) {
        user.id = uuid.v1();
        user.createTime = Date.now();
        USERS.push(user);
    }
    return user;
}

exports.del = function(id) {
    const index = USERS.findIndex(u => u.id === id);
    if (index >= 0) {
        USERS.splice(index, 1);
        return true;
    }
    return false;
}

exports.update = function(user) {
    const _user = exports.findOne(user.id);
    if (_user) {
        Object.assign(_user, user);
        return true;
    }
    return false;
}

exports.list = function() {
    return USERS;
}


