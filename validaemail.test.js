const ValidaEmail = require('./validaemail')

test('email fabio.ticona@unmsm.edu.pe -> true',()=>{
    expect(ValidaEmail.isValidaEmail('fabio.ticona@unmsm.edu.pe')).toBe(true)
});

test('email 1 -> false',()=>{
    expect(ValidaEmail.isValidaEmail('1')).toBe(false) 
}); 

//hola mundo