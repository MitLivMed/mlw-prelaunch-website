import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { DonationDialog } from "@/components/donation/DonationDialog";
import { FundStatus } from "@/components/donation/FundStatus";

const HUBSPOT_LINK =
  "https://meetings-eu1.hubspot.com/jesper24/mitlivmed";

const SupportMembership = () => {
  const [donationOpen, setDonationOpen] = useState(false);
  const [presetAmount, setPresetAmount] = useState<number | undefined>(undefined);

  const openDonation = (amount?: number) => {
    setPresetAmount(amount);
    setDonationOpen(true);
  };

  return (
    <div className="min-h-screen bg-warm-white">
      <SEO
        title="Støttemedlemskab"
        description="Bliv støttemedlem i MitLivMed. Din betaling åbner døre for andre – du betaler for dig selv og giver adgang til fællesskabet for et andet menneske."
        path="/stoettemedlemskab"
      />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-md"
      >
        Spring til indhold
      </a>

      <Header />

      <main id="main-content">
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#F2EAE0] px-6 py-16 pt-28 text-center md:px-12 md:py-20 md:pt-36">
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-mountain-orange-10 opacity-35 md:h-72 md:w-72" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 h-52 w-52 rounded-full bg-plain-green-30 opacity-60 md:h-56 md:w-56" />

          <p className="relative mb-4 text-[11px] font-semibold uppercase tracking-[2px] text-mountain-orange">
            Månedligt støttemedlemskab
          </p>
          <h1 className="relative mx-auto mb-5 max-w-lg font-title text-4xl font-semibold leading-[1.1] text-soft-black md:text-5xl">
            Din betaling
            <br />
            åbner døre
            <br />
            for <em className="text-mountain-orange">andre</em>
          </h1>
          <p className="relative mx-auto mb-9 max-w-[520px] text-base leading-relaxed text-text-medium">
            Som støttemedlem betaler du ikke kun for dig selv. Du giver adgang
            til fællesskabet for et andet menneske, der ikke havde råd. Hver
            eneste måned.
          </p>
          <div className="relative flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => { openDonation(); }}
              className="inline-block rounded-md bg-mountain-orange px-8 py-3.5 font-body text-[15px] font-medium text-white transition-colors hover:bg-mountain-orange-110"
            >
              Bliv støttemedlem →
            </button>
            <a
              href="#scholarship"
              className="inline-block rounded-md border-[1.5px] border-mountain-orange px-7 py-[11px] font-body text-sm font-medium text-mountain-orange transition-colors hover:bg-mountain-orange/5"
            >
              Søg stipendium
            </a>
          </div>
        </section>

        {/* Impact Bar */}
        <div className="flex flex-wrap items-center justify-around gap-4 bg-mountain-orange px-6 py-7 md:px-12">
          <ImpactItem number="2.700+" label="Medlemmer i fællesskabet" />
          <ImpactDivider />
          <ImpactItem number="45M+" label="Europæere lever med bipolar" />
          <ImpactDivider />
          <ImpactItem number="100%" label="Stipendier finansieret af støttemedlemmer" />
          <ImpactDivider />
          <ImpactItem number="gratis" label="Community-adgang for alle" />
        </div>

        {/* Cause + Benefits */}
        <section className="bg-plain-green-30 px-6 py-14 md:px-12">
          <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2 md:gap-12">
            {/* Left: Cause */}
            <div>
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[2px] text-mountain-orange">
                Hvorfor det betyder noget
              </p>
              <h2 className="mb-4 font-title text-[28px] font-semibold leading-[1.2] text-soft-black md:text-[30px]">
                At leve godt med bipolar starter med at{" "}
                <em className="text-mountain-orange">vide</em>, at man ikke er
                alene
              </h2>
              <p className="text-sm leading-[1.75] text-text-medium">
                De fleste der søger hjælp efter en bipolar diagnose finder
                generelle sundhedsapps, lange ventelister, eller
                Facebook-grupper uden struktur. MitLivMed er skabt til det liv,
                der sker efter diagnosen.
              </p>

              <div className="my-5 rounded-r-md border-l-[3px] border-mountain-orange bg-warm-white px-5 py-4">
                <p className="font-title text-lg italic leading-snug text-soft-black">
                  "Jeg ledte ikke efter behandling. Jeg ledte efter nogen der{" "}
                  <strong>kendte det</strong>."
                </p>
                <cite className="mt-2 block text-[11px] not-italic text-text-light">
                  Betatester, 34 år, diagnosticeret 2021
                </cite>
              </div>

              <p className="text-sm leading-[1.75] text-text-medium">
                Som støttemedlem er dit bidrag direkte årsagen til, at et andet
                menneske kan få adgang til fællesskab og struktureret støtte,
                selvom deres økonomi ikke tillader det.
              </p>
            </div>

            {/* Right: Benefits */}
            <div>
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[2px] text-mountain-orange">
                Hvad du får som støttemedlem
              </p>
              <h2 className="mb-4 font-title text-[28px] font-semibold leading-[1.2] text-soft-black md:text-[30px]">
                Fællesskab, indhold og{" "}
                <em className="text-mountain-orange">fordele</em>
              </h2>
              <ul className="mt-1 list-none">
                <BenefitItem>
                  <strong>6–12 arrangementer om året</strong> på tværs af
                  Danmark, fysisk og online
                </BenefitItem>
                <BenefitItem>
                  <strong>Månedligt nyhedsbrev</strong> med indsigt, erfaringer
                  og ny viden fra fællesskabet
                </BenefitItem>
                <BenefitItem>
                  <strong>20% rabat på merchandise</strong> fra MitLivMed
                </BenefitItem>
                <BenefitItem>
                  <strong>Tidlig adgang og besparelser</strong> på kommende
                  selvhjælpsgrupper og kliniske partnerskaber (2026)
                </BenefitItem>
                <BenefitItem last>
                  <strong>Du finansierer stipendier</strong> til dem, der ikke
                  kan betale. Dit beløb gør en direkte forskel
                </BenefitItem>
              </ul>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="bg-warm-white px-6 py-14 md:px-12">
          <div className="mx-auto max-w-3xl">
            <div className="mb-9 text-center">
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[2px] text-mountain-orange">
                Vælg dit bidrag
              </p>
              <h2 className="font-title text-[28px] font-semibold leading-[1.2] text-soft-black md:text-[30px]">
                Minimum 50 kr/md. Betal hvad du kan.
              </h2>
              <p className="mx-auto mt-2 max-w-[460px] text-sm leading-[1.75] text-text-medium">
                Der er ingen forkert pris. Ethvert beløb over minimumsgrænsen
                går direkte til stipendiepuljen.
              </p>
              <FundStatus className="mx-auto mt-3 max-w-[460px] text-sm text-text-medium" />
            </div>

            <div className="mb-4 grid gap-4 md:grid-cols-3">
              <PriceCard
                amount={50}
                description={"Grundbidrag.\nGiver adgang til fællesskabet."}
                onSelect={openDonation}
              />
              <PriceCard
                amount={75}
                description={"Dækker dig selv\n+ bidrager til én anden."}
                featured
                onSelect={openDonation}
              />
              <PriceCard
                amount={100}
                description={"Stærkt bidrag.\nGiver to andre adgang."}
                onSelect={openDonation}
              />
            </div>

            <button
              type="button"
              onClick={() => { openDonation(); }}
              className="w-full rounded-lg border-[1.5px] border-dashed border-[#E8DDD2] bg-warm-white px-5 py-4 text-center text-[13px] text-text-medium transition-colors hover:border-mountain-orange"
            >
              Vil du bidrage med mere?{" "}
              <strong className="text-mountain-orange">
                Vælg selv dit beløb
              </strong>{" "}
              fra 50 kr/md ved tilmelding. Alle beløb over bundniveau går
              uafkortet til stipendier.
            </button>
          </div>
        </section>

        {/* Scholarship */}
        <div
          id="scholarship"
          className="flex flex-col items-start gap-4 border-t border-[#E8DDD2] bg-[#F2EAE0] px-6 py-5 sm:flex-row sm:items-center md:px-12"
        >
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-mountain-orange-10">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M10 2L12.5 7.5H18L13.5 11L15.5 17L10 13.5L4.5 17L6.5 11L2 7.5H7.5L10 2Z"
                fill="#BF5B39"
                opacity="0.7"
              />
            </svg>
          </div>
          <p className="text-[13px] leading-relaxed text-text-medium">
            <strong className="text-soft-black">Kan du ikke betale?</strong>{" "}
            Community-adgang er altid gratis, uden ansøgning. Circle-pakken
            (ugentlige gruppeforløb) er tilgængelig via vores stipendieprogram
            for dem der ikke kan betale.{" "}
            <a
              href={HUBSPOT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-mountain-orange underline"
            >
              Skriv til os →
            </a>
          </p>
        </div>

        {/* CTA */}
        <section className="relative overflow-hidden bg-soft-black px-6 py-14 text-center md:px-12">
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-mountain-orange/15" />

          <h2 className="relative mx-auto mb-3.5 max-w-lg font-title text-3xl font-semibold text-white md:text-4xl">
            Vær med til at bygge
            <br />
            noget <em className="text-mountain-orange-30">der virker</em>
          </h2>
          <p className="relative mx-auto mb-8 max-w-[460px] text-[15px] leading-relaxed text-white/65">
            Støttemedlemskabet starter med bipolar. Vi udvider snart til angst,
            depression, ADHD, OCD og PTSD.
          </p>
          <div className="relative">
            <button
              type="button"
              onClick={() => { openDonation(); }}
              className="inline-block rounded-md bg-mountain-orange px-10 py-4 font-body text-base font-medium text-white transition-colors hover:bg-mountain-orange-110"
            >
              Bliv støttemedlem i dag →
            </button>
          </div>
          <p className="relative mt-4 text-xs text-white/40">
            Opsig når som helst. Ingen binding.
          </p>
        </section>
      </main>

      <Footer />

      <DonationDialog
        open={donationOpen}
        onOpenChange={setDonationOpen}
        initialAmount={presetAmount}
      />
    </div>
  );
};

function ImpactItem({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center">
      <div className="font-title text-2xl font-semibold leading-none text-white md:text-[32px]">
        {number}
      </div>
      <div className="mt-1 text-[11px] font-medium uppercase tracking-[0.8px] text-white/75">
        {label}
      </div>
    </div>
  );
}

function ImpactDivider() {
  return (
    <div className="hidden h-10 w-px bg-white/20 self-stretch md:block" />
  );
}

function BenefitItem({
  children,
  last,
}: {
  children: React.ReactNode;
  last?: boolean;
}) {
  return (
    <li
      className={`flex items-start gap-2.5 py-2.5 text-sm leading-snug text-soft-black ${
        last ? "" : "border-b border-[#E8DDD2]"
      }`}
    >
      <span className="mt-0.5 flex h-[22px] w-[22px] flex-shrink-0 items-center justify-center rounded-full bg-mountain-orange">
        <svg
          viewBox="0 0 12 12"
          className="h-3 w-3"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
        >
          <polyline points="2,6 5,9 10,3" />
        </svg>
      </span>
      <div>{children}</div>
    </li>
  );
}

function PriceCard({
  amount,
  description,
  featured,
  onSelect,
}: {
  amount: number;
  description: string;
  featured?: boolean;
  onSelect?: (amount: number) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect?.(amount)}
      className={`relative block w-full cursor-pointer rounded-lg border-[1.5px] px-5 py-6 text-center transition-all hover:border-mountain-orange hover:shadow-md ${
        featured
          ? "border-mountain-orange bg-mountain-orange-10"
          : "border-[#E8DDD2] bg-warm-white"
      }`}
    >
      {featured && (
        <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-mountain-orange px-2.5 py-0.5 text-[10px] font-semibold tracking-[0.5px] text-white">
          Mest valgt
        </span>
      )}
      <div className="font-title text-4xl font-semibold leading-none text-soft-black">
        {amount}
      </div>
      <div className="mb-2.5 mt-0.5 text-[13px] text-text-medium">
        kr / måned
      </div>
      <div className="whitespace-pre-line text-xs leading-snug text-text-medium">
        {description}
      </div>
    </button>
  );
}

export default SupportMembership;
