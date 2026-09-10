import { useEffect, useState } from 'react'
import {
  ArrowRight, CalendarDays, ChevronDown, Clock3, HeartPulse,
  Leaf, MapPin, Menu, Phone, ShieldCheck, X,
} from 'lucide-react'
import { clinic, faqs, googleBusinessUrl, services } from './data/clinic'
import { faqSchema, localBusinessSchema } from './seo/structuredData'
import './App.css'

const phoneHref = 'tel:+38762408887'
const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${clinic.name}, ${clinic.address.street}, ${clinic.address.city}`)}`

function ClinicImage({ className = '' }: { className?: string }) {
  const [failed, setFailed] = useState(false)
  return failed ? (
    <div className={`image-placeholder ${className}`} role="img" aria-label="Fotografija ordinacije bit će dodana">
      <Leaf size={42} strokeWidth={1.2} />
      <span>Fotografija ordinacije</span>
      <small>Mjesto za stvarnu fotografiju klinike</small>
    </div>
  ) : (
    <img className={className} src={clinic.image.src} alt={clinic.image.alt} onError={() => setFailed(true)} />
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  useEffect(() => {
    document.title = 'Stomatolog Stup | Dr. Aida H. Kaljanac'
    const description = 'Stomatološka ordinacija Dr. Aida H. Kaljanac na Stupu, Ilidža. Polivalentne stomatološke usluge, 4.9★ Google ocjena i direktan kontakt za termine.'
    let meta = document.querySelector('meta[name="description"]')
    if (!meta) { meta = document.createElement('meta'); meta.setAttribute('name', 'description'); document.head.appendChild(meta) }
    meta.setAttribute('content', description)
    if (import.meta.env.VITE_CANONICAL_URL) {
      let canonical = document.querySelector('link[rel="canonical"]')
      if (!canonical) { canonical = document.createElement('link'); canonical.setAttribute('rel', 'canonical'); document.head.appendChild(canonical) }
      canonical.setAttribute('href', import.meta.env.VITE_CANONICAL_URL)
    }
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="wordmark" href="#pocetna" onClick={closeMenu} aria-label="Početna stranica">
            <span className="mark"><HeartPulse size={18} /></span>
            <span><strong>Dr. Aida</strong><small>H. Kaljanac</small></span>
          </a>
          <button className="menu-toggle icon-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="main-menu" aria-label={menuOpen ? 'Zatvori meni' : 'Otvori meni'}>
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
          <nav id="main-menu" className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Glavna navigacija">
            <a href="#usluge" onClick={closeMenu}>Usluge</a>
            <a href="#ordinacija" onClick={closeMenu}>O ordinaciji</a>
            <a href="#recenzije" onClick={closeMenu}>Recenzije</a>
            <a href="#lokacija" onClick={closeMenu}>Lokacija</a>
            <a href="#faq" onClick={closeMenu}>FAQ</a>
            <a className="button button-small" href={phoneHref} onClick={closeMenu}><Phone size={16} /> Zakažite pregled</a>
          </nav>
        </div>
      </header>

      <main id="pocetna">
        <section className="hero section-pad">
          <div className="container hero-grid">
            <div className="hero-copy reveal">
              <p className="eyebrow"><span className="eyebrow-line" /> Stomatološka ordinacija · Stup · Ilidža</p>
              <h1>Zdrav osmijeh počinje <em>povjerenjem.</em></h1>
              <p className="hero-lead">Stomatološka ordinacija Dr. Aida H. Kaljanac pruža polivalentne stomatološke usluge na Stupu, Ilidža, uz individualan pristup svakom pacijentu.</p>
              <div className="hero-actions"><a className="button" href={phoneHref}><CalendarDays size={17} /> Zakažite pregled</a><a className="text-link" href={phoneHref}><Phone size={17} /> {clinic.phoneDisplay}</a></div>
              <div className="hero-trust"><span className="stars">★★★★★</span><strong>{clinic.rating.toFixed(1)} <small>/ 5</small></strong><span>Ocjena na Googleu<br /><b>{clinic.reviewCount} recenzija</b></span></div>
            </div>
            <div className="hero-media reveal reveal-delay"><ClinicImage className="hero-image" /><div className="image-caption"><span className="caption-dot" /> Svijetao prostor za vaš mirniji dolazak</div></div>
          </div>
        </section>

        <section className="trust-strip"><div className="container trust-grid"><div><ShieldCheck size={20} /><span><b>4.9 / 5</b><small>Google ocjena</small></span></div><div><MapPin size={20} /><span><b>Stup, Ilidža</b><small>Lokacija ordinacije</small></span></div><div><Clock3 size={20} /><span><b>Pon–Pet 12–20h</b><small>Subota 10–14h</small></span></div><a href={phoneHref} className="trust-phone"><Phone size={17} /> <span><small>Direktan kontakt</small>{clinic.phoneDisplay}</span><ArrowRight size={16} /></a></div></section>

        <section className="section-pad intro" id="ordinacija"><div className="container narrow-copy"><p className="section-kicker">Dobro došli</p><h2>Stomatologija na Stupu kojoj možete vjerovati</h2><p>Smještena na Stupu, na području Ilidže, Stomatološka ordinacija Dr. Aida H. Kaljanac pruža polivalentne stomatološke usluge pacijentima sa područja Stupa, Ilidže i Sarajeva.</p><p>Na stranici možete pronaći osnovne informacije o ordinaciji, lokaciji, radnom vremenu i načinu kontakta.</p></div></section>

        <section className="section-pad services-section" id="usluge"><div className="container"><div className="section-heading"><div><p className="section-kicker">Jasan početak</p><h2>Stomatološke usluge</h2></div><p>Ordinacija je registrovana za pružanje polivalentnih stomatoloških usluga.</p></div><div className="service-grid">{services.map((service) => <article className="service-card" key={service.title}><span className="card-icon"><HeartPulse size={22} /></span><h3>{service.title}</h3><p>{service.description}</p><a className="arrow-link" href="#kontakt">Informišite se o uslugama <ArrowRight size={16} /></a></article>)}<div className="service-note"><Leaf size={20} /><span>Informacije o konkretnim uslugama i terminima dobićete direktnim kontaktom sa ordinacijom.</span></div></div></div></section>

        <section className="section-pad benefits"><div className="container"><div className="section-heading"><div><p className="section-kicker">Zašto ordinacija</p><h2>Jednostavno do stomatološke njege</h2></div></div><div className="benefit-grid"><article><span>01</span><h3>Individualan pristup</h3><p>Pristup stomatološkoj njezi prilagođen individualnim potrebama pacijenta.</p></article><article><span>02</span><h3>Lokacija na Stupu</h3><p>Ordinacija se nalazi na području Stupa, Ilidža.</p></article><article><span>03</span><h3>Jednostavan kontakt</h3><p>Za informacije i dogovor termina dostupni smo putem telefona.</p></article><article><span>04</span><h3>Provjereno povjerenje</h3><p>Ocjena 4.9/5 na Googleu na osnovu 181 recenzije.</p></article></div></div></section>

        <section className="section-pad journey"><div className="container"><div className="section-heading"><div><p className="section-kicker">Kako početi</p><h2>Vaš prvi korak je jednostavan</h2></div><p>Jasne informacije i direktan kontakt olakšavaju dogovor termina.</p></div><div className="steps">{['Zakažite termin', 'Pregled i razgovor', 'Procjena potreba', 'Dogovor o narednim koracima'].map((step, index) => <div className="step" key={step}><span>{String(index + 1).padStart(2, '0')}</span><h3>{step}</h3>{index < 3 && <ArrowRight size={18} className="step-arrow" />}</div>)}</div></div></section>

        <section className="section-pad about-section"><div className="container about-grid"><div className="about-media"><ClinicImage className="about-image" /><div className="about-stamp"><Leaf size={18} /><span>Stup<br /><b>Ilidža</b></span></div></div><div className="about-copy"><p className="section-kicker">O ordinaciji</p><h2>Važno nam je da se osjećate sigurno</h2><p>Stomatološka ordinacija Dr. Aida H. Kaljanac nalazi se na Stupu, na području Ilidže. Cilj stranice je da pacijentima na jednom mjestu pruži jasne informacije o ordinaciji, kontaktu i lokaciji.</p><a className="button button-outline" href="#lokacija">Pogledajte lokaciju <ArrowRight size={17} /></a></div></div></section>

        <section className="section-pad reviews-section" id="recenzije"><div className="container review-layout"><div><p className="section-kicker">Google recenzije</p><h2>Iskustva pacijenata</h2><p className="review-copy">Pogledajte javno dostupnu ocjenu ordinacije na Googleu.</p></div><div className="review-score"><div className="score-number">{clinic.rating.toFixed(1)}<small>/5</small></div><div><div className="stars">★★★★★</div><strong>{clinic.reviewCount} Google recenzija</strong></div>{googleBusinessUrl ? <a className="button button-light" href={googleBusinessUrl} target="_blank" rel="noreferrer">Pogledajte recenzije <ArrowRight size={16} /></a> : <span className="review-placeholder">Link za Google profil može se dodati u data sloj.</span>}</div></div></section>

        <section className="section-pad location-section" id="lokacija"><div className="container location-grid"><div className="location-card"><p className="section-kicker">Kontakt i lokacija</p><h2>Pronađite nas na Stupu</h2><div className="contact-row"><MapPin size={19} /><p><strong>{clinic.address.street}</strong><br />{clinic.address.postalCode} {clinic.address.city}<br />{clinic.address.country}</p></div><div className="contact-row"><Phone size={19} /><p><small>Telefon</small><a href={phoneHref}>{clinic.phoneDisplay}</a></p></div><a className="button" href={mapsHref} target="_blank" rel="noreferrer"><MapPin size={17} /> Otvorite lokaciju na Google Mapsu</a></div><div className="hours-card"><div className="hours-heading"><Clock3 size={19} /><h3>Radno vrijeme</h3></div>{clinic.hours.map((entry) => <div className="hours-row" key={entry.day}><span>{entry.day}</span><b>{entry.time}</b></div>)}</div></div></section>

        <section className="section-pad faq-section" id="faq"><div className="container faq-layout"><div><p className="section-kicker">Imate pitanje?</p><h2>Česta pitanja</h2><p>Najvažnije informacije o lokaciji, kontaktu i radnom vremenu ordinacije.</p></div><div className="faq-list">{faqs.map((faq, index) => <div className={`faq-item ${openFaq === index ? 'is-open' : ''}`} key={faq.question}><button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index} aria-controls={`faq-answer-${index}`}><span>{faq.question}</span><ChevronDown size={18} /></button><div id={`faq-answer-${index}`} className="faq-answer" hidden={openFaq !== index}><p>{faq.answer}</p></div></div>)}</div></div></section>

        <section className="final-cta section-pad" id="kontakt"><div className="container final-cta-inner"><div><p className="section-kicker">Sljedeći korak</p><h2>Vrijeme je za vaš sljedeći pregled.</h2><p>Kontaktirajte Stomatološku ordinaciju Dr. Aida H. Kaljanac za informacije i dogovor termina.</p></div><div className="final-actions"><a className="button button-white" href={phoneHref}><CalendarDays size={17} /> Zakažite pregled</a><a className="button button-quiet" href={phoneHref}><Phone size={17} /> Pozovite {clinic.phoneDisplay}</a></div></div></section>
      </main>

      <footer className="site-footer"><div className="container footer-grid"><div><a className="wordmark footer-wordmark" href="#pocetna"><span className="mark"><HeartPulse size={18} /></span><span><strong>Dr. Aida</strong><small>H. Kaljanac</small></span></a><p>Stomatološka Ordinacija Dr. Aida H. Kaljanac</p></div><div><h3>Kontakt</h3><p>{clinic.address.street}<br />{clinic.address.postalCode} {clinic.address.city}<br />{clinic.address.country}</p><a href={phoneHref}>{clinic.phoneDisplay}</a></div><div><h3>Brzi linkovi</h3><a href="#usluge">Usluge</a><a href="#ordinacija">O ordinaciji</a><a href="#lokacija">Lokacija</a><a href="#faq">FAQ</a></div><div><h3>Radno vrijeme</h3><p>Ponedjeljak – Petak<br />12:00 – 20:00</p><p>Subota<br />10:00 – 14:00</p><p>Nedjelja<br />Zatvoreno</p></div></div><div className="container footer-bottom"><span>© 2026 Stomatološka Ordinacija Dr. Aida H. Kaljanac</span><span>Stup · Ilidža · Sarajevo</span></div></footer>
    </div>
  )
}

export default App
