import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";

import { RootState, AppDispatch } from "../../store/store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
//обычный селектор, но типизированный
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
