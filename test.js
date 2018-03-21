import {expect} from 'chai';
import m from '.';

describe('Get a role', () => {
   it('Should return admin', () =>{
   	  expect(m.is('admin')).to.equal(true);
   });

   it('Should return CEO', () =>{
   	  expect(m.is('ceo')).to.equal(true);
   });

   it('Should not return CEO', () =>{
   	  expect(m.is('mnager')).to.equal(false);
   });


});
