const esmayusculas = require('../utils/esmayusculas');

test("verificar mayuscula", () => {
   expect(esmayusculas("MADRID")).toBe(true);

})

test("verificar que no es mayusculas", () => {
    expect(esmayusculas("madrid")).toBe(false);
})

