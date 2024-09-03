import { useSelector } from "react-redux";
import { RootState } from "../../../common/types/store";

const useAppSelector = useSelector.withTypes<RootState>();

export { useAppSelector };