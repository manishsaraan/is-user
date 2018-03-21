import {expect} from 'chai';
import m from './index.js';


const userArr = ['user', 'admin', 'manager', 'superadmin', 'ceo'];

describe('Get a role', () => {
   it('Should cache roles', () => {
       let cachedData = m.cache(userArr);
       cachedData.forEach( item => {
       expect(userArr).to.include(item);
      });
   });

   it('Should return admin', () => {
   	  expect(m.is('admin')).to.equal(true);
   });

   it('Should return CEO', () => {
   	  expect(m.is('ceo')).to.equal(true);
   });

   it('Should not return CEO', () => {
   	  expect(m.is('mnager')).to.equal(false);
   });


});
