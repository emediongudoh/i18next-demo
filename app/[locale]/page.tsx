import initTranslations from '../i18n'

type Params = {
  params: {
    locale: string;
  };
};

export default async function Home({ params: { locale }}: Params) {
  const { t } = await initTranslations(locale, ['common'])

  return (
    <h2>{t('greeting')}</h2>
  );
}
