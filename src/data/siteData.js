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
  typewriterTexts: [
    'Computer Engineering Student',
    'AI and Machine Learning Enthusiast',
    'Research Enthusiast',
  ],
  description:
    'Final-year Computer Engineering student (Kathmandu University) with research and industry experience in AI/ML, NLP, Computer Vision, and MLOps. First author on multiple publications and builder of production-focused systems for real users.',
  stats: [
    { value: '3+', label: 'Publications' },
    { value: '300K+', label: 'Users Impacted' },
    { value: '2', label: 'AI Startups' },
  ],
  actions: [
    {
      label: 'View CV',
      href: '/Sushan_Adhikari_CV.pdf',
      iconClass: 'fas fa-file-lines',
      primary: true,
      external: true,
    },
    {
      label: 'Get In Touch',
      href: '#contact',
      iconClass: 'fas fa-arrow-right',
      primary: false,
      external: false,
    },
  ],
  helperDownload: {
    label: 'Download CV',
    href: '/Sushan_Adhikari_CV.pdf',
    iconClass: 'fas fa-download',
    download: true,
  },
  socials: [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sushan-adhikari',
      iconClass: 'fab fa-linkedin-in',
    },
    { label: 'GitHub', href: 'https://github.com/sushan-adhikari', iconClass: 'fab fa-github' },
    {
      label: 'Google Scholar',
      href: 'https://scholar.google.com/citations?user=k3_mHJUAAAAJ',
      iconClass: 'fas fa-graduation-cap',
    },
    {
      label: 'Medium',
      href: 'https://medium.com/@sushan.adhikari2060',
      iconClass: 'fab fa-medium',
    },
    { label: 'Twitter', href: 'https://x.com/Sushan_ad2060', iconClass: 'fab fa-twitter' },
  ],
}

