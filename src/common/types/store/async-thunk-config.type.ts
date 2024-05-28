import { extraArguments } from "../../../store/extra-arguments";
import { AppDispatch } from "./app-dispatch.type";
import { RootState } from "./root-state.type";

type AsyncThunkConfig = {
    state: RootState,
    dispatch: AppDispatch,
    extra: typeof extraArguments
}

export { type AsyncThunkConfig };