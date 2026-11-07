import { RoleProvider } from "@/components/RoleContext";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ProofStrip from "@/components/ProofStrip";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Journey from "@/components/Journey";
import Recognition from "@/components/Recognition";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";

export default function Page() {
  return (
    <RoleProvider>
      <Nav />
      <main>
        <Hero />
        <ProofStrip />
        <Projects />
        <Skills />
        <Journey />
        <Recognition />
        <Certificates />
        <Contact />
      </main>
    </RoleProvider>
  );
}
