export const SITE_NAME = "Jadesdev";

export const SITE_URL = "https://jadesdev.com";

export const SITE_TAGLINE =

  "Creating exceptional web experiences that drive business growth and user engagement.";



export const COMPANY_RC = "8572867";



// --- Contact Information ---

export const CONTACT_ADDRESS = "5, Mayfiar Street, Osun State";

export const CONTACT_EMAIL = "hello@jadesdev.com";

export const CONTACT_PHONE = "+234 708 253 9023";

export const CONTACT_PHONE_TEL = "tel:+2347082539023";

export const CONTACT_WHATSAPP = "https://wa.me/2347082539023";

export const CALENDLY_URL = "https://calendly.com/jadesdev";
export const MAINTENANCE_SERVICE_SLUG = "security-maintenance";



export const FOOTER_CONTACT_LOCAL = [

  CONTACT_EMAIL,

  CONTACT_PHONE,

  CONTACT_ADDRESS,

];

export const FOOTER_CONTACT_INTERNATIONAL = [CONTACT_EMAIL];



export const SOCIAL_LINKS = [

  {

    name: "Facebook",

    url: "https://facebook.com/jadesdev",

    icon: "simple-icons:facebook",

  },

  {

    name: "Twitter",

    url: "https://twitter.com/jadesdev",

    icon: "simple-icons:twitter",

  },

  {

    name: "Instagram",

    url: "https://instagram.com/jadesdev",

    icon: "simple-icons:instagram",

  },

  {

    name: "LinkedIn",

    url: "https://www.linkedin.com/company/jadesdev-technologies/",

    icon: "simple-icons:linkedin",

  },

  {

    name: "WhatsApp",

    url: "https://wa.me/2347082539023",

    icon: "simple-icons:whatsapp",

    localOnly: true,

  },

  {

    name: "Telegram",

    url: "https://t.me/jadesdev",

    icon: "simple-icons:telegram",

  },

];



export function getFooterContact(isLocal: boolean) {

  return isLocal ? FOOTER_CONTACT_LOCAL : FOOTER_CONTACT_INTERNATIONAL;

}



export function getSocialLinks(isLocal: boolean) {

  return SOCIAL_LINKS.filter((link) => !link.localOnly || isLocal);

}



export const BUDGET_OPTIONS_LOCAL = [

  { value: "under-200k", label: "Under ₦200,000" },

  { value: "200k-500k", label: "₦200,000 - ₦500,000" },

  { value: "500k-1m", label: "₦500,000 - ₦1,000,000" },

  { value: "over-1m", label: "₦1,000,000+" },

];



export const BUDGET_OPTIONS_INTERNATIONAL = [

  { value: "under-1k", label: "Under $1,000" },

  { value: "1k-5k", label: "$1,000 - $5,000" },

  { value: "5k-15k", label: "$5,000 - $15,000" },

  { value: "over-15k", label: "$15,000+" },

];



export const SITE_STATS = {

  projectCompletd: 50,

  years: 5,

  clients: 98,

  happyclients: 87,

  countriesServed: 6,

};



// @deprecated Use getFooterContact(isLocal) instead

export const FOOTER_CONTACT = FOOTER_CONTACT_LOCAL;

