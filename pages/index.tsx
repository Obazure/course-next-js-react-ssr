import React from "react";
import Head from "next/head";
import {MainLayout} from "../components/MainLayout";

export default function IndexPage() {
    return (<MainLayout title={'Index page'}>
            <h1>Index page</h1>
        </MainLayout>
    )
}
