export const languages = {
  es: "Español",
  en: "English",
} as const;

export const defaultLang = "es";
export type Lang = keyof typeof ui;

export const ui = {
  es: {
    meta: {
      title: "Matías Roubaud — Data Engineering & Analytics",
      description:
        "Servicios de Data Engineering, Analytics/BI, AI y Cloud sobre AWS. Pipelines de datos, dashboards ejecutivos y modelos de ML para decidir con datos confiables.",
    },
    nav: {
      links: [
        { href: "#servicios", label: "Servicios" },
        { href: "#experiencia", label: "Experiencia" },
        { href: "#sobre-mi", label: "Sobre mí" },
        { href: "#stack", label: "Stack" },
        { href: "#contacto", label: "Contacto" },
      ],
      cta: "Hablemos",
    },
    hero: {
      eyebrow: "Data Engineering & Analytics Leader",
      titlePre: "Convierto datos en",
      titleHighlight: "decisiones que mueven el negocio",
      sub: "Soy <strong>Matías Roubaud</strong>, ingeniero con +7 años llevando datos a producción de punta a punta: desde pipelines escalables en AWS hasta dashboards ejecutivos y modelos de ML. Hoy lidero una función de Datos &amp; AI, y ayudo a empresas a construir la infraestructura que necesitan para decidir con datos confiables.",
      ctaPrimary: "Trabajemos juntos →",
      ctaSecondary: "Ver servicios",
      stats: [
        { value: "+7 años", label: "Datos a producción" },
        { value: "AWS", label: "Cloud & Data Engineering" },
        { value: "Data + AI", label: "BI, ML & Analytics" },
      ],
    },
    services: {
      eyebrow: "Servicios",
      title: "En qué te puedo ayudar",
      intro:
        "Trabajo de punta a punta: desde la arquitectura de datos hasta la decisión de negocio. Cuatro áreas que se complementan para que tus datos, tu nube y tu IT jueguen a favor del negocio.",
      items: [
        {
          icon: "🛢️",
          title: "Data Engineering",
          desc: "Pipelines de datos escalables y gobernados que alimentan analítica y modelos con datos confiables.",
          points: [
            "Pipelines en AWS (S3, Athena, Aurora, ECS)",
            "Infraestructura como código con Terraform",
            "Modelado y gobierno de datos",
            "Orquestación con EventBridge / Airflow",
          ],
        },
        {
          icon: "📊",
          title: "Analytics & BI",
          desc: "Dashboards ejecutivos que transforman datos crudos en decisiones para la dirección.",
          points: [
            "Power BI, Tableau y AWS Grafana",
            "KPIs y métricas de negocio",
            "Reportes y self-service analytics",
            "Storytelling con datos",
          ],
        },
        {
          icon: "🤖",
          title: "AI / Machine Learning",
          desc: "Modelos de ML de la idea a producción, integrados a tus procesos de decisión.",
          points: [
            "Desarrollo y despliegue en SageMaker",
            "Modelos predictivos con Python / TensorFlow",
            "MLOps y monitoreo de modelos",
            "Casos de uso de IA aplicada",
          ],
        },
        {
          icon: "☁️",
          title: "Cloud & IT Ops",
          desc: "Infraestructura en la nube y operaciones IT/seguridad sobre el ecosistema Microsoft y AWS.",
          points: [
            "Arquitectura y optimización en AWS",
            "Microsoft 365, Intune y Entra ID",
            "Automatización (Power Automate, CI/CD)",
            "Seguridad: Fortinet, Proofpoint",
          ],
        },
      ],
    },
    experience: {
      eyebrow: "Trayectoria",
      title: "Experiencia",
      intro:
        "+7 años cruzando analytics, ingeniería de datos, desarrollo e IT/seguridad — en industria, deporte y tecnología.",
      jobs: [
        {
          role: "Data Engineering Manager",
          company: "Basquevolt",
          period: "Oct 2025 – Presente",
          desc: "Lidero el equipo de Datos & Analytics y defino la estrategia de analítica e IA sobre AWS: pipelines gobernados, dashboards ejecutivos (Power BI / Grafana) y modelos en SageMaker.",
        },
        {
          role: "Product Specialist & Data Analyst",
          company: "Bepro11",
          period: "Mar 2020 – Oct 2025",
          desc: "Lideré +80 instalaciones y proyectos de datos en múltiples regiones, con soluciones de analítica en SQL, Python, Tableau y Power BI.",
        },
        {
          role: "Analytics Engineer (proyecto)",
          company: "Villarreal CF",
          period: "Abr 2024 – Abr 2025",
          desc: "Métricas de rendimiento deportivo y dashboards con Python y herramientas de BI.",
        },
        {
          role: "Freelance Full-Stack Developer",
          company: "Independiente",
          period: "2022 – 2025",
          desc: "Aplicaciones web con React, Node.js, AWS y GCP para distintos clientes.",
        },
        {
          role: "Account & Product Manager",
          company: "ABB",
          period: "2017 – 2020",
          desc: "Clientes industriales y soluciones de automatización; análisis de mercado y formación técnica.",
        },
        {
          role: "Profesor & Investigador",
          company: "Universidad de la República",
          period: "2016 – 2018",
          desc: "Docencia e investigación en ingeniería.",
        },
      ],
    },
    about: {
      eyebrow: "Sobre mí",
      title: "Ingeniero, no solo programador",
      p1: "Vengo de la ingeniería eléctrica y eso marca cómo trabajo: entiendo el problema de negocio antes de escribir una línea de código. Llevo +7 años convirtiendo datos en valor a lo largo de todo el stack — de pipelines en AWS a BI ejecutivo y modelos de ML en producción. Hoy lidero una función de <strong>Datos &amp; AI</strong> en Basquevolt: defino la estrategia, construyo la infraestructura cloud y entrego dashboards y modelos que guían decisiones.",
      p2: "Mi recorrido pasó por analytics, ingeniería e IT/seguridad, lo que me deja ver el panorama completo. Además fundé <strong>FingTwice</strong>, una academia online para estudiantes de la Facultad de Ingeniería en Uruguay. Enseñar me obliga a explicar lo complejo de forma simple — y eso se nota en cómo entrego soluciones claras y bien documentadas.",
      highlights: [
        "Data Engineering Manager en Basquevolt — estrategia de Datos & AI sobre AWS",
        "Ingeniero Eléctrico (UdelaR) y M.Sc. en Big Data Aplicado al Deporte (UCAM)",
        "+7 años entre analytics, ingeniería de datos e IT/seguridad",
        "Fundador de FingTwice, academia online para estudiantes de la FING (Uruguay)",
      ],
      panelTitle: "Cómo trabajo",
      steps: [
        { n: "01", title: "Entender", desc: "Relevo el problema, los datos y las restricciones reales." },
        { n: "02", title: "Diseñar", desc: "Propongo una arquitectura clara, con costos y tiempos sobre la mesa." },
        { n: "03", title: "Construir", desc: "Implemento con código mantenible, tests y CI/CD." },
        { n: "04", title: "Entregar", desc: "Documentación, traspaso de conocimiento y soporte." },
      ],
    },
    stack: {
      eyebrow: "Stack",
      title: "Herramientas que uso",
      intro:
        "Tecnologías probadas en producción. Elijo la herramienta según el problema, no al revés.",
      groups: [
        { title: "Data & AI", items: ["Python", "SQL", "TensorFlow", "SageMaker", "Power BI", "Tableau"] },
        { title: "Cloud & Infra", items: ["AWS", "Terraform", "Docker", "Git", "AWS Grafana", "CI/CD"] },
        { title: "Microsoft & IT / Seguridad", items: ["Microsoft 365", "Intune", "Entra ID", "Power Automate", "Fortinet", "Proofpoint"] },
      ],
    },
    contact: {
      eyebrow: "Contacto",
      title: "¿Tenés un proyecto en mente?",
      intro:
        "Contame qué necesitás y armamos una primera conversación sin compromiso. Respondo en menos de 24 horas hábiles.",
      formName: "Nombre",
      formEmail: "Email",
      formMessage: "Contame sobre tu proyecto",
      formSubmit: "Enviar mensaje",
      formSuccess: "¡Gracias! Tu mensaje fue enviado. Te respondo a la brevedad.",
      or: "o escribime directo",
    },
    footer: {
      tagline: "Data Engineering & Analytics",
      location: "Sopela, Bizkaia 🇪🇸 · Remoto / Worldwide",
    },
  },

  en: {
    meta: {
      title: "Matías Roubaud — Data Engineering & Analytics",
      description:
        "Data Engineering, Analytics/BI, AI and Cloud services on AWS. Data pipelines, executive dashboards and ML models so you can decide with reliable data.",
    },
    nav: {
      links: [
        { href: "#servicios", label: "Services" },
        { href: "#experiencia", label: "Experience" },
        { href: "#sobre-mi", label: "About" },
        { href: "#stack", label: "Stack" },
        { href: "#contacto", label: "Contact" },
      ],
      cta: "Let's talk",
    },
    hero: {
      eyebrow: "Data Engineering & Analytics Leader",
      titlePre: "I turn data into",
      titleHighlight: "decisions that move the business",
      sub: "I'm <strong>Matías Roubaud</strong>, an engineer with 7+ years taking data to production across the full stack — from scalable AWS pipelines to executive dashboards and ML models. I currently lead a Data &amp; AI function, and I help companies build the infrastructure they need to decide with reliable data.",
      ctaPrimary: "Let's work together →",
      ctaSecondary: "View services",
      stats: [
        { value: "7+ years", label: "Data to production" },
        { value: "AWS", label: "Cloud & Data Engineering" },
        { value: "Data + AI", label: "BI, ML & Analytics" },
      ],
    },
    services: {
      eyebrow: "Services",
      title: "How I can help",
      intro:
        "I work end to end: from data architecture to the business decision. Four complementary areas so your data, your cloud and your IT work for the business.",
      items: [
        {
          icon: "🛢️",
          title: "Data Engineering",
          desc: "Scalable, governed data pipelines that feed analytics and models with reliable data.",
          points: [
            "Pipelines on AWS (S3, Athena, Aurora, ECS)",
            "Infrastructure as code with Terraform",
            "Data modeling and governance",
            "Orchestration with EventBridge / Airflow",
          ],
        },
        {
          icon: "📊",
          title: "Analytics & BI",
          desc: "Executive dashboards that turn raw data into decisions for leadership.",
          points: [
            "Power BI, Tableau and AWS Grafana",
            "Business KPIs and metrics",
            "Reporting and self-service analytics",
            "Data storytelling",
          ],
        },
        {
          icon: "🤖",
          title: "AI / Machine Learning",
          desc: "ML models from idea to production, integrated into your decision processes.",
          points: [
            "Development and deployment on SageMaker",
            "Predictive models with Python / TensorFlow",
            "MLOps and model monitoring",
            "Applied AI use cases",
          ],
        },
        {
          icon: "☁️",
          title: "Cloud & IT Ops",
          desc: "Cloud infrastructure and IT/security operations across the Microsoft and AWS ecosystems.",
          points: [
            "AWS architecture and cost optimization",
            "Microsoft 365, Intune and Entra ID",
            "Automation (Power Automate, CI/CD)",
            "Security: Fortinet, Proofpoint",
          ],
        },
      ],
    },
    experience: {
      eyebrow: "Track record",
      title: "Experience",
      intro:
        "7+ years across analytics, data engineering, development and IT/security — in industry, sports and tech.",
      jobs: [
        {
          role: "Data Engineering Manager",
          company: "Basquevolt",
          period: "Oct 2025 – Present",
          desc: "I lead the Data & Analytics team and define the analytics and AI strategy on AWS: governed pipelines, executive dashboards (Power BI / Grafana) and models on SageMaker.",
        },
        {
          role: "Product Specialist & Data Analyst",
          company: "Bepro11",
          period: "Mar 2020 – Oct 2025",
          desc: "Led 80+ installations and data projects across multiple regions, building analytics solutions in SQL, Python, Tableau and Power BI.",
        },
        {
          role: "Analytics Engineer (project)",
          company: "Villarreal CF",
          period: "Apr 2024 – Apr 2025",
          desc: "Sports performance metrics and dashboards using Python and BI tools.",
        },
        {
          role: "Freelance Full-Stack Developer",
          company: "Independent",
          period: "2022 – 2025",
          desc: "Web applications with React, Node.js, AWS and GCP for various clients.",
        },
        {
          role: "Account & Product Manager",
          company: "ABB",
          period: "2017 – 2020",
          desc: "Industrial clients and automation solutions; market analysis and technical training.",
        },
        {
          role: "Professor & Researcher",
          company: "Universidad de la República",
          period: "2016 – 2018",
          desc: "Teaching and research in engineering.",
        },
      ],
    },
    about: {
      eyebrow: "About",
      title: "An engineer, not just a coder",
      p1: "I come from electrical engineering and that shapes how I work: I understand the business problem before writing a line of code. I've spent 7+ years turning data into value across the full stack — from AWS pipelines to executive BI and ML models in production. Today I lead a <strong>Data &amp; AI</strong> function at Basquevolt: I set the strategy, build the cloud infrastructure and ship dashboards and models that drive decisions.",
      p2: "My path went through analytics, engineering and IT/security, which lets me see the full picture. I also founded <strong>FingTwice</strong>, an online academy for engineering students in Uruguay. Teaching forces me to explain the complex in simple terms — and that shows in how I deliver clear, well-documented solutions.",
      highlights: [
        "Data Engineering Manager at Basquevolt — Data & AI strategy on AWS",
        "Electrical Engineer (UdelaR) and M.Sc. in Big Data Applied to Sports (UCAM)",
        "7+ years across analytics, data engineering and IT/security",
        "Founder of FingTwice, an online academy for engineering students (Uruguay)",
      ],
      panelTitle: "How I work",
      steps: [
        { n: "01", title: "Understand", desc: "I map the problem, the data and the real constraints." },
        { n: "02", title: "Design", desc: "I propose a clear architecture, with costs and timelines on the table." },
        { n: "03", title: "Build", desc: "I implement with maintainable code, tests and CI/CD." },
        { n: "04", title: "Deliver", desc: "Documentation, knowledge transfer and support." },
      ],
    },
    stack: {
      eyebrow: "Stack",
      title: "Tools I use",
      intro:
        "Production-proven technologies. I pick the tool for the problem, not the other way around.",
      groups: [
        { title: "Data & AI", items: ["Python", "SQL", "TensorFlow", "SageMaker", "Power BI", "Tableau"] },
        { title: "Cloud & Infra", items: ["AWS", "Terraform", "Docker", "Git", "AWS Grafana", "CI/CD"] },
        { title: "Microsoft & IT / Security", items: ["Microsoft 365", "Intune", "Entra ID", "Power Automate", "Fortinet", "Proofpoint"] },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Have a project in mind?",
      intro:
        "Tell me what you need and we'll set up a first no-commitment chat. I reply within 24 business hours.",
      formName: "Name",
      formEmail: "Email",
      formMessage: "Tell me about your project",
      formSubmit: "Send message",
      formSuccess: "Thanks! Your message was sent. I'll get back to you shortly.",
      or: "or write me directly",
    },
    footer: {
      tagline: "Data Engineering & Analytics",
      location: "Sopela, Bizkaia 🇪🇸 · Remote / Worldwide",
    },
  },
} as const;

export function getTranslations(lang: Lang) {
  return ui[lang];
}
