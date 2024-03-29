// https://eslint.org/docs/user-guide/configuring
// eslint-disable-next-line 
/* eslint-disable */
module.exports = {
    root: true,
    parserOptions: {
      parser: 'babel-eslint',
      ecmaVersion: 2017,
      sourceType: 'module'
    },    
    extends: [
        'eslint-config-alloy/vue',
    ],
    globals: {
        // Vue: false
    },
    rules: {
        'indent': [
            'error',
            2,
            {
                SwitchCase: 1,
                flatTernaryExpressions: true
            }
        ],
        'no-undef-init': 1,
        'no-trailing-spaces': 0,
        'no-undefined': 0,
        'no-void': 0,
        'no-unused-vars': 0,
        'no-param-reassign': 0,
        "space-before-function-paren": ["off", {
            "anonymous": "always",
            "named": "never",
            "asyncArrow": "always"
        }],
        'quotes': ["off", 'single'],
        'no-duplicate-imports': "off",     
    },
        
};
