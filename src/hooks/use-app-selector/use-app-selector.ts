import { useSelector } from "react-redux";
import { RootState } from "../../common/types/store/root-state.type";

const useAppSelector = useSelector.withTypes<RootState>();

export { useAppSelector };