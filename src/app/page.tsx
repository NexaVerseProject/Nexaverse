import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/home/Hero").then((m) => m.Hero), { ssr: false });
const Features = dynamic(() => import("@/components/home/feautured").then((m) => m.Features), { ssr: false });
const Jobs = dynamic(() => import("@/components/home/Jobs").then((m) => m.Jobs), { ssr: false });
const Companies = dynamic(() => import("@/components/home/Companies").then((m) => m.Companies), { ssr: false });
const Business = dynamic(() => import("@/components/home/Business").then((m) => m.Business), { ssr: false });
const Stats = dynamic(() => import("@/components/home/Stats").then((m) => m.Stats), { ssr: false });
const ToAction = dynamic(() => import("@/components/home/Action").then((m) => m.ToAction), { ssr: false });
const Functionality = dynamic(() => import("@/components/home/Functionality").then((m) => m.Functionality), { ssr: false });

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero section */}
      <Hero />
      {/* Stats Section */}
      <Stats />
      {/* Opportunities section */}
      <Jobs />
      {/* For Business Section */}
      <Business />
      {/* Platform Features section */}
      <Features />
      {/* How It Works Section */}
      <Functionality />
      {/* Endorsements */}
      <Companies />
      {/* Call To Action Section */}
      <ToAction />
    </div>
  );
}
