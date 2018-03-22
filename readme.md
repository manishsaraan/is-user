## Is-User

#An utility to check if a role is assigned to an user.
[![travis build](https://img.shields.io/travis/manishsaraan/is-user.svg?style=flat-square)](https://travis-ci.org/manishsaraan/is-user)
[![version](https://img.shields.io/npm/v/is-user.svg?style=flat-square)]((http://npm.im/is-user))
[![downloads](https://img.shields.io/npm/dm/is-user.svg?style=flat-square)](https://npm-stat.com/charts.html?package=is-user&from=2018-01-01&to=2019-03-16)
[![MIT License](https://img.shields.io/npm/l/is-user.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)

#How to use

```
const isUser = require('is-user');
export.update = function(req, res){
    //chaching the roles for future use in this function"
    const userArr = ['user', 'admin', 'manager', 'superadmin', 'ceo'];
    isUser.cache(userArr);
    let isAdmin =  isUser.is('admin'); //true
    let isManager = isUser.is('manager'); //true
}
```