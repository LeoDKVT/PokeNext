import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";


export default function Layout({children}) {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/images/favicon.ico"/>
                <title>PokeNext</title>
            </Head>
            <Navbar />
            <main></main>
            <Footer />
        </>
    )
}