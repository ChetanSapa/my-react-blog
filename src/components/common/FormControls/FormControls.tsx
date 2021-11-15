import React from "react";
import styles from '../../common/FormControls/FormControls.module.css'
import {Field, WrappedFieldProps} from "redux-form";
import {FieldValidatorType} from "../../../utils/validation/validators";

// type FormControlPropsType = {
//     meta: {
//         touched: boolean
//          error: string
//     }
// }

const FormControl: React.FC<WrappedFieldProps> = ({meta: {touched, error}, children}) => {
    const hasError = error && touched
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>{children}</div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    // const {input, meta, child, ...restProps} = props
    const {input, meta, ...restProps} = props
    return <FormControl {...props} > <textarea {...input}
                                               {...restProps}
    />
    </FormControl>
}

export const Input: React.FC<WrappedFieldProps> = (props) => {
    // const {input, meta, child, ...restProps} = props
    const {input, meta, ...restProps} = props
    return <FormControl {...props} > <input {...input}
                                            {...restProps}/>
    </FormControl>
}

export function createField<FormKeysType extends string>(placeholder: string | undefined,
                            name: FormKeysType,
                            validate: Array<FieldValidatorType>,
                            component: React.FC<WrappedFieldProps>,
                            props = {}, text = ''){
 return   <div>
        <Field placeholder={placeholder} name={name}
               validate={validate}
               component={component}
               {...props}
        /> {text}
    </div>
}
export type GetStringKeys<T> =  Extract<keyof T, string>