import { Form, Link } from "react-router-dom";
import { AppRoute } from "../../common/enums/enums";
import './auth.css';

const SignUp = () => {
    return (
        <main className="auth-page">
            <div className="auth-content">
                <Form className="auth-form roboto-regular" method="post">
                    <label className="auth-label" htmlFor="nickname">Nickname:</label>
                    <input type="text" name="nickname" id="nickname"/>
                    <label className="auth-label" htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email"/>
                    <label className="auth-label" htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password"/>
                    <input className="auth-form-submit small-btn" type="submit" value="Submit" />
                </Form>
                <span className="sign-link roboto-regular">
                    Already have an account? <Link to={AppRoute.SIGN_IN}>Sign In</Link>
                </span>
            </div>
        </main>
    );
}

export { SignUp };
