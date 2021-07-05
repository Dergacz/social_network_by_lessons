import React from "react";
import {reduxForm, InjectedFormProps, Field} from "redux-form";

export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}


export const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }
    return (
        <div>
            <h2>Login</h2>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export const LoginForm = (props: InjectedFormProps<FormDataType>) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field
                        component={"input"}
                        name={"login"}
                        placeholder={"Login"}
                    />
                </div>
                <div>
                    <Field
                        component={"input"}
                        name={"password"}
                        placeholder={"Password"}
                    />
                </div>
                <div>
                    <Field
                        component={"input"}
                        name={"rememberMe"}
                        type={"checkbox"}
                    /> remember me
                </div>
                <div>
                    <button>
                        Login
                    </button>
                </div>
            </form>
        </div>
    )
}

export const LoginReduxForm = reduxForm<FormDataType>({
    form: 'contact'
})(LoginForm)