export const aboutData = {
  title: 'About Me',
  heading: 'From Research to Production AI Systems',
  paragraphs: [
    'I am a final-year Computer Engineering student at Kathmandu University, with an exchange semester at IIT Palakkad, building AI systems that balance research depth with practical deployment.',
    'My work spans ML/MLOps, NLP, Computer Vision, LLMs, and RAG, with first-author publications (ICAIL 2026, KUSET) focused on low-resource language technology, explainability, and rigorous evaluation.',
    'I have contributed to production-scale platforms including Nepal’s national pension system (300k+ users), and as a co-founder I focus on measurable impact, reliable engineering, and systems that work beyond demos.',
  ],
  highlights: [
    {
      iconClass: 'fas fa-graduation-cap',
      title: 'Education',
      detail: 'Kathmandu University (B.Eng.) + IIT Palakkad Exchange',
    },
    {
      iconClass: 'fas fa-code',
      title: 'Core Focus',
      detail: 'AI/ML, NLP, Computer Vision, and MLOps',
    },
    {
      iconClass: 'fas fa-award',
      title: 'Recognition',
      detail: 'ICAIL / KUSET Publications, NASA Space Apps, Hult Prize',
    },
  ],
  skillsTitle: 'Stack Used Till Date',
  skills: [
    {
      title: 'AI and Machine Learning',
      iconClass: 'fas fa-brain',
      tags: ['Python', 'PyTorch', 'Scikit-learn', 'NLP', 'Computer Vision', 'Django', 'React'],
    },
    {
      title: 'Computer Vision and Inference',
      iconClass: 'fas fa-video',
      tags: ['NVIDIA DeepStream', 'Triton Inference Server', 'GStreamer', 'YOLOv8', 'OpenCV'],
    },
    {
      title: 'Data and Backend',
      iconClass: 'fas fa-database',
      tags: ['FastAPI', 'Flask', 'PostgreSQL', 'SQL', 'REST APIs', 'Data Pipelines'],
    },
    {
      title: 'Cloud and DevOps',
      iconClass: 'fas fa-cloud',
      tags: ['AWS', 'Docker', 'Terraform', 'CI/CD', 'EC2', 'Airflow', 'Databricks', 'PySpark'],
    },
  ],
  techShowcase: [
    { name: 'Python', icon: 'python', color: '#3776AB', logo: '/img/tech/python.png' },
    { name: 'Django', icon: 'django', color: '#0C4B33', logo: '/img/tech/django.png' },
    { name: 'React', icon: 'react', color: '#61DAFB', logo: '/img/tech/react.png' },
    { name: 'PyTorch', icon: 'pytorch', color: '#EE4C2C', logo: '/img/tech/pytorch.png' },
    { name: 'Scikit-learn', icon: 'scikitlearn', color: '#F7931E', logo: '/img/tech/scikit.png' },
    { name: 'Computer Vision', icon: 'vision', color: '#0284C7', logo: '/img/tech/computervision.png' },
    { name: 'NVIDIA DeepStream', icon: 'nvidia', color: '#76B900', logo: '/img/tech/deepstream.png' },
    { name: 'Triton Inference', icon: 'triton', color: '#475569', logo: '/img/tech/triton.png' },
    { name: 'GStreamer', icon: 'gstreamer', color: '#1F2937', logo: '/img/tech/gstreamer.png' },
    { name: 'YOLOv8', icon: 'yolo', color: '#7C3AED', logo: '/img/tech/yolo.png' },
    { name: 'OpenCV', icon: 'opencv', color: '#5C3EE8', logo: '/img/tech/opencv.png' },
    { name: 'FastAPI', icon: 'fastapi', color: '#009688', logo: '/img/tech/fastapi.svg' },
    { name: 'Flask', icon: 'flask', color: '#111827', logo: '/img/tech/flask.webp' },
    { name: 'PostgreSQL', icon: 'postgresql', color: '#336791', logo: '/img/tech/postgres.png' },
    { name: 'SQL', icon: 'sql', color: '#2563EB', logo: '/img/tech/sql.png' },
    { name: 'REST APIs', icon: 'rest', color: '#0F172A', logo: '/img/tech/restapi.webp' },
    { name: 'Data Pipelines', icon: 'pipeline', color: '#0369A1', logo: '/img/tech/datapipelines.png' },
    { name: 'Docker', icon: 'docker', color: '#2496ED', logo: '/img/tech/docker.webp' },
    { name: 'AWS', icon: 'aws', color: '#FF9900', logo: '/img/tech/aws.png' },
    { name: 'EC2', icon: 'ec2', color: '#334155', logo: '/img/tech/ec2.png' },
    { name: 'Terraform', icon: 'terraform', color: '#7B42BC' },
    { name: 'Airflow', icon: 'airflow', color: '#017CEE', logo: '/img/tech/airflow.png' },
    { name: 'Databricks', icon: 'databricks', color: '#FF3621', logo: '/img/tech/databricks.png' },
    { name: 'PySpark', icon: 'spark', color: '#E25A1C', logo: '/img/tech/pyspark.png' },
    { name: 'CI/CD', icon: 'cicd', color: '#1D4ED8' },
    { name: 'Git', icon: 'git', color: '#F05032' },
  ],
}

