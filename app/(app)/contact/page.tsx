import ContactForm from "./contact-form";
import { HiOutlineMail } from "react-icons/hi";

const ContactPage = () => {
  return (
    <main className="py-28 px-responsive">
      <section className="grid md:grid-cols-3 mx-auto border border-black bg-stone-200 max-w-4xl">
        <div className="bg-lime-700/30 m-2 p-4">
          <h4>Get in touch!</h4>
          <p className="mb-4">
            Contact us to see how KBH Creative can help grow your business.
          </p>
          <div className="flex justify-center items-center">
            <HiOutlineMail />
            <div className="ml-2">info@kbh-creative.com</div>
          </div>
        </div>
        <div className="md:col-span-2">
          <ContactForm />
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
