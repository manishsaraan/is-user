## Is-User

#An utility to check if a role is assigned to an user.

#How to use

```
const isUser = require('is-user');
const userArr = ['user', 'admin', 'manager', 'superadmin', 'ceo'];
let isAdmin =  isUser.is(userArr, 'admin'); //true
let isManager = isUser.is(userArr, 'manager'); //true
```