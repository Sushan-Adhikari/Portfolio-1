export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'research', label: 'Research' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

export const heroData = {
  greeting: 'Hello, I am',
  firstName: 'Sushan',
  lastName: 'Adhikari',
  // Set available:false to hide the hero status pill, or edit the label.
  availability: {
    available: false,
    label: 'Open to new opportunities',
  },
  typewriterTexts: [
    'AI/ML Researcher',
    'Co-founder, Nurvexa',
    'NLP · RAG · Explainable AI',
  ],
  description:
    'I build and publish in low-resource NLP, LLM alignment, retrieval-augmented generation, and explainable AI. First author on an ACM ICAIL 2026 paper on Nepali-English legal machine translation, with five total publications across NLP, computer vision, and applied ML. Currently co-founding Nurvexa, an AI medical exam-prep platform deployed in Nepal.',
  stats: [
    { value: '5', label: 'Publications' },
    { value: '300K+', label: 'Users Impacted' },
    { value: '2', label: 'AI Startups' },
  ],
  actions: [
    {
      label: 'CV (PDF)',
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
    label: 'Download CV (PDF)',
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
    'I am a Computer Engineering graduate from Kathmandu University (CGPA 3.90/4.0), with an exchange semester at IIT Palakkad. My work spans low-resource NLP, LLM alignment, retrieval-augmented generation, and explainable AI.',
    'I am first author on an ACM ICAIL 2026 paper on Nepali-English legal machine translation, with five total publications spanning legal NLP, tiny-LLM ethical reasoning, deepfake detection, and physics-informed hydrology — plus ongoing preprints in RAG and explainability.',
    'As co-founder of Nurvexa, I build AI systems that ship: a RAG-based medical exam-prep platform deployed for nursing students in Nepal. I have also built real-time computer-vision inference pipelines at KyraWorks and contributed to Nepal’s national pension platform, which serves 300k+ users.',
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
      detail: 'Low-Resource NLP, LLM Alignment, RAG, and XAI',
    },
    {
      iconClass: 'fas fa-award',
      title: 'Recognition',
      detail: 'ACM ICAIL 2026 (First Author), KUSET Publications, Hult Prize',
    },
  ],
  skillsTitle: 'Stack Used Till Date',
  skills: [
    {
      title: 'Languages & ML',
      iconClass: 'fas fa-brain',
      tags: ['Python', 'PyTorch', 'Scikit-Learn', 'OpenCV', 'YOLOv8', 'Pandas', 'NumPy', 'HuggingFace'],
    },
    {
      title: 'Inference & CV',
      iconClass: 'fas fa-video',
      tags: ['NVIDIA DeepStream', 'Triton Inference Server', 'GStreamer', 'TensorRT'],
    },
    {
      title: 'MLOps & Backend',
      iconClass: 'fas fa-cloud',
      tags: ['Docker', 'AWS', 'Git', 'FastAPI', 'PostgreSQL', 'Redis'],
    },
    {
      title: 'Other',
      iconClass: 'fas fa-code',
      tags: ['ChromaDB', 'LangChain', 'LaTeX/Overleaf'],
    },
  ],
  techShowcase: [
    { name: 'Python', icon: 'python', color: '#3776AB', logo: '/img/tech/python.png' },
    { name: 'PyTorch', icon: 'pytorch', color: '#EE4C2C', logo: '/img/tech/pytorch.png' },
    { name: 'Scikit-learn', icon: 'scikitlearn', color: '#F7931E', logo: '/img/tech/scikit.png' },
    { name: 'OpenCV', icon: 'opencv', color: '#5C3EE8', logo: '/img/tech/opencv.png' },
    { name: 'YOLOv8', icon: 'yolo', color: '#7C3AED', logo: '/img/tech/yolo.png' },
    { name: 'NVIDIA DeepStream', icon: 'nvidia', color: '#76B900', logo: '/img/tech/deepstream.png' },
    { name: 'Triton Inference', icon: 'triton', color: '#475569', logo: '/img/tech/triton.png' },
    { name: 'GStreamer', icon: 'gstreamer', color: '#1F2937', logo: '/img/tech/gstreamer.png' },
    { name: 'FastAPI', icon: 'fastapi', color: '#009688', logo: '/img/tech/fastapi.svg' },
    { name: 'PostgreSQL', icon: 'postgresql', color: '#336791', logo: '/img/tech/postgres.png' },
    { name: 'Docker', icon: 'docker', color: '#2496ED', logo: '/img/tech/docker.webp' },
    { name: 'AWS', icon: 'aws', color: '#FF9900', logo: '/img/tech/aws.png' },
  ],
}

