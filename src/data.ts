export const stackGroups = [
  {
    title: "E-commerce & Front",
    items: [
      "Shopify / Liquid",
      "Shopify Admin API",
      "Storefront API",
      "React",
      "Vite",
      "App Bridge",
      "Polaris",
      "HTML5",
      "CSS3",
      "JavaScript",
    ],
  },
  {
    title: "Backend & Infra",
    items: [
      "Node.js 20",
      "TypeScript",
      "Fastify 5",
      "Arquitetura Hexagonal",
      "PostgreSQL",
      "Docker",
      "VPS Linux",
      "Coolify",
      "Deploy via webhook",
    ],
  },
  {
    title: "IA & Automação",
    items: [
      "Python",
      "Blender / Cycles",
      "FreeCAD",
      "SDXL",
      "FLUX.1",
      "ControlNet",
      "Quantização 4-bit",
      "ChatGPT",
      "ElevenLabs",
      "HeyGen",
    ],
  },
  {
    title: "Marketing & Suporte",
    items: ["ActiveCampaign", "Zendesk", "SEO on-page", "Google Analytics", "Search Console", "WordPress / Elementor"],
  },
];

export const stackTicker = [
  "Shopify",
  "TypeScript",
  "Node.js",
  "Fastify",
  "React",
  "PostgreSQL",
  "Python",
  "Blender",
  "Docker",
  "ActiveCampaign",
  "FreeCAD",
  "SDXL",
];

export const timeline = [
  {
    when: "jan 2026 — hoje",
    title: "Projetos Próprios — E-commerce, IA Aplicada & Automação",
    body: "Arquitetura hexagonal em Node.js/TypeScript/Fastify; motor de sincronização Shopify ↔ ERP ↔ CRM com proteção anti-loop em 3 camadas; cotação B2B assíncrona via Storefront API; app embutido no Shopify Admin; pipeline de IA & 3D (Python/Blender) para converter CAD em render de catálogo.",
  },
  {
    when: "ago 2024 — hoje",
    title: "Blog Guia LMS — Administrador de Site WordPress",
    body: "Criação, manutenção e SEO on-page do site institucional; personalização de temas com Elementor; integrações com automação de marketing e CRM.",
  },
  {
    when: "mai 2024 — hoje",
    title: "Torqx Testing Equipment — Desenvolvedor Shopify",
    body: "Interfaces personalizadas em Liquid, HTML, CSS e JavaScript; gestão de catálogo, pagamentos, fretes e integrações com apps da Shopify; SEO on-page.",
  },
  {
    when: "mai 2021 — mai 2026",
    title: "Werkey — Especialista Técnico",
    body: "Desenvolvimento web com HTML5/CSS3/JS; Shopify e ActiveCampaign para e-commerce e automação de marketing; suporte omnicanal com Zendesk; conteúdo com IA (ChatGPT, ElevenLabs, HeyGen).",
  },
  {
    when: "jul 2015 — set 2020",
    title: "ArtPell Papelaria e Informática — Auxiliar do Comércio",
    body: "Início de trajetória, atendimento e comércio.",
  },
];

