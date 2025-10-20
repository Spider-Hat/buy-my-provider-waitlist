export type Language = "en" | "es";

type Translation = {
  common: {
    brand: string;
    poweredByPrefix: string;
    poweredByHighlight: string;
    switchToEnglish: string;
    switchToSpanish: string;
  };
  hero: {
    headline: {
      line1Prefix: string;
      line1Highlight: string;
      line2Prefix: string;
      line2Highlight: string;
    };
    subheadline: string;
    subheadlineHighlight: string;
    cta: string;
    stats: Array<{ title: string; description: string }>;
  };
  form: {
    titlePrefix: string;
    titleHighlight: string;
    description: string;
    userTypeLabel: string;
    buyerTitle: string;
    buyerDescription: string;
    supplierTitle: string;
    supplierDescription: string;
    fullNameLabel: string;
    fullNamePlaceholder: string;
    companyNameLabel: string;
    companyNamePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    whatsappLabel: string;
    whatsappPlaceholder: string;
    countryLabel: string;
    countryPlaceholder: string;
    categoriesLabel: string;
    submitLabel: string;
    submittingLabel: string;
    errorMessage: string;
    countryOptions: Array<{ value: string; label: string }>;
    categoryOptions: Array<{ value: string; label: string }>;
    validation: {
      fullName: string;
      email: string;
      whatsapp: string;
      country: string;
      categories: string;
    };
  };
  success: {
    title: string;
    description: string;
    whatsNext: string;
    steps: string[];
    backHome: string;
    contact: string;
  };
  footer: {
    rights: string;
  };
  notFound: {
    title: string;
    description: string;
    cta: string;
  };
};

