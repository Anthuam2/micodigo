// import { CounterAppTask } from "./tasks/CounterAppTask";
// import { CounterApp } from "./CounterApp";
// import { FirstApp } from "./FirstApp";
// import { App } from "./App";

import { SecondApp } from "./SecondApp";
import ReactDOM from "react-dom/client";
import React from "react";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <center>
            <b>
                {/* <App />
        <br /> */}
                {
                    // <FirstApp />
                    //<SecondApp titulo="lolo" nombre="juan" /> */
                }
                {/* <SecondApp title={123} /> Error de advertencia lo convierte en string  */}
                {/* <SecondApp title="hola soy Anthuam"  /> */}
                {/* <CounterAppTask value={123} /> */}
                {/* <CounterApp value={0} /> */}
            </b>
            <SecondApp title="hola"/>
        </center>
    </React.StrictMode>
);
