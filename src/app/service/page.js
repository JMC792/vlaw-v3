import {Fragment} from "react";
import {useTranslations} from 'next-intl';

//Components
import Hero2 from "src/components/hero/Hero2.js";
import OffsetList from "src/components/features/OffsetList.js";
import Centered2x2 from "src/components/features/Centered2x2";

//Locales
import service from "public/locales/english/services.json";

//images



export const metadata = {
  title: 'Service',
  description: '...',
}


export default function Page() {
  const t = useTranslations('index');
  return (
        <Fragment>
            <Hero2 
              heroTitle={t('services.heading')}
              heroSubtitle={service.hero.subtitle}
              background={"bg-back-about"}
            />
            {/* <OffsetList
              heading={service.section1.heading}
              title={service.section1.title}
              paragraph={service.section1.paragraph}
            /> */}
            <Centered2x2
              heading = {t('services.heading')}
              title = {t('services.title')}
              paragraph = {t('services.paragraph')}
              button1 = {t('services.button.title')}
              button2 = {t('services.button.link')}
            />
        </Fragment>
  );
}
