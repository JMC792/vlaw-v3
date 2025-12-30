import { Fragment } from "react";
import {useTranslations} from 'next-intl';

//locales
import about from "public/locales/english/about.json";
import language from "public/locales/english/homepage.json";

// Components
import Hero2 from "../../components/hero/Hero2.js";
import ProductScreenshot from "src/components/features/ProductScreenshot.js";
import TwoColumnDark from "src/components/features/TwoColumnDark.js";
import Newsletter from "src/components/newsletter/CTA1.js";

//Images
import image4 from "/public/images/homepage/photo1.jpeg";

//SVG


export const metadata = {
  title:"About Us"
}

export default function Page() {

  const t = useTranslations('index');
  return (
    <Fragment>
      <Hero2 
        heroTitle={t('about.heading')}
        heroSubtitle={about.hero.subtitle}  
        background={"bg-back-about"}
      />
      <ProductScreenshot
        heading={t('about.heading')}
        title={t('about.title')} 
        paragraph={t('about.paragraph.one')}
        image={image4}
      />
      {/* <TwoColumnDark
        heading={language.index.mission.heading}
        title={language.index.mission.title}
        paragraph1={language.index.mission.paragraph1}
        paragraph2={language.index.mission.paragraph2}
        paragraph3={language.index.mission.paragraph3}
        paragraph4={language.index.mission.paragraph4}
      /> */}
    </Fragment>
  );
}
