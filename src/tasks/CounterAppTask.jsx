import PropTypes from "prop-types";

export const CounterAppTask = ({ value }) => {
    return (
        <>
            <h1>CounterAppTask</h1>
            <h2> {value} </h2>
        </>
    );
};

CounterAppTask.propTypes = {
    value: PropTypes.number.isRequired
};
