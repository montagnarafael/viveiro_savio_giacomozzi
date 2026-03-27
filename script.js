/**
 * ============================================================
 *  VIVEIRO SÁVIO GIACOMOZZI — script.js
 *  Funcionalidades: WhatsApp, catálogo de plantas, filtros,
 *  header scroll, menu mobile, animações por scroll.
 * ============================================================
 */

// ─────────────────────────────────────────────────────────────
//  CONFIGURAÇÃO — altere apenas aqui
// ─────────────────────────────────────────────────────────────
const CONFIG = {
  /** Número do WhatsApp (somente dígitos, com DDI+DDD) */
  whatsappNumber: '5547996455284',

  /** Mensagem padrão para botões genéricos */
  defaultMsg: 'Olá! Vim pelo site e gostaria de mais informações sobre o Viveiro Sávio Giacomozzi.',

  /** Mensagem de interesse em planta (o nome será substituído automaticamente) */
  plantMsg: (name) => `Olá! Vi o site do Viveiro Sávio Giacomozzi e tenho interesse na planta *${name}*. Poderia me dar mais informações?`,
};

// ─────────────────────────────────────────────────────────────
//  DADOS DO CATÁLOGO DE PLANTAS
// ─────────────────────────────────────────────────────────────
const PLANTS = [
  // ── Frutíferas ──
  {
    name: 'Tangerina Ponkan',
    sci:  'Citrus reticulata Blanco',
    cat:  'frutiferas',
    catLabel: 'Frutífera',
    img: 'img/tangerinaponkan.jpg',
    bg: '#c8e6c9',
    desc: 'Tangerina Ponkan com produção entre outono e inverno, fruta doce, suculenta, fácil de descascar, ideal para cultivo doméstico e comercial em diversas regiões.',
  },
  {
    name: 'Laranja Bahia (Umbigo)',
    sci:  'Citrus sinensis',
    cat:  'frutiferas',
    catLabel: 'Frutífera',
    img: 'img/laranjabahia.webp',
    bg: '#ffcdd2',
    desc: 'Laranja Bahia Umbigo com produção precoce, frutos grandes, doces, sem sementes, casca fácil de remover, ideal para consumo in natura e cultivo comercial rentável.',
  },
  {
    name: 'Limão Tahiti',
    sci:  'Citrus latifolia',
    cat:  'frutiferas',
    catLabel: 'Frutífera',
    img: 'img/limaotahiti.jpg',
    bg: '#e8d5f5',
    desc: 'Limão Tahiti com produção quase o ano todo, frutos suculentos, sem sementes, casca fina, sabor ácido, ideal para consumo, sucos, temperos e cultivo comercial.',
  },
  {
    name: 'Tangerina Comum',
    sci:  'Citrus reticulata',
    cat:  'frutiferas',
    catLabel: 'Frutífera',
    img: 'img/tangerinacomum.png',
    bg: '#fff9c4',
    desc: 'Tangerina comum com produção no outono, frutos doces, aromáticos, casca fácil de descascar, rica em vitamina C, ideal para consumo fresco e cultivo doméstico.',
  },

  // ── Ornamentais ──
  {
    name: 'Ipê Amarelo',
    sci:  'Handroanthus albus',
    cat:  'ornamentais',
    catLabel: 'Ornamental',
    img: 'img/ipeamarelo.jpg',
    bg: '#fff9c4',
    desc: 'Símbolo nacional do Brasil, floração exuberante em amarelo intenso. Árvore de grande porte ideal para arborização urbana e jardins.',
  },
  {
    name: 'Quaresmeira',
    sci:  'Tibouchina granulosa',
    cat:  'ornamentais',
    catLabel: 'Ornamental',
    img: 'img/quaresmeira.webp',
    bg: '#e8d5f5',
    desc: 'Arbusto ou árvore de pequeno porte com flores roxas deslumbrantes. Floresce no outono, enchendo jardins de cor e beleza.',
  },
  {
    name: 'Palmeira Azul',
    sci:  'Bismarckia nobilis',
    cat:  'ornamentais',
    catLabel: 'Ornamental',
    img: 'img/palmeiraazul.webp',
    bg: '#c8e6c9',
    desc: 'Palmeira Azul ornamental de crescimento lento, folhas prateadas exuberantes, ideal para paisagismo, resistente ao calor, adapta-se bem a climas tropicais e subtropicais.',
  },
  {
    name: 'Azaleia Branca',
    sci:  'Rhododendron simsii',
    cat:  'ornamentais',
    catLabel: 'Ornamental',
    img: 'img/azaleiabranca.webp',
    bg: '#fce4ec',
    desc: 'Azaleia branca com floração no inverno e primavera, flores delicadas e ornamentais, ideal para jardins, vasos, clima ameno, valorizando paisagismo residencial e comercial.',
  },

  // ── Nativas ──
  {
    name: 'Araucária',
    sci:  'Araucaria angustifolia',
    cat:  'nativas',
    catLabel: 'Nativa',
    img: 'img/araucaria.jpg',
    bg: '#dcedc8',
    desc: 'Símbolo de Santa Catarina e do Paraná. Espécie nativa ameaçada, essencial para a restauração da Floresta de Araucárias.',
  },
  {
    name: 'Canela Sassafrás',
    sci:  'Ocotea odorifera',
    cat:  'nativas',
    catLabel: 'Nativa',
    img: 'img/canelasassafras.jpg',
    bg: '#d7ccc8',
    desc: 'Árvore nativa da Mata Atlântica com madeira e folhas aromáticas. Importante para recuperação de matas ciliares e reflorestamento.',
  },
  {
    name: 'Erva-Mate',
    sci:  'Ilex paraguariensis',
    cat:  'nativas',
    catLabel: 'Nativa',
    img: 'img/ervamate.jpg',
    bg: '#c8e6c9',
    desc: 'Arbusto nativo da Mata Atlântica, base do chimarrão gaúcho e catarinense. Pode ser cultivada em sistemas agroflorestais ou hortas.',
  },
  {
    name: 'Cedro Australiano',
    sci:  'Toona ciliata',
    cat:  'nativas',
    catLabel: 'Nativa',
    img: 'img/cedroaustraliano.webp',
    bg: '#b2dfdb',
    desc: 'Árvore de rápido crescimento indicada para reflorestamento e recuperação de áreas degradadas. Madeira valorizada.',
  },

  // ── Aromáticas ──
  {
    name: 'Teste',
    sci:  'sci',
    cat:  'aromaticas',
    catLabel: 'Teste',
    emoji: '💜',
    bg: '#ede7f6',
    desc: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
  },
  {
    name: 'Teste',
    sci:  'sci',
    cat:  'aromaticas',
    catLabel: 'Teste',
    emoji: '🌿',
    bg: '#c8e6c9',
    desc: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
  },
  {
    name: 'Teste',
    sci:  'sci',
    cat:  'aromaticas',
    catLabel: 'Teste',
    emoji: '🌱',
    bg: '#b2dfdb',
    desc: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
  },
  {
    name: 'Teste',
    sci:  'sci',
    cat:  'aromaticas',
    catLabel: 'Teste',
    emoji: '🌾',
    bg: '#e0f2f1',
    desc: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
  },
];

