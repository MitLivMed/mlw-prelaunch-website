import Header from "@/components/Header";
import Footer from "@/components/Footer";
import wavesImage from "@/assets/waves-trans.png";

const Cookies = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Film grain overlay */}
      <div className="film-grain" aria-hidden="true" />

      {/* Skip link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-md"
      >
        Spring til indhold
      </a>

      <Header />

      <main id="main-content" className="relative py-16 md:py-24 overflow-hidden">
        {/* Waves background */}
        <div className="absolute inset-0">
          <img
            src={wavesImage}
            alt=""
            className="w-full h-full object-cover opacity-90"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-8">
              Cookiepolitik
            </h1>

            <p className="font-body text-text-medium leading-relaxed">
              Denne side er under udarbejdelse.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cookies;
