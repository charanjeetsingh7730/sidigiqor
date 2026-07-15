import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingChat from "../components/FloatingChat";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sidigiqor Technologies | Enterprise IT Consulting, Cyber Security & AI Systems",
  description: "Sidigiqor Technologies is a premier global IT consulting, cybersecurity audits (VAPT), custom AI/ML model developments, secure network firewalls, and digital transformation consulting. Optimizing business infrastructure across Delhi NCR, Baddi Industrial Area, Chandigarh Tricity, India, GCC, Europe, and the USA.",
  keywords: "Sidigiqor, IT Consulting India, Cybersecurity Audits VAPT, custom AI solutions, secure network firewalls, enterprise IT AMC, Baddi Industrial Area IT services, Chandigarh IT consulting, Delhi NCR cybersecurity, digital transformation USA Europe GCC",
  authors: [{ name: "Sidigiqor Technologies" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    title: "Sidigiqor Technologies | Enterprise IT Consulting, Cyber Security & AI Systems",
    description: "Global secure IT infrastructure architectures, custom software portals, enterprise AI models, and local regional IT AMC operations. Servicing Tricity, Delhi NCR, GCC, Europe & USA.",
    siteName: "Sidigiqor",
    url: "https://sidigiqor.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sidigiqor Technologies | Enterprise IT Consulting, Cyber Security & AI Systems",
    description: "Global secure IT infrastructure architectures, custom software portals, enterprise AI models, and local regional IT AMC operations. Servicing Tricity, Delhi NCR, GCC, Europe & USA.",
  }
};

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Sidigiqor Technologies",
  "description": "Sidigiqor is a premier global IT consulting, cybersecurity audits (VAPT), custom AI/ML model developments, secure network firewalls, and digital transformation consulting.",
  "url": "https://sidigiqor.com",
  "telephone": "+91-99115-39101",
  "priceRange": "$$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Ramgarh",
    "addressLocality": "Panchkula",
    "addressRegion": "Haryana",
    "postalCode": "134118",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "30.6915",
    "longitude": "76.8602"
  },
  "sameAs": [
    "https://www.linkedin.com/company/sidigiqor"
  ],
  "areaServed": [
    "Chandigarh Tricity",
    "Mohali",
    "Panchkula",
    "Baddi Industrial Belt",
    "Delhi NCR",
    "India",
    "GCC Countries",
    "Europe",
    "USA"
  ],
  "knowsAbout": [
    "Information Technology Consulting",
    "Cybersecurity Audits & Pen Testing",
    "Artificial Intelligence & Machine Learning Integration",
    "Computer Vision & Edge AI Analytics",
    "Political Campaign Technology & Constituency Analytics",
    "Annual Maintenance Contracts (AMC) for Enterprise Hardware"
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body className="min-h-screen bg-[#0a0a0a] text-gray-300 antialiased font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingChat />
      </body>
    </html>
  );
}
