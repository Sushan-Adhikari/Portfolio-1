export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'research', label: 'Research' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

export const heroData = {
  greeting: "Hello, I'm",
  firstName: 'Sushan',
  lastName: 'Adhikari',
  subtitle: 'AI and Machine Learning Enthusiast',
  description:
    'Final-year Computer Engineering student (Kathmandu University) with research and industry experience in AI/ML, NLP, Computer Vision, and MLOps. First author on multiple publications and builder of production-focused systems for real users.',
  stats: [
    { value: '3+', label: 'Publications' },
    { value: '300K+', label: 'Users Impacted' },
    { value: '2', label: 'AI Startups' },
  ],
  actions: [
    { label: 'View CV', href: '/Sushan_Adhikari_CV.pdf', primary: true },
    { label: 'Get In Touch', href: '#contact', primary: false },
  ],
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sushan-adhikari', short: 'in' },
    { label: 'GitHub', href: 'https://github.com/sushan-adhikari', short: 'gh' },
    {
      label: 'Google Scholar',
      href: 'https://scholar.google.com/citations?user=k3_mHJUAAAAJ',
      short: 'gs',
    },
    { label: 'Medium', href: 'https://medium.com/@sushan.adhikari2060', short: 'me' },
    { label: 'Twitter', href: 'https://x.com/Sushan_ad2060', short: 'x' },
  ],
}

export const aboutData = {
  title: 'About Me',
  heading: 'Building the Future with AI and Data',
  paragraphs: [
    'I am a Computer Engineering student at Kathmandu University, with an exchange semester at IIT Palakkad. My passion lies in creating intelligent systems that make a real-world impact.',
    "As a co-founder and builder, I have developed AI-powered solutions and production systems used by real users. My work has also been recognized through major competitions and research publications.",
    'I am driven by curiosity and long-term impact, always focused on practical engineering, reliable deployment, and research-backed product thinking.',
  ],
  highlights: [
    { title: 'Education', detail: 'Kathmandu University and IIT Palakkad' },
    { title: 'Core Focus', detail: 'AI/ML, NLP, Computer Vision, MLOps' },
    { title: 'Recognition', detail: 'Hult Prize, NASA Space Apps, ICT Awards' },
  ],
  skills: [
    {
      title: 'AI and Machine Learning',
      tags: ['Python', 'PyTorch', 'Scikit-learn', 'NLP', 'Computer Vision'],
    },
    {
      title: 'Computer Vision and Inference',
      tags: ['NVIDIA DeepStream', 'Triton Inference Server', 'GStreamer', 'YOLOv8', 'OpenCV'],
    },
    {
      title: 'Cloud and DevOps',
      tags: ['AWS', 'Docker', 'Terraform', 'CI/CD', 'EC2'],
    },
    {
      title: 'Data and Backend',
      tags: ['PostgreSQL', 'FastAPI', 'Flask', 'Data Pipelines', 'REST APIs'],
    },
  ],
}

