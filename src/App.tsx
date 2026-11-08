import { ArrowUpRight, Instagram, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';

const whatsapp = 'https://wa.me/5519989629709';

const plans = ['LEGADO', 'MEMÓRIA', 'ESTANTE', 'TRAVESSIA'];
const services = ['BÚSSOLA', 'MANUSCRITO', 'PROSA', 'PONTO FINAL'];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className="header">
        <a className="wordmark" href="#inicio" onClick={closeMenu}>escreSer<span>.</span></a>
        <button className="menu-toggle" aria-label="Abrir menu" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          <a href="#sobre" onClick={closeMenu}>A escreSer</a>
          <a href="#processo" onClick={closeMenu}>Como funciona</a>
          <a href="#servicos" onClick={closeMenu}>Serviços</a>
          <a href="#contato" onClick={closeMenu}>Contato</a>
          <a className="nav-cta" href={whatsapp} target="_blank" rel="noreferrer" onClick={closeMenu}>Vamos conversar <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">ESCRITA • ESCUTA • AUTORIA</p>
          <h1>Você traz a essência.<br /><em>Eu transformo em livro.</em></h1>
          <p className="hero-sub">A sua voz preservada em cada página.</p>
          <a className="button button-dark" href={whatsapp} target="_blank" rel="noreferrer">Quero transformar minha história em livro <ArrowUpRight size={17} /></a>
          <span className="hero-note">Um livro começa muito antes da primeira página.</span>
        </div>
        <div className="hero-visual" aria-label="Espaço reservado para a fotografia de Amanda">
          <div className="photo-placeholder">
            <span>ESCREVER É DAR FORMA<br />AO QUE MERECE PERMANECER.</span>
          </div>
          <div className="hero-caption">Amanda Plácido Campanha <span>— escritora e consultora literária</span></div>
        </div>
      </section>

      <section className="intro section-pad" id="sobre">
        <p className="eyebrow">SUA HISTÓRIA MERECE SER CONTADA</p>
        <div className="intro-grid">
          <h2>Há histórias que<br />não podem ficar<br /><em>apenas na memória.</em></h2>
          <div className="intro-text">
            <p>Uma trajetória, uma experiência, um conhecimento construído ao longo dos anos. Cada história tem algo único — e pode ganhar vida em um livro.</p>
            <p>A escreSer transforma ideias, vivências e conhecimentos em obras escritas com cuidado, escuta e intenção, preservando a voz de quem tem a história para contar.</p>
          </div>
        </div>
      </section>

      <section className="audiences">
        <div className="audience-card">
          <span>01</span><h3>Uma história de vida</h3><p>Para quem deseja registrar memórias, experiências e aprendizados como legado.</p>
        </div>
        <div className="audience-card">
          <span>02</span><h3>Um conhecimento para compartilhar</h3><p>Para profissionais que desejam organizar suas ideias e ampliar sua autoridade por meio de um livro.</p>
        </div>
        <div className="audience-card">
          <span>03</span><h3>Uma mensagem para alcançar pessoas</h3><p>Para mentores, palestrantes e pessoas que desejam levar sua mensagem além da própria voz.</p>
        </div>
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
        <div className="offer-columns">
          <div><p className="list-label">PLANOS</p>{plans.map((item, i) => <div className="offer-item" key={item}><span>0{i + 1}</span>{item}</div>)}</div>
          <div><p className="list-label">SERVIÇOS</p>{services.map((item, i) => <div className="offer-item" key={item}><span>0{i + 1}</span>{item}</div>)}</div>
        </div>
        <a className="text-link" href={whatsapp} target="_blank" rel="noreferrer">Vamos encontrar o melhor caminho <ArrowUpRight size={17} /></a>
      </section>

      <section className="about section-pad">
        <div className="about-mark">escreSer<span>.</span></div>
        <div className="about-copy">
          <p className="eyebrow">QUEM CONDUZ ESSE PROCESSO</p>
          <h2>Palavras exigem<br /><em>escuta e intenção.</em></h2>
          <p>Amanda Plácido Campanha é escritora, poeta e advogada. Sua trajetória reúne a prática jurídica, a gestão comercial e operacional de uma editora e a vivência dos processos que transformam um texto em livro.</p>
          <p>Com a escreSer, coloca essa experiência a serviço de histórias, ideias e conhecimentos que desejam encontrar sua forma escrita.</p>
          <div className="books">
            <p className="list-label">LIVROS DE AMANDA</p>
            <span>Por Alguns Instantes</span><span>Melhor que ontem, pior que amanhã</span><span>Seja o que você quiser</span>
          </div>
        </div>
      </section>

      <section className="principles">
        <p>“A sua voz preservada em cada página.”</p>
        <div><span>Autoria do cliente</span><i /> <span>Confidencialidade</span><i /> <span>Construção em conjunto</span></div>
      </section>

      <footer className="footer section-pad" id="contato">
        <div>
          <p className="eyebrow">TODA HISTÓRIA PODE ENCONTRAR SEU LIVRO</p>
          <h2>Vamos começar<br /><em>a escrever?</em></h2>
          <a className="button button-light" href={whatsapp} target="_blank" rel="noreferrer">Quero transformar minha história em livro <ArrowUpRight size={17} /></a>
        </div>
        <div className="footer-bottom">
          <a className="wordmark wordmark-light" href="#inicio">escreSer<span>.</span></a>
          <div className="contact-links">
            <a href="https://www.instagram.com/amandacampanha/" target="_blank" rel="noreferrer"><Instagram size={17} /> Instagram</a>
            <a href="mailto:amandaplacidocampanha@gmail.com"><Mail size={17} /> E-mail</a>
          </div>
          <span className="copyright">© {new Date().getFullYear()} escreSer</span>
        </div>
      </footer>
    </main>
  );
}

export default App;