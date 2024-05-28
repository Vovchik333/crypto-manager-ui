import { Form, Link, useNavigate } from "react-router-dom";
import { AppRoute } from "../../common/enums/enums";
import './auth.css';
import { useAppDispatch } from "../../hooks/hooks";
import { ChangeEvent, useState } from "react";
import { signUp } from "../../store/auth/actions";

const SignUp = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleNickname = (event: ChangeEvent<HTMLInputElement>) => setNickname(event.target.value);
    const handleEmail = (event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value);
    const handlePassword = (event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value);
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        
        dispatch(signUp({ nickname, email, password }));
        navigate(AppRoute.PORTFOLIOS);
    }

    return (
        <main className="auth-page">
            <div className="auth-content">
                <Form className="auth-form roboto-regular" method="post" onSubmit={handleSubmit}>
                    <label className="auth-label" htmlFor="nickname">Nickname:</label>
                    <input type="text" name="nickname" id="nickname" value={nickname} onChange={handleNickname}/>
                    <label className="auth-label" htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" value={email} onChange={handleEmail}/>
                    <label className="auth-label" htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" value={password} onChange={handlePassword}/>
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
