import { authService } from "../services/services";

type ExtraArguments = {
    authService: typeof authService;
}

const extraArguments: ExtraArguments = {
    authService
}

export { extraArguments };