import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import VideoBlock from "@/components/home/VideoBlock";
import SocialReels from "@/components/home/SocialReels";
import Portfolio from "@/components/home/Portfolio";
import TrialForm from "@/components/home/TrialForm";
import DeveloperMarquee from "@/components/home/DeveloperMarquee";
import Testimonials from "@/components/home/Testimonials";
import Team from "@/components/home/Team";
import FAQ from "@/components/home/FAQ";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <VideoBlock />
      <SocialReels />
      <Portfolio />
      <TrialForm />
      <DeveloperMarquee />
      <Testimonials />
      <Team />
      <FAQ />
    </div>
  );
}
