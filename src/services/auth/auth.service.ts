import { User } from "../../common/types/user/user.type";

class AuthService {
    constructor() {

    }

    public signUp(payload: User): User {
        return {
            ...payload
        };
    }

    public signIn(payload: Omit<User, 'nickname'>): User {
        return {
            nickname: 'John',
            ...payload
        };
    }
}

export default AuthService;