import { useSearchParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { FundStatus } from "@/components/donation/FundStatus";
import { getSessionStatus } from "@/lib/donations";

const DonationReturn = () => {
  const [params] = useSearchParams();
  const sessionId = params.get("session_id");

  const { data, isLoading, isError } = useQuery({
    queryKey: ["session-status", sessionId],
    queryFn: () => getSessionStatus(sessionId as string),
    enabled: Boolean(sessionId),
    retry: 1,
  });

  const complete = data?.status === "complete";

  return (
    <div className="min-h-screen bg-warm-white">
      <SEO
        title="Tak for din støtte"
        description="Kvittering for dit støttebidrag til MitLivMed."
        path="/donation/retur"
      />
      <Header />
      <main className="mx-auto flex min-h-[60vh] max-w-lg flex-col items-center justify-center px-6 py-24 text-center">
        {!sessionId || isError ? (
          <>
            <h1 className="font-title text-3xl font-semibold text-soft-black">
              Vi kunne ikke bekræfte betalingen
            </h1>
            <p className="mt-3 text-text-medium">
              Hvis beløbet er trukket, modtager du en kvittering på e-mail. Ellers
              prøv igen.
            </p>
          </>
        ) : isLoading ? (
          <p className="text-text-medium">Bekræfter din betaling…</p>
        ) : complete ? (
          <>
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-mountain-orange">
              <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="white" strokeWidth="2.5">
                <polyline points="4,12 10,18 20,6" />
              </svg>
            </div>
            <h1 className="font-title text-3xl font-semibold text-soft-black md:text-4xl">
              Tak for din støtte
            </h1>
            <p className="mt-3 max-w-md text-text-medium">
              Dit bidrag går direkte til at give et andet menneske adgang til
              fællesskabet. Du modtager en kvittering på e-mail.
            </p>
            <FundStatus className="mt-6 text-sm text-text-medium" />
          </>
        ) : (
          <>
            <h1 className="font-title text-3xl font-semibold text-soft-black">
              Betalingen blev ikke gennemført
            </h1>
            <p className="mt-3 text-text-medium">
              Der blev ikke trukket noget beløb. Du er velkommen til at prøve igen.
            </p>
          </>
        )}

        <Link
          to="/stoettemedlemskab"
          className="mt-8 inline-block rounded-md border-[1.5px] border-mountain-orange px-7 py-[11px] font-body text-sm font-medium text-mountain-orange transition-colors hover:bg-mountain-orange/5"
        >
          Tilbage til støttemedlemskab
        </Link>
      </main>
      <Footer />
    </div>
  );
};

export default DonationReturn;
