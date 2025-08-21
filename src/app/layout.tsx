import StoreWrapper from "@components/StoreWrapper";
import { type Metadata } from "next";

export const metadata: Metadata = {
    title: "Market frontend template",
    description: "A ready-to-use Next.js frontend template for building modern marketplaces",
};

const RootLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <html lang="en">
            <body>
                <StoreWrapper>{children}</StoreWrapper>
            </body>
        </html>
    );
};

export default RootLayout;
