import render from "@testing-library/react";
import { SecondApp } from "../SecondApp";

describe("PRUEBAS DE <SecondApp />", () => {
    //
    test("debe de hacer match con el snapshot", () => {
        const title = "Hola, como estas";
        render(<SecondApp title={title} />);
    });
    //
});

const testPasados = separador => {
    // Para guardar los tests anteriores
};
