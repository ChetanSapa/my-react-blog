import React from "react";
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, GetStringKeys, Input} from "../common/FormControls/FormControls";
import {required} from "../../utils/validation/validators";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import styles from '../common/FormControls/FormControls.module.css'
import {AppStateType} from "../../redux/redux-store";

type LoginFormOwnProps = {
    captchaUrl: string | null
}

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps> = ({handleSubmit, error, captchaUrl}) => {
    return <div style={{textAlign: "center"}}>
        <form onSubmit={handleSubmit}>
            <div>
                {createField<LoginFormValuesKeysType>("Email", 'email', [required], Input)}
                {createField<LoginFormValuesKeysType>("Password", 'password', [required], Input, {type: 'password'})}
                {createField<LoginFormValuesKeysType>(undefined, 'rememberMe', [], Input, {type: 'checkbox'}, "remember me")}
                { captchaUrl && <img src={captchaUrl} alt={'Captcha'}/> }
                { captchaUrl && createField<LoginFormValuesKeysType>('Symbols from img', 'captcha', [required], Input, {}) }
            </div>
            {error && <div className={styles.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    </div>
}

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({form: 'login'})(LoginForm)

export type LoginFormValuesType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: any
}

type LoginFormValuesKeysType = GetStringKeys<LoginFormValuesType>

export const LoginPage: React.FC = () => {

    const captchaUrl = useSelector((state: AppStateType) => state.auth.captchaUrl)
    const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)
    const dispatch = useDispatch()

    const onSubmit = (formData: LoginFormValuesType) => {
        dispatch(login(formData.email, formData.password, formData.rememberMe, formData.captcha))
    }

    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return <div>
        <h1 style={{textAlign: "center"}}>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
    </div>
}