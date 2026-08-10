import Header from "../components/Header";
import WelcomeSection from "../components/WelcomeSection";
import ImpactStats from "../components/ImpactStats";
import MissionVision from "../components/MissionVision";
import MindsBehindVision from "../components/MindsBehindVision";
import Programmes from "../components/Programmes";
import HowWeWork from "../components/HowWeWork";
import ImpactShowcase from "../components/ImpactShowcase";
import OurJourney from "../components/OurJourney";
import WhyJanhit from "../components/WhyJanhit";
import CSRPartnerships from "../components/CSRPartnerships";
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
        <WelcomeSection />
        <ImpactStats />
        <MissionVision />
        <MindsBehindVision />
        <Programmes />
        <HowWeWork />
        <ImpactShowcase />
        <OurJourney />
        <WhyJanhit />
        <CSRPartnerships />
        <Partners />
        <CallToAction />
      </main>
    </>
  );
}