export const projectData = {
  title: 'Featured Projects',
  items: [
    {
      title: 'Cosmira: Solar System Explorer',
      description:
        'NASA Space Apps People\'s Choice winner. Interactive educational web app for space exploration and outreach.',
      tech: ['JavaScript', 'WebGL', 'CSS3'],
      image: '/img/cosmira-project.webp',
      links: [
        { label: 'Code', href: 'https://github.com/sushan-adhikari' },
        { label: 'Demo', href: 'https://github.com/sushan-adhikari' },
      ],
    },
    {
      title: 'AgniNetra: AI Fire Detection',
      description:
        'Real-time forest fire detection system using IoT sensors and computer vision for early alerts.',
      tech: ['Python', 'OpenCV', 'IoT'],
      image: '/img/agni-netra-project.jpg',
      links: [{ label: 'Code', href: 'https://github.com/sushan-adhikari' }],
    },
    {
      title: 'MastiskaTrack: AI Mental Health',
      description:
        'AI-powered mental health assessment workflow using NLP pipelines and LLM-assisted insights.',
      tech: ['NLP', 'LLMs', 'LangChain'],
      image: '/img/mastiska-project.png',
      links: [{ label: 'Code', href: 'https://github.com/sushan-adhikari' }],
    },
    {
      title: 'Insurance Fraud Detection',
      description:
        'Machine learning system for detecting fraudulent insurance claims using structured risk signals.',
      tech: ['Python', 'Scikit-learn', 'Pandas'],
      image: '/img/fraud-detection-project.webp',
      links: [{ label: 'Code', href: 'https://github.com/sushan-adhikari' }],
    },
    {
      title: 'CrowdChain: Decentralized Funding',
      description:
        'Blockchain-based crowdfunding platform with transparent smart-contract logic and on-chain accountability.',
      tech: ['Solidity', 'Web3', 'React'],
      image: '/img/crowdchain-project.jpg',
      links: [{ label: 'Code', href: 'https://github.com/sushan-adhikari' }],
    },
    {
      title: 'Pension Management Platform (Nepal)',
      description:
        'National pension platform contribution for 300k+ users with anti-spoofing liveness detection integration.',
      tech: ['Spring Boot', 'PostgreSQL', 'AWS Rekognition'],
      image: '/img/sushan-logo-512.webp',
      links: [{ label: 'Confidential', href: '#contact' }],
    },
    {
      title: 'Mercuri.world ML Recommendation',
      description:
        'ML recommendation pipeline across 50+ job types to improve employment access for people with mental illness.',
      tech: ['Python', 'Scikit-learn', 'FastAPI'],
      image: '/img/sushan-logo-512.webp',
      links: [{ label: 'Website', href: 'https://mercuri.world' }],
    },
  ],
}

export const researchData = {
  title: 'Research Publications',
  intro:
    'Paper links open directly in-browser (or the best available publication page).',
  scholarLink: 'https://scholar.google.com/citations?user=k3_mHJUAAAAJ',
  papers: [
    {
      title: 'Directional Asymmetry in Low-Resource Legal Machine Translation: A Nepali-English Case Study',
      venue: 'ICAIL 2026',
      date: 'Apr 2026',
      description:
        'First-author study on low-resource legal NLP using a parallel Nepali-English corpus (~5k sentence pairs) to evaluate directional translation bias.',
      tags: ['Legal NLP', 'Machine Translation', 'Low Resource'],
      paperLink:
        'https://scholar.google.com/scholar?q=Directional+Asymmetry+in+Low-Resource+Legal+Machine+Translation:+A+Nepali-English+Case+Study',
      extraLink: 'https://scholar.google.com/citations?user=k3_mHJUAAAAJ',
    },
    {
      title: 'Enhancing Ethical Reasoning in Tiny LLMs via Fine-Tuning and Multi-Agent Consensus',
      venue: 'KUSET Vol.18 No.2',
      date: 'Dec 2024',
      description:
        'Fine-tuned TinyLlama-1.1B on ethical dilemma data and evaluated a multi-agent consensus strategy for consistency and robustness.',
      tags: ['Tiny LLMs', 'Alignment', 'Multi-Agent'],
      paperLink:
        'https://scholar.google.com/scholar?q=Enhancing+Ethical+Reasoning+in+Tiny+LLMs+via+Fine-Tuning+and+Multi-Agent+Consensus',
      extraLink: 'https://scholar.google.com/citations?user=k3_mHJUAAAAJ',
    },
    {
      title: 'Detecting Image Forgeries and Deepfakes: A Comparative Study of CNN and Transformer Models',
      venue: 'KUSET Vol.18 No.2',
      date: 'Dec 2024',
      description:
        'Built and benchmarked a 140k+ image dataset for manipulation detection, comparing CNN and transformer baselines.',
      tags: ['Computer Vision', 'Deepfakes', 'Benchmarking'],
      paperLink:
        'https://scholar.google.com/scholar?q=Detecting+Image+Forgeries+and+Deepfakes:+A+Comparative+Study+of+CNN+and+Transformer+Models',
      extraLink: 'https://scholar.google.com/citations?user=k3_mHJUAAAAJ',
    },
    {
      title: 'RAG for Theoretical CS Education: Algorithm Analysis and Complexity Theory',
      venue: 'Under Review: USC 2025',
      date: 'Ongoing',
      description:
        'AlgoRAG combines retrieval and LLM reasoning for theoretical CS tutoring with proof-aware retrieval.',
      tags: ['RAG', 'CS Education', 'Complexity Theory'],
      paperLink:
        'https://scholar.google.com/scholar?q=RAG+for+Theoretical+CS+Education+Algorithm+Analysis+Complexity+Theory',
      extraLink: 'https://github.com/Sushan-Adhikari/AlgoRAG',
    },
    {
      title: 'Physics-Informed Data Augmentation for Sediment Concentration Prediction in Himalayan Rivers',
      venue: 'Accepted: LEC / NepJOL',
      date: '2026',
      description:
        'Used physics-aware augmentation strategies to improve robustness in data-scarce Himalayan monitoring settings.',
      tags: ['Physics-Informed ML', 'Hydrology', 'Data Augmentation'],
      paperLink:
        'https://scholar.google.com/scholar?q=Physics-Informed+Data+Augmentation+for+Sediment+Concentration+Prediction+in+Himalayan+Rivers',
      extraLink: 'https://scholar.google.com/citations?user=k3_mHJUAAAAJ',
    },
    {
      title: 'Automated Mathematical Animation Generation: Dataset Requirements and Validation Gaps',
      venue: 'Ongoing',
      date: '2026',
      description:
        'Investigates data requirements for LLM-generated Manim outputs with a 500+ snippet dataset.',
      tags: ['LLM', 'Math Animation', 'STEM Education'],
      paperLink:
        'https://scholar.google.com/scholar?q=Automated+Mathematical+Animation+Generation+Dataset+Requirements+and+Validation+Gaps',
      extraLink: 'https://github.com/Sushan-Adhikari/Manim_Visualize',
    },
    {
      title: 'Explainability Methods for Hybrid CNN-Transformer Document Layout Analysis',
      venue: 'Ongoing',
      date: '2026',
      description:
        'Focuses on XAI methods for document intelligence to improve transparency, debugging, and trust.',
      tags: ['XAI', 'Document AI', 'Hybrid Models'],
      paperLink:
        'https://scholar.google.com/scholar?q=Explainability+Methods+for+Hybrid+CNN-Transformer+Document+Layout+Analysis',
      extraLink: 'https://github.com/Sushan-Adhikari/XAI_DLA',
    },
  ],
}

