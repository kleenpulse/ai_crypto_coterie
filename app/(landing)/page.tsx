import { About } from "@/components/sections/about";
import FAQs from "@/components/sections/faqs";
import { Features } from "@/components/sections/features";
import Footer from "@/components/sections/footer";
import HeroSection from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Integration } from "@/components/sections/integration";
import { Metrics } from "@/components/sections/metrics";

export default function Home() {
	return (
		<>
			<HeroSection />

			<Features />
			<About />
			<Integration />
			<HowItWorks />
			<section className="w-full flex flex-col bg-gradient-to-t from-primary from-30% to-[#2B49BB] ">
				<Metrics />
				<FAQs />
				<Footer />
			</section>
		</>
	);
}