export const projectData = {
  title: 'Featured Projects',
  items: [
    {
      title: 'Cosmira: Solar System Explorer',
      description:
        "NASA Space Apps People's Choice winner. Interactive educational web app for space exploration and outreach.",
      tech: ['JavaScript', 'WebGL', 'CSS3'],
      image: '/img/cosmira-project.webp',
      alt: 'Cosmira project preview',
      links: [
        {
          label: 'Code',
          href: 'https://github.com/Sushan-Adhikari/Cosmira',
          iconClass: 'fab fa-github',
          external: true,
        },
      ],
    },
    {
      title: 'AgniNetra: AI Fire Detection',
      description:
        'Real-time forest fire detection system using IoT sensors and computer vision for early alerts.',
      tech: ['Python', 'OpenCV', 'IoT'],
      image: '/img/agni-netra-project.jpg',
      alt: 'AgniNetra project preview',
      links: [
        {
          label: 'Code',
          href: 'https://github.com/Sushan-Adhikari/Agni-Netra',
          iconClass: 'fab fa-github',
          external: true,
        },
      ],
    },
    {
      title: 'MastiskaTrack: AI Mental Health',
      description:
        'AI-powered mental health assessment workflow using NLP pipelines and LLM-assisted insights.',
      tech: ['NLP', 'LLMs', 'LangChain'],
      image: '/img/mastiska-project.png',
      alt: 'MastiskaTrack project preview',
      links: [
        {
          label: 'Code',
          href: 'https://github.com/Sushan-Adhikari/MastiskaTrack',
          iconClass: 'fab fa-github',
          external: true,
        },
      ],
    },
    {
      title: 'Insurance Fraud Detection',
      description:
        'Machine learning system for detecting fraudulent insurance claims using structured risk signals. Case data and implementation are currently under investigation and not publicly shareable.',
      tech: ['Python', 'Scikit-learn', 'Pandas'],
      image: '/img/fraud-detection-project.webp',
      alt: 'Insurance fraud project preview',
      links: [
        {
          label: 'Under Investigation',
          href: '#contact',
          iconClass: 'fas fa-lock',
          external: false,
        },
      ],
    },
    {
      title: 'CrowdChain: Decentralized Funding',
      description:
        'Blockchain-based crowdfunding platform with transparent smart-contract logic and on-chain accountability.',
      tech: ['Solidity', 'Web3', 'React'],
      image: '/img/crowdchain-project.jpg',
      alt: 'CrowdChain project preview',
      links: [
        {
          label: 'Code',
          href: 'https://github.com/Sushan-Adhikari/CrowdFunding-Blockchain',
          iconClass: 'fab fa-github',
          external: true,
        },
      ],
    },
    {
      title: 'Pension Management Platform (Nepal)',
      description:
        'Contributed to Nepal’s national pension platform (300k+ users) with anti-spoofing liveness detection integration. Public rollout and coverage available in official launch links.',
      tech: ['Spring Boot', 'PostgreSQL', 'AWS Rekognition'],
      image: '/img/sushan-logo-512.webp',
      alt: 'Pension management platform logo',
      links: [
        {
          label: 'Official System',
          href: 'https://ipmsv2.fcgo.gov.np/#/login',
          iconClass: 'fas fa-external-link-alt',
          external: true,
        },
        {
          label: 'Launch Coverage',
          href: 'https://www.gadgetbytenepal.com/nepal-e-pension-verification-system/',
          iconClass: 'far fa-newspaper',
          external: true,
        },
        {
          label: 'TechPana Coverage',
          href: 'https://techpana.com/2026/156133/government-launches-e-pension-system-allowing-retirees-to-renew-pensions-digitally',
          iconClass: 'far fa-newspaper',
          external: true,
        },
      ],
    },
    {
      title: 'Mercuri.world ML Recommendation',
      description:
        'Built ML recommendation pipeline across 50+ job types to improve employment access for people with mental illness.',
      tech: ['Python', 'Scikit-learn', 'FastAPI'],
      image: '/img/sushan-logo-512.webp',
      alt: 'Mercuri recommendation pipeline logo',
      links: [
        {
          label: 'Website',
          href: 'https://mercuri.world/our-team',
          iconClass: 'fas fa-external-link-alt',
          external: true,
        },
      ],
    },
  ],
}

