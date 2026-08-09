import Header from "../components/Header";
import ImpactShowcase from "../components/ImpactShowcase";
import ImpactStats from "../components/ImpactStats";
import Programmes from "../components/Programmes";
import Awards from "../components/Awards";
import Partners from "../components/Partners";
import CallToAction from "../components/CallToAction";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Janhit Foundation</title>
        <meta name="description" content="Welcome To Janhit Foundation. Working for Environmental & Water Conservation." />
      </Head>
      <main>
        <Header />
        <ImpactShowcase />
        <ImpactStats />
        <Programmes />
        <Awards />
        <Partners />
        <CallToAction />
      </main>
    </>
  );
}
