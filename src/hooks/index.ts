import { TRootState, TAppDispatch } from "@store/index";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

export const useAppDispatch = () => useDispatch<TAppDispatch>();
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;
