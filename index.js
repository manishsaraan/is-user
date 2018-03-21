'use strict';

const isUser = function () {
	const is = function (input) {
		const inputLowerCase = input.toLowerCase();
		return this.roles.includes(inputLowerCase);
	};

	const cache = function (roles) {
		const userArrLowerCase = roles.map(item => item.toLowerCase());
		this.roles = userArrLowerCase;
		return this.roles;
	};

	return {
		is,
		cache
	};
};
module.exports = isUser();
