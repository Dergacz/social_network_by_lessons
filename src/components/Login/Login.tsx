import React from "react";
import {reduxForm, InjectedFormProps, Field} from "redux-form";
import {Input} from "../common/FormsControl/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/Validators";

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

const maxLength20 = maxLengthCreator(20);

export const LoginForm = (props: InjectedFormProps<FormDataType>) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field
                        component={Input}
                        name={"login"}
                        placeholder={"Login"}
                        validate={[required, maxLength20]}
                    />
                </div>
                <div>
                    <Field
                        component={Input}
                        name={"password"}
                        placeholder={"Password"}
                        validate={[required]}
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

