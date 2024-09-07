import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppRoute } from "@/common/enums";
import { useAppDispatch } from "@/lib/hooks";
import { signUp } from "@/store/auth/actions";
import { Button, LabelWithInput } from "@/lib/components";
import { EmailWithPassword } from "./components";
import { User } from "@/common/types";
import styles from './styles.module.scss';

const SignUp = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [signUpUser, setSignUpUser] = useState({
        nickname: '',
        email: '',
        password: ''
    });

    const handleChangeNickname = (event: ChangeEvent<HTMLInputElement>) => {
        setSignUpUser({
            ...signUpUser,
            nickname: event.target.value
        });
    };

    const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
        setSignUpUser({
            ...signUpUser,
            email: event.target.value
        });
    };

    const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setSignUpUser({
            ...signUpUser,
            password: event.target.value
        });
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        
        dispatch(signUp(signUpUser));
        navigate(AppRoute.PORTFOLIOS);
    };

    return (
        <main className={styles['auth-page']}>
            <form className={styles['auth-page__form']} method="post" onSubmit={handleSubmit}>
                <LabelWithInput
                    id="nickname" 
                    name="nickname" 
                    placeholder="Type nickname..."
                    value={signUpUser.nickname} 
                    onChange={handleChangeNickname} 
                >Nickname:</LabelWithInput>
                <EmailWithPassword
                    user={signUpUser as User}
                    onChangeEmail={handleChangeEmail}
                    onChangePassword={handleChangePassword}
                />
                <Button 
                    className={styles['auth-page__form-input-submit']} 
                    type="submit"
                    isPrimary 
                >Sign Up</Button>
            </form>
            <p className={styles['auth-page__sign-suggestion']}>
                Already have an account? <Link className={styles['auth-page__sign-link']} to={AppRoute.SIGN_IN}>Sign In</Link>
            </p>
        </main>
    );
}

export { SignUp };
