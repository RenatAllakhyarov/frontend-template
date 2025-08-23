import StoreWrapper from "@components/StoreWrapper";
import store from "@store/index";
import { type Metadata } from "next";
import { Provider } from "react-redux";

export const metadata: Metadata = {
    title: "Market frontend template",
    description:
        "A ready-to-use Next.js frontend template for building modern marketplaces",
};

const RootLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <html lang="en">
            <body>
                <Provider store={store}>
                    <StoreWrapper>{children}</StoreWrapper>
                </Provider>
            </body>
        </html>
    );
};

export default RootLayout;
