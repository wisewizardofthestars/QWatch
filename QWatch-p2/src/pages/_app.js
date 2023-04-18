import App from "next/app";
import { useEffect, useState } from 'react';
import '../styles/globals.css';
import Layout from "../components/Layout";



export default function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}
