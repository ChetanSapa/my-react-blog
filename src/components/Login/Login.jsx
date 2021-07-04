import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../utils/validation/validators";

const maxLength10 = maxLengthCreator(10)

const LoginForm = (props) => {
    return <div style={{ textAlign: "center"}}>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder={"Login"}
                    name={'login'}
                    component={Input}
                    validate={[required, maxLength10]}/>
            </div>
            <div>
                <Field
                    placeholder={"Password"}
                    name={'password'}
                    component={Input}
                    validate={[required, maxLength10]}/>
            </div>
            <div>
                <Field
                    type={"checkbox"}
                    name={'rememberMe'}
                    component={Input}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    </div>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        console.log(formData)
    }

    return <div>
        <h1 style={{ textAlign: "center"}}>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}


export default Login