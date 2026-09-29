import { experiences } from "@/utils/data/experience";
import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";

// schema.org Person data, so search engines can show a profile card.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personalData.name,
  jobTitle: personalData.designation,
  url: personalData.siteUrl,
  image: `${personalData.siteUrl}${personalData.profile}`,
  email: `mailto:${personalData.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bangalore",
    addressCountry: "IN",
  },
  worksFor: { "@type": "Organization", name: experiences[0].company },
  knowsAbout: ["React", "Next.js", "TypeScript", "JavaScript", "Redux Toolkit", "Node.js"],
  sameAs: [personalData.linkedIn, personalData.github, personalData.stackOverflow],
};

export default function Home() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <ContactSection />
    </div>
  );
}
