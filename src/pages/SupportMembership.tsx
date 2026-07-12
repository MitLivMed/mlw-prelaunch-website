import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { DonationDialog } from "@/components/donation/DonationDialog";

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
        description="Bliv støttemedlem i MitLivMed. Som støttemedlem er du med til at holde fællesskabet kørende og sikre, at mennesker med bipolar ikke behøver stå alene med det."
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
        <section className="relative overflow-hidden bg-warm-white px-6 py-16 pt-28 text-center md:px-12 md:py-20 md:pt-36">

          <p className="relative mb-4 text-[11px] font-semibold uppercase tracking-[2px] text-mountain-orange">
            Månedligt støttemedlemskab
          </p>
          <h1 className="relative mx-auto mb-5 max-w-2xl font-title text-4xl font-semibold leading-[1.1] text-soft-black md:text-5xl">
            At leve med bipolar er svært.
            <br />
            At finde ud af det alene er{" "}
            <em className="text-mountain-orange">sværere</em>.
          </h1>
          <p className="relative mx-auto mb-9 max-w-[520px] text-base leading-relaxed text-text-medium">
            Som støttemedlem er du med til at holde fællesskabet kørende og
            sikre, at mennesker med bipolar ikke behøver stå alene med det. Dit
            bidrag skaber events, artikler, videoer og fællesskabet.
          </p>
          <div className="relative flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => { openDonation(); }}
              className="inline-block rounded-md bg-mountain-orange px-8 py-3.5 font-body text-[15px] font-medium text-white transition-colors hover:bg-mountain-orange-110"
            >
              Bliv støttemedlem →
            </button>
          </div>
        </section>

        {/* Impact Bar */}
        <div className="flex flex-wrap items-center justify-around gap-4 bg-mountain-orange px-6 py-7 md:px-12">
          <ImpactItem number="55.000" label="Danskere med bipolar" />
          <ImpactDivider />
          <ImpactItem number="20%" label="Dør ved selvmord" />
          <ImpactDivider />
          <ImpactItem number="100%" label="Gratis fællesskabsadgang" />
        </div>

        {/* Cause + Benefits */}
        <section className="bg-lake-blue-10 px-6 py-14 md:px-12">
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
                litteratur, ressourcer fra sundhedssystemet eller
                Facebook-grupper. Det hjælper, men det er svært at finde
                mennesker du kan spejle dig i. MitLivMed er bygget til dem der
                vil trives med bipolar, ikke bare overleve det.
              </p>

              <div className="my-5 rounded-r-md border-l-[3px] border-mountain-orange bg-warm-white px-5 py-4">
                <p className="font-title text-lg italic leading-snug text-soft-black">
                  "Jeg ledte ikke efter behandling. Jeg ledte efter nogen der{" "}
                  <strong>kendte det</strong>."
                </p>
                <cite className="mt-2 block text-[11px] not-italic text-text-light">
                  Kvinde, 34 år, diagnosticeret 2021
                </cite>
              </div>

              <p className="text-sm leading-[1.75] text-text-medium">
                Som støttemedlem sikrer du at folk med bipolar finder
                fællesskab og støtte når de har brug for det mest.
              </p>
            </div>

            {/* Right: Benefits */}
            <div>
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[2px] text-mountain-orange">
                Hvad et støttemedlemskab giver
              </p>
              <h2 className="mb-4 font-title text-[28px] font-semibold leading-[1.2] text-soft-black md:text-[30px]">
                Fællesskab, indhold og{" "}
                <em className="text-mountain-orange">værdi</em>
              </h2>
              <ul className="mt-1 list-none">
                <BenefitItem>
                  <strong>3–5 arrangementer om året</strong> på tværs af
                  Danmark, fysisk og online
                </BenefitItem>
                <BenefitItem>
                  <strong>Artikler og videoer</strong> om livet med bipolar der
                  gør en forskel
                </BenefitItem>
                <BenefitItem>
                  <strong>Månedligt nyhedsbrev</strong> med indsigter,
                  erfaringer og ny viden fra fællesskabet
                </BenefitItem>
                <BenefitItem>
                  <strong>20% rabat på merchandise</strong> fra MitLivMed
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
                Der er ingen forkert pris.
                <br />
                Mange små bidrag = én stor forskel.
                <br />
                Opsig når som helst. Ingen binding.
              </p>
            </div>

            <div className="mb-4 grid gap-4 md:grid-cols-3">
              <PriceCard
                amount={50}
                description={"Du er med til at holde\nfællesskabet kørende."}
                onSelect={openDonation}
              />
              <PriceCard
                amount={75}
                description={"Du støtter fællesskabet\nog fortsætter udviklingen."}
                featured
                onSelect={openDonation}
              />
              <PriceCard
                amount={100}
                description={"Størst bidrag.\nDu gør en mærkbar forskel for flere."}
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
              fra 50 kr/md ved tilmelding.
            </button>
          </div>
        </section>

        {/* Active support */}
        <div
          id="active-support"
          className="flex flex-col items-start gap-4 border-t border-[#E8DDD2] bg-desert-yellow-30/50 px-6 py-5 sm:flex-row sm:items-center md:px-12"
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
            <strong className="text-soft-black">
              Vil du gøre mere end at bidrage økonomisk?
            </strong>{" "}
            Vi vil altid gerne høre fra mennesker der vil være med til at bygge
            noget der betyder noget.{" "}
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

          <h2 className="relative mx-auto mb-3.5 max-w-lg font-title text-3xl font-semibold text-white md:text-4xl">
            Vær med til at bygge
            <br />
            noget <em className="text-mountain-orange-30">der virker</em>
          </h2>
          <p className="relative mx-auto mb-8 max-w-[460px] text-[15px] leading-relaxed text-white/65">
            Støttemedlemskabet starter med bipolar. Vi udvider snart til angst,
            depression, ADHD og PTSD.
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

function BenefitItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-2.5 py-2.5 text-sm leading-snug text-soft-black">
      <span className="flex h-[22px] w-[22px] flex-shrink-0 items-center justify-center rounded-full bg-mountain-orange">
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
