import Head from "next/head";
import About from "@/components/about";
import Header from "@/components/header";
import Footer from "@/components/footer";
import '@/app/globals.css';

export default function AboutPage() {
    return (
        <>
        <Head>
            <title>About ExpressWD</title>
        </Head>
            <Header />
            <About />
            <Footer />
        </>)
}