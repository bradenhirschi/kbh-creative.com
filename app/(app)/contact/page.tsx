import ContactForm from "./contact-form";
import { HiOutlineMail } from "react-icons/hi";

const ContactPage = () => {
  return (
    <main className="py-28 px-60">
      <section className="grid grid-cols-3 border border-black bg-stone-200">
        <div className="bg-lime-700/50 m-2 p-4">
          <h4>Get in touch!</h4>
          <p className="mb-4">
            Contact us to see how KBH Creative can help grow your business.
          </p>
          <div className="flex justify-center items-center">
            <HiOutlineMail />
            <div className="ml-2">info@kbh-creative.com</div>
          </div>
        </div>
        <div className="col-span-2">
          <ContactForm />
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
