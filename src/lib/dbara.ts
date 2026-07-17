import {
  FaFacebookF,
  FaLinkedin,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

export const navLinks = [
  { href: "#home", label: "Home", active: true },
  { href: "#about", label: "About" },
  { href: "#services", label: "Pages", hasChevron: true },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
] as const;

export const partners = [
  { name: "Blossom", colorClass: "text-[#c4506f]" },
  { name: "Proline", colorClass: "text-[#e2823a]" },
  { name: "Network", colorClass: "text-[#6f7bf0]" },
  { name: "Hitech", colorClass: "text-[#3da6a0]" },
  { name: "Borde", colorClass: "text-[#aab4be]" },
] as const;

export const aboutServices = [
  {
    title: "Malware Scanner",
    description:
      "Continuous scanning across endpoints and servers, flagging and quarantining malicious code before it spreads.",
    icon: "/malware.webp",
  },
  {
    title: "Blocklist Status",
    description:
      "Real-time checks against global threat feeds to keep your domains and IPs off blacklists and spam filters.",
    icon: "/block.webp",
  },
  {
    title: "Spam Scanner",
    description:
      "Filters phishing attempts and unwanted mail before they ever reach an inbox, trained on live threat data.",
    icon: "/spam.webp",
  },
] as const;

export const darkServices = [
  {
    title: "Data Encryption",
    description:
      "End-to-end encryption for files, backups and communications, so intercepted data stays unreadable to anyone but you.",
    icon: "/data-encryption.webp",
    layout: "big" as const,
  },
  {
    title: "Network Security",
    description:
      "Firewall rules, intrusion detection and traffic monitoring tuned to your infrastructure.",
    icon: "/network-security.webp",
    layout: "row" as const,
  },
  {
    title: "Spam Scanner",
    description:
      "Heuristic and signature-based scanning stops spam, phishing and malware-laden mail at the gateway.",
    icon: "/spam.webp",
    layout: "row" as const,
  },
  {
    title: "Blocklist Security",
    description:
      "Automated delisting support and reputation monitoring across major email and web blocklists.",
    icon: "/block.webp",
    layout: "default" as const,
  },
  {
    title: "Cloud Security",
    description:
      "Configuration audits and access controls for your cloud workloads, storage and identity providers.",
    icon: "/cloud-security.webp",
    layout: "default" as const,
  },
  {
    title: "Mobile Security",
    description:
      "Device posture checks, app vetting and remote-wipe policies to protect data on the move.",
    icon: "/mobile-security.webp",
    layout: "default" as const,
  },
] as const;

export const pricingPlans = [
  {
    name: "Basic",
    description:
      "Essential protection for small teams just getting their security baseline in place.",
    price: 99,
    popular: false,
  },
  {
    name: "Premium",
    description:
      "Full-stack monitoring and response for growing businesses with sensitive data.",
    price: 199,
    popular: true,
  },
  {
    name: "Vulnerability",
    description:
      "Deep-dive penetration testing and vulnerability management for enterprise estates.",
    price: 399,
    popular: false,
  },
] as const;

export const pricingFeatures = [
  "Regular software updates",
  "Antivirus and anti-malware",
  "Email security and spam filtering",
  "Firewall setup and configuration",
] as const;

export const blogPosts = [
  {
    featured: true,
    title: "From Risk to Resilience, Exploring The Power of Cyber Security",
    author: "John Doe",
    date: "June 19, 2025",
    tag: "Tips & Trick",
    excerpt:
      "A practical look at how organisations move from reactive firefighting to a resilient security posture — and the habits that make the difference along the way.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=860&h=560&fit=crop",
  },
  {
    featured: false,
    title: "The Evolution of Cyber Security, Adapting to Emerging Threats",
    author: "John Doe",
    date: "June 19, 2025",
    excerpt:
      "Threats don't stand still, and neither can your defences. Here's how modern security teams keep pace with attackers.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=860&h=560&fit=crop",
  },
  {
    featured: false,
    title: "How Cyber Security Services Safeguard Your Business",
    author: "John Doe",
    date: "June 19, 2025",
    excerpt:
      "From endpoint monitoring to incident response retainers, a look at the services doing the quiet work behind the scenes.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=860&h=560&fit=crop",
  },
  {
    featured: false,
    title: "Unlocking The Secrets of Effective Cyber Security Services",
    author: "John Doe",
    date: "June 19, 2025",
    excerpt:
      "What separates a security partner that prevents incidents from one that simply reports on them after the fact.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=860&h=560&fit=crop",
  },
] as const;

export const socialLinks = [
  { href: "#", label: "Facebook", icon: FaFacebookF },
  { href: "#", label: "X", icon: FaXTwitter },
  { href: "#", label: "YouTube", icon: FaYoutube },
  { href: "#", label: "LinkedIn", icon: FaLinkedin },
] as const;