export const projectData = {
  title: 'Featured Projects',
  items: [
    {
      title: 'AgniNetra: AI Fire Detection',
      description:
        "Fine-tuned YOLOv8n for real-time fire and smoke detection on a Raspberry Pi, with an ESP32 GPS/GPRS module for location-tagged alerts — built in response to Nepal's 6,279 recorded forest fires in 2021.",
      tech: ['Python', 'YOLOv8n', 'Raspberry Pi', 'ESP32'],
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
      title: 'AlgoRAG: RAG for CS Education',
      description:
        'Five-stage retrieval-augmented generation pipeline over 1,200+ theoretical CS artifacts, combining dense and sparse retrieval with a pedagogical re-ranker for algorithm and complexity-theory education.',
      tech: ['RAG', 'ChromaDB', 'LangChain'],
      image: '/img/sushan-logo-512.webp',
      alt: 'AlgoRAG project logo',
      links: [
        {
          label: 'Code',
          href: 'https://github.com/Sushan-Adhikari/AlgoRAG',
          iconClass: 'fab fa-github',
          external: true,
        },
      ],
    },
    {
      title: 'ManimCalc-1493',
      description:
        'The largest execution-validated Manim calculus animation dataset (1,493 scripts across 20 function categories), built with a four-stage syntax-to-execution validation pipeline.',
      tech: ['Python', 'Manim', 'LLM Fine-Tuning'],
      image: '/img/sushan-logo-512.webp',
      alt: 'ManimCalc-1493 project logo',
      links: [
        {
          label: 'Code',
          href: 'https://github.com/Sushan-Adhikari/Manim_Visualize',
          iconClass: 'fab fa-github',
          external: true,
        },
      ],
    },
    {
      title: 'Statistics & Probability for ML',
      description:
        'Public, daily-updated compendium of probability theory, MLE/MAP, Bayesian inference, Gaussian processes, information theory, and concentration inequalities, with NumPy implementations.',
      tech: ['Python', 'NumPy', 'Probability Theory'],
      image: '/img/sushan-logo-512.webp',
      alt: 'Statistics and Probability for ML repository logo',
      links: [
        {
          label: 'Code',
          href: 'https://github.com/Sushan-Adhikari/statistics-probability-ml',
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
      title: 'Pension Management Platform (Nepal)',
      description:
        'Designed the UI/UX and 50+ database schemas, and integrated anti-spoofing liveness detection (Amazon Rekognition), for Nepal’s national pension platform (300k+ users).',
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
      title: 'Mercuri.world Job Taxonomy',
      description:
        'Sole Nepali member among 150+ global volunteers; designed job taxonomy and pipeline planning for a mental-health employment platform.',
      tech: ['Data Taxonomy', 'Pipeline Design'],
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
  intro: 'Peer-reviewed publications and preprints in low-resource NLP, LLM alignment, RAG, and explainable AI.',
  scholarLink: 'https://scholar.google.com/citations?user=k3_mHJUAAAAJ',
  papers: [
    {
      iconClass: 'fas fa-language',
      title: 'Directional Asymmetry in Low-Resource Legal Machine Translation: A Nepali-English Case Study',
      authors: ['Sushan Adhikari', 'S. Sharma', 'D. Lamichhane', 'R. Chulyadyo', 'B. K. Bal'],
      venue: 'ACM ICAIL 2026',
      date: 'Jun 2026',
      note: 'DOI processing',
      status: 'Published',
      statusClass: '',
      descriptionLines: [
        'Built the first public Nepali-English legal parallel corpus (5,024 pairs) and found translation quality is direction-dependent — bidirectional training gained BLEU on Nepali→English but lost it on English→Nepali.',
      ],
      tags: ['Legal NLP', 'Machine Translation', 'Low-Resource NLP'],
      links: [
        {
          label: 'Manuscript',
          href: 'https://drive.google.com/file/d/1DfY9lvDPHF1mADP0wmQ4X4L4BdBLcqU6/view?usp=sharing',
          iconClass: 'fas fa-file-pdf',
        },
        {
          label: 'GitHub',
          href: 'https://github.com/Sushan-Adhikari/LegalNLP',
          iconClass: 'fab fa-github',
        },
        {
          label: 'Poster',
          href: 'https://drive.google.com/file/d/1Khaj4Ls5tq9IS_ytoXCU6vVa9b5QLJya/view?usp=sharing',
          iconClass: 'fas fa-file-lines',
        },
        {
          label: 'Acceptance Email',
          href: 'https://drive.google.com/file/d/1A-pLjKd0AHTz5Sgy_PZrN3HgzKiDbndo/view?usp=sharing',
          iconClass: 'fas fa-envelope-open-text',
        },
      ],
    },
    {
      iconClass: 'fas fa-brain',
      title: 'Enhancing Ethical Reasoning in Tiny LLMs via Fine-Tuning and Multi-Agent Consensus',
      authors: ['Sushan Adhikari', 'S. Sharma', 'D. Lamichhane', 'S. Sigdel'],
      venue: 'KUSET Vol. 18 No. 2',
      date: 'Dec 2024',
      status: 'Published',
      statusClass: '',
      descriptionLines: [
        'Fine-tuned three TinyLlama-1.1B agents — utilitarian, deontological, and virtue-ethics — and combined them via confidence-weighted consensus, validated by a 55-participant human study.',
      ],
      tags: ['Tiny LLMs', 'LLM Alignment', 'Multi-Agent Systems'],
      links: [
        {
          label: 'Manuscript',
          href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=k3_mHJUAAAAJ&citation_for_view=k3_mHJUAAAAJ:u-x6o8ySG0sC',
          iconClass: 'fas fa-file-pdf',
        },
        {
          label: 'GitHub',
          href: 'https://github.com/sunidhisharma03/EthicsAIReasoning/tree/main',
          iconClass: 'fab fa-github',
        },
      ],
    },
    {
      iconClass: 'fas fa-camera-retro',
      title: 'Detecting Image Forgeries and Deepfakes: A Comparative Study of CNN and Transformer Models',
      authors: ['P. Kafle', 'Sushan Adhikari', 'A. M. Shakya', 'N. Ghimire', 'G. Sharma'],
      authorNote: 'Corresponding author',
      venue: 'KUSET Vol. 18 No. 2',
      date: 'Dec 2024',
      status: 'Published',
      statusClass: '',
      descriptionLines: [
        'Benchmarked CNN and transformer detectors on 140,000+ images spanning classical manipulation and GAN-generated forgeries; InceptionV3 outperformed ViT-Base by 5.51% accuracy.',
      ],
      tags: ['Computer Vision', 'Deepfake Detection', 'Benchmarking'],
      links: [
        {
          label: 'Manuscript',
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
      iconClass: 'fas fa-water',
      title: 'Physics-Informed Data Augmentation for Sediment Concentration Prediction in Himalayan Rivers',
      authors: ['U. Adhikari', 'M. R. Kafle', 'Sushan Adhikari'],
      venue: 'InJET-InDev Vol. 2 No. 2',
      date: 'Feb 2026',
      status: 'Published',
      statusClass: '',
      descriptionLines: [
        'Benchmarked 10 data-augmentation strategies on 51 years of Himalayan river records; a physics-informed ensemble cut RMSE by 24.3% over the best classical baseline.',
      ],
      tags: ['Physics-Informed ML', 'Hydrology', 'Data Augmentation'],
      links: [
        {
          label: 'Manuscript',
          href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=k3_mHJUAAAAJ&citation_for_view=k3_mHJUAAAAJ:d1gkVwhDpl0C',
          iconClass: 'fas fa-file-pdf',
        },
        {
          label: 'LEC Certificate',
          href: 'https://drive.google.com/file/d/1UiP0nTMavLSghqCXFoLWrUUs_bGGbXAy/view?usp=sharing',
          iconClass: 'fas fa-certificate',
        },
      ],
    },
    {
      iconClass: 'fas fa-laptop-code',
      title: 'AlgoRAG: Retrieval-Augmented Generation for Theoretical Computer Science Education',
      authors: ['Sushan Adhikari'],
      venue: 'arXiv:2609.14572',
      date: 'Sep 2026',
      status: 'Preprint',
      statusClass: 'in-progress',
      descriptionLines: [
        'Built a five-stage RAG pipeline over 1,200+ theoretical CS artifacts; found BLEU inadequate for logically-equivalent proofs and proposed a 6-criterion pedagogical quality metric instead.',
      ],
      tags: ['RAG', 'CS Education', 'Complexity Theory'],
      links: [
        {
          label: 'arXiv',
          href: 'https://arxiv.org/abs/2609.14572',
          iconClass: 'fas fa-file-pdf',
        },
        {
          label: 'GitHub',
          href: 'https://github.com/Sushan-Adhikari/AlgoRAG',
          iconClass: 'fab fa-github',
        },
      ],
    },
    {
      iconClass: 'fas fa-chart-line',
      title: 'How Much Data Is Enough? Validation Gaps in Manim-Based Mathematical Animation Code Generation',
      authors: ['Sushan Adhikari'],
      venue: 'Preprint',
      date: 'Sep 2026',
      status: 'Preprint',
      statusClass: 'in-progress',
      descriptionLines: [
        'Built ManimCalc-1493, the largest execution-validated Manim dataset (1,493 scripts across 20 categories), and quantified the data scale needed to close the zero-shot-to-fine-tuned execution gap.',
      ],
      tags: ['Code Generation', 'LLM Evaluation', 'Dataset Scaling'],
      links: [
        {
          label: 'Preprint',
          href: 'https://drive.google.com/file/d/1erNUVMQRdWirFeMsn4BSBz1HChWC7hR0/view?usp=sharing',
          iconClass: 'fas fa-file-pdf',
        },
        {
          label: 'GitHub',
          href: 'https://github.com/Sushan-Adhikari/Manim_Visualize',
          iconClass: 'fab fa-github',
        },
      ],
    },
    {
      iconClass: 'fas fa-microscope',
      title: 'Explainability Methods for Hybrid CNN-Transformer Document Layout Analysis',
      authors: ['Sushan Adhikari'],
      venue: 'Preprint',
      date: '2026',
      status: 'Preprint',
      statusClass: 'in-progress',
      descriptionLines: [
        'Compared Grad-CAM, Attention Rollout, and LIME on a hybrid CNN-Transformer document layout model, introducing four new interpretability metrics to quantify boundary alignment and structural consistency.',
      ],
      tags: ['Explainable AI', 'Document AI', 'Interpretability'],
      links: [
        {
          label: 'Preprint',
          href: 'https://drive.google.com/file/d/1Y5WzoYZoxCWUdjOAoz13yVAoHMdkBSP0/view?usp=sharing',
          iconClass: 'fas fa-file-pdf',
        },
        {
          label: 'GitHub',
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
      iconClass: 'fas fa-user-nurse',
      date: 'Jul 2025 - Present',
      role: 'Co-founder',
      org: 'Nurvexa',
      summary:
        "Co-founded an AI medical exam-prep platform for Nepal's healthcare ecosystem: multi-stage RAG pipeline with SSE token streaming, 2,200+ OCR-extracted quiz questions, Gemini Vision, hybrid search, and cross-encoder rerankers.",
      orgLink: 'https://nurvexalabs.com',
      links: [
        {
          label: 'Website',
          href: 'https://nurvexalabs.com',
          iconClass: 'fas fa-external-link-alt',
        },
      ],
    },
    {
      iconClass: 'fas fa-cogs',
      date: 'Jan 2026 - Apr 2026',
      role: 'Junior MLOps Developer',
      org: 'KyraWorks',
      summary:
        'Promoted from Computer Vision Intern; set up monorepo and CODEOWNERS governance across 10+ team members, SAST/DAST scanning (DefectDojo, CodeRabbit), and 3+ AWS EC2 instances via Terraform.',
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
        'Built real-time inference pipelines with NVIDIA DeepStream and Triton; deployed YOLOv8 across 10+ simultaneous camera streams at ~60 fps aggregate throughput.',
      links: [
        {
          label: 'Internship Certificate',
          href: 'https://drive.google.com/file/d/1YqyI-eCXOgj6hBRbKYM6eQg9qQIcY4b2/view?usp=sharing',
          iconClass: 'fas fa-certificate',
        },
      ],
    },
    {
      iconClass: 'fas fa-code',
      date: 'Jun 2025 - Oct 2025',
      role: 'Full-Stack Development Intern',
      org: 'National Pension Management System, Nepal',
      summary:
        'Designed the UI/UX and 50+ database schemas (Spring Boot, PostgreSQL) and integrated liveness detection via Amazon Rekognition for a national platform serving 300k+ users.',
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
      iconClass: 'fas fa-briefcase',
      date: 'Jan 2025 - Present',
      role: 'AI Data Volunteer',
      org: 'Mercuri.world',
      summary:
        'Sole Nepali member among 150+ global volunteers; designed job taxonomy and pipeline planning for a mental-health employment platform.',
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
      iconClass: 'fas fa-university',
      date: 'Jan 2022 - Feb 2026',
      role: 'B.Eng. Computer Engineering',
      org: 'Kathmandu University, School of Engineering',
      summary:
        'CGPA 3.90/4.0. Coursework in Computer Vision, Databases, Computer Architecture, and Statistics, alongside first-author AI/ML research.',
      links: [
        {
          label: 'KU Transcript',
          href: 'https://drive.google.com/file/d/1V_rIg0sF7fv4v6pXA_tp21jMiBBTQjw_/view?usp=sharing',
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
      title: 'Machine Learning Specialization',
      issuer: 'Andrew Ng — Stanford / Coursera',
      date: '2026',
      description:
        "Andrew Ng's Machine Learning Specialization: supervised and unsupervised learning, neural networks, and applied ML best practices.",
      links: [
        {
          label: 'Verify Certificate',
          href: 'https://www.coursera.org/account/accomplishments/verify/Y1R76JCCK2Q7',
          iconClass: 'fas fa-certificate',
        },
      ],
    },
    {
      iconClass: 'fas fa-diagram-project',
      title: 'Apache Airflow Certifications',
      issuer: 'Astronomer',
      date: '2024',
      description:
        'Astronomer certifications for Apache Airflow 2 — DAG Authoring and Fundamentals — covering pipeline orchestration and workflow design.',
      links: [
        {
          label: 'DAG Authoring',
          href: 'https://www.credly.com/badges/a9983745-30bc-420f-8cd5-68d3444351d6/public_url',
          iconClass: 'fas fa-certificate',
        },
        {
          label: 'Fundamentals',
          href: 'https://www.credly.com/badges/855e4952-a79f-4dbb-a4a8-f8a969b2fd39/public_url',
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
        'Tracks in Supervised & Unsupervised Learning, AI Fundamentals, PySpark, and SQL — hands-on ML and data tooling.',
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
      title: 'Embeddings for NLP',
      issuer: 'OpenHPI',
      date: '2025',
      description:
        'Embeddings-focused NLP course covering semantic representations and retrieval use cases.',
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
      title: 'Hult Prize OnCampus Winner',
      event: 'Kathmandu University',
      description:
        'Led a computer-vision pipeline for fish-disease classification (Dr.Fish) and represented Nepal at the Hult Prize Regional Summit in Bangkok.',
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
    'I welcome research collaborations, technical discussions, and interesting engineering problems. If you have something in mind, let us talk.',
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