export const researchData = {
  title: 'Research Publications',
  intro: 'Every paper includes direct publication, code, and proof links so you can verify everything in one click.',
  scholarLink: 'https://scholar.google.com/citations?user=k3_mHJUAAAAJ',
  papers: [
    {
      iconClass: 'fas fa-language',
      title: 'Directional Asymmetry in Low-Resource Legal Machine Translation: A Nepali-English Case Study',
      venue: 'ICAIL 2026',
      date: 'Apr 2026',
      descriptionLines: [
        'Analyzes direction-dependent performance gaps in Nepali-English legal translation under low-resource constraints.',
        'Shows where targeted corpus design improves legal MT reliability across source-to-target directions.',
      ],
      tags: ['Legal NLP', 'Machine Translation', 'Low Resource'],
      links: [
        {
          label: 'Paper (ICAIL Draft)',
          href: 'https://drive.google.com/file/d/1MkccE8bzyDjFkG5u_SOpqCuFuD6ST-9f/view?usp=sharing',
          iconClass: 'fas fa-file-pdf',
        },
        {
          label: 'Code',
          href: 'https://github.com/Sushan-Adhikari/LegalNLP',
          iconClass: 'fab fa-github',
        },
        {
          label: 'Acceptance Email',
          href: 'https://drive.google.com/file/d/1DfY9lvDPHF1mADP0wmQ4X4L4BdBLcqU6/view?usp=sharing',
          iconClass: 'fas fa-envelope-open-text',
        },
      ],
    },
    {
      iconClass: 'fas fa-brain',
      title: 'Enhancing Ethical Reasoning in Tiny LLMs via Fine-Tuning and Multi-Agent Consensus',
      venue: 'KUSET Vol.18 No.2',
      date: 'Dec 2024',
      descriptionLines: [
        'Fine-tunes TinyLlama-1.1B on ethical dilemma datasets to improve decision consistency in constrained models.',
        'Evaluates a multi-agent consensus pipeline to reduce failure cases and improve reasoning robustness.',
      ],
      tags: ['Tiny LLMs', 'Alignment', 'Multi-Agent'],
      links: [
        {
          label: 'Paper',
          href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=k3_mHJUAAAAJ&citation_for_view=k3_mHJUAAAAJ:u-x6o8ySG0sC',
          iconClass: 'fas fa-file-pdf',
        },
        {
          label: 'Code',
          href: 'https://github.com/sunidhisharma03/EthicsAIReasoning/tree/main',
          iconClass: 'fab fa-github',
        },
        {
          label: 'NCCI Certificate',
          href: 'https://drive.google.com/file/d/15rueRfzrtcLR-kugzBNPw_zBPYjVqSMd/view?usp=sharing',
          iconClass: 'fas fa-certificate',
        },
      ],
    },
    {
      iconClass: 'fas fa-camera-retro',
      title: 'Detecting Image Forgeries and Deepfakes: A Comparative Study of CNN and Transformer Models',
      venue: 'KUSET Vol.18 No.2',
      date: 'Dec 2024',
      descriptionLines: [
        'Compares CNN and transformer architectures for large-scale deepfake and image manipulation detection tasks.',
        'Benchmarks performance trends over diverse forgery patterns to identify practical deployment trade-offs.',
      ],
      tags: ['Computer Vision', 'Deepfakes', 'Benchmarking'],
      links: [
        {
          label: 'Paper',
          href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=k3_mHJUAAAAJ&citation_for_view=k3_mHJUAAAAJ:u5HHmVD_uO8C',
          iconClass: 'fas fa-file-pdf',
        },
        {
          label: 'Scholar Profile',
          href: 'https://scholar.google.com/citations?user=k3_mHJUAAAAJ',
          iconClass: 'fas fa-graduation-cap',
        },
      ],
    },
    {
      iconClass: 'fas fa-laptop-code',
      title: 'RAG for Theoretical CS Education: Algorithm Analysis and Complexity Theory',
      venue: 'Under Review: USC 2025',
      date: '2025',
      descriptionLines: [
        'Builds a retrieval-augmented tutoring workflow for algorithm analysis and complexity-theory learning support.',
        'Combines proof-aware retrieval with LLM reasoning to improve conceptual clarity for advanced CS learners.',
      ],
      tags: ['RAG', 'CS Education', 'Complexity Theory'],
      links: [
        {
          label: 'Paper Draft',
          href: 'https://drive.google.com/file/d/1PzLQ2uz0mp4CcIFcs-d7fOTDCbnhdPM0/view?usp=sharing',
          iconClass: 'fas fa-file-pdf',
        },
        {
          label: 'Code',
          href: 'https://github.com/Sushan-Adhikari/AlgoRAG',
          iconClass: 'fab fa-github',
        },
        {
          label: 'USC Certificate',
          href: 'https://drive.google.com/file/d/1NvV3pJRLlzTDMLIi3J9V_wRCC8tgtZ3I/view?usp=sharing',
          iconClass: 'fas fa-certificate',
        },
      ],
    },
    {
      iconClass: 'fas fa-water',
      title: 'Physics-Informed Data Augmentation for Sediment Concentration Prediction in Himalayan Rivers',
      venue: 'Accepted: LEC / NepJOL',
      date: '2026',
      descriptionLines: [
        'Applies physics-informed augmentation to improve sediment concentration prediction in sparse Himalayan river datasets.',
        'Improves robustness of river-monitoring models under high seasonal variance and limited labeled samples.',
      ],
      tags: ['Physics-Informed ML', 'Hydrology', 'Data Augmentation'],
      links: [
        {
          label: 'Paper Draft',
          href: 'https://docs.google.com/document/d/1-Y8NIX_tfgZEMgOJUk8JeDrtiIX0CO8g/edit?usp=sharing&ouid=105878497156932390002&rtpof=true&sd=true',
          iconClass: 'fas fa-file-alt',
        },
        {
          label: 'LEC Certificate',
          href: 'https://drive.google.com/file/d/1UiP0nTMavLSghqCXFoLWrUUs_bGGbXAy/view?usp=sharing',
          iconClass: 'fas fa-certificate',
        },
      ],
    },
    {
      iconClass: 'fas fa-chart-line',
      title: 'Automated Mathematical Animation Generation: Dataset Requirements and Validation Gaps',
      venue: 'Submitted to Elsevier',
      date: '2026',
      descriptionLines: [
        'Studies dataset requirements for reliable LLM-generated Manim outputs in math visualization workflows.',
        'Identifies validation gaps that affect reproducibility, clarity, and pedagogical accuracy in generated animations.',
      ],
      tags: ['LLM', 'Math Animation', 'STEM Education'],
      links: [
        {
          label: 'Paper Draft',
          href: 'https://drive.google.com/file/d/1erNUVMQRdWirFeMsn4BSBz1HChWC7hR0/view?usp=sharing',
          iconClass: 'fas fa-file-pdf',
        },
        {
          label: 'Code',
          href: 'https://github.com/Sushan-Adhikari/Manim_Visualize',
          iconClass: 'fab fa-github',
        },
      ],
    },
    {
      iconClass: 'fas fa-microscope',
      title: 'Explainability Methods for Hybrid CNN-Transformer Document Layout Analysis',
      venue: 'Ongoing',
      date: '2026',
      descriptionLines: [
        'Builds explainability workflows for hybrid CNN-transformer models used in document layout understanding.',
        'Targets interpretable debugging signals that improve trust, error analysis, and model governance.',
      ],
      tags: ['XAI', 'Document AI', 'Hybrid Models'],
      links: [
        {
          label: 'Paper Draft',
          href: 'https://drive.google.com/file/d/1Y5WzoYZoxCWUdjOAoz13yVAoHMdkBSP0/view?usp=sharing',
          iconClass: 'fas fa-file-pdf',
        },
        {
          label: 'Code',
          href: 'https://github.com/Sushan-Adhikari/XAI_DLA',
          iconClass: 'fab fa-github',
        },
      ],
    },
  ],
}

