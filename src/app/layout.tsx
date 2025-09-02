import Header from "@components/Header";
import StoreWrapper from "@components/StoreWrapper";
import { type Metadata } from "next";
import "@domains/Theme/style.css";

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
                <StoreWrapper>
                    <div className="application">
                        <Header />
                        <div className="page-wrapper">{children}</div>
                    </div>
                </StoreWrapper>
            </body>
        </html>
    );
};

export default RootLayout;
