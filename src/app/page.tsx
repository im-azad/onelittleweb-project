import { Navbar }      from "@/components/layout/Navbar";
import { Hero }        from "@/components/sections/Hero";
import { Partners }    from "@/components/sections/Partners";
import { Services }    from "@/components/sections/Services";
import { Pricing }     from "@/components/sections/Pricing";
import { Tools }       from "@/components/sections/Tools";
import { Steps }       from "@/components/sections/Steps";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Testimonials }from "@/components/sections/Testimonials";
import { FAQ }         from "@/components/sections/FAQ";
import { Footer }      from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="partners">
          <Partners />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="pricing">
          <Pricing />
        </section>

        <section id="tools">
          <Tools />
        </section>

        <section id="steps">
          <Steps />
        </section>

        <section id="why">
          <WhyChooseUs />
        </section>

        <section id="testimonials">
          <Testimonials />
        </section>

        <section id="faq">
          <FAQ />
        </section>
      </main>

      <footer id="contact">
        <Footer />
      </footer>
    </div>
  );
}
