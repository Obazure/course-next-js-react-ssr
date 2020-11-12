import Document, {Html, Head, Main, NextScript} from 'next/document'
import React from 'react'

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang={'en'}>
                <Head>
                    <link rel="icon" href="/favicon.ico" />
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital@0;1&display=swap"
                          rel="stylesheet" />
                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        )
    }
}
