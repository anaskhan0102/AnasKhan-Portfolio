export const personalInfo = {
  name: "Anas Khan",
  title: "Full-Stack PHP Laravel Developer",
  portfolio: "https://your-portfolio.com",
  taglines: [
    "Building Scalable Web Solutions",
    "Coffee + Code = Magic ☕",
    "Welcome to my Digital Space!",
    "Crafting Enterprise-Grade Solutions"
  ],
  bio: "Full-Stack PHP Laravel Enthusiast crafting enterprise-grade solutions. Currently mastering microservices and cloud-native architectures, building SaaS platforms that scale and perform. Passionate about clean code, innovative solutions, and continuous learning.",
  philosophy: "Clean code is not written by following a set of rules. You don't become a software craftsman by learning a list of heuristics. Professionalism and craftsmanship come from values that drive disciplines.",
  interests: [
    { icon: "🏏", title: "Cricket Enthusiast", description: "Following matches and analyzing strategies" },
    { icon: "🔍", title: "Tech Explorer", description: "Always learning new technologies" },
    { icon: "🧩", title: "Problem Solver", description: "Love tackling complex challenges" }
  ],
  dailyFuel: [
    { icon: "☕", title: "Coffee Connoisseur", description: "Fueling code with quality brews" },
    { icon: "📚", title: "Continuous Learner", description: "Never stop growing" },
    { icon: "🤝", title: "Community Builder", description: "Sharing knowledge and helping others" }
  ],
  availability: [
    "Freelance Projects",
    "Full-time Opportunities",
    "Open Source Collaboration"
  ]
};

export const skills = {
  "Frontend Mastery": {
    icon: "🎨",
    color: "from-pink-500 to-purple-600",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "TailwindCSS"]
  },
  "Backend Powerhouse": {
    icon: "⚡",
    color: "from-yellow-500 to-orange-600",
    technologies: ["PHP", "Laravel"]
  },
  "Database Expertise": {
    icon: "🗄️",
    color: "from-blue-500 to-cyan-600",
    technologies: ["MySQL", "PostgreSQL"]
  },
  "DevOps & Cloud": {
    icon: "☁️",
    color: "from-green-500 to-teal-600",
    technologies: ["AWS", "Linux"]
  },
  "Development Tools": {
    icon: "🔧",
    color: "from-gray-500 to-slate-600",
    technologies: ["Git", "GitHub", "GitLab", "VS Code", "Postman"]
  }
};

export const expertise = [
  {
    title: "RESTful APIs",
    description: "Building secure APIs with Sanctum/Passport Authentication",
    icon: "🔐",
    color: "bg-gradient-to-br from-blue-500 to-cyan-600"
  },
  {
    title: "Database Design",
    description: "Expert in Eloquent ORM and database optimization",
    icon: "🗃️",
    color: "bg-gradient-to-br from-purple-500 to-pink-600"
  },
  {
    title: "Queue Systems",
    description: "Redis and Database Jobs for background processing",
    icon: "⚙️",
    color: "bg-gradient-to-br from-orange-500 to-red-600"
  },
  {
    title: "Testing",
    description: "Comprehensive testing with PHPUnit/Pest Framework",
    icon: "✅",
    color: "bg-gradient-to-br from-green-500 to-emerald-600"
  },
  {
    title: "Security",
    description: "Implementing OWASP Best Practices",
    icon: "🛡️",
    color: "bg-gradient-to-br from-indigo-500 to-blue-600"
  }
];

export const contact = {
  email: "anaskhan14082@gmail.com",
  linkedin: "www.linkedin.com/in/anas-khan-6a279a381/",
  portfolio: "https://your-portfolio.com",
  whatsapp: "https://wa.me/+923140821938",
  github: "https://github.com/anaskhan0102"
};

export const socialLinks = [
  {
    name: "GitHub",
    icon: "Github",
    url: contact.github,
    color: "hover:text-gray-900 dark:hover:text-white"
  },
  {
    name: "LinkedIn",
    icon: "Linkedin",
    url: contact.linkedin,
    color: "hover:text-blue-600"
  },
  {
    name: "Email",
    icon: "Mail",
    url: `mailto:${contact.email}`,
    color: "hover:text-red-500"
  },
  {
    name: "WhatsApp",
    icon: "MessageCircle",
    url: contact.whatsapp,
    color: "hover:text-green-500"
  }
];
