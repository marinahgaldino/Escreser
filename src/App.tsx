import { ArrowRight, BookOpen, BriefcaseBusiness, Layers, Menu, MessageCircle, Mic, PenLine, Users, X } from 'lucide-react';
import { useState } from 'react';

const whatsapp = 'https://wa.me/5519989629709';


function Swash() {
  return <svg className="swash" viewBox="0 0 400 16" aria-hidden="true"><path d="M4 12 C120 2 280 2 396 10" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>;
}

function Leaves({ cls }: { cls: string }) {
  return (
    <svg className={`leaves ${cls}`} viewBox="0 0 300 300" aria-hidden="true"><g fill="currentColor">
      <path d="M20 40 C80 20 140 40 170 90 C120 100 60 80 20 40Z"/><path d="M40 120 C90 100 150 120 175 170 C125 175 70 160 40 120Z"/>
      <path d="M120 10 C150 50 160 100 150 150 C120 110 110 60 120 10Z"/><path d="M200 60 C240 90 260 140 250 190 C215 160 200 110 200 60Z"/>
      <path d="M10 200 C60 180 120 200 150 245 C100 255 45 240 10 200Z"/><path d="M0 20 L230 250" stroke="currentColor" strokeWidth="3" fill="none"/></g></svg>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className="hdr">
        <a className="hdr-brand" href="#inicio" onClick={closeMenu} aria-label="escreSer, início">
          <img src={`${import.meta.env.BASE_URL}escreser-logo.webp`} alt="escreSer" width={640} height={306} />
          <span className="hdr-tag">Consultoria e Escrita de Livros</span>
        </a>
        <button className="hdr-toggle" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <nav className={menuOpen ? 'hdr-nav hdr-nav-open' : 'hdr-nav'} aria-label="Principal">
          <a className="is-active" href="#inicio" onClick={closeMenu}>Início</a>
          <a href="#processo" onClick={closeMenu}>Como Funciona</a>
          <a href="#audiencias" onClick={closeMenu}>Para Quem É</a>
          <a href="#sobre-amanda" onClick={closeMenu}>Sobre a Amanda</a>
          <a href="#livros" onClick={closeMenu}>Livros</a>
          <a className="hdr-cta" href={whatsapp} target="_blank" rel="noreferrer" onClick={closeMenu}><MessageCircle size={20} strokeWidth={1.8} /> Fale Comigo</a>
        </nav>
      </header>

      <section className="hero2" id="inicio">
        <img className="hero2-photo" src={`${import.meta.env.BASE_URL}08A8E56A-0221-4D4D-ADED-D7E2C2F70A03.png`} alt="Amanda Plácido Campanha sorrindo e segurando dois exemplares de Por Alguns Instantes" width={1536} height={1024} fetchPriority="high" decoding="async" />
        <div className="hero2-copy">
          <p className="hero2-eyebrow"><span>CONSULTORIA EDITORIAL</span><i aria-hidden="true" /></p>
          <h1>Você traz a essência.<br /><em>Eu transformo <b>em livro.</b></em></h1>
          <p className="hero2-sub">Uma consultoria completa para desenvolver, escrever e transformar a sua história, experiência ou conhecimento em um livro, com a sua voz preservada em cada página.</p>
          <ul className="hero2-benefits">
            <li><PenLine size={30} strokeWidth={1.4} aria-hidden="true" /><span>Organização{" "}<br />das suas ideias</span></li>
            <li><Layers size={30} strokeWidth={1.4} aria-hidden="true" /><span>Escrita{" "}<br />profissional</span></li>
            <li><BookOpen size={30} strokeWidth={1.4} aria-hidden="true" /><span>Acompanhamento{" "}<br />editorial completo</span></li>
          </ul>
          <a className="hero2-cta" href={whatsapp} target="_blank" rel="noreferrer"><BookOpen size={30} strokeWidth={1.5} aria-hidden="true" /> Quero escrever o meu livro <ArrowRight size={28} strokeWidth={1.5} aria-hidden="true" /></a>
        </div>
      </section>

      <section className="who" id="audiencias">
        <h2>Para quem é?</h2>
        <ul>
          <li><BriefcaseBusiness size={34} strokeWidth={1.3} aria-hidden="true" /><span>Profissionais que desejam{" "}<br />autoridade e reconhecimento</span></li>
          <li><Users size={34} strokeWidth={1.3} aria-hidden="true" /><span>Pessoas com histórias{" "}<br />que merecem ser eternizadas</span></li>
          <li><Mic size={34} strokeWidth={1.3} aria-hidden="true" /><span>Mentores e palestrantes{" "}<br />que querem ampliar seu impacto</span></li>
          <li><BookOpen size={34} strokeWidth={1.3} aria-hidden="true" /><span>Especialistas que desejam{" "}<br />transformar conhecimento em livro</span></li>
        </ul>
      </section>

      <section className="intro section-pad" id="sobre">
        <p className="eyebrow">SUA HISTÓRIA MERECE SER CONTADA</p>
        <div className="intro-grid">
          <h2>Há histórias que<br />não podem ficar<br /><em>apenas na memória.</em></h2>
          <div className="intro-text">
            <p>Uma trajetória, uma experiência, um conhecimento construído ao longo dos anos. Cada história tem algo único e pode ganhar vida em um livro.</p>
            <p>A escreSer transforma ideias, vivências e conhecimentos em obras escritas com cuidado, escuta e intenção, preservando a voz de quem tem a história para contar.</p>
          </div>
        </div>
      </section>

      <section className="why" id="por-que">
        <Leaves cls="why-leaves" />
        <div className="why-head">
          <p className="why-eyebrow"><span>POR QUE UM LIVRO</span><i aria-hidden="true" /></p>
          <h2>Um livro muda a forma como{" "}<br /><em>o mundo te vê.</em></h2>
          <Swash />
        </div>
        <ol className="why-cards">
          <li><span className="why-n">01</span><h3>Autoridade</h3><p>Você deixa de ser mais um no mercado e passa a ser referência no que faz.</p></li>
          <li><span className="why-n">02</span><h3>Reconhecimento</h3><p>Seu nome na capa abre portas: palestras, entrevistas, clientes e convites.</p></li>
          <li><span className="why-n">03</span><h3>Realização pessoal</h3><p>O sonho de ter um livro seu, finalmente fora da gaveta.</p></li>
          <li><span className="why-n">04</span><h3>Legado</h3><p>Sua história e o que você sabe ficam para quem vem depois.</p></li>
        </ol>
        <div className="why-sign"><i aria-hidden="true" /><img src={`${import.meta.env.BASE_URL}escreser-logo-claro.webp`} alt="escreSer" width={640} height={306} loading="lazy" /><i aria-hidden="true" /></div>
      </section>

      <section className="process section-pad" id="processo">
        <div className="section-heading">
          <p className="eyebrow">DO PRIMEIRO ENCONTRO À ÚLTIMA PÁGINA</p>
          <h2>Um processo construído<br /><em>em conjunto.</em></h2>
        </div>
        <div className="process-list">
          <div><span>01</span><div><h3>Escuta e descoberta</h3><p>Uma conversa para compreender sua história, seus objetivos e o livro que deseja construir.</p></div></div>
          <div><span>02</span><div><h3>Mapa do Livro</h3><p>Organização das ideias e definição de um caminho para a construção da obra.</p></div></div>
          <div><span>03</span><div><h3>Construção do manuscrito</h3><p>Desenvolvimento do texto a partir dos materiais, relatos e direcionamentos definidos em conjunto.</p></div></div>
          <div><span>04</span><div><h3>Etapas editoriais</h3><p>O texto segue pelas etapas de revisão, preparação e projeto editorial previstas para o trabalho.</p></div></div>
        </div>
      </section>

      <section className="offer section-pad" id="servicos">
        <div className="offer-intro">
          <p className="eyebrow">CAMINHOS PARA TIRAR O LIVRO DO PAPEL</p>
          <h2>Um formato que respeita<br /><em>o seu momento.</em></h2>
          <p>Projetos e serviços que acompanham diferentes necessidades de escrita e desenvolvimento editorial.</p>
        </div>
        <a className="text-link" href={whatsapp} target="_blank" rel="noreferrer">Vamos encontrar o melhor caminho</a>
      </section>

      <section className="about section-pad" id="sobre-amanda">
        <div className="about-mark"><img src={`${import.meta.env.BASE_URL}escreser-logo.webp`} alt="escreSer" width={640} height={306} loading="lazy" /></div>
        <div className="about-copy">
          <p className="eyebrow">QUEM CONDUZ ESSE PROCESSO</p>
          <h2>Palavras exigem<br /><em>escuta e intenção.</em></h2>
          <p>Amanda Plácido Campanha é escritora, poeta e advogada. Formada e pós-graduada em Direito e Língua Portuguesa, reúne mais de 10 anos de prática jurídica, além de gestão comercial e operacional de empresas.</p>
          <p>Com a escreSer, coloca essa experiência a serviço de histórias, ideias e conhecimentos que desejam encontrar sua forma escrita.</p>
          <div className="books" id="livros">
            <p className="list-label">AUTORA DE TRÊS LIVROS</p>
            <span>Por Alguns Instantes</span><span>Melhor que ontem, pior que amanhã</span><span>Seja o que você quiser</span>
          </div>
        </div>
      </section>

      <section className="principles">
        <p>A sua voz preservada em cada página.</p>
        <div><span>Autoria do cliente</span><i /> <span>Confidencialidade</span><i /> <span>Construção em conjunto</span></div>
      </section>

      <section className="quote">
        <Leaves cls="q-leaves-a" />
        <Leaves cls="q-leaves-b" />
        <p>Escrever faz parte do meu ser.<br />E estou aqui para te guiar a<br /><strong>revelar o seu.</strong></p>
        <Swash />
      </section>

      <footer className="footer section-pad" id="contato">
        <div>
          <p className="eyebrow">TODA HISTÓRIA PODE ENCONTRAR SEU LIVRO</p>
          <h2>Vamos começar<br /><em>a escrever?</em></h2>
          <a className="button button-light" href={whatsapp} target="_blank" rel="noreferrer">Quero transformar minha história em livro</a>
        </div>
        <div className="footer-bottom">
          <a className="footer-logo" href="#inicio" aria-label="escreSer, voltar ao início"><img src={`${import.meta.env.BASE_URL}escreser-logo-claro.webp`} alt="escreSer" width={640} height={306} loading="lazy" /></a>
          <div className="contact-links">
            <a href="https://www.instagram.com/amandacampanha/" target="_blank" rel="noreferrer">Instagram</a>
            <a href="mailto:amandaplacidocampanha@gmail.com">E-mail</a>
          </div>
          <span className="copyright">© {new Date().getFullYear()} escreSer</span>
        </div>
      </footer>
    </main>
  );
}

export default App;