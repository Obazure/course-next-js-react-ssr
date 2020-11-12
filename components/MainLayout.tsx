import React from "react";
import Link from "next/link";
import Head from "next/head";

export function MainLayout({children, title = ''}) {
    return (<>
        <Head>
            <title>{title} | Next course</title>
            <meta name="viewport" content="width=device-width" />
            <meta charSet="utf-8" />
        </Head>
        <nav>
            <p><Link href={'/'}><a>Home</a></Link></p>
            <p><Link href={'/about'}><a>About</a></Link></p>
            <p><Link href={'/posts'}><a>Posts</a></Link></p>
        </nav>
        <main>
            {children}
        </main>
        <style jsx>{`
            nav {
                position: fixed;
                height: 60px;
                left: 2px;
                top: 0px;
                right: 2px;
                background: darkblue;
                display: flex;
                justify-content: space-around;
                align-items: center;
            }
            
            nav a {
                color: #fff;
                text-decoration: none;
            }
            
            main {
                margin: 60px 10px 0 10px;
            }
        `}</style>
    </>)
}