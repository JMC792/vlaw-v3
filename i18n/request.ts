import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

export default getRequestConfig(async () => {
  const cookieStore = cookies();
  const locale = cookieStore.get('locale')?.value || 'en';

  const messagesModule = await import(`../messages/${locale}.json`);
  const messages = messagesModule.default || messagesModule;

  return {
    locale,
    messages
  };
});
