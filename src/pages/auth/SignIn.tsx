import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppRoute } from "@/common/enums";
import { useAppDispatch } from "@/lib/hooks";
import { signIn } from "@/store/auth/actions";
import { Button } from "@/lib/components";
import { RegisteredUserRequestBody, User } from "@/common/types";
import { EmailWithPassword } from "./components";
import styles from './styles.module.scss';

const SignIn = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [signInUser, setSignInUser] = useState<RegisteredUserRequestBody>({
        email: '',
        password: ''
    });

    const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
        setSignInUser({
            ...signInUser,
            email: event.target.value
        });
    };
    
    const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setSignInUser({
            ...signInUser,
            password: event.target.value
        });
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        
        dispatch(signIn(signInUser));
        navigate(AppRoute.PORTFOLIOS);
    };

    return (
        <main className={styles['auth-page']}>
            <form className={styles['auth-page__form']} method="post" onSubmit={handleSubmit}>
                <EmailWithPassword 
                    user={signInUser as User}
                    onChangeEmail={handleChangeEmail}
                    onChangePassword={handleChangePassword}
                />
                <Button 
                    className={styles['auth-page__form-input-submit']} 
                    type="submit" 
                    isPrimary
                >Sign In</Button>
            </form>
            <p className={styles['auth-page__sign-suggestion']}>
                Don't have an account? <Link className={styles['auth-page__sign-link']} to={AppRoute.SIGN_UP}>Sign Up</Link>
            </p>
        </main>
    );
}

export { SignIn };