export const startupData = {
  title: 'Startups',
  items: [
    {
      name: 'Nurvexa',
      tagline: 'RAG-powered nursing exam preparation platform',
      status: 'Growing',
      description:
        'Co-founded Nurvexa to help nursing students prepare for licensing exams with adaptive question generation and personalized study plans.',
      metrics: [
        { value: 'RAG', label: 'Core Engine' },
        { value: 'PCL', label: 'Exam Focus' },
        { value: '2025', label: 'Founded' },
      ],
      tech: ['NLP', 'RAG', 'Data-Driven Learning'],
      link: 'https://nurvexalabs.com',
    },
    {
      name: 'PrepGraduate',
      tagline: 'AI-powered GRE preparation and score analytics',
      status: 'In Development',
      description:
        'Co-founded PrepGraduate to deliver adaptive GRE practice, full-length mock testing, and actionable score insights.',
      metrics: [
        { value: 'GRE', label: 'Target Exam' },
        { value: 'AI', label: 'Adaptive Practice' },
        { value: '2026', label: 'Founded' },
      ],
      tech: ['LLMs', 'Assessment Analytics', 'EdTech'],
      link: 'https://prepgraduate.com',
    },
  ],
}

export const experienceData = {
  title: 'Experience and Education',
  timeline: [
    {
      date: 'Jan 2026 - Apr 2026',
      role: 'Junior MLOps Developer',
      org: 'KyraWorks',
      summary:
        'Built CI/CD pipelines using Docker, EC2, AWS, and Terraform for automated model deployment workflows.',
    },
    {
      date: 'Oct 2025 - Jan 2026',
      role: 'Computer Vision Intern',
      org: 'KyraWorks',
      summary:
        'Deployed and optimized 5+ models on Triton Inference Server and benchmarked DeepStream plus GStreamer for real-time multi-camera processing.',
    },
    {
      date: 'Jan 2025 - Present',
      role: 'AI and Data Engineer (Volunteer)',
      org: 'Mercuri.world',
      summary:
        'Built an ML recommendation pipeline across 50+ job categories in collaboration with 150+ global volunteers.',
    },
    {
      date: 'Jun 2025 - Oct 2025',
      role: 'Full-Stack Development Intern',
      org: 'National Pension Management System, Nepal',
      summary:
        'Contributed to a national pension platform (300k+ users), integrated anti-spoofing liveness detection, and supported DB schema design.',
    },
    {
      date: 'Jan 2022 - Feb 2026',
      role: 'B.Eng. Computer Engineering',
      org: 'Kathmandu University, School of Engineering',
      summary:
        'CGPA: 3.88/4.0 (through 7th semester). Coursework includes Computer Vision, Databases, Computer Architecture, and Statistics.',
    },
    {
      date: 'Jan 2025 - May 2025',
      role: 'Exchange Semester, B.Tech CSE',
      org: 'IIT Palakkad',
      summary:
        'Completed coursework in Introduction to AI, Linear Algebra, Compiler Design, and Graph Theory and Combinatorics.',
    },
  ],
}

