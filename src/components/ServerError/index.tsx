import Image from "next/image";
import { ReactElement } from "react";
import "./style.css";

const ServerError = (): ReactElement => {
    return (
        <div className="error-page">
            <Image
                src="/icons/serverErrorIcon.svg"
                alt="Server Error"
                width={350}
                height={400}
            />

            <h1 className="error-primary-text-message">Что-то пошло не так</h1>
            <p className="error-secondary-text-message">
                Кажется, на сайте ведутся технические работы!
            </p>
        </div>
    );
};

export default ServerError;
