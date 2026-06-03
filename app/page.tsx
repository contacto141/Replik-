// Full Stack Marketing 360 — Repli-k × Gens

// ─── NAV ────────────────────────────────────────────────────────────────────

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-space font-bold text-[#111111] text-lg">Full Stack</span>
          <span className="font-space font-bold text-[#F96B09] text-lg">Marketing 360</span>
        </div>
        <a
          href="#contacto"
          className="bg-[#F96B09] text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-[#e05e00] transition-colors"
        >
          Agendar llamada →
        </a>
      </div>
    </nav>
  )
}

// ─── HERO ───────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="pt-36 pb-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-4xl">

          {/* Label */}
          <div className="inline-flex items-center gap-2 bg-[#F96B09]/10 text-[#F96B09] px-4 py-2 rounded-full text-sm font-semibold mb-8">
            <span className="w-2 h-2 bg-[#F96B09] rounded-full animate-pulse" />
            Full Stack Marketing 360 × Repli-k
          </div>

          {/* Headline */}
          <h1 className="font-space text-5xl md:text-7xl font-bold leading-[1.08] mb-6 tracking-tight">
            Repli-k, esto es<br />
            lo que te falta<br />
            para{' '}
            <span className="text-[#F96B09]">triplicar ventas.</span>
          </h1>

          {/* Subtext */}
          <p className="text-xl text-gray-500 max-w-2xl mb-10 leading-relaxed">
            Contenido generado con IA + Performance optimizado en Meta y Google
            + TikTok Shop desde cero. Un solo plan, completamente ejecutado por Gens.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="#pilares"
              className="bg-[#111111] text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-[#333] transition-colors text-center"
            >
              Ver el plan completo ↓
            </a>
            <a
              href="#contacto"
              className="border-2 border-[#F96B09] text-[#F96B09] px-8 py-4 rounded-full font-semibold text-base hover:bg-[#F96B09] hover:text-white transition-all text-center"
            >
              Agendar llamada de 30 min
            </a>
          </div>

          {/* Stats bar */}
          <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-gray-400 border-t border-gray-100 pt-8">
            {['3 Pilares estratégicos', '6 Pasos de ejecución', '1 Mes de campaña completa', 'TikTok Shop desde cero'].map((stat, i, arr) => (
              <span key={stat} className="flex items-center gap-3">
                {stat}
                {i < arr.length - 1 && <span className="text-gray-200">·</span>}
              </span>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

// ─── DIAGNÓSTICO ─────────────────────────────────────────────────────────────

const problemas = [
  'Campañas Meta + Google corriendo sin optimizar desde hace meses',
  'Contenido estático, sin videos UGC ni piezas virales',
  'Sin presencia en TikTok Shop — el canal de mayor crecimiento en perfumes',
  'CRM desconectado de la tienda Shopify',
  'Sin campaña creativa estructurada mes a mes',
  'Inversión en canales activos sin revisión ni ajuste de performance',
]

function Diagnostico() {
  return (
    <section className="py-24 bg-[#F7F7F7] px-6">
      <div className="max-w-6xl mx-auto">

        <div className="mb-12">
          <p className="text-[#F96B09] font-semibold text-xs uppercase tracking-widest mb-3">
            Diagnóstico
          </p>
          <h2 className="font-space text-4xl md:text-5xl font-bold leading-tight">
            Repli-k hoy tiene esto.
          </h2>
          <p className="text-gray-400 mt-3 text-lg">Sin juicio — solo los puntos a resolver juntos.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-3">
          {problemas.map((problema, i) => (
            <div key={i} className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-gray-100">
              <div className="w-8 h-8 bg-[#F96B09]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-[#F96B09] font-bold text-sm">✕</span>
              </div>
              <p className="text-[#111111] font-medium leading-relaxed text-sm">{problema}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

// ─── TRES PILARES ───────────────────────────────────────────────────────────

const pilares = [
  {
    num: '01',
    title: 'Contenido IA',
    subtitle: 'Crea sin límite, sin equipo de producción',
    items: [
      'Videos UGC generados con IA (ElevenLabs / Artlist)',
      'Arte digital fijo por canal (Nano Banana + GPT + Canva)',
      'Campaña creativa mensual completa',
      'Guiones, mensajes, formatos y audiencias',
    ],
    tools: 'ElevenLabs · Artlist · ChatGPT · Canva',
  },
  {
    num: '02',
    title: 'Performance',
    subtitle: 'Optimiza lo que ya tienes corriendo',
    items: [
      'Auditoría completa de campañas Meta Ads',
      'Auditoría completa de campañas Google Ads',
      'Revisión de inversión y ajuste de presupuestos',
      'Análisis de DATA con IA + revisión de CRM',
    ],
    tools: 'Meta Ads · Google Ads · HubSpot · Analytics',
  },
  {
    num: '03',
    title: 'TikTok Shop',
    subtitle: 'El canal que más ventas genera hoy',
    items: [
      'Creación de tienda TikTok Shop desde cero',
      'Carga y sincronización de catálogo Repli-k',
      'Videos UGC IA específicos para TikTok',
      'Campaña de lanzamiento + operación del canal',
    ],
    tools: 'TikTok Shop · TikTok Ads · UGC IA',
  },
]

function TresPilares() {
  return (
    <section id="pilares" className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto">

        <div className="mb-12">
          <p className="text-[#F96B09] font-semibold text-xs uppercase tracking-widest mb-3">
            La solución
          </p>
          <h2 className="font-space text-4xl md:text-5xl font-bold leading-tight">
            Tres pilares.<br />Un plan completo.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {pilares.map((pilar) => (
            <div
              key={pilar.num}
              className="border border-gray-100 rounded-3xl p-8 hover:border-[#F96B09]/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <p className="font-space font-bold text-6xl text-[#F96B09]/20 group-hover:text-[#F96B09]/40 transition-colors mb-6 leading-none">
                {pilar.num}
              </p>
              <h3 className="font-space text-2xl font-bold mb-1">{pilar.title}</h3>
              <p className="text-gray-400 text-sm mb-6">{pilar.subtitle}</p>
              <ul className="space-y-3 mb-8">
                {pilar.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className="text-[#F96B09] mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-gray-600 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-gray-300 border-t border-gray-100 pt-4 font-mono">
                {pilar.tools}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

// ─── PROCESO ─────────────────────────────────────────────────────────────────

const pasos = [
  {
    num: '01',
    title: 'Propuesta de campaña',
    desc: 'Definimos el mes completo antes de ejecutar nada. Estrategia primero, producción después.',
  },
  {
    num: '02',
    title: 'Selección de productos',
    desc: 'Top sellers + productos con mayor margen para priorizar en campaña y TikTok Shop.',
  },
  {
    num: '03',
    title: 'Campaña creativa',
    desc: 'Mensajes, formatos, canales y presupuestos. Todo estructurado y presentado para aprobación.',
  },
  {
    num: '04',
    title: 'Generación IA multimedia',
    desc: 'Videos UGC + arte fijo generados con motores IA (ElevenLabs, Artlist, GPT, Canva) por canal.',
  },
  {
    num: '05',
    title: 'Aprobación',
    desc: 'Repli-k revisa y aprueba todo el material. Ajustamos hasta que esté perfecto.',
  },
  {
    num: '06',
    title: 'Upload & Live',
    desc: 'Distribución por canal, monitoreo activo y optimización continua en tiempo real.',
  },
]

function Proceso() {
  return (
    <section className="py-24 bg-[#F7F7F7] px-6">
      <div className="max-w-6xl mx-auto">

        <div className="mb-12">
          <p className="text-[#F96B09] font-semibold text-xs uppercase tracking-widest mb-3">
            Cómo lo hacemos
          </p>
          <h2 className="font-space text-4xl md:text-5xl font-bold leading-tight">
            6 pasos.<br />Nada improvisado.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {pasos.map((paso) => (
            <div key={paso.num} className="bg-white rounded-2xl p-7 border border-gray-100 hover:border-[#F96B09]/30 transition-colors">
              <p className="font-space font-bold text-4xl text-[#F96B09]/30 mb-4 leading-none">
                {paso.num}
              </p>
              <h3 className="font-space font-bold text-lg mb-2">{paso.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{paso.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

// ─── TIKTOK SHOP (SECCIÓN ESTRELLA) ─────────────────────────────────────────

const tiktokItems = [
  'Crear la tienda TikTok Shop de Repli-k desde cero',
  'Subir y sincronizar el catálogo completo de perfumes',
  'Producir videos UGC con IA específicos para TikTok',
  'Ejecutar campaña de lanzamiento con presupuesto definido',
  'Conectar inventario con tienda Shopify existente',
  'Operar y manejar el canal de forma activa',
]

function TikTokShop() {
  return (
    <section className="py-24 bg-[#111111] px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-4xl">

          <p className="text-[#F96B09] font-semibold text-xs uppercase tracking-widest mb-6">
            El canal más valioso
          </p>

          <h2 className="font-space text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            TikTok Shop es donde<br />
            los perfumes alternativos<br />
            se venden{' '}
            <span className="text-[#F96B09]">más rápido.</span>
          </h2>

          <p className="text-gray-400 text-xl mb-12 max-w-2xl leading-relaxed">
            Las ventas de perfumes alternativos en TikTok Shop crecen +340% año a año.
            Repli-k todavía no está ahí. Cada día sin TikTok Shop es dinero que no entra.
          </p>

          <div className="grid md:grid-cols-2 gap-0 mb-12 border border-white/10 rounded-2xl overflow-hidden">
            {tiktokItems.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-5 border-b border-r border-white/10 hover:bg-white/5 transition-colors"
              >
                <span className="text-[#F96B09] font-bold text-lg flex-shrink-0">→</span>
                <span className="text-white font-medium text-sm leading-relaxed">{item}</span>
              </div>
            ))}
          </div>

          <a
            href="#contacto"
            className="inline-flex items-center gap-3 bg-[#F96B09] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#e05e00] transition-colors"
          >
            Quiero TikTok Shop para Repli-k →
          </a>

        </div>
      </div>
    </section>
  )
}

// ─── HERRAMIENTAS ────────────────────────────────────────────────────────────

const tools = [
  { name: 'ElevenLabs', desc: 'Videos y voz con IA' },
  { name: 'Artlist', desc: 'Música y stock UGC' },
  { name: 'ChatGPT', desc: 'Copy, guiones, mensajes' },
  { name: 'Canva', desc: 'Arte fijo y formatos' },
  { name: 'Meta Ads', desc: 'Campañas pagadas' },
  { name: 'Google Ads', desc: 'SEM y display' },
  { name: 'TikTok Shop', desc: 'Canal de venta nuevo' },
  { name: 'HubSpot', desc: 'CRM + automatización' },
]

function Herramientas() {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto">

        <div className="mb-12">
          <p className="text-[#F96B09] font-semibold text-xs uppercase tracking-widest mb-3">
            Stack tecnológico
          </p>
          <h2 className="font-space text-4xl md:text-5xl font-bold leading-tight">
            Las herramientas<br />que ejecutan el plan.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="bg-[#F7F7F7] rounded-2xl p-6 hover:bg-[#F96B09]/5 hover:border-[#F96B09]/20 border border-transparent transition-all cursor-default"
            >
              <p className="font-space font-bold text-lg mb-1">{tool.name}</p>
              <p className="text-gray-400 text-sm">{tool.desc}</p>
            </div>
          ))}
        </div>

        {/* Nota de licencias */}
        <div className="p-5 border border-[#F96B09]/20 bg-[#F96B09]/5 rounded-2xl">
          <p className="text-sm text-gray-600 leading-relaxed">
            <span className="font-semibold text-[#F96B09]">Nota sobre licencias:</span>{' '}
            Las licencias de ElevenLabs y Artlist corren por cuenta de Repli-k.
            Gens opera y produce con todas las herramientas incluidas en el plan.
          </p>
        </div>

      </div>
    </section>
  )
}

// ─── CTA FINAL ───────────────────────────────────────────────────────────────

function CTAFinal() {
  return (
    <section id="contacto" className="py-28 bg-[#111111] px-6">
      <div className="max-w-6xl mx-auto text-center">

        <p className="text-[#F96B09] font-semibold text-xs uppercase tracking-widest mb-6">
          ¿Arrancamos?
        </p>

        <h2 className="font-space text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          El primer mes empieza<br />cuando Repli-k diga.
        </h2>

        <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          Sin contratos anuales. Un mes de campaña completa,
          resultados medibles, estrategia ejecutada desde el día uno.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <a
            href="mailto:contacto@somosgens.com"
            className="bg-[#F96B09] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-[#e05e00] transition-colors"
          >
            Agendar llamada de 30 min
          </a>
          <a
            href="mailto:contacto@somosgens.com"
            className="border border-white/20 text-white px-10 py-5 rounded-full font-semibold text-lg hover:border-white/50 transition-colors"
          >
            Escribir por email
          </a>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <span className="font-space font-semibold text-white">
            Full Stack <span className="text-[#F96B09]">Marketing 360</span>
          </span>
          <span>contacto@somosgens.com</span>
          <span>somosgens.com</span>
        </div>

      </div>
    </section>
  )
}

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Diagnostico />
      <TresPilares />
      <Proceso />
      <TikTokShop />
      <Herramientas />
      <CTAFinal />
    </main>
  )
}
