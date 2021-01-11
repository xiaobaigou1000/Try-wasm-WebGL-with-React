import { useRef, useState, useEffect } from "react";
let wasmModuleBuilder = require("./wasmwebgl");

export default function WebGLComponent(props) {
    const [context, setContext] = useState(undefined);
    const canvas = useRef();

    useEffect(() => {
        let Module = { canvas: canvas.current };
        wasmModuleBuilder.default(Module).then((result) => setContext(result));
    }, []);

    useEffect(() => console.log(context), [context]);

    return (
        <>
            <canvas id="wasm" width={800} height={600} ref={canvas}></canvas>
        </>
    );
}
