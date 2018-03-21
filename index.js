'use strict';

const is = (userArr, input) => {

	const inputLowerCase = input.toLowerCase();
	const userArrLowerCase = userArr.map( item => item.toLowerCase());
	return userArrLowerCase.includes(inputLowerCase);
};
module.exports = {
	is
};
