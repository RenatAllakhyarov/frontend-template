import Image from "next/image";
import { ReactElement } from "react";
import "./style.css";

const EmptyCart = (): ReactElement => {
    return (
        <div className="empty-cart-page">
            <Image
                src="/icons/emptyCartIcon.svg"
                alt="Server Error"
                width={350}
                height={350}
            />
            <h1 className="error-primary-text-message">В корзине ничего нет</h1>
        </div>
    );
};

export default EmptyCart;
