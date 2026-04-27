import Image from "next/image";
import Navbar from "@/components/Navbar";

const services = [
  {
    img: "/Pictures/dsc03280-enhanced-nr-1430994315.jpg",
    price: "da €35 / lezione",
    title: "Pilates Reformer",
    sub: "Balance Base · Intermedio · Power Dynamic",
    desc: "Allenamento su macchine professionali silenziose e moderne con il metodo Reform Your Body. Tre livelli per ogni obiettivo.",
  },
  {
    img: "/Pictures/dsc03271-enhanced-nr-421884195.jpg",
    price: "da €30 / lezione",
    title: "California Barre",
    sub: "Signature · Stretch · Yin Yoga · Cardio",
    desc: "Il metodo di Sophia Jeremiasz: Pilates, yoga e fitness in un unico allenamento elegante alla sbarra. Quattro varianti per ogni esigenza.",
  },
  {
    img: "/Pictures/dsc03275-enhanced-nr-294984611.jpg",
    price: "da €20 / lezione",
    title: "Mat Pilates",
    sub: "L'arte del movimento consapevole",
    desc: "Trasforma il corpo attraverso la respirazione e il lavoro profondo sul core. Una pratica accessibile a tutti i livelli.",
  },
  {
    img: "/Pictures/dsc03295-enhanced-nr-15886530.jpg",
    price: "da €20 / lezione",
    title: "Beauty Center",
    sub: "Trattamenti viso · Corpo · Benessere",
    desc: "Un centro estetico professionale all'interno dello studio. Trattamenti Germaine de Capuccini per prenderti cura di tutto te stesso.",
  },
];

const team = [
  {
    name: "Alessia Lupi",
    role: "Pilates Reformer & California Barre",
    bio: "Ex nuotatrice agonista, ha trasformato la sua esperienza atletica in un approccio unico all'insegnamento. Ha portato il California Barre a Sanremo ed è laureanda in Scienze Motorie.",
    cert: "Certificata Pilates Reformer · California Barre · Nuoto",
  },
  {
    name: "Alice Farina",
    role: "Pilates Matwork & Reformer · Yoga",
    bio: "Laureata in Scienze Motorie (LM-67) con due anni di studi osteopatici. Il suo approccio: ogni esercizio ha una fondazione scientifica — massima efficacia, zero rischi.",
    cert: "Certificata Pilates Matwork & Reformer · Yoga · Osteopatia",
  },
  {
    name: "Marta Jureczko",
    role: "Pilates Reformer & California Barre",
    bio: "Danzatrice professionista diplomata alla Scuola Statale di Danza Classica di Poznań. Solista in Europa, al Festival di Sanremo e su navi da crociera in Asia e Medio Oriente.",
    cert: "Certificata Pilates Reformer · California Barre · Danza Classica",
  },
];

const pricing = [
  { name: "Pilates Reformer", s: "€35", p5: "€160", p10: "€290", p20: "€530" },
  { name: "California Barre", s: "€30", p5: "€135", p10: "€250", p20: "€450" },
  { name: "Mat Pilates", s: "€20", p5: "€85", p10: "€155", p20: "€280" },
  { name: "Danza Classica & Choreo", s: "€20", p5: "€85", p10: "€155", p20: "€280" },
];

const combos = [
  { name: "Reformer + Barre", d1: "5+5 lezioni · €275", d2: "10+10 lezioni · €490", validity: "4–8 mesi" },
  { name: "Reformer + Mat", d1: "5+5 lezioni · €230", d2: "10+10 lezioni · €395", validity: "4–8 mesi" },
  { name: "Barre + Mat", d1: "5+5 lezioni · €209", d2: "10+10 lezioni · €365", validity: "4–8 mesi" },
];

