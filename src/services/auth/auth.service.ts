import { HttpApi } from "@/lib/services/http";
import { 
    RegisteredUserRequestBody, 
    UnregisteredUserRequestBody
} from "../../common/types";
import { ApiPath } from "@/common/enums";
import { HttpMethod } from "@/lib/services/http/enums";
import { User, UserWithToken } from "@/common/types/entities";


type Constructor = {
    apiPath: string;
    httpApi: HttpApi;
}

class AuthService {
    #apiPath: string;
    #httpApi: HttpApi;

    constructor({ apiPath, httpApi }: Constructor) {
        this.#apiPath = apiPath;
        this.#httpApi = httpApi;
    }

    public async signUp(payload: UnregisteredUserRequestBody): Promise<UserWithToken> {
        return this.#httpApi.load<UserWithToken>(
            `${this.#apiPath}${ApiPath.AUTH}${ApiPath.SIGN_UP}`,
            {
                method: HttpMethod.POST,
                payload: JSON.stringify(payload),
            }
        );
    }

    public async signIn(payload: RegisteredUserRequestBody): Promise<UserWithToken> {
        return this.#httpApi.load<UserWithToken>(
            `${this.#apiPath}${ApiPath.AUTH}${ApiPath.SIGN_IN}`,
            {
                method: HttpMethod.POST,
                payload: JSON.stringify(payload),
            }
        );
    }

    public async getCurrentUser(): Promise<User> {
        return this.#httpApi.load<User>(
            `${this.#apiPath}${ApiPath.AUTH}${ApiPath.USER}`,
            {
                hasAuth: true
            }
        );
    }
}

export default AuthService;