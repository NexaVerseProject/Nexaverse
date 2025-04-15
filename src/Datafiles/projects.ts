import { Layers, Shield, Users } from "lucide-react";
export const projectTypes = [
    {
        title: "dApp Development",
        description:
            "Complete development of decentralized applications from concept to launch.",
        icon: Layers,
        bgColor: "bg-blue-100 dark:bg-blue-900/20",
        iconColor: "text-blue-600 dark:text-blue-400",
    },
    {
        title: "Smart Contract Audit",
        description:
            "Comprehensive security audits and code reviews for blockchain projects.",
        icon: Shield,
        bgColor: "bg-green-100 dark:bg-green-900/20",
        iconColor: "text-green-600 dark:text-green-400",
    },
    {
        title: "Web3 Marketing",
        description:
            "Strategic marketing campaigns to promote your blockchain products and services.",
        icon: Users,
        bgColor: "bg-purple-100 dark:bg-purple-900/20",
        iconColor: "text-purple-600 dark:text-purple-400",
    },
]