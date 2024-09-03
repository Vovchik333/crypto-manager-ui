import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../common/types/store";

const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export { useAppDispatch };