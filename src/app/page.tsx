import Navigation from "@/components/sections/Navigation";
import Hero from "@/components/sections/Hero";
import ExecutiveSummary from "@/components/sections/ExecutiveSummary";
import ProductOverview from "@/components/sections/ProductOverview";
import DBOTSection from "@/components/sections/DBOTSection";
import CXGSection from "@/components/sections/CXGSection";
import TeSIMSection from "@/components/sections/TeSIMSection";
import CyberInsuranceSection from "@/components/sections/CyberInsuranceSection";
import BitdefenderSection from "@/components/sections/BitdefenderSection";
import XaniteSection from "@/components/sections/XaniteSection";
import PersaicSection from "@/components/sections/PersaicSection";
import CombinedCommercial from "@/components/sections/CombinedCommercial";
import WhyMVNE from "@/components/sections/WhyMVNE";
import NextSteps from "@/components/sections/NextSteps";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <ExecutiveSummary />
      <ProductOverview />
      <DBOTSection />
      <CXGSection />
      <TeSIMSection />
      <CyberInsuranceSection />
      <BitdefenderSection />
      <XaniteSection />
      <PersaicSection />
      <CombinedCommercial />
      <WhyMVNE />
      <NextSteps />
      <Footer />
    </>
  );
}
