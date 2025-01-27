import { NavStateProps } from "@/types/nav-states.types";
import { IconType } from "react-icons";
import { IntegrationProps } from "@/types/integration";
import TrendsIcon from "@/components/icons/trends-icon";
import TrackingIcon from "@/components/icons/tracking-icon";
import AnalysisIcon from "@/components/icons/analysis-icon";

type LinkProps = {
	name: string;
	link: NavStateProps["activeLink"];
};

export interface Socials {
	id: number;
	link: string;
	icon: IconType;
}
export interface FeaturesProps {
	id: number;
	icon: IconType;
	title: string;
	description: string;
}

interface FAQItem {
	question: string;
	answer: string;
	id: number;
	hasLink?: boolean;
}
export const FAQS: FAQItem[] = [
	{
		id: 1,
		question: "What is COTERIE?",
		answer:
			"COTERIE is an AI-powered Discord bot designed to scan crypto contract addresses (CAs) and provide real-time sentiment analysis based on group reactions.",
	},
	{
		id: 2,
		question: "How do I integrate COTERIE into my Discord server?",
		answer: `Simply click the "Add to Server" button on our website and follow the integration guide provided in our GitHub repository.`,
	},

	{
		id: 3,
		question: "How can I join Coterie's crew?",
		answer:
			"Join our Telegram channel and follow us on social media to stay updated on our latest developments. You can also participate in our token sale or contribute as a developer.",
	},
	{
		id: 4,
		question: "How does COTERIE determine sentiment?",
		answer:
			"COTERIE analyzes chat reactions within each group, categorizing sentiment as bullish, bearish, farming potential, or neutral. These insights evolve as more groups scan the token.",
	},

	{
		id: 5,
		hasLink: true,
		question: "Is COTERIE free to use?",
		answer: `COTERIE offers core features for free, with premium tiers available for advanced analytics and custom sentiment reports.`,
	},
];

export const METRICS = [
	{
		id: 1,
		percentage: 45,
		color: "#4ADE80",
		description: "Bullish Sentiment: 45% positive discussions.",
	},
	{
		id: 2,
		percentage: 30,
		color: "#FB4C3C",
		description: "Bearish Sentiment: 30% negative reactions",
	},
	{
		id: 3,
		percentage: 10,
		color: "#96CEFF",
		description: "Neutral Sentiment: 10% indifferent chatter.",
	},
];

export const FEATURES: FeaturesProps[] = [
	{
		id: 1,
		icon: AnalysisIcon,
		title: "Real-Time Sentiment Analysis",
		description: "Instantly scan contract addresses for group sentiment.",
	},
	{
		id: 2,
		icon: TrackingIcon,
		title: "Group Sentiment Tracking",
		description: "Track reactions across multiple servers in real time",
	},
	{
		id: 3,
		icon: TrendsIcon,
		title: "Historical Trends",
		description: "Visualize sentiment evolution over time for better insights.",
	},
];

export const NAV_LINKS: LinkProps[] = [
	{ name: "About", link: "about" },
	{ name: "Integration", link: "integration" },
	{ name: "How it works", link: "how-it-works" },
	{ name: "Features", link: "features" },
	{ name: "FAQ", link: "faq" },
];

export const INTEGRATION: IntegrationProps[] = [
	{
		id: 1,
		description: "1. Click the “Add to Server” button.",
	},
	{
		id: 2,
		description: "2. Authorize the bot and select your server.",
	},
	{
		id: 3,
		description: "3. Authorize the bot and select your server.",
	},
	{
		id: 4,
		description: "4. Grant permissions like Read Messages and Post Messages.",
	},
	{
		id: 5,
		description: "5. Use the /scan command to get started!",
	},
];
export const HOWITWORKS: IntegrationProps[] = [
	{
		id: 1,
		description: "Input contract address (e.g., 0x1234abcd...)",
	},
	{
		id: 2,
		description: "The bot scans relevant Discord groups for discussions",
	},
	{
		id: 3,
		description:
			"Metrics like Bullish, Bearish, Farming Potential, and Neutral sentiment are generated.",
	},
	{
		id: 4,
		description: "A dashboard visualizes trends over time.",
	},
];
