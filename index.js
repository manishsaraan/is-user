'use strict';
const userArr = ['user', 'admin', 'manager', 'superadmin', 'ceo'];
const is = input => {
	const inputLowerCase = input.toLowerCase();
	return userArr.includes(inputLowerCase);
};
module.exports = {
	is
};
