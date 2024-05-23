import { getImagen } from "./11-async-await";

describe(" PRUEBAS DE 11-ASYNC-AWAIT.JS", () => {
    test("getImagen debe retornar un URL de la imagen", async () => {
        const url = await getImagen();
        expect(typeof url).toBe("string");
    });
});

const testsPasados = separador => {
    // import { getHeroeByIdAsync } from "./09-promesas";

    // describe("PRUEBAS DE 09-PROMESAS", () => {
    //     test("getHeroeByIdAsync debe retornar un heroe", done => {
    //         const id = 1;
    //         getHeroeByIdAsync(id).then(hero => {
    //             expect(hero).toEqual({
    //                 id: 1,
    //                 name: "Batman",
    //                 owner: "DC"
    //             });
    //             done();
    //         });
    //     });
    //     test("getHeroeByIdAsync debe dar un error si heroe no existe", done => {
    //         const id = 100;
    //         getHeroeByIdAsync(id)
    //             .then(hero => {
    //                 expect(hero).toBeFalsy();
    //                 done();
    //             })
    //             .catch(Err => {
    //                 // console.log(Err);
    //                 expect(Err).toBe("No se pudo encontrar el héroe");
    //                 done();
    //             });
    //     });
    // });
    separador();
    // import { getSaludo } from "./02-template-string";
    // import { retornaArreglo } from "./07-deses-arr";
    // import { getUser, getUsuarioActivo } from "./05-funciones";
    // describe("PRUEBA DE 02-TEMPLATE-STRINGS", () => {
    //     test('Get saludo debe retornar "Hola Anthuam"', () => {
    //         const name = "Anthuam";
    //         const message = getSaludo(name);
    //         expect(message).toBe(`Hola ${name}`);
    //     });
    // });
    // import { getAnUser, getUnUsuarioActivo } from "./05-funciones";
    // describe("PRUEBA DE 05-FUNCIONES", () => {
    //     test("getUser Debe retornar un objeto", () => {
    //         const testUser = {
    //             uid: "ABC123",
    //             username: "El_Papi1502"
    //         };
    //         const user = getAnUser();
    //         expect(testUser).toEqual(user);
    //     });
    //     test("getUsuarioActivo Debe retornar un objeto", () => {
    //         const name = "Anthuam";
    //         const testUsuarioActivo = nombre => ({
    //             uid: "ABC567",
    //             username: nombre
    //         });
    //         expect(testUsuarioActivo(name)).toEqual(getUnUsuarioActivo(name));
    //     });
    // });
    // import { retornarArreglo } from "./07-deses-arr";
    // describe("PRUEBAS DE 07-DESES-ARR", () => {
    //     test("deberia retornar un string y un numero", () => {
    //         const [letras, numeros] = retornarArreglo();
    //         expect(letras).toBe("ABC");
    //         expect(numeros).toBe(123);
    //         expect(typeof letras).toBe("string");
    //         expect(typeof numeros).toBe("number");
    //     });
    // });
};