export const startupData = {
  title: 'Startups',
  items: [
    {
      iconClass: 'fas fa-user-nurse',
      name: 'Nurvexa',
      tagline: 'RAG-powered nursing exam preparation platform',
      status: 'Growing',
      statusClass: 'active',
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
      iconClass: 'fas fa-graduation-cap',
      name: 'PrepGraduate',
      tagline: 'AI-powered GRE preparation and score analytics',
      status: 'In Development',
      statusClass: 'concept',
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
      iconClass: 'fas fa-cogs',
      date: 'Jan 2026 - Apr 2026',
      role: 'Junior MLOps Developer',
      org: 'KyraWorks',
      summary:
        'Built CI/CD pipelines using Docker, EC2, AWS, and Terraform for automated model deployment workflows.',
      links: [
        {
          label: 'Experience Certificate',
          href: 'https://drive.google.com/file/d/1A-pLjKd0AHTz5Sgy_PZrN3HgzKiDbndo/view?usp=sharing',
          iconClass: 'fas fa-certificate',
        },
      ],
    },
    {
      iconClass: 'fas fa-video',
      date: 'Oct 2025 - Jan 2026',
      role: 'Computer Vision Intern',
      org: 'KyraWorks',
      summary:
        'Deployed and optimized 5+ models on Triton Inference Server and benchmarked DeepStream plus GStreamer for real-time multi-camera processing.',
      links: [
        {
          label: 'Internship Certificate',
          href: 'https://drive.google.com/file/d/1YqyI-eCXOgj6hBRbKYM6eQg9qQIcY4b2/view?usp=sharing',
          iconClass: 'fas fa-certificate',
        },
      ],
    },
    {
      iconClass: 'fas fa-briefcase',
      date: 'Jan 2025 - Present',
      role: 'AI and Data Engineer (Volunteer)',
      org: 'Mercuri.world',
      summary:
        'Built an ML recommendation pipeline across 50+ job categories in collaboration with 150+ global volunteers.',
      orgLink: 'https://mercuri.world/our-team',
      links: [
        {
          label: 'Team Page',
          href: 'https://mercuri.world/our-team',
          iconClass: 'fas fa-external-link-alt',
        },
      ],
    },
    {
      iconClass: 'fas fa-code',
      date: 'Jun 2025 - Oct 2025',
      role: 'Full-Stack Development Intern',
      org: 'National Pension Management System, Nepal',
      summary:
        'Contributed to a national pension platform (300k+ users), integrated anti-spoofing liveness detection, and supported DB schema design.',
      links: [
        {
          label: 'Internship Certificate',
          href: 'https://drive.google.com/file/d/1RWUujbH-p6eKUHhzRxmBQR73cBjpywHx/view?usp=sharing',
          iconClass: 'fas fa-certificate',
        },
        {
          label: 'Official System',
          href: 'https://ipmsv2.fcgo.gov.np/#/login',
          iconClass: 'fas fa-external-link-alt',
        },
      ],
    },
    {
      iconClass: 'fas fa-university',
      date: 'Jan 2022 - Feb 2026',
      role: 'B.Eng. Computer Engineering',
      org: 'Kathmandu University, School of Engineering',
      summary:
        'CGPA: 3.88/4.0 (through 7th semester). Coursework includes Computer Vision, Databases, Computer Architecture, and Statistics.',
      links: [
        {
          label: 'KU Transcript (to 6th Sem)',
          href: 'https://drive.google.com/file/d/1fpw9rycXmfW-9w70U97yQCz2Zhl9tAK_/view?usp=sharing',
          iconClass: 'fas fa-file-lines',
        },
      ],
    },
    {
      iconClass: 'fas fa-graduation-cap',
      date: 'Jan 2025 - May 2025',
      role: 'Exchange Semester, B.Tech CSE',
      org: 'IIT Palakkad',
      summary:
        'Completed coursework in Introduction to AI, Linear Algebra, Compiler Design, and Graph Theory and Combinatorics.',
      links: [
        {
          label: 'IIT Transcript',
          href: 'https://drive.google.com/file/d/17qqqIROdwR9SdncBAyxqBc1G1QdUAusK/view?usp=sharing',
          iconClass: 'fas fa-file-lines',
        },
      ],
    },
  ],
}

