import {Fragment} from "react";
//Components
import Hero from "@components/hero/Hero";
import Centered2x2 from "@components/features/Centered2x2";
import TwoColumnDark from "@components/features/TwoColumnDark";
import SimpleCentered from "@components/testimonials/SimpleCentered";
import {useTranslations} from 'next-intl';

//Locales/Data


// Icons

// Images
import image4 from "/public/images/homepage/photo1.jpeg";
import Newsletter from "../components/newsletter/CTA1";
import ProductScreenshot from "@components/features/ProductScreenshot";

export default function Page() {

  const t = useTranslations('index');
  return (
        <Fragment>
            <Hero/>

            {/* Services */}
            <Centered2x2
              heading = {t('services.heading')}
              title = {t('services.title')}
              paragraph = {t('services.paragraph')}
              button1 = {t('services.button.title')}
              button2 = {t('services.button.link')}
            />

            {/* About Us */}
            <ProductScreenshot
              heading={t('about.heading')}
              title={t('about.title')} 
              paragraph={t('about.paragraph.one')}
              image={image4}
            />

            {/* Why Choose Us */}
            {/* <TwoColumnDark
              heading={language.index.mission.heading}
              title={language.index.mission.title}
              paragraph1={language.index.mission.paragraph1}
              paragraph2={language.index.mission.paragraph2}
              paragraph3={language.index.mission.paragraph3}
              paragraph4={language.index.mission.paragraph4}
            /> */}

            {/* Testimonial */}
            <SimpleCentered
              name={t('testimonials.name')}
              title={t('testimonials.title')}
              paragraph={t('testimonials.paragraph')}
              position={t('testimonials.position')}
            />
            

            {/* Newsletter */}
            {/* <Newsletter
              heading={language.index.newsletter.heading}
              title={language.index.newsletter.title}
              sentence={language.index.newsletter.sentence}
              button={language.index.newsletter.button.title}
              buttonLink={language.index.newsletter.button.link}
              background="bg-back-2"
            /> */}
        </Fragment>
  );
}
