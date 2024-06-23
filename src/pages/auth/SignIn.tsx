import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppRoute } from "../../common/enums/enums";
import { useAppDispatch } from "../../hooks/hooks";
import { signIn } from "../../store/auth/actions";
import { Input } from "../../components/components";
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
        
        dispatch(signIn({ email, password }));
        navigate(AppRoute.PORTFOLIOS);
    }

    return (
        <main className="auth-page">
            <form className="auth-form" method="post" onSubmit={handleSubmit}>
                <label className="auth-label" htmlFor="email">Email:</label>
                <Input id="email" className="normal-input" type="email" name="email" value={email} onChange={handleEmail} />
                <label className="auth-label" htmlFor="password">Password:</label>
                <Input id="password" className="normal-input" type="password" name="password" value={password} onChange={handlePassword} />
                <Input className="normal-btn" type="submit" value="Submit" />
            </form>
            <p className="sign-link">
                Don't have an account? <Link to={AppRoute.SIGN_UP}>Sign Up</Link>
            </p>
        </main>
    );
}

export { SignIn };
