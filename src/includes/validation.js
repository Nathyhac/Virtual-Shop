import {
    Form as VeeForm,
    Field as VeeField,
    defineRule,
    ErrorMessage
} from 'vee-validate'

import {
    required,
    min_value,
} from '@vee-validate/rules'

export default {
    install(app) {
        app.component('VeeForm', VeeForm)
        app.component('VeeField', VeeField)
        app.component('ErrorMessage', ErrorMessage)

        defineRule('required', required)
        defineRule('min_value', min_value)
    }
}