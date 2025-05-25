const getRandomDate = () => {
    const now = new Date();
    const randomDays = Math.floor(Math.random() * 7);
    const randomHours = Math.floor(Math.random() * 24);
    const randomMinutes = Math.floor(Math.random() * 60);

    now.setDate(now.getDate() - randomDays);
    now.setHours(now.getHours() - randomHours);
    now.setMinutes(now.getMinutes() - randomMinutes);
    if (randomDays > 0) {
        return `${randomDays}d ago`;
    } else if (randomHours > 0) {
        return `${randomHours}h ago`;
    } else {
        return `${randomMinutes}m ago`;
    }
};

export const generateDummyMessages = (userType: string) => {
    const baseMessages = [
        {
            id: "msg1",
            subject: "Welcome to NexaWork!",
            preview: "Welcome to our platform. We're excited to have you join our community of professionals...",
            lastMessage: "Welcome to our platform. We're excited to have you join our community of professionals. Let us know if you have any questions!",
            timestamp: "2d ago",
            read: true,
            attachments: 0,
            priority: "medium" as const,
            status: "active" as const,
        },
        {
            id: "msg2",
            subject: "Your account verification",
            preview: "We need to verify your account details. Please upload your identification documents...",
            lastMessage: "We need to verify your account details. Please upload your identification documents at your earliest convenience. This will help us ensure the security of our platform.",
            timestamp: "1d ago",
            read: false,
            attachments: 0,
            priority: "high" as const,
            status: "active" as const,
        },
    ];

    // User type specific messages
    if (userType === "freelancer") {
        return [
            {
                ...baseMessages[0],
                sender: { id: "admin1", name: "NexaWork Admin", role: "Admin" },
                recipient: { id: "user1", name: "Alex Johnson", role: "Freelancer" },
                category: "system",
            },
            {
                ...baseMessages[1],
                sender: { id: "admin2", name: "Verification Team", role: "Admin" },
                recipient: { id: "user1", name: "Alex Johnson", role: "Freelancer" },
                category: "system",
            },
            {
                id: "fr1",
                sender: { id: "client1", name: "Sarah Miller", role: "Business Owner" },
                recipient: { id: "user1", name: "Alex Johnson", role: "Freelancer" },
                subject: "Web Development Project Inquiry",
                preview: "I saw your portfolio and I'm impressed with your work. I have a project for an e-commerce site...",
                lastMessage: "I saw your portfolio and I'm impressed with your work. I have a project for an e-commerce site that I'd like to discuss with you. Are you available for a call sometime this week?",
                timestamp: getRandomDate(),
                read: false,
                category: "project",
                attachments: 1,
                priority: "medium" as const,
                status: "active" as const,
                relatedTo: {
                    type: "Project",
                    id: "proj123",
                    title: "E-commerce Website",
                },
            },
            {
                id: "fr2",
                sender: { id: "client2", name: "Michael Roberts", role: "Project Manager" },
                recipient: { id: "user1", name: "Alex Johnson", role: "Freelancer" },
                subject: "Contract for Mobile App Development",
                preview: "Here's the contract for the mobile app project we discussed. Please review the terms...",
                lastMessage: "Here's the contract for the mobile app project we discussed. Please review the terms and let me know if you have any questions or need modifications.",
                timestamp: getRandomDate(),
                read: true,
                category: "contract",
                attachments: 2,
                priority: "high" as const,
                status: "active" as const,
                relatedTo: {
                    type: "Contract",
                    id: "cont456",
                    title: "Mobile App Development",
                },
            },
            {
                id: "fr3",
                sender: { id: "client3", name: "Jennifer Lee", role: "Startup Founder" },
                recipient: { id: "user1", name: "Alex Johnson", role: "Freelancer" },
                subject: "Response to Your Proposal",
                preview: "Thank you for submitting your proposal. We've reviewed it and would like to discuss a few points...",
                lastMessage: "Thank you for submitting your proposal. We've reviewed it and would like to discuss a few points regarding the timeline and budget. Could we schedule a meeting?",
                timestamp: getRandomDate(),
                read: false,
                category: "proposal",
                attachments: 0,
                priority: "medium" as const,
                status: "active" as const,
                relatedTo: {
                    type: "Proposal",
                    id: "prop789",
                    title: "UI/UX Redesign",
                },
            },
            {
                id: "fr4",
                sender: { id: "client4", name: "David Wilson", role: "Marketing Director" },
                recipient: { id: "user1", name: "Alex Johnson", role: "Freelancer" },
                subject: "Milestone Payment Released",
                preview: "Great work on completing the first milestone! I've just released the payment to your account...",
                lastMessage: "Great work on completing the first milestone! I've just released the payment to your account. Looking forward to seeing the next phase of development.",
                timestamp: getRandomDate(),
                read: true,
                category: "project",
                attachments: 0,
                priority: "low" as const,
                status: "active" as const,
                relatedTo: {
                    type: "Project",
                    id: "proj567",
                    title: "Marketing Dashboard",
                },
            },
            {
                id: "fr5",
                sender: { id: "client5", name: "Emily Chen", role: "Product Owner" },
                recipient: { id: "user1", name: "Alex Johnson", role: "Freelancer" },
                subject: "Contract Extension Offer",
                preview: "We've been very happy with your work and would like to extend your contract for another 3 months...",
                lastMessage: "We've been very happy with your work and would like to extend your contract for another 3 months. The terms would remain the same. Please let me know if you're interested.",
                timestamp: getRandomDate(),
                read: false,
                category: "contract",
                attachments: 1,
                priority: "medium" as const,
                status: "active" as const,
                relatedTo: {
                    type: "Contract",
                    id: "cont890",
                    title: "Backend Development",
                },
            },
        ];
    } else if (userType === "job-poster") {
        return [
            {
                ...baseMessages[0],
                sender: { id: "admin1", name: "NexaWork Admin", role: "Admin" },
                recipient: { id: "user2", name: "Robert Smith", role: "Job Poster" },
                category: "system",
            },
            {
                ...baseMessages[1],
                sender: { id: "admin2", name: "Verification Team", role: "Admin" },
                recipient: { id: "user2", name: "Robert Smith", role: "Job Poster" },
                category: "system",
            },
            {
                id: "jp1",
                sender: { id: "freelancer1", name: "Jessica Taylor", role: "Frontend Developer" },
                recipient: { id: "user2", name: "Robert Smith", role: "Job Poster" },
                subject: "Application for Senior Frontend Developer Position",
                preview: "I'm excited to apply for the Senior Frontend Developer position you posted. With over 5 years of experience...",
                lastMessage: "I'm excited to apply for the Senior Frontend Developer position you posted. With over 5 years of experience in React and Vue.js, I believe I'm a strong fit for your team. I've attached my portfolio and resume for your review.",
                timestamp: getRandomDate(),
                read: false,
                category: "application",
                attachments: 2,
                priority: "medium" as const,
                status: "active" as const,
                relatedTo: {
                    type: "Job",
                    id: "job123",
                    title: "Senior Frontend Developer",
                },
            },
            {
                id: "jp2",
                sender: { id: "freelancer2", name: "Mark Johnson", role: "Full Stack Developer" },
                recipient: { id: "user2", name: "Robert Smith", role: "Job Poster" },
                subject: "Question about Remote Work Policy",
                preview: "I'm interested in your Full Stack Developer position. Before applying, I wanted to ask about your remote work policy...",
                lastMessage: "I'm interested in your Full Stack Developer position. Before applying, I wanted to ask about your remote work policy and if you offer flexible hours. Thanks for considering my inquiry.",
                timestamp: getRandomDate(),
                read: true,
                category: "application",
                attachments: 0,
                priority: "low" as const,
                status: "active" as const,
                relatedTo: {
                    type: "Job",
                    id: "job456",
                    title: "Full Stack Developer",
                },
            },
            {
                id: "jp3",
                sender: { id: "freelancer3", name: "Amanda Harris", role: "UX Designer" },
                recipient: { id: "user2", name: "Robert Smith", role: "Job Poster" },
                subject: "Project Timeline Discussion",
                preview: "Regarding the UX redesign project, I've reviewed the requirements and would like to discuss the timeline...",
                lastMessage: "Regarding the UX redesign project, I've reviewed the requirements and would like to discuss the timeline. I think we might need to adjust some of the milestones to ensure quality deliverables.",
                timestamp: getRandomDate(),
                read: false,
                category: "active-job",
                attachments: 1,
                priority: "high" as const,
                status: "active" as const,
                relatedTo: {
                    type: "Project",
                    id: "proj234",
                    title: "UX Redesign Project",
                },
            },
            {
                id: "jp4",
                sender: { id: "freelancer4", name: "Ryan Baker", role: "Mobile Developer" },
                recipient: { id: "user2", name: "Robert Smith", role: "Job Poster" },
                subject: "Contract Rate Negotiation",
                preview: "Thank you for the contract offer. I'd like to discuss the hourly rate, as it's a bit lower than my usual rate...",
                lastMessage: "Thank you for the contract offer. I'd like to discuss the hourly rate, as it's a bit lower than my usual rate. Given my specialized experience with React Native, I believe a rate of $X would be more appropriate. Let me know your thoughts.",
                timestamp: getRandomDate(),
                read: true,
                category: "negotiation",
                attachments: 0,
                priority: "medium" as const,
                status: "active" as const,
                relatedTo: {
                    type: "Contract",
                    id: "cont345",
                    title: "Mobile App Development",
                },
            },
            {
                id: "jp5",
                sender: { id: "freelancer5", name: "Sophia Martinez", role: "Backend Developer" },
                recipient: { id: "user2", name: "Robert Smith", role: "Job Poster" },
                subject: "Completed API Integration",
                preview: "I've completed the API integration for the project. You can now test it using the credentials I've provided...",
                lastMessage: "I've completed the API integration for the project. You can now test it using the credentials I've provided in the attachment. Let me know if you encounter any issues or have questions.",
                timestamp: getRandomDate(),
                read: false,
                category: "active-job",
                attachments: 1,
                priority: "medium" as const,
                status: "active" as const,
                relatedTo: {
                    type: "Project",
                    id: "proj567",
                    title: "API Integration",
                },
            },
        ];
    } else if (userType === "business") {
        return [
            {
                ...baseMessages[0],
                sender: { id: "admin1", name: "NexaWork Admin", role: "Admin" },
                recipient: { id: "user3", name: "Jennifer Parker", role: "Business Owner" },
                category: "system",
            },
            {
                ...baseMessages[1],
                sender: { id: "admin2", name: "Verification Team", role: "Admin" },
                recipient: { id: "user3", name: "Jennifer Parker", role: "Business Owner" },
                category: "system",
            },
            {
                id: "bs1",
                sender: { id: "talent1", name: "Andrew Collins", role: "Senior Developer" },
                recipient: { id: "user3", name: "Jennifer Parker", role: "Business Owner" },
                subject: "Interest in Long-term Collaboration",
                preview: "I noticed your company profile and I'm impressed with your projects. I'd be interested in discussing potential collaboration...",
                lastMessage: "I noticed your company profile and I'm impressed with your projects. I'd be interested in discussing potential collaboration opportunities. I specialize in cloud architecture and have experience with AWS and Azure.",
                timestamp: getRandomDate(),
                read: false,
                category: "talent",
                attachments: 1,
                priority: "medium" as const,
                status: "active" as const,
            },
            {
                id: "bs2",
                sender: { id: "vendor1", name: "CloudHost Solutions", role: "Service Provider" },
                recipient: { id: "user3", name: "Jennifer Parker", role: "Business Owner" },
                subject: "Enterprise Plan Proposal",
                preview: "Based on your recent growth, we'd like to offer you our Enterprise hosting plan with additional benefits...",
                lastMessage: "Based on your recent growth, we'd like to offer you our Enterprise hosting plan with additional benefits including 24/7 priority support and enhanced security features. I've attached a detailed proposal for your review.",
                timestamp: getRandomDate(),
                read: true,
                category: "vendor",
                attachments: 1,
                priority: "low" as const,
                status: "active" as const,
            },
            {
                id: "bs3",
                sender: { id: "team1", name: "Lisa Wong", role: "Project Manager" },
                recipient: { id: "user3", name: "Jennifer Parker", role: "Business Owner" },
                subject: "Weekly Project Update",
                preview: "Here's this week's project update. We've completed the database migration and are now working on the API integrations...",
                lastMessage: "Here's this week's project update. We've completed the database migration and are now working on the API integrations. We're still on track to meet the deadline, but there's a potential risk with the third-party service integration that I'd like to discuss.",
                timestamp: getRandomDate(),
                read: false,
                category: "team",
                attachments: 2,
                priority: "high" as const,
                status: "active" as const,
                relatedTo: {
                    type: "Project",
                    id: "proj789",
                    title: "Platform Migration",
                },
            },
            {
                id: "bs4",
                sender: { id: "talent2", name: "Daniel Kim", role: "UI/UX Designer" },
                recipient: { id: "user3", name: "Jennifer Parker", role: "Business Owner" },
                subject: "Portfolio and Availability",
                preview: "Thank you for reaching out about the design position. I've attached my portfolio and I'm available to start from next month...",
                lastMessage: "Thank you for reaching out about the design position. I've attached my portfolio and I'm available to start from next month. I'm particularly interested in your focus on user-centered design and accessibility.",
                timestamp: getRandomDate(),
                read: true,
                category: "talent",
                attachments: 1,
                priority: "medium" as const,
                status: "active" as const,
            },
            {
                id: "bs5",
                sender: { id: "vendor2", name: "SecurePay Services", role: "Payment Processor" },
                recipient: { id: "user3", name: "Jennifer Parker", role: "Business Owner" },
                subject: "Payment Integration Update Required",
                preview: "Important: We're updating our API endpoints next month. You'll need to update your integration by the date specified...",
                lastMessage: "Important: We're updating our API endpoints next month. You'll need to update your integration by the date specified in the attached document. We've provided comprehensive migration guides and our support team is available to assist you.",
                timestamp: getRandomDate(),
                read: false,
                category: "vendor",
                attachments: 2,
                priority: "high" as const,
                status: "active" as const,
            },
        ];
    }

    // Default messages if no user type matches
    return [
        {
            ...baseMessages[0],
            sender: { id: "admin1", name: "NexaWork Admin", role: "Admin" },
            recipient: { id: "user1", name: "User", role: "Member" },
            category: "system",
        },
        {
            ...baseMessages[1],
            sender: { id: "admin2", name: "Verification Team", role: "Admin" },
            recipient: { id: "user1", name: "User", role: "Member" },
            category: "system",
        },
    ];
}; 