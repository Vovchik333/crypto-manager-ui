import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppRoute } from "../../common/enums/enums";
import { useAppDispatch } from "../../hooks/hooks";
import { signUp } from "../../store/auth/actions";
import { Input } from "../../components/components";
import './auth.css';

const SignUp = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [signUpUser, setSignUpUser] = useState({
        nickname: '',
        email: '',
        password: ''
    });

    const handleNickname = (event: ChangeEvent<HTMLInputElement>) => {
        setSignUpUser({
            ...signUpUser,
            nickname: event.target.value
        });
    }
    const handleEmail = (event: ChangeEvent<HTMLInputElement>) => {
        setSignUpUser({
            ...signUpUser,
            email: event.target.value
        });
    }
    const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setSignUpUser({
            ...signUpUser,
            password: event.target.value
        });
    }
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        
        dispatch(signUp(signUpUser));
        navigate(AppRoute.PORTFOLIOS);
    }

    return (
        <main className="auth-page">
            <form className="auth-page__form" method="post" onSubmit={handleSubmit}>
                <label 
                    className="auth-page__form-label" 
                    htmlFor="nickname"
                >Nickname:</label>
                <Input 
                    id="nickname" 
                    className="input auth-page__form-input" 
                    name="nickname" 
                    value={signUpUser.nickname} 
                    onChange={handleNickname} 
                />
                <label 
                    className="auth-page__form-label" 
                    htmlFor="email"
                >Email:</label>
                <Input 
                    id="email" 
                    className="input auth-page__form-input" 
                    type="email" 
                    name="email" 
                    value={signUpUser.email} 
                    onChange={handleEmail} 
                />
                <label 
                    className="auth-page__form-label" 
                    htmlFor="password"
                >Password:</label>
                <Input 
                    id="password" 
                    className="input auth-page__form-input" 
                    type="password" 
                    name="password" 
                    value={signUpUser.password} 
                    onChange={handlePassword} 
                />
                <Input 
                    className="button primary-button auth-page__form-input-submit" 
                    type="submit" 
                    value="Sign Up" 
                />
            </form>
            <p className="auth-page__sign-suggestion">
                Already have an account? <Link className="auth-page__sign-link" to={AppRoute.SIGN_IN}>Sign In</Link>
            </p>
        </main>
    );
}

export { SignUp };
