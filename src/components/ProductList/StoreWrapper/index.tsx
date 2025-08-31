"use client";

import store from "@store/index";
import { PropsWithChildren, ReactElement } from "react";
import { Provider } from "react-redux";

const StoreWrapper = ({ children }: PropsWithChildren): ReactElement => {
    return <Provider store={store}>{children}</Provider>;
};

export default StoreWrapper;
