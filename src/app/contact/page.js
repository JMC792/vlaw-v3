import { Fragment } from "react";
import {useTranslations} from 'next-intl';

//Components
import Hero2 from "src/components/hero/Hero2.js";
import Form3 from "src/components/forms/Form3.js";

//Locales
import layout from "public/locales/english/layout.json";
import contact from "public/locales/english/contact.json";

//SVG


// Images

export const metadata = {
  title: "Contact Us",
  description: [contact.metadata.description],
}


export default function Page() {

  const t = useTranslations('index');

  return (
    <Fragment>
      <Hero2 
        heroTitle={t('contact.heading')}
        heroSubtitle={contact.hero.subtitle}
        background={"bg-back-about"}
      />
      <Form3
        title = {contact.form.title}
        paragraph = {t('contact.paragraph')}
        phone = {layout.number}
        email = {layout.email}
      />
      {/* <Stat
          service = {[
              // Phone Number
              [
                contact.stat.one.title,
                contact.stat.one.phone1,
                contact.stat.one.phone2,
                phone,
                contact.stat.one.alt
              ],
              // Address
              [
                contact.stat.two.title,
                contact.stat.two.address1,
                contact.stat.two.address2,
                customer,
                contact.stat.two.alt
              ],
              //Open Hours
              [
                contact.stat.three.title,
                contact.stat.three.date,
                contact.stat.three.time,
                tick,
                contact.stat.three.alt
              ],
          ]}
      /> */}
    </Fragment>
  );
}
