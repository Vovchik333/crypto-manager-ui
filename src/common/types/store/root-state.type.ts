import { store } from "../../../store";

type RootState = ReturnType<typeof store.getState>;

export { type RootState };