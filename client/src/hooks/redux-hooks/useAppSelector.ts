import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../../store/store";

//обычный селектор, но типизированный
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;