export const certificationData = {
  title: 'Certifications',
  items: [
    {
      iconClass: 'fas fa-robot',
      title: 'Coursera Verified Credential',
      issuer: 'Coursera',
      date: '2026',
      description:
        'Verified online credential covering applied AI and machine-learning fundamentals in production-oriented workflows.',
      links: [
        {
          label: 'Verify Certificate',
          href: 'https://www.coursera.org/account/accomplishments/verify/Y1R76JCCK2Q7',
          iconClass: 'fas fa-certificate',
        },
      ],
    },
    {
      iconClass: 'fas fa-chart-line',
      title: 'DataCamp Certifications',
      issuer: 'DataCamp',
      date: '2025',
      description:
        'Completed multiple DataCamp tracks in ML and data tooling, covering supervised/unsupervised workflows and practical implementation.',
      links: [
        {
          label: 'View Certificates',
          href: 'https://www.linkedin.com/in/sushan-adhikari/overlay/Certifications/1525981997/image-list/?profileId=ACoAADPDccEBMsWjTjMpSS-QYo1qudwj7M3aGOk',
          iconClass: 'fab fa-linkedin',
        },
      ],
    },
    {
      iconClass: 'fas fa-language',
      title: 'Embeddings Certificate',
      issuer: 'LinkedIn Credential Archive',
      date: '2025',
      description:
        'Certificate record for embeddings-focused NLP learning, including semantic representations and retrieval use cases.',
      links: [
        {
          label: 'View Certificate',
          href: 'https://www.linkedin.com/in/sushan-adhikari/overlay/Certifications/413303733/treasury/?profileId=ACoAADPDccEBMsWjTjMpSS-QYo1qudwj7M3aGOk',
          iconClass: 'fas fa-certificate',
        },
      ],
    },
  ],
}

