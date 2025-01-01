import globals from 'globals'
import pluginJs from '@eslint/js'


/** @type {import('eslint').Linter.Config[]} */
export default [
	{ languageOptions: { globals: globals.node } },
  	pluginJs.configs.recommended,
  	{
    	rules: {
      		'no-console': 'warn', // Advertencia cuando se usa console.log
			'no-unused-vars': 'warn', // Advertencia cuando se declaran variables no usadas
			'no-undef': 'error', // Error si hay variables no definidas
			'eqeqeq': ['error', 'always'], // Siempre usar === y !== en lugar de == y !=
			'indent': ['error', 'tab'], // Usar tabulaciones para la indentación
			'semi': ['error', 'never'], // No usar punto y coma al final de las sentencias
			'quotes': ['error', 'single'], // Usar comillas simples en lugar de dobles
			'comma-dangle': ['error', 'only-multiline'], // Coma final solo en objetos o arrays multilínea
			'arrow-parens': ['error', 'always'], // Siempre usar paréntesis en funciones flecha
			'no-magic-numbers': ['error', { 'ignore': [0, 1] }], // Evitar números mágicos, pero permitir 0 y 1
			'curly': ['error', 'all'], // Requiere llaves para todos los bloques de control (if, for, etc.)
			'object-curly-spacing': ['error', 'always'], // Espacio dentro de las llaves de objetos
			'no-trailing-spaces': 'error', // No permitir espacios al final de las líneas
			'space-before-function-paren': ['error', 'never'], // No espacio antes del paréntesis en la declaración de funciones
			'no-var': 'error', // No usar var, preferir let o const
			'prefer-const': 'error', // Prefiere const cuando una variable no se reasigna
			'space-in-parens': ['error', 'never'], // No debe haber espacios dentro de los paréntesis
			'key-spacing': ['error', { 'beforeColon': false, 'afterColon': true }], // Espacios en los objetos: no espacio antes de los dos puntos, sí después
			'no-plusplus': 'off', // Permitir el uso de ++ y --
			'newline-per-chained-call': ['error', { 'ignoreChainWithDepth': 2 }], // Forzar nuevas líneas en llamadas encadenadas (excepto en cadenas con una profundidad de 2)
			'consistent-return': 'error', // Requiere un `return` consistente en las funciones

    	},
  	},
]