export const contactData = {
  title: "Let's Connect",
  lead:
    'I am always open to discussing opportunities, research collaborations, or impactful engineering work. If you have something in mind, let us talk.',
  methods: [
    { icon: '📍', label: 'Location', value: 'Dhulikhel, Kavre, Nepal' },
    { icon: '✉️', label: 'Email', value: 'sushan.adhikari2060@gmail.com' },
    { icon: '📞', label: 'Phone', value: '+977 9810538507' },
    { icon: '🗣️', label: 'Languages', value: 'English, Nepali, Hindi' },
  ],
  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sushan-adhikari', short: 'in' },
    { label: 'GitHub', href: 'https://github.com/sushan-adhikari', short: 'gh' },
    { label: 'Medium', href: 'https://medium.com/@sushan.adhikari2060', short: 'me' },
    { label: 'Twitter', href: 'https://x.com/Sushan_ad2060', short: 'x' },
    { label: 'Facebook', href: 'https://www.facebook.com/sushan.ad/', short: 'fb' },
    { label: 'Instagram', href: 'https://www.instagram.com/sushan.ad', short: 'ig' },
  ],
}

export const certificationData = {
  title: 'Certifications',
  items: [
    {
      icon: '🤖',
      title: 'AI and Data Engineer Certification',
      issuer: 'micro1',
      date: '2025',
      description:
        'Validated expertise in core principles, tools, and best practices for building modern AI and data-driven systems.',
    },
    {
      icon: '🧠',
      title: 'Deep Learning Specializations',
      issuer: 'NVIDIA and DataCamp',
      date: '2025',
      description:
        'Completed Fundamentals of Deep Learning and Deep Learning with PyTorch with hands-on neural network implementation.',
    },
    {
      icon: '🗣️',
      title: 'Understanding Embeddings for NLP',
      issuer: 'OpenHPI',
      date: '2025',
      description:
        'Built practical understanding of vector representations, semantic similarity, and embedding workflows for NLP tasks.',
    },
    {
      icon: '⚙️',
      title: 'Machine Learning Foundations',
      issuer: 'DataCamp and Udemy',
      date: '2025',
      description:
        'Covered supervised and unsupervised learning, model evaluation, and practical deployment-oriented ML fundamentals.',
    },
    {
      icon: '🌬️',
      title: 'Apache Airflow Certifications',
      issuer: 'Astronomer',
      date: '2024',
      description:
        'Certified in Airflow Fundamentals and DAG Authoring for production-grade data orchestration workflows.',
    },
    {
      icon: '📘',
      title: 'AI Fundamentals and Data Literacy',
      issuer: 'University of Helsinki and DataCamp',
      date: '2024-2025',
      description:
        'Strengthened foundations in AI concepts, responsible usage, and data literacy for applied engineering contexts.',
    },
  ],
}

