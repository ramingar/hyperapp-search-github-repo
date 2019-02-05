import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default [{
    input  : 'src/App.js',
    output : {
        name     : 'App',
        file     : 'dist/bundle.js',
        format   : 'iife',  //for browsers
        sourcemap: true,
    },
    plugins: [
        babel({
            exclude       : 'node_modules/**',
            presets       : ['@babel/preset-env'],
            runtimeHelpers: true
        }),
        resolve({preferBuiltins: true, browser: true}),
        commonjs(),
    ]
}];