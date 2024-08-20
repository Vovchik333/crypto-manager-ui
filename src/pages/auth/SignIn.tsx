import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppRoute } from "../../common/enums";
import { useAppDispatch } from "../../hooks";
import { signIn } from "../../store/auth/actions";
import { Input } from "../../components";
import './auth.css';

const SignIn = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [signInUser, setSignInUser] = useState({
        email: '',
        password: ''
    });

    const handleEmail = (event: ChangeEvent<HTMLInputElement>) => {
        setSignInUser({
            ...signInUser,
            email: event.target.value
        });
    }
    const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setSignInUser({
            ...signInUser,
            password: event.target.value
        });
    }
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        
        dispatch(signIn(signInUser));
        navigate(AppRoute.PORTFOLIOS);
    }

    return (
        <main className="auth-page">
            <form className="auth-page__form" method="post" onSubmit={handleSubmit}>
                <label 
                    className="auth-page__form-label" 
                    htmlFor="email"
                >Email: </label>
                <Input 
                    id="email" 
                    className="input auth-page__form-input" 
                    type="email" 
                    name="email" 
                    value={signInUser.email} 
                    onChange={handleEmail} 
                />
                <label 
                    className="auth-page__form-label" 
                    htmlFor="password"
                >Password: </label>
                <Input 
                    id="password" 
                    className="input auth-page__form-input" 
                    type="password" 
                    name="password" 
                    value={signInUser.password} 
                    onChange={handlePassword} 
                />
                <Input 
                    className="button primary-button auth-page__form-input-submit" 
                    type="submit" 
                    value="Sign In" 
                />
            </form>
            <p className="auth-page__sign-suggestion">
                Don't have an account? <Link className="auth-page__sign-link" to={AppRoute.SIGN_UP}>Sign Up</Link>
            </p>
        </main>
    );
}

export { SignIn };