// ─────────────────────────────────────────────────────────────
//  FUNÇÕES UTILITÁRIAS
// ─────────────────────────────────────────────────────────────

/**
 * Monta a URL do WhatsApp com a mensagem codificada.
 * @param {string} msg - Mensagem a ser enviada
 * @returns {string} URL do WhatsApp
 */
function whatsappUrl(msg) {
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`;
}

/**
 * Abre o WhatsApp em nova aba com a mensagem fornecida.
 * @param {string} msg
 */
function openWhatsApp(msg) {
  window.open(whatsappUrl(msg), '_blank', 'noopener,noreferrer');
}

// ─────────────────────────────────────────────────────────────
//  GERAÇÃO DOS CARDS DE PLANTAS
// ─────────────────────────────────────────────────────────────
function renderCards(filter = 'all') {
  const grid = document.getElementById('cardsGrid');
  if (!grid) return;

  grid.innerHTML = '';

  const filtered = filter === 'all'
    ? PLANTS
    : PLANTS.filter(p => p.cat === filter);

  filtered.forEach((plant, i) => {
    const card = document.createElement('article');
    card.className = 'plant-card';
    card.setAttribute('data-cat', plant.cat);
    card.style.animationDelay = `${i * 0.06}s`;

    // Renderiza imagem real ou emoji como fallback
    const mediaHtml = plant.img
      ? `<img src="${plant.img}" alt="${plant.name}" class="plant-card__img" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" /><div class="card-emoji-bg" style="background:${plant.bg};height:190px;display:none;" aria-hidden="true">${plant.emoji || '🌱'}</div>`
      : `<div class="card-emoji-bg" style="background:${plant.bg};height:190px;" aria-hidden="true">${plant.emoji || '🌱'}</div>`;

    card.innerHTML = `
      <div class="plant-card__img-wrap">
        ${mediaHtml}
        <span class="plant-card__badge">${plant.catLabel}</span>
      </div>
      <div class="plant-card__body">
        <h3 class="plant-card__name">${plant.name}</h3>
        <span class="plant-card__sci">${plant.sci}</span>
        <p class="plant-card__desc">${plant.desc}</p>
        <button class="plant-card__btn" aria-label="Tenho interesse em ${plant.name}">
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.115.549 4.099 1.51 5.824L.036 23.145a.75.75 0 0 0 .916.898l5.424-1.419A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.854 0-3.6-.5-5.105-1.373l-.367-.214-3.214.84.875-3.131-.232-.381A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
          </svg>
          Tenho interesse
        </button>
      </div>
    `;

    // Clique na imagem abre o lightbox
    card.querySelector('.plant-card__img-wrap').addEventListener('click', () => {
      const src = plant.img || null;
      const emoji = plant.emoji || '🌱';
      openLightbox(src, emoji, plant.name, plant.bg);
    });

    // Evento do botão de interesse → WhatsApp com nome da planta
    card.querySelector('.plant-card__btn').addEventListener('click', () => {
      openWhatsApp(CONFIG.plantMsg(plant.name));
    });

    grid.appendChild(card);
  });
}

