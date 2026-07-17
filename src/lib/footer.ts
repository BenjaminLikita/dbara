import { Mail, MapPin, Phone, type LucideIcon } from "lucide-react";

type IFooterItem = {
  name: string;
  href?: string;
  icon?: LucideIcon;
};

type IFooterSection = {
  title: string;
  items: IFooterItem[];
};

export const footerData: IFooterSection[] = [
  {
    title: "Quick link",
    items: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Pricing", href: "/pricing" },
      { name: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Support",
    items: [
      { name: "Terms & Conditions", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "FAQ", href: "/faq" },
      { name: "Support", href: "/support" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Contact",
    items: [
      {
        name: "+12 345 678 9010",
        icon: Phone,
        href: "tel:+123456789010",
      },
      {
        name: "support@cytrix.com",
        icon: Mail,
        href: "mailto:support@dbara.com",
      },
      {
        name: "Jl. Sunset Road No.\n99x, Kuta — Bali",
        icon: MapPin,
      },
    ],
  },
];
