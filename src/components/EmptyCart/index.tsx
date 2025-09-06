import { ReactElement } from "react";
import Image from "next/image";
import "./style.css";

const EmptyCart = (): ReactElement => {
    return(

    <div className="empty-cart-page">
        <Image
            src="/icons/emptyCartIcon.svg"
            alt="Server Error"
            width={350}
            height={400}
        />

        <h1 className="error-primary-text-message">В корзине ничего нет</h1>
    </div>
    )
};

export default EmptyCart;
