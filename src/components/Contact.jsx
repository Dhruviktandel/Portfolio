import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import SectionHeader from "./SectionHeader";

const Contact = () => {
  return (
    <section id="contact" className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        {/* header */}
        <SectionHeader text="Contact Me" para="Have a project in mind?" />

        {/* two comuns */}
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {/* left */}
          <ContactInfo />

          {/* right */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
