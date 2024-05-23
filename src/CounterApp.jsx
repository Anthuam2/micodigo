import React, { useState } from "react";
import PropTypes from "prop-types";

export const CounterApp = ({ value }) => {
    const [counter, setCounter] = useState(value);

    const masUno = () => setCounter(counter + 1);

    return (
        <>
            <h1>CounterApp</h1>
            <h2> {counter} </h2>
            <div className="div-buttons">
                <button onClick={() => masUno()}>+1</button>
                <button onClick={() => setCounter(counter - 1)}>-1</button>
                <button onClick={() => setCounter(value) /* Forma correcta */}>
                    Reset
                </button>
                {/* <button onClick={() => setCounter(counter - counter)}>Reset</button> // Mi forma */}
            </div>
        </>
    );
};

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
};
