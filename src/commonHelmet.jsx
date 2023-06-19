import React from "react";
import { Helmet } from "react-helmet";

/**
 * google font 사용하기 위해 react-helmet설치 후 설정
 * @returns
 */
export default function CustomHelmet() {
    return (
        <Helmet>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossorigin=""
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap"
                rel="stylesheet"
            />
        </Helmet>
    );
}
