import FadeInSection from "../FadeInView";
import MailList from "./mail-list";

export default function MailListAdd() {
    return (
         <FadeInSection>
      <section className="pb-10 w-full">
      <div className="pb-4">
          <h2 className="text-2xl py-4 font-bold tracking-tighter text-primary">
            Mail List
          </h2>
          <p>Any updates about my projects or new components go here.</p>
     </div>
      <MailList/>
      </section>
    </FadeInSection>
      
    )
}