export const achievementData = {
  title: 'Awards and Achievements',
  items: [
    {
      icon: '🏆',
      title: 'Hult Prize Campus Winner',
      event: 'Kathmandu University',
      description:
        'Represented Nepal at the Hult Prize Global Summit in Bangkok with an AI-driven aquaculture innovation.',
    },
    {
      icon: '🚀',
      title: 'NASA Space Apps People’s Choice Winner',
      event: '2024',
      description:
        'Recognized for Cosmira, an interactive educational web app built for science outreach and engagement.',
    },
    {
      icon: '🥇',
      title: 'ICT Awards 2024 Finalist',
      event: 'Rising Star Innovation Category',
      description:
        'Selected as finalist for impactful technical innovation and applied AI product execution.',
    },
    {
      icon: '💡',
      title: 'AI Crusade 2023 Winner',
      event: 'Health Track',
      description:
        'Won health track with MastiskaTrack, an AI-assisted mental health assessment solution.',
    },
    {
      icon: '🎓',
      title: 'Mahatma Gandhi Scholarship',
      event: 'Embassy of India, Nepal',
      description:
        'Awarded for academic excellence and strong merit performance during earlier studies.',
    },
    {
      icon: '📐',
      title: 'KU Integration Bee Semi-Finalist',
      event: 'Mathematics Competition',
      description:
        'Reached semi-finals in Nepal’s early integration-bee competitions, demonstrating strong mathematical fluency.',
    },
  ],
  featured: [
    { name: 'NASA Space Apps', image: '/img/nasa.jpeg' },
    { name: 'Hult Prize', image: '/img/hult.png' },
    { name: 'Kantipur Media', image: '/img/kantipur.jpeg' },
    { name: 'TechPana', image: '/img/techpana.png' },
    { name: 'Kathmandu University', image: '/img/kulogo.png' },
  ],
}

export const testimonialData = {
  title: 'Mentor Testimonials',
  items: [
    {
      quote:
        'As a guide and mentor for the Dr.Fish project, I witnessed Sushan’s leadership and technical clarity. He represented KU and Nepal at the Hult Prize Global Summit in Bangkok with confidence and maturity.',
      author: 'Prof. Dr. Gajendra Sharma',
      role: 'Professor, Kathmandu University',
    },
    {
      quote:
        'As his research supervisor, I was consistently impressed by his command of technical depth and his ability to apply theory into practical, original work.',
      author: 'Dr. Rajani Chulyadyo',
      role: 'Assistant Professor, Kathmandu University',
    },
    {
      quote:
        'During Introduction to AI, Sushan showed outstanding conceptual understanding and a proactive, disciplined approach to building solutions.',
      author: 'Dr. CNK',
      role: 'Associate Professor, IIT Palakkad',
    },
    {
      quote:
        'Under my guidance in Compiler Design, he built a working simple compiler. His ability to execute difficult systems from scratch is commendable.',
      author: 'Dr. Unnikrishnan Cheramangalath',
      role: 'Assistant Professor, IIT Palakkad',
    },
    {
      quote:
        'His contribution to the national pension platform was practical and production-minded. The liveness detection integration reflected strong engineering judgment.',
      author: 'Gopal Khadka',
      role: 'National Pension Management System, Nepal',
    },
  ],
}

export const blogData = {
  title: 'Blog',
  items: [
    {
      title: 'Building End-to-End ML Pipelines',
      excerpt:
        'A practical deep-dive into robust machine learning workflows, from data ingestion to model deployment and monitoring.',
      image: '/img/get_start_ML.jpeg',
      category: 'Machine Learning',
      date: 'March 2024',
      readTime: '8 min read',
      href: 'https://medium.com/@sushan.adhikari2060',
    },
    {
      title: 'The Art of Fine-Tuning LLMs',
      excerpt:
        'Lessons from adapting large language models for task-specific outcomes, grounded in low-resource legal NLP work.',
      image: '/img/modern_web.jpeg',
      category: 'NLP',
      date: 'February 2024',
      readTime: '12 min read',
      href: 'https://medium.com/@sushan.adhikari2060',
    },
    {
      title: 'DevOps for Data Scientists',
      excerpt:
        'How Docker, Terraform, and CI/CD can accelerate reproducibility, deployment velocity, and model lifecycle quality.',
      image: '/img/docker.png',
      category: 'DevOps',
      date: 'January 2024',
      readTime: '10 min read',
      href: 'https://medium.com/@sushan.adhikari2060',
    },
  ],
}
