"use client";

import Image from "next/image";
import { ReactElement } from "react";
import styles from "./error.module.css";

const Error = (): ReactElement => {
    return (
        <div className={styles.errorPage}>
            <Image
                src="/icons/serverErrorIcon.svg"
                alt="Server Error"
                width={350}
                height={400}
            />

            <h1 className={styles.errorPrimaryTextMessage}>
                Что-то пошло не так
            </h1>
            <p className={styles.errorSecondaryTextMessage}>
                Кажется, на сайте ведутся технические работы!
            </p>
        </div>
    );
};

export default Error;