// ─────────────────────────────────────────────────────────────
//  FILTROS DO CATÁLOGO
// ─────────────────────────────────────────────────────────────
function initFilters() {
  const btns = document.querySelectorAll('.filter-btn');

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Atualiza estado visual
      btns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      // Re-renderiza cards
      renderCards(btn.dataset.filter);
    });
  });
}

// ─────────────────────────────────────────────────────────────
//  HEADER — efeito ao rolar
// ─────────────────────────────────────────────────────────────
function initHeader() {
  const header = document.getElementById('header');
  if (!header) return;

  function onScroll() {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // executa ao iniciar
}

// ─────────────────────────────────────────────────────────────
//  MENU MOBILE
// ─────────────────────────────────────────────────────────────
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const navMobile = document.getElementById('navMobile');
  if (!hamburger || !navMobile) return;

  function toggle() {
    const isOpen = hamburger.classList.toggle('open');
    navMobile.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
    hamburger.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  }

  hamburger.addEventListener('click', toggle);

  // Fecha ao clicar em link
  navMobile.querySelectorAll('.nav-mobile__link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navMobile.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.setAttribute('aria-label', 'Abrir menu');
    });
  });
}

// ─────────────────────────────────────────────────────────────
//  BOTÕES WHATSAPP GENÉRICOS
// ─────────────────────────────────────────────────────────────
function initWhatsAppButtons() {
  const ids = ['heroWhatsapp', 'sobreWhatsapp', 'contatoWhatsapp', 'fabWhatsapp'];
  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        openWhatsApp(CONFIG.defaultMsg);
      });
    }
  });
}

// ─────────────────────────────────────────────────────────────
//  ANIMAÇÕES DE ENTRADA POR SCROLL (IntersectionObserver)
// ─────────────────────────────────────────────────────────────
function initScrollAnimations() {
  // Stats
  const statItems = document.querySelectorAll('[data-animate]');
  if (!statItems.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // Atraso escalonado para cada item
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, i * 120);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  statItems.forEach(el => observer.observe(el));
}

// ─────────────────────────────────────────────────────────────
//  LIGHTBOX — abre imagem em tamanho original
// ─────────────────────────────────────────────────────────────

/**
 * Abre o lightbox com a imagem ou emoji da planta.
 * @param {string|null} src  - Caminho da imagem (ou null se for emoji)
 * @param {string}      emoji - Emoji de fallback
 * @param {string}      name  - Nome da planta (acessibilidade)
 * @param {string}      bg    - Cor de fundo para cards com emoji
 */
function openLightbox(src, emoji, name, bg) {
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightboxImg');
  const lbEmoji = document.getElementById('lightboxEmoji');

  if (src) {
    lbImg.src = src;
    lbImg.alt = name;
    lbImg.style.display = 'block';
    lbEmoji.style.display = 'none';
  } else {
    lbEmoji.textContent = emoji;
    lbEmoji.style.background = bg;
    lbEmoji.style.display = 'flex';
    lbImg.style.display = 'none';
  }

  lb.classList.add('open');
  document.body.style.overflow = 'hidden'; // impede scroll do fundo
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  lb.classList.remove('open');
  document.body.style.overflow = '';
  // Limpa src depois da animação para não piscar
  setTimeout(() => {
    document.getElementById('lightboxImg').src = '';
  }, 300);
}

function initLightbox() {
  const lb = document.getElementById('lightbox');
  if (!lb) return;

  // Fecha ao clicar no fundo fosco
  lb.addEventListener('click', (e) => {
    if (e.target === lb) closeLightbox();
  });

  // Fecha ao clicar no botão X
  document.getElementById('lightboxClose').addEventListener('click', closeLightbox);

  // Fecha com tecla Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });
}

// ─────────────────────────────────────────────────────────────
// ─────────────────────────────────────────────────────────────
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return; // Ignora links de WhatsApp (tratados separadamente)
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const headerH = document.getElementById('header')?.offsetHeight ?? 70;
        const top = target.getBoundingClientRect().top + window.scrollY - headerH;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

// ─────────────────────────────────────────────────────────────
//  INICIALIZAÇÃO
// ─────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderCards();          // Renderiza todos os cards do catálogo
  initFilters();          // Habilita filtros de categoria
  initHeader();           // Efeito de scroll no header
  initMobileMenu();       // Menu hamburger mobile
  initWhatsAppButtons();  // Botões genéricos de WhatsApp
  initScrollAnimations(); // Animações de entrada por scroll
  initSmoothScroll();     // Scroll suave por âncora
  initLightbox();         // Lightbox de imagens do catálogo
});
