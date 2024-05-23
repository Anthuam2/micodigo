// export const SecondApp = ({ nombre, titulo = "hola" }) => {
//     return (
//         <>
//             <h2>Anthuam</h2>
//             <p>{titulo}</p>
//             <p>soy {nombre}</p>
//         </>
//     );
// };

import PropTypes from "prop-types";
// formas de definir props por defecto

export const SecondApp = ({ title, number /* = 123  // Forma #1 */ }) => {
    return (
        <>
            <h2>Anthuam</h2>
            <p>
                {title} {number}
            </p>
        </>
    );
};

SecondApp.propTypes = {
    title: PropTypes.string.isRequired,
    number: PropTypes.number
};

// Forma #2
SecondApp.defaultProps = {
    number: 123
};
