import Hero from "../components/Hero";
import WelcomeSection from "../components/WelcomeSection";
import ImpactStats from "../components/ImpactStats";
import MissionVision from "../components/MissionVision";
import Programmes from "../components/Programmes";
import HowWeWork from "../components/HowWeWork";
import StoriesOfChange from "../components/StoriesOfChange";
import ImpactDashboard from "../components/ImpactDashboard";
import OurJourney from "../components/OurJourney";
import WhereWeWork from "../components/WhereWeWork";
import WhyJanhit from "../components/WhyJanhit";

import Partners from "../components/Partners";
import KnowledgeReports from "../components/KnowledgeReports";
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
        <Hero />
        <WelcomeSection />
        <ImpactStats />
        <MissionVision />
        <OurJourney />
        <WhereWeWork />
        <Programmes />
        <HowWeWork />
        <StoriesOfChange />
        <ImpactDashboard />
        <WhyJanhit />

        <Partners />
        <KnowledgeReports />
        <CallToAction />
      </main>
    </>
  );
}
