import { Layers, Search, Users } from "lucide-react";
export const teamTypes = [
    {
        title: "Development Teams",
        description:
            "Full-stack development teams specializing in blockchain technology.",
        icon: Layers,
        bgColor: "bg-blue-100 dark:bg-blue-900/20",
        iconColor: "text-blue-600 dark:text-blue-400",
    },
    {
        title: "Design Teams",
        description:
            "UI/UX design teams creating intuitive interfaces for Web3 applications.",
        icon: Users,
        bgColor: "bg-purple-100 dark:bg-purple-900/20",
        iconColor: "text-purple-600 dark:text-purple-400",
    },
    {
        title: "Marketing Teams",
        description:
            "Strategic marketing teams to help you grow your blockchain business.",
        icon: Search,
        bgColor: "bg-green-100 dark:bg-green-900/20",
        iconColor: "text-green-600 dark:text-green-400",
    },
];