export const achievementData = {
  title: 'Awards and Achievements',
  items: [
    {
      iconClass: 'fas fa-trophy',
      title: 'Hult Prize Campus Winner',
      event: 'Kathmandu University',
      description:
        'Represented Nepal at the Hult Prize Global Summit in Bangkok with an AI-driven aquaculture innovation.',
    },
    {
      iconClass: 'fas fa-rocket',
      title: 'NASA Space Apps People’s Choice Winner',
      event: '2024',
      description:
        'Recognized for Cosmira, an interactive educational web app built for science outreach and engagement.',
      links: [
        {
          label: 'Winner Certificate',
          href: 'https://drive.google.com/file/d/1_26SMajCbQyXCyQlm-jzeug-TPOgCOm2/view?usp=sharing',
          iconClass: 'fas fa-certificate',
        },
      ],
    },
    {
      iconClass: 'fas fa-medal',
      title: 'ICT Awards 2024 Finalist',
      event: 'Rising Star Innovation Category',
      description:
        'Selected as finalist for impactful technical innovation and applied AI product execution.',
    },
    {
      iconClass: 'fas fa-heart',
      title: 'AI Crusade 2023 Winner',
      event: 'Health Track',
      description:
        'Won health track with MastiskaTrack, an AI-assisted mental health assessment solution.',
      links: [
        {
          label: 'Winner Certificate',
          href: 'https://drive.google.com/file/d/1utprQIxIAIC94tSGqgdPxq79s6vPzw8U/view?usp=sharing',
          iconClass: 'fas fa-certificate',
        },
      ],
    },
    {
      iconClass: 'fas fa-file-signature',
      title: 'Conference and Acceptance Records',
      event: 'USC, NCCI, ICAIL, LEC',
      description:
        'Attendance certificates and acceptance proof for ongoing and published research contributions.',
      links: [
        {
          label: 'USC (AlgoRAG)',
          href: 'https://drive.google.com/file/d/1NvV3pJRLlzTDMLIi3J9V_wRCC8tgtZ3I/view?usp=sharing',
          iconClass: 'fas fa-file-lines',
        },
        {
          label: 'NCCI (Ethical)',
          href: 'https://drive.google.com/file/d/15rueRfzrtcLR-kugzBNPw_zBPYjVqSMd/view?usp=sharing',
          iconClass: 'fas fa-file-lines',
        },
        {
          label: 'ICAIL Acceptance',
          href: 'https://drive.google.com/file/d/1DfY9lvDPHF1mADP0wmQ4X4L4BdBLcqU6/view?usp=sharing',
          iconClass: 'fas fa-file-lines',
        },
        {
          label: 'LEC (Sediment)',
          href: 'https://drive.google.com/file/d/1UiP0nTMavLSghqCXFoLWrUUs_bGGbXAy/view?usp=sharing',
          iconClass: 'fas fa-file-lines',
        },
      ],
    },
    {
      iconClass: 'fas fa-graduation-cap',
      title: 'Mahatma Gandhi Scholarship',
      event: 'Embassy of India, Nepal',
      description:
        'Awarded for academic excellence and strong merit performance during earlier studies.',
    },
    {
      iconClass: 'fas fa-calculator',
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
      avatarIconClass: 'fas fa-user-graduate',
    },
    {
      quote:
        'As his research supervisor, I was consistently impressed by his command of technical depth and his ability to apply theory into practical, original work.',
      author: 'Dr. Rajani Chulyadyo',
      role: 'Assistant Professor, Kathmandu University',
      avatarIconClass: 'fas fa-user-graduate',
    },
    {
      quote:
        'During Introduction to AI, Sushan showed outstanding conceptual understanding and a proactive, disciplined approach to building solutions.',
      author: 'Dr. CNK',
      role: 'Associate Professor, IIT Palakkad',
      avatarIconClass: 'fas fa-user-graduate',
    },
    {
      quote:
        'His contribution to the national pension platform was practical and production-minded. The liveness detection integration reflected strong engineering judgment.',
      author: 'Gopal Khadka',
      role: 'National Pension Management System, Nepal',
      avatarIconClass: 'fas fa-user-tie',
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
      image: '/img/tech/llm.avif',
      category: 'NLP',
      date: 'February 2024',
      readTime: '12 min read',
      href: 'https://medium.com/@sushan.adhikari2060',
    },
    {
      title: 'DevOps for ML',
      excerpt:
        'How Docker, Terraform, and CI/CD can accelerate reproducibility, deployment velocity, and ML model lifecycle quality.',
      image: '/img/tech/docker.webp',
      category: 'DevOps',
      date: 'January 2024',
      readTime: '10 min read',
      href: 'https://medium.com/@sushan.adhikari2060',
    },
  ],
}

