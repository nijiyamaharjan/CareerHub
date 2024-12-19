const mockJobs = [
  { 
    id: 1, 
    title: "Software Engineer", 
    company: "Tech Co", 
    location: "Remote", 
    level: "Entry Level", 
    time: "Fulltime", 
    salaryRange: "$60,000 - $80,000", 
    jobDescription: "Develop and maintain software applications. Collaborate with cross-functional teams to deliver high-quality products." 
  },
  { 
    id: 2, 
    title: "Data Scientist", 
    company: "Data Inc", 
    location: "New York", 
    level: "Mid Level", 
    time: "Part-time", 
    salaryRange: "$90,000 - $120,000", 
    jobDescription: "Analyze and interpret complex data to provide actionable insights. Develop machine learning models and algorithms." 
  },
  { 
    id: 3, 
    title: "Product Manager", 
    company: "ProdTech", 
    location: "San Francisco", 
    level: "Mid Level", 
    time: "Fulltime", 
    salaryRange: "$100,000 - $130,000", 
    jobDescription: "Lead product development from conception to launch. Work with engineering, marketing, and sales teams to drive product success." 
  },
  { 
    id: 4, 
    title: "DevOps Engineer", 
    company: "CloudTech", 
    location: "Seattle", 
    level: "Senior Level", 
    time: "Fulltime", 
    salaryRange: "$120,000 - $150,000", 
    jobDescription: "Manage the deployment, monitoring, and optimization of cloud infrastructure. Ensure high availability and security of production environments." 
  },
  { 
    id: 5, 
    title: "UI/UX Designer", 
    company: "DesignHub", 
    location: "Remote", 
    level: "Entry Level", 
    time: "Part-time", 
    salaryRange: "$50,000 - $70,000", 
    jobDescription: "Design user interfaces and create user experiences for web and mobile applications. Work closely with developers to ensure the design is implemented." 
  },
  { 
    id: 6, 
    title: "Backend Developer", 
    company: "API Solutions", 
    location: "Austin", 
    level: "Entry Level", 
    time: "Part-time", 
    salaryRange: "$60,000 - $80,000", 
    jobDescription: "Develop server-side logic and APIs for web applications. Integrate user-facing elements with server-side functionality." 
  },
  { 
    id: 7, 
    title: "Front-End Developer", 
    company: "Webworks", 
    location: "Los Angeles", 
    level: "Mid Level", 
    time: "Fulltime", 
    salaryRange: "$80,000 - $110,000", 
    jobDescription: "Design and implement the user-facing part of web applications. Work with back-end developers to integrate APIs and ensure smooth functionality." 
  },
  { 
    id: 8, 
    title: "Software Engineer", 
    company: "Innovative Systems", 
    location: "Chicago", 
    level: "Senior Level", 
    time: "Fulltime", 
    salaryRange: "$110,000 - $140,000", 
    jobDescription: "Develop high-performance software solutions. Lead a team of engineers and ensure that the development process is efficient and meets business goals." 
  },
  { 
    id: 9, 
    title: "Fullstack Developer", 
    company: "Tech Solutions", 
    location: "Remote", 
    level: "Mid Level", 
    time: "Fulltime", 
    salaryRange: "$90,000 - $120,000", 
    jobDescription: "Work on both the front-end and back-end of web applications. Create and manage databases, ensure high performance and responsiveness." 
  },
  { 
    id: 10, 
    title: "Data Engineer", 
    company: "Big Data LLC", 
    location: "San Francisco", 
    level: "Entry Level", 
    time: "Part-time", 
    salaryRange: "$70,000 - $90,000", 
    jobDescription: "Build and maintain the infrastructure for data generation, collection, and analysis. Ensure data is accessible and reliable for analysis." 
  },
  { 
    id: 11, 
    title: "Machine Learning Engineer", 
    company: "ML Labs", 
    location: "Austin", 
    level: "Senior Level", 
    time: "Fulltime", 
    salaryRange: "$120,000 - $160,000", 
    jobDescription: "Design and implement machine learning algorithms. Build predictive models and work closely with data scientists to improve models." 
  },
  { 
    id: 12, 
    title: "Cloud Architect", 
    company: "CloudTech", 
    location: "Seattle", 
    level: "Senior Level", 
    time: "Fulltime", 
    salaryRange: "$130,000 - $160,000", 
    jobDescription: "Design and manage scalable cloud infrastructure. Collaborate with development teams to ensure cloud solutions are aligned with business goals." 
  },
  { 
    id: 13, 
    title: "Business Analyst", 
    company: "Data Insights", 
    location: "Boston", 
    level: "Mid Level", 
    time: "Part-time", 
    salaryRange: "$75,000 - $100,000", 
    jobDescription: "Analyze and interpret business needs. Translate business requirements into technical specifications and work closely with the development team." 
  },
  { 
    id: 14, 
    title: "Marketing Specialist", 
    company: "Marketing Pros", 
    location: "Remote", 
    level: "Entry Level", 
    time: "Fulltime", 
    salaryRange: "$50,000 - $70,000", 
    jobDescription: "Develop and implement marketing strategies. Create content and manage campaigns across various marketing channels." 
  },
  { 
    id: 15, 
    title: "Mobile App Developer", 
    company: "AppWorks", 
    location: "Miami", 
    level: "Mid Level", 
    time: "Fulltime", 
    salaryRange: "$80,000 - $110,000", 
    jobDescription: "Design and build mobile applications for both iOS and Android. Collaborate with designers and backend developers to create seamless mobile experiences." 
  },
  { 
    id: 16, 
    title: "Graphic Designer", 
    company: "DesignCo", 
    location: "San Diego", 
    level: "Entry Level", 
    time: "Part-time", 
    salaryRange: "$40,000 - $60,000", 
    jobDescription: "Create visual content for web, print, and social media. Work with marketing and development teams to ensure the design meets project needs." 
  },
  { 
    id: 17, 
    title: "Web Developer", 
    company: "Webcraft", 
    location: "Denver", 
    level: "Mid Level", 
    time: "Fulltime", 
    salaryRange: "$80,000 - $110,000", 
    jobDescription: "Develop and maintain web applications. Work with front-end developers to ensure a seamless user experience and collaborate on backend services." 
  },
  { 
    id: 18, 
    title: "Systems Analyst", 
    company: "TechInsights", 
    location: "Remote", 
    level: "Mid Level", 
    time: "Fulltime", 
    salaryRange: "$85,000 - $115,000", 
    jobDescription: "Analyze and improve business systems and processes. Provide technical solutions that help enhance productivity and efficiency." 
  },
  { 
    id: 19, 
    title: "Cybersecurity Specialist", 
    company: "SecureTech", 
    location: "Dallas", 
    level: "Senior Level", 
    time: "Fulltime", 
    salaryRange: "$110,000 - $140,000", 
    jobDescription: "Ensure the security of systems and networks. Identify vulnerabilities, conduct penetration testing, and manage security incidents." 
  },
  { 
    id: 20, 
    title: "Network Administrator", 
    company: "NetworkX", 
    location: "New York", 
    level: "Mid Level", 
    time: "Part-time", 
    salaryRange: "$70,000 - $90,000", 
    jobDescription: "Install, configure, and manage computer networks. Troubleshoot network issues and ensure optimal network performance." 
  },
  { 
    id: 21, 
    title: "Salesforce Developer", 
    company: "CloudForce", 
    location: "Los Angeles", 
    level: "Mid Level", 
    time: "Fulltime", 
    salaryRange: "$95,000 - $120,000", 
    jobDescription: "Develop and maintain Salesforce applications. Customize and configure Salesforce to meet business requirements and enhance functionality." 
  },
  { 
    id: 22, 
    title: "Database Administrator", 
    company: "DataOps", 
    location: "Seattle", 
    level: "Senior Level", 
    time: "Fulltime", 
    salaryRange: "$110,000 - $140,000", 
    jobDescription: "Manage and maintain databases, ensuring their performance, security, and availability. Perform regular database backups and optimization." 
  },
  { 
    id: 23, 
    title: "AI Researcher", 
    company: "AI Labs", 
    location: "Boston", 
    level: "Senior Level", 
    time: "Part-time", 
    salaryRange: "$100,000 - $130,000", 
    jobDescription: "Conduct research in artificial intelligence and machine learning algorithms. Develop new methods and contribute to advancements in AI technologies." 
  },
  { 
    id: 24, 
    title: "Product Designer", 
    company: "Designify", 
    location: "Chicago", 
    level: "Mid Level", 
    time: "Fulltime", 
    salaryRange: "$85,000 - $105,000", 
    jobDescription: "Design user-centered products and features for web and mobile platforms. Collaborate with product managers and developers to create intuitive designs." 
  },
  { 
    id: 25, 
    title: "IT Support Specialist", 
    company: "TechHelp", 
    location: "Austin", 
    level: "Entry Level", 
    time: "Fulltime", 
    salaryRange: "$50,000 - $65,000", 
    jobDescription: "Provide technical support to employees and clients. Resolve hardware, software, and network issues, ensuring smooth IT operations." 
  },
  { 
    id: 26, 
    title: "HR Manager", 
    company: "People First", 
    location: "Remote", 
    level: "Senior Level", 
    time: "Fulltime", 
    salaryRange: "$95,000 - $120,000", 
    jobDescription: "Oversee HR operations, including recruitment, employee relations, and performance management. Ensure compliance with labor laws and company policies." 
  },
  { 
    id: 27, 
    title: "Content Strategist", 
    company: "ContentWorks", 
    location: "New York", 
    level: "Mid Level", 
    time: "Fulltime", 
    salaryRange: "$70,000 - $90,000", 
    jobDescription: "Develop content strategies that align with brand goals. Create engaging, SEO-friendly content for digital platforms to drive traffic and engagement." 
  },
  { 
    id: 28, 
    title: "Cloud Engineer", 
    company: "CloudNet", 
    location: "San Francisco", 
    level: "Mid Level", 
    time: "Part-time", 
    salaryRange: "$85,000 - $115,000", 
    jobDescription: "Design and implement cloud-based solutions. Work with cloud platforms such as AWS, Azure, and Google Cloud to deploy and manage applications." 
  },
  { 
    id: 29, 
    title: "Video Game Designer", 
    company: "GamerTech", 
    location: "Remote", 
    level: "Entry Level", 
    time: "Fulltime", 
    salaryRange: "$55,000 - $75,000", 
    jobDescription: "Design and develop video game levels, characters, and environments. Collaborate with developers and artists to bring creative concepts to life." 
  },
  { 
    id: 30, 
    title: "SEO Specialist", 
    company: "SearchMasters", 
    location: "Los Angeles", 
    level: "Mid Level", 
    time: "Part-time", 
    salaryRange: "$50,000 - $70,000", 
    jobDescription: "Optimize websites for search engines to improve rankings. Conduct keyword research, optimize content, and build backlinks to drive organic traffic." 
  },
  { 
    id: 31, 
    title: "Legal Counsel", 
    company: "LegalTech", 
    location: "Miami", 
    level: "Senior Level", 
    time: "Fulltime", 
    salaryRange: "$120,000 - $160,000", 
    jobDescription: "Provide legal advice and guidance on business operations. Draft, review, and negotiate contracts, ensuring compliance with laws and regulations." 
  }  
];

export default mockJobs;
