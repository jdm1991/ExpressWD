import Head from "next/head";
import PortfolioPage from "@/components/portfolio";
import Header from "@/components/header";
import Footer from "@/components/footer";
import '@/app/globals.css';

export default function Portfolio() {
    return (
        <>
        <Head>
            <title>About ExpressWD</title>
        </Head>
            <Header />
           
            <Footer />
        </>)
}