export const contactData = {
  title: "Let's Connect",
  lead:
    'I am always open to discussing opportunities, research collaborations, or impactful engineering work. If you have something in mind, let us talk.',
  methods: [
    {
      iconClass: 'fas fa-map-marker-alt',
      label: 'Location',
      value: 'Dhulikhel, Kavre, Nepal',
    },
    {
      iconClass: 'fas fa-envelope',
      label: 'Email',
      value: 'sushan.adhikari2060@gmail.com',
    },
    { iconClass: 'fas fa-phone', label: 'Phone', value: '+977 9810538507' },
    {
      iconClass: 'fas fa-language',
      label: 'Languages',
      value: 'English, Nepali, Hindi',
    },
  ],
  social: [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sushan-adhikari',
      iconClass: 'fab fa-linkedin-in',
    },
    { label: 'GitHub', href: 'https://github.com/sushan-adhikari', iconClass: 'fab fa-github' },
    {
      label: 'Medium',
      href: 'https://medium.com/@sushan.adhikari2060',
      iconClass: 'fab fa-medium',
    },
    { label: 'Twitter', href: 'https://x.com/Sushan_ad2060', iconClass: 'fab fa-twitter' },
    { label: 'Facebook', href: 'https://www.facebook.com/sushan.ad/', iconClass: 'fab fa-facebook-f' },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/sushan.ad',
      iconClass: 'fab fa-instagram',
    },
  ],
}
