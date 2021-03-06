import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControl/FormsControls";
import {required} from "../../utils/validators/Validators";
import React from "react";
import {FormDataType} from "./Login";
import s from "./Login.module.css"


export const LoginForm = (props: InjectedFormProps<FormDataType>) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field
                        component={Input}
                        name={"email"}
                        placeholder={"Login"}
                        validate={[required]}
                    />
                </div>
                <div>
                    <Field
                        component={Input}
                        name={"password"}
                        placeholder={"Password"}
                        type={"password"}
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
                    {
                        props.error && <div className={s.formError}>
                            {props.error}
                        </div>
                    }
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
    form: "login"
})(LoginForm)