export default function Home() {
  return (
    <main className="bg-[#F8F4EF] text-[#1A1714]">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative h-screen min-h-[640px] flex items-end">
        <div className="absolute inset-0">
          <Image
            src="/Pictures/dsc03255-enhanced-nr-938230587.jpg"
            alt="Studio Pharma Sanremo"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
        </div>
        <div className="relative z-10 w-full px-6 pb-20 md:px-14 lg:px-24">
          <div className="max-w-2xl">
            <p className="text-[#C9A96E] tracking-[0.38em] uppercase text-[11px] mb-7">
              Sanremo · Via Escoffier 3 · Centro Città
            </p>
            <h1 className="serif text-white font-light text-[clamp(3.2rem,8vw,5.5rem)] leading-[1.02] italic mb-7">
              Movimento.<br />Forza.<br />Eleganza.
            </h1>
            <p className="text-white/60 text-[11px] tracking-[0.28em] uppercase mb-10">
              Pilates Reformer · Mat Pilates · California Barre · Beauty
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://app.shaggyowl.com/accesso-cliente/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-[#1A1714] text-[11px] tracking-[0.28em] uppercase px-9 py-4 hover:bg-[#C9A96E] hover:text-white transition-all duration-500 text-center"
              >
                Prenota ora
              </a>
              <a
                href="#servizi"
                className="inline-block border border-white/45 text-white text-[11px] tracking-[0.28em] uppercase px-9 py-4 hover:border-white/80 hover:bg-white/10 transition-all duration-300 text-center"
              >
                Scopri i servizi
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 opacity-40">
          <div className="w-px h-10 bg-white animate-[pulse_2s_ease-in-out_infinite]" />
        </div>
      </section>

      {/* ── PILLARS ── */}
      <section className="bg-[#1A1714] text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {[
            { label: "Pilates Reformer", desc: "Macchine professionali di nuova generazione. Tre livelli per ogni obiettivo fisico." },
            { label: "California Barre", desc: "Il metodo di Sophia Jeremiasz: la fusione di Pilates, yoga e fitness alla sbarra." },
            { label: "Beauty Center", desc: "Trattamenti estetici professionali Germaine de Capuccini per il tuo benessere totale." },
          ].map((p) => (
            <div key={p.label} className="py-12 px-8 text-center">
              <h3 className="serif text-xl font-light italic mb-3">{p.label}</h3>
              <p className="text-white/45 text-xs leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="py-24 lg:py-36 px-6 bg-[#F8F4EF]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-[#B8A898] tracking-[0.32em] uppercase text-[11px] mb-6">Il Nostro Studio</p>
            <h2 className="serif text-[clamp(2.2rem,4vw,3.4rem)] font-light leading-[1.15] mb-8">
              Un nuovo concetto<br />di benessere<br /><em>nel cuore di Sanremo</em>
            </h2>
            <p className="text-[#5C5046] leading-relaxed mb-5 text-[14px]">
              Studio Pharma è uno studio specializzato nel centro di Sanremo, a pochi passi dal Teatro Ariston.
              Un ambiente moderno e silenzioso dove movimento, tecnica ed eleganza si incontrano ogni giorno.
            </p>
            <p className="text-[#5C5046] leading-relaxed mb-12 text-[14px]">
              Offriamo Pilates Reformer su attrezzature professionali, Mat Pilates, California Barre,
              corsi di danza e un beauty center dedicato al tuo benessere totale. Il nostro team di
              istruttori certificati ti accompagna in un percorso su misura.
            </p>
            <div className="flex items-center gap-10">
              {[
                { n: "3", label: "Istruttori" },
                { n: "6+", label: "Discipline" },
                { n: "∞", label: "Possibilità" },
              ].map((s, i, arr) => (
                <div key={s.label} className="flex items-center gap-10">
                  <div className="text-center">
                    <span className="serif text-5xl font-light block">{s.n}</span>
                    <p className="text-[#B8A898] text-[10px] tracking-[0.28em] uppercase mt-1.5">{s.label}</p>
                  </div>
                  {i < arr.length - 1 && <div className="w-px h-12 bg-[#E8DDD5]" />}
                </div>
              ))}
            </div>
          </div>

          {/* Landscape photo - reception showing barre studio through door */}
          <div className="order-1 lg:order-2 relative w-full aspect-[4/3] overflow-hidden">
            <Image
              src="/Pictures/dsc03293-enhanced-nr-1887829781.jpg"
              alt="Studio Pharma — reception e sala barre"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="servizi" className="py-24 px-6 bg-[#EFE8DE]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#B8A898] tracking-[0.32em] uppercase text-[11px] mb-4">Cosa offriamo</p>
            <h2 className="serif text-[clamp(2rem,4vw,3rem)] font-light">I Nostri Servizi</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {services.map((s) => (
              <div key={s.title} className="group relative overflow-hidden aspect-video cursor-pointer">
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <p className="text-[#C9A96E] text-[10px] tracking-[0.32em] uppercase mb-2">{s.price}</p>
                  <h3 className="serif text-white text-[1.75rem] font-light leading-tight mb-1.5">{s.title}</h3>
                  <p className="text-white/55 text-[11px] tracking-wide mb-3">{s.sub}</p>
                  <p className="text-white/0 group-hover:text-white/65 text-[12px] leading-relaxed transition-all duration-500 translate-y-2 group-hover:translate-y-0 max-w-xs">
                    {s.desc}
                  </p>
                  <div className="h-px w-0 group-hover:w-14 bg-[#C9A96E] mt-4 transition-all duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section id="team">
        {/* Wide section header with reformer room photo */}
        <div className="relative h-52 md:h-72 overflow-hidden">
          <Image
            src="/Pictures/dsc03284-enhanced-nr-1098536469.jpg"
            alt="Sala Pilates Reformer Studio Pharma"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#1A1714]/65" />
          <div className="absolute inset-0 flex items-end px-6 pb-10 md:px-14 lg:px-24">
            <div>
              <p className="text-[#C9A96E] tracking-[0.32em] uppercase text-[11px] mb-3">Chi siamo</p>
              <h2 className="serif text-white text-[clamp(2rem,4vw,3rem)] font-light">Il Nostro Team</h2>
            </div>
          </div>
        </div>

        {/* Team cards — text-only, clean typography */}
        <div className="bg-[#F8F4EF] py-16 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-0 md:divide-x divide-[#E8DDD5]">
            {team.map((t, i) => (
              <div key={t.name} className={`py-8 ${i > 0 ? "md:pl-10 lg:pl-14" : ""} ${i < team.length - 1 ? "md:pr-10 lg:pr-14" : ""} border-b md:border-b-0 border-[#E8DDD5] last:border-b-0`}>
                <div className="w-8 h-px bg-[#C9A96E] mb-6" />
                <h3 className="serif text-2xl font-light mb-1">{t.name}</h3>
                <p className="text-[#C9A96E] text-[10px] tracking-[0.26em] uppercase mb-4">{t.role}</p>
                <p className="text-[#5C5046] text-[13px] leading-relaxed mb-5">{t.bio}</p>
                <p className="text-[#B8A898] text-[10px] leading-relaxed">{t.cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHOTO STRIP ── */}
      <div className="grid grid-cols-3 h-44 md:h-64">
        {[
          "/Pictures/dsc03290-enhanced-nr-275398005.jpg",
          "/Pictures/dsc03299-enhanced-nr-1762911297.jpg",
          "/Pictures/dsc03314-enhanced-nr-2009911129.jpg",
        ].map((src, i) => (
          <div key={i} className="relative overflow-hidden">
            <Image
              src={src}
              alt="Studio Pharma"
              fill
              className="object-cover object-center"
              sizes="33vw"
            />
            <div className="absolute inset-0 bg-[#1A1714]/20" />
          </div>
        ))}
      </div>

      {/* ── QUOTE BREAK ── */}
      <div className="relative h-56 md:h-80">
        <Image
          src="/Pictures/dsc03307-enhanced-nr-986395719.jpg"
          alt="Studio Pharma Beauty Center"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#1A1714]/55 flex items-center justify-center px-6">
          <p className="serif text-white font-light text-[clamp(1.5rem,4vw,3rem)] italic text-center max-w-3xl leading-snug">
            "La vera forza è controllo,<br />respiro e armonia nel movimento."
          </p>
        </div>
      </div>

      {/* ── PRICING ── */}
      <section id="prezzi" className="bg-[#1A1714] text-white py-24 lg:py-36 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#C9A96E] tracking-[0.32em] uppercase text-[11px] mb-4">Abbonamenti</p>
            <h2 className="serif text-[clamp(2rem,4vw,3rem)] font-light">Tariffe</h2>
          </div>

          {/* Discovery highlight */}
          <div className="border border-[#C9A96E]/40 p-10 text-center max-w-md mx-auto mb-16 hover:border-[#C9A96E]/70 transition-colors duration-300">
            <p className="text-[#C9A96E] text-[10px] tracking-[0.32em] uppercase mb-3">Inizia da qui</p>
            <h3 className="serif text-3xl font-light mb-4">Discovery Package</h3>
            <p className="text-white/45 text-[12px] leading-relaxed mb-6 max-w-xs mx-auto">
              1 California Barre + 1 Pilates Reformer + 1 Mat Pilates o Danza
            </p>
            <p className="serif text-[4rem] font-light text-[#C9A96E] leading-none mb-2">€65</p>
            <p className="text-white/30 text-[10px] tracking-widest uppercase mb-7">Validità 1 mese</p>
            <a
              href="https://app.shaggyowl.com/accesso-cliente/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-[#C9A96E] text-[#C9A96E] text-[10px] tracking-[0.28em] uppercase px-8 py-3 hover:bg-[#C9A96E] hover:text-[#1A1714] transition-all duration-300"
            >
              Acquista ora
            </a>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 pr-6 text-[10px] tracking-[0.28em] uppercase text-white/30 font-normal">Disciplina</th>
                  {["1 lez.", "5 lez.", "10 lez.", "20 lez."].map((h, i) => (
                    <th key={h} className="py-4 px-3 text-[10px] tracking-[0.22em] uppercase text-white/30 font-normal text-right">
                      {h}
                      {i > 0 && (
                        <span className="text-white/18 normal-case block text-[9px] tracking-normal mt-0.5">
                          {["", "2 mesi", "4 mesi", "8 mesi"][i]}
                        </span>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {pricing.map((r) => (
                  <tr key={r.name} className="border-b border-white/[0.05] hover:bg-white/[0.025] transition-colors">
                    <td className="py-5 pr-6"><span className="serif text-[1.15rem] font-light">{r.name}</span></td>
                    <td className="py-5 px-3 text-right text-white/55 text-[13px]">{r.s}</td>
                    <td className="py-5 px-3 text-right text-white/55 text-[13px]">{r.p5}</td>
                    <td className="py-5 px-3 text-right text-white/55 text-[13px]">{r.p10}</td>
                    <td className="py-5 pl-3 text-right text-[#C9A96E] text-[13px]">{r.p20}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Combos */}
          <div className="mt-14 pt-14 border-t border-white/10">
            <p className="text-white/28 text-[10px] tracking-[0.32em] uppercase text-center mb-8">Pacchetti Combo</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
              {combos.map((c) => (
                <div key={c.name} className="bg-[#1A1714] p-8 text-center">
                  <h4 className="serif text-xl font-light mb-4">{c.name}</h4>
                  <p className="text-white/45 text-[12px] mb-1.5">{c.d1}</p>
                  <p className="text-white/45 text-[12px] mb-3">{c.d2}</p>
                  <p className="text-white/22 text-[10px] tracking-widest uppercase">{c.validity}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="text-center text-white/25 text-[11px] mt-10">
            Tutti i pacchetti sono acquistabili online o in studio.{" "}
            <a
              href="https://app.shaggyowl.com/accesso-cliente/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C9A96E]/60 hover:text-[#C9A96E] transition-colors underline underline-offset-2"
            >
              Prenota qui
            </a>
          </p>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contatti" className="py-24 lg:py-36 px-6 bg-[#F8F4EF]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-start">
          <div>
            <p className="text-[#B8A898] tracking-[0.32em] uppercase text-[11px] mb-6">Dove siamo</p>
            <h2 className="serif text-[clamp(2rem,4vw,3rem)] font-light mb-12">Vieni a trovarci</h2>
            <div className="space-y-8">
              <div>
                <p className="text-[#B8A898] text-[10px] tracking-[0.28em] uppercase mb-2">Indirizzo</p>
                <p className="serif text-xl font-light">Via Escoffier 3</p>
                <p className="serif text-xl font-light">18038 Sanremo (IM)</p>
                <p className="text-[#5C5046] text-[12px] mt-1.5">Nel centro città, vicino al Teatro Ariston</p>
              </div>
              <div>
                <p className="text-[#B8A898] text-[10px] tracking-[0.28em] uppercase mb-2">Telefono</p>
                <a href="tel:+390184631575" className="serif text-xl font-light hover:text-[#C9A96E] transition-colors">0184 631575</a>
              </div>
              <div>
                <p className="text-[#B8A898] text-[10px] tracking-[0.28em] uppercase mb-2">Email</p>
                <a href="mailto:info@studio-pharma.com" className="serif text-xl font-light hover:text-[#C9A96E] transition-colors">info@studio-pharma.com</a>
              </div>
              <div>
                <p className="text-[#B8A898] text-[10px] tracking-[0.28em] uppercase mb-3">Seguici</p>
                <div className="flex gap-7">
                  <a href="https://www.instagram.com/studiopharma_sanremo/" target="_blank" rel="noopener noreferrer"
                    className="text-[11px] tracking-[0.22em] uppercase border-b border-[#1A1714]/30 pb-0.5 hover:border-[#C9A96E] hover:text-[#C9A96E] transition-all">
                    Instagram
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=61587581562464" target="_blank" rel="noopener noreferrer"
                    className="text-[11px] tracking-[0.22em] uppercase border-b border-[#1A1714]/30 pb-0.5 hover:border-[#C9A96E] hover:text-[#C9A96E] transition-all">
                    Facebook
                  </a>
                </div>
              </div>
              <div>
                <p className="text-[#B8A898] text-[10px] tracking-[0.28em] uppercase mb-3">App Studio Pharma</p>
                <div className="flex gap-7">
                  <a href="https://apps.apple.com/it/app/studiopharma/id6759036038" target="_blank" rel="noopener noreferrer"
                    className="text-[11px] tracking-[0.22em] uppercase border-b border-[#1A1714]/30 pb-0.5 hover:border-[#C9A96E] hover:text-[#C9A96E] transition-all">
                    App Store
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=com.shaggyowl.pharma" target="_blank" rel="noopener noreferrer"
                    className="text-[11px] tracking-[0.22em] uppercase border-b border-[#1A1714]/30 pb-0.5 hover:border-[#C9A96E] hover:text-[#C9A96E] transition-all">
                    Google Play
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Landscape beauty center photo */}
          <div className="relative w-full aspect-[4/3] overflow-hidden">
            <Image
              src="/Pictures/dsc03295-enhanced-nr-15886530.jpg"
              alt="Studio Pharma Beauty Center"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#1A1714] py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <Image
            src="/logo-studiopharma-2093999140.png"
            alt="Studio Pharma"
            width={100}
            height={36}
            className="h-9 w-auto object-contain opacity-40 [filter:invert(1)]"
          />
          <p className="text-white/25 text-[11px] text-center">
            © 2025 Studio Pharma · Via Escoffier 3, 18038 Sanremo (IM) · info@studio-pharma.com
          </p>
          <div className="flex gap-6 text-[10px] tracking-[0.22em] uppercase text-white/25">
            <a href="https://studio-pharma.com/cookies.html" target="_blank" rel="noopener noreferrer" className="hover:text-white/55 transition-colors">Cookie Policy</a>
            <a href="https://app.shaggyowl.com/amministrazione/privacy-app.html" target="_blank" rel="noopener noreferrer" className="hover:text-white/55 transition-colors">Privacy</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
