// components/SocialLinks.js
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const SocialLinks = () => {
  const socialMedia = [
    {
      href: "https://facebook.com",
      icon: <Facebook className="w-6 h-6" />,
      label: "Facebook",
    },
    {
      href: "https://twitter.com",
      icon: <Twitter className="w-6 h-6" />,
      label: "Twitter",
    },
    {
      href: "https://instagram.com",
      icon: <Instagram className="w-6 h-6" />,
      label: "Instagram",
    },
    {
      href: "https://linkedin.com",
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
    },
  ];

  return (
    <div className="flex space-x-4 items-center mt-3">
      {socialMedia.map((social, index) => (
        <Link
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-blue-500 transition-all hover:scale-110"
          aria-label={social.label}
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
