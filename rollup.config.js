import { terser } from "rollup-plugin-terser"
import resolve from "rollup-plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"

module.exports = {
    input: "lib/bundle.js",
    output: {
        file: "dist/resources/zcarbonwclib/lib/bundle.js",
        format: "amd",
        amd: {
            define: "sap.ui.define"
        }
    },
    plugins: [
        commonjs(),
        resolve(),
        terser()
    ]
}
