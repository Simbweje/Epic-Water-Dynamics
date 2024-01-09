import { MailIco, HomeIcon, PhoneIcon, MailIcon } from "lucide-react";

const Contact = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg-lg mb-4">
              <span className="w=[30px] h-[2px] bg-primary"></span>
              Hello
            </div>
            <h1 className="h1 max-w-md mb-8">Let's work together</h1>
            <p className="subtitle max-w-[400px]">
              We are a passionate team of scientists, engineers and managers
            </p>
          </div>
          <div className="hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat"></div>
        </div>
        <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
          <div className="flex flex-col gap-y-4 xl:gap-y-14">
            <div className="flex items-center gap-x-8">
              <MailIcon size={18} className="text-primary" />
              <div>info@epicwaterdynamic.com</div>
            </div>
          </div>
          <div className="flex flex-col gap-y-4 xl:gap-y-14">
            <div className="flex items-center gap-x-8">
              <MailIcon size={18} className="text-primary" />
              <div>info@epicwaterdynamic.com</div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-x-8">
              <MailIcon size={18} className="text-primary" />
              <div>info@epicwaterdynamic.com</div>
            </div>
          </div>
          <form>form</form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