export const translations: Record<Language, Translation> = {
  en: {
    common: {
      brand: "BuyMyProvider",
      poweredByPrefix: "Powered by",
      poweredByHighlight: "SpiderHat × TADOS",
      switchToEnglish: "Switch to English",
      switchToSpanish: "Switch to Spanish",
    },
    hero: {
      headline: {
        line1Prefix: "Connecting",
        line1Highlight: "Trusted Buyers",
        line2Prefix: "and",
        line2Highlight: "Verified Suppliers",
      },
      subheadline:
        "BuyMyProvider bridges LATAM buyers with verified Chinese suppliers.",
      subheadlineHighlight: "Join now for early access.",
      cta: "Join the Waitlist",
      stats: [
        { title: "LATAM", description: "Trusted Buyers" },
        { title: "China", description: "Verified Suppliers" },
        { title: "24/7", description: "Support & Verification" },
      ],
    },
    form: {
      titlePrefix: "Join the",
      titleHighlight: "Revolution",
      description:
        "Be among the first to experience the future of B2B sourcing. Get early access and exclusive benefits.",
      userTypeLabel: "I am a...",
      buyerTitle: "I'm a Buyer",
      buyerDescription: "Looking for verified suppliers to grow my business",
      supplierTitle: "I'm a Supplier",
      supplierDescription: "Ready to connect with buyers and expand my reach",
      fullNameLabel: "Full Name *",
      fullNamePlaceholder: "John Doe",
      companyNameLabel: "Company Name (Optional)",
      companyNamePlaceholder: "Acme Corp",
      emailLabel: "Email *",
      emailPlaceholder: "email@example.com",
      whatsappLabel: "WhatsApp *",
      whatsappPlaceholder: "+52 123 456 7890",
      countryLabel: "Country / Region *",
      countryPlaceholder: "Select your country",
      categoriesLabel: "Product Categories of Interest *",
      submitLabel: "Join the Waitlist",
      submittingLabel: "Joining Waitlist...",
      errorMessage: "There was an error submitting the form. Please try again.",
      countryOptions: [
        { value: "ar", label: "Argentina" },
        { value: "bo", label: "Bolivia" },
        { value: "br", label: "Brasil" },
        { value: "cl", label: "Chile" },
        { value: "co", label: "Colombia" },
        { value: "cr", label: "Costa Rica" },
        { value: "ec", label: "Ecuador" },
        { value: "sv", label: "El Salvador" },
        { value: "gt", label: "Guatemala" },
        { value: "hn", label: "Honduras" },
        { value: "mx", label: "México" },
        { value: "ni", label: "Nicaragua" },
        { value: "pa", label: "Panamá" },
        { value: "py", label: "Paraguay" },
        { value: "pe", label: "Perú" },
        { value: "uy", label: "Uruguay" },
        { value: "ve", label: "Venezuela" },
        { value: "other", label: "Other" },
      ],
      categoryOptions: [
        { value: "electronics-technology", label: "Electronics & Technology" },
        { value: "textiles-apparel", label: "Textiles & Apparel" },
        { value: "home-furniture", label: "Home & Furniture" },
        { value: "industrial-equipment", label: "Industrial Equipment" },
        { value: "beauty-personal-care", label: "Beauty & Personal Care" },
        { value: "food-beverages", label: "Food & Beverages" },
        { value: "automotive-parts", label: "Automotive Parts" },
        { value: "sports-outdoors", label: "Sports & Outdoors" },
        { value: "toys-games", label: "Toys & Games" },
        { value: "other", label: "Other" },
      ],
      validation: {
        fullName: "Name must be at least 2 characters",
        email: "Please provide a valid email",
        whatsapp: "Please provide a valid WhatsApp number",
        country: "Please select your country",
        categories: "Please select at least one category",
      },
    },
    success: {
      title: "You're on the list!",
      description:
        "You're officially on the list. We'll reach out as soon as BuyMyProvider opens early access.",
      whatsNext: "What's Next?",
      steps: [
        "You'll receive an email confirmation shortly",
        "Our team will review your profile",
        "Early access invites will be sent in the coming weeks",
        "Follow us for updates and exclusive content",
      ],
      backHome: "Back to Home",
      contact: "Questions? Contact us at",
    },
    footer: {
      rights: "All rights reserved.",
    },
    notFound: {
      title: "Oops! Page not found",
      description: "The page you're looking for doesn't exist.",
      cta: "Return to Home",
    },
  },
  es: {
    common: {
      brand: "BuyMyProvider",
      poweredByPrefix: "Impulsado por",
      poweredByHighlight: "SpiderHat × TADOS",
      switchToEnglish: "Cambiar a inglés",
      switchToSpanish: "Cambiar a español",
    },
    hero: {
      headline: {
        line1Prefix: "Conectando",
        line1Highlight: "Compradores Confiables",
        line2Prefix: "con",
        line2Highlight: "Proveedores Verificados",
      },
      subheadline:
        "BuyMyProvider conecta compradores de LATAM con proveedores chinos verificados.",
      subheadlineHighlight: "Únete ahora para obtener acceso anticipado.",
      cta: "Únete a la Lista de Espera",
      stats: [
        { title: "LATAM", description: "Compradores Confiables" },
        { title: "China", description: "Proveedores Verificados" },
        { title: "24/7", description: "Soporte y Verificación" },
      ],
    },
    form: {
      titlePrefix: "Únete a la",
      titleHighlight: "Revolución",
      description:
        "Sé de los primeros en experimentar el futuro del abastecimiento B2B. Obtén acceso anticipado y beneficios exclusivos.",
      userTypeLabel: "Soy...",
      buyerTitle: "Soy Comprador",
      buyerDescription: "Busco proveedores verificados para hacer crecer mi negocio",
      supplierTitle: "Soy Proveedor",
      supplierDescription: "Listo para conectar con compradores y ampliar mi alcance",
      fullNameLabel: "Nombre Completo *",
      fullNamePlaceholder: "Juan Pérez",
      companyNameLabel: "Nombre de la Empresa (Opcional)",
      companyNamePlaceholder: "Empresa Ejemplo",
      emailLabel: "Correo Electrónico *",
      emailPlaceholder: "correo@ejemplo.com",
      whatsappLabel: "WhatsApp *",
      whatsappPlaceholder: "+52 123 456 7890",
      countryLabel: "País / Región *",
      countryPlaceholder: "Selecciona tu país",
      categoriesLabel: "Categorías de Producto de Interés *",
      submitLabel: "Únete a la Lista de Espera",
      submittingLabel: "Uniéndote a la Lista...",
      errorMessage:
        "Hubo un error al enviar el formulario. Por favor, inténtalo nuevamente.",
      countryOptions: [
        { value: "ar", label: "Argentina" },
        { value: "bo", label: "Bolivia" },
        { value: "br", label: "Brasil" },
        { value: "cl", label: "Chile" },
        { value: "co", label: "Colombia" },
        { value: "cr", label: "Costa Rica" },
        { value: "ec", label: "Ecuador" },
        { value: "sv", label: "El Salvador" },
        { value: "gt", label: "Guatemala" },
        { value: "hn", label: "Honduras" },
        { value: "mx", label: "México" },
        { value: "ni", label: "Nicaragua" },
        { value: "pa", label: "Panamá" },
        { value: "py", label: "Paraguay" },
        { value: "pe", label: "Perú" },
        { value: "uy", label: "Uruguay" },
        { value: "ve", label: "Venezuela" },
        { value: "other", label: "Otro" },
      ],
      categoryOptions: [
        { value: "electronics-technology", label: "Electrónica y Tecnología" },
        { value: "textiles-apparel", label: "Textiles y Confección" },
        { value: "home-furniture", label: "Hogar y Muebles" },
        { value: "industrial-equipment", label: "Equipo Industrial" },
        { value: "beauty-personal-care", label: "Belleza y Cuidado Personal" },
        { value: "food-beverages", label: "Alimentos y Bebidas" },
        { value: "automotive-parts", label: "Refacciones Automotrices" },
        { value: "sports-outdoors", label: "Deportes y Aire Libre" },
        { value: "toys-games", label: "Juguetes y Juegos" },
        { value: "other", label: "Otro" },
      ],
      validation: {
        fullName: "El nombre debe tener al menos 2 caracteres",
        email: "Por favor ingresa un correo válido",
        whatsapp: "Por favor ingresa un número de WhatsApp válido",
        country: "Por favor selecciona tu país",
        categories: "Selecciona al menos una categoría",
      },
    },
    success: {
      title: "¡Estás en la lista!",
      description:
        "Ya estás oficialmente en la lista. Te contactaremos tan pronto como BuyMyProvider abra el acceso anticipado.",
      whatsNext: "¿Qué sigue?",
      steps: [
        "Recibirás un correo de confirmación en breve",
        "Nuestro equipo revisará tu perfil",
        "Enviaremos invitaciones de acceso anticipado en las próximas semanas",
        "Síguenos para recibir actualizaciones y contenido exclusivo",
      ],
      backHome: "Volver al Inicio",
      contact: "¿Preguntas? Contáctanos en",
    },
    footer: {
      rights: "Todos los derechos reservados.",
    },
    notFound: {
      title: "¡Ups! Página no encontrada",
      description: "La página que buscas no existe.",
      cta: "Volver al Inicio",
    },
  },
};
