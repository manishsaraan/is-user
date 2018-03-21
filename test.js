import {expect} from 'chai';
import m from '.';

const userArr = ['user', 'admin', 'manager', 'superadmin', 'ceo'];

describe('Get a role', () => {
   it('Should return admin', () => {
   	  expect(m.is(userArr, 'admin')).to.equal(true);
   });

   it('Should return CEO', () =>{
   	  expect(m.is(userArr, 'ceo')).to.equal(true);
   });

   it('Should not return CEO', () =>{
   	  expect(m.is(userArr, 'mnager')).to.equal(false);
   });


});