export const projects = [
  {
    title: "Torqx",
    tag: "E-commerce",
    description:
      "Loja Shopify internacional para a Torqx Testing Equipment, distribuidora exclusiva da AW Dynamometer na América Latina.",
    stats: ["12 anos de mercado", "5 marcas atendidas"],
    href: "https://lucerpy.com.br/projetos/torqx",
    featured: true,
    colSpan: 2 as const,
  },
  {
    title: "GuiaLMS",
    tag: "Institucional",
    description:
      "Portal de conteúdo sobre plataformas de treinamento corporativo: editorial estruturado, categorias temáticas e captura de newsletter.",
    stats: ["6 seções de conteúdo", "Editorial que converte"],
    href: "https://lucerpy.com.br/projetos/guialms",
    featured: true,
  },
  {
    title: "Cavent Engenharia",
    tag: "Institucional",
    description: "Redesign completo do site institucional focado em conversão de leads B2B.",
    stats: ["+180% leads qualificados", "3x mais rápido"],
    href: "https://lucerpy.com.br/projetos/cavent-engenharia",
    featured: true,
  },
  {
    title: "Inventário de TI",
    tag: "App",
    description:
      "Exercício autoral: dashboard para controle de ativos de TI em tempo real, com gestão de colaboradores, kits de boas-vindas e devoluções.",
    stats: ["6 módulos integrados", "100% responsivo"],
    href: "https://lucerpy.com.br/projetos/inventario-ti",
  },
  {
    title: "NK3IT",
    tag: "Institucional",
    description: "Site institucional para empresa de infraestrutura e suporte de TI, com foco em geração de leads corporativos.",
    stats: ["21 anos de mercado", "+80% produtividade"],
    href: "https://lucerpy.com.br/projetos/nk3it",
  },
  {
    title: "Weaver",
    tag: "E-commerce",
    description: "E-commerce de streetwear e cultura skate: shapes, apparel e sneakers com identidade forte de marca.",
    stats: ["3 categorias integradas", "Identidade autoral"],
    href: "https://lucerpy.com.br/projetos/weaver",
  },
];

export const automations = [
  {
    title: "acme-sync",
    tag: "Integração",
    description: "Serviço de integração Shopify ↔ Bling ↔ HubSpot em Node/TypeScript (amostra de portfólio, sanitizada).",
    href: "https://github.com/eduserpa/acme-sync",
    featured: true,
    colSpan: 2 as const,
  },
  {
    title: "acme-image-factory",
    tag: "IA & 3D",
    description: "Pipeline de imagens/AR para peças técnicas com Blender e FreeCAD, em Python (amostra de portfólio, sanitizada).",
    href: "https://github.com/eduserpa/acme-image-factory",
    featured: true,
  },
  {
    title: "shopify-talentlms-sso-sync",
    tag: "SSO",
    description: "SSO entre Shopify e TalentLMS: casa clientes por e-mail e gera link de auto-login via tag.",
    href: "https://github.com/eduserpa/shopify-talentlms-sso-sync",
  },
  {
    title: "talentlms-shopify-sync",
    tag: "Integração",
    description: "Sincroniza a estrutura de cursos do TalentLMS com metafields de produto no Shopify.",
    href: "https://github.com/eduserpa/talentlms-shopify-sync",
  },
  {
    title: "voucher-generator-hub",
    tag: "Automação",
    description: "Gera códigos de desconto Shopify de uso único a partir de catálogo no SharePoint, com trilha de auditoria.",
    href: "https://github.com/eduserpa/voucher-generator-hub",
  },
  {
    title: "talentlms-status-checker",
    tag: "Automação",
    description: "Verifica status de matrícula e conclusão no TalentLMS para um lote de e-mail + SKU.",
    href: "https://github.com/eduserpa/talentlms-status-checker",
  },
  {
    title: "shopify-active-products-export",
    tag: "Export",
    description: "Exporta produtos ativos e variantes do Shopify para CSV, pronto pro Excel.",
    href: "https://github.com/eduserpa/shopify-active-products-export",
  },
  {
    title: "activecampaign-notes-export",
    tag: "Export",
    description: "Exporta todas as notas do ActiveCampaign para CSV com nome de deal/contato resolvido.",
    href: "https://github.com/eduserpa/activecampaign-notes-export",
  },
];

export const education = {
  academic: [
    {
      title: "Pós-graduação, Inteligência Artificial",
      sub: "Universidade Federal do Paraná — fev 2024 a mar 2026",
    },
    {
      title: "Tecnólogo, Gestão de Redes e Segurança de Sistemas",
      sub: "FATEC-SP — 2019 a dez 2022",
    },
  ],
  certifications: [
    "CCNAv7: Enterprise Networking, Security, and Automation",
    "CCNA Routing and Switching: Introduction to Networks",
    "IT Essentials: PC Hardware and Software",
    "Do Figma ao Framer com IA",
    "Introdução à Engenharia com Arduino",
  ],
};
