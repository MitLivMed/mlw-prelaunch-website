import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
}

const SITE_URL = "https://mitlivmed.dk";
const DEFAULT_TITLE = "MitLivMed | Fællesskab for mennesker med bipolar";
const DEFAULT_DESCRIPTION =
  "Hverdagen efter diagnosen er den svære del. MitLivMed er et peer-support fællesskab, hvor mennesker med bipolar deler det, der faktisk hjælper. Åbner 2026.";

const SEO = ({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  noIndex = false,
}: SEOProps) => {
  const pageTitle = title ? `${title} | MitLivMed` : DEFAULT_TITLE;
  const canonicalUrl = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
    </Helmet>
  );
};

export default SEO;
