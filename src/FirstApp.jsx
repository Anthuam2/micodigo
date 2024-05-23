const newValue = {
    nombre: "Anthuam",
    edad: 12
};

const GetSaludo = () => {
    return <h1>Holaaaa!!! (:</h1>;
};

export const FirstApp = () => {
    return (
        <>
            <h1>Hola vengo del archivo FirstApp.jsx</h1>
            {/* <GetSaludo/> Forma realmente correcta */}
            {GetSaludo()} {/* forma correcta por ahora  */}
            {/* <h2>{newValue}</h2> // ERROR */}
            {/* <h2>{newValue.edad}</h2> =>*/}
            <h2>{JSON.stringify(newValue)}</h2>
        </>
    );
};
