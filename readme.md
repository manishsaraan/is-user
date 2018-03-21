## Is-User

#An utility to check if a role is assigned to an user.

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