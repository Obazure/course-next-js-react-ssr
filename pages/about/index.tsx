import React from "react";
import Router from 'next/router'
import {MainLayout} from "../../components/MainLayout";

/**
 * How to use router to navigate on client
 * Router.push('next-page) for navigation between pages.
 */
export default function AboutPage({title}) {

    const linkClickHandler = () => {
        Router.push('/')
    }

    return (<MainLayout title={'About page'}>
        <h1>{title}</h1>
        <button onClick={linkClickHandler}>Go back to home.</button>
        <button onClick={() => Router.push('/posts')}>Go to posts.</button>
    </MainLayout>)
}

AboutPage.getInitialProps = async () => {
    const response = await fetch(`${process.env.API_URL}/about`)
    const data = await response.json()
    return {title: data.title}
}
