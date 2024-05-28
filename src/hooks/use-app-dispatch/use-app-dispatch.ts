import { useDispatch } from "react-redux";
import { AppDispatch } from "../../common/types/store/app-dispatch.type";

const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export { useAppDispatch };