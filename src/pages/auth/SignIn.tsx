import { Form, Link, useNavigate } from "react-router-dom";
import { AppRoute } from "../../common/enums/enums";
import { useAppDispatch } from "../../hooks/hooks";
import { signIn } from "../../store/auth/actions";
import { ChangeEvent, useState } from "react";
import './auth.css';

const SignIn = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = (event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value);
    const handlePassword = (event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value);
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log({ email, password });
        
        dispatch(signIn({ email, password }));
        navigate(AppRoute.PORTFOLIOS);
    }

    return (
        <main className="auth-page">
            <div className="auth-content">
                <Form className="auth-form roboto-regular" method="post" onSubmit={handleSubmit}>
                    <label className="auth-label" htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" value={email} onChange={handleEmail}/>
                    <label className="auth-label" htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" value={password} onChange={handlePassword}/>
                    <input className="auth-form-submit small-btn" type="submit" value="Submit" />
                </Form>
                <span className="sign-link roboto-regular">
                    Don't have an account? <Link to={AppRoute.SIGN_UP}>Sign Up</Link>
                </span>
            </div>
        </main>
    );
}

export { SignIn };
