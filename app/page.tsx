// Full Stack Marketing 360 — Repli-k × Gens

// ─── ICONS ──────────────────────────────────────────────────────────────────

function IconX() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0 mt-0.5">
      <circle cx="10" cy="10" r="10" fill="#F96B09" fillOpacity="0.12" />
      <path d="M7 7l6 6M13 7l-6 6" stroke="#F96B09" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function IconCheck() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="flex-shrink-0 mt-0.5">
      <circle cx="9" cy="9" r="9" fill="#F96B09" fillOpacity="0.12" />
      <path d="M5.5 9.5l2.5 2.5 4.5-5" stroke="#F96B09" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IconArrow() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="flex-shrink-0 mt-0.5">
      <rect width="18" height="18" rx="9" fill="#F96B09" fillOpacity="0.12" />
      <path d="M5 9h8M9.5 5.5L13 9l-3.5 3.5" stroke="#F96B09" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IconStar() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="flex-shrink-0 mt-0.5">
      <rect width="18" height="18" rx="9" fill="#F96B09" fillOpacity="0.12" />
      <path d="M9 4l1.4 3.1H14l-2.7 2 1 3.1L9 10.5l-3.3 1.7 1-3.1L4 7.1h3.6L9 4z" fill="#F96B09" />
    </svg>
  )
}

// ─── NAV ────────────────────────────────────────────────────────────────────

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAFAFA]/90 backdrop-blur-md border-b border-[#E8E8E8]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-space font-bold text-[#1C1C1C] text-lg">Full Stack</span>
          <span className="font-space font-bold text-[#F96B09] text-lg">Marketing 360</span>
        </div>
        <span className="text-sm text-[#888888] font-medium tracking-wide">Repli-k × Gens</span>
      </div>
    </nav>
  )
}

// ─── HERO ───────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="pt-36 pb-28 px-6 bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-4xl">

          {/* Label */}
          <div className="inline-flex items-center gap-2 bg-[#F96B09]/10 text-[#F96B09] px-4 py-2 rounded-full text-sm font-semibold mb-8">
            <span className="w-2 h-2 bg-[#F96B09] rounded-full" />
            Propuesta exclusiva para Repli-k
          </div>

          {/* Headline */}
          <h1 className="font-space text-5xl md:text-7xl font-bold leading-[1.06] mb-6 tracking-tight text-[#1C1C1C]">
            Esto es lo que<br />
            le falta a Repli-k<br />
            para <span className="text-[#F96B09]">triplicar ventas.</span>
          </h1>

          {/* Subtext */}
          <p className="text-xl text-[#666666] max-w-2xl mb-14 leading-relaxed">
            Contenido IA + Performance optimizado en Meta y Google
            + TikTok Shop desde cero. Un solo plan, completamente ejecutado.
          </p>

          {/* Stats bar */}
          <div className="flex flex-wrap items-center gap-6 pt-8 border-t border-[#E4E4E4]">
            {[
              { num: '03', label: 'Pilares estratégicos' },
              { num: '06', label: 'Pasos de ejecución' },
              { num: '01', label: 'Mes de campaña completa' },
              { num: '∞', label: 'Contenido IA generado' },
            ].map((stat) => (
              <div key={stat.label} className="flex items-baseline gap-2">
                <span className="font-space font-bold text-2xl text-[#F96B09]">{stat.num}</span>
                <span className="text-sm text-[#999999]">{stat.label}</span>
              </div>
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
    <section className="py-24 px-6 bg-[#F2F0EE]">
      <div className="max-w-6xl mx-auto">

        <div className="mb-12">
          <p className="text-[#F96B09] font-semibold text-xs uppercase tracking-widest mb-3">
            Diagnóstico
          </p>
          <h2 className="font-space text-4xl md:text-5xl font-bold leading-tight text-[#1C1C1C]">
            Repli-k hoy tiene esto.
          </h2>
          <p className="text-[#888888] mt-3 text-lg">Sin juicio — solo los puntos a resolver juntos.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-3">
          {problemas.map((problema, i) => (
            <div key={i} className="flex items-start gap-4 bg-[#FAFAFA] p-6 rounded-2xl border border-[#E8E3DE]">
              <IconX />
              <p className="text-[#333333] font-medium leading-relaxed text-sm">{problema}</p>
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
    bg: 'bg-[#FFF5EE]',
    border: 'border-[#F9D5BB]',
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
    bg: 'bg-[#F2F0EE]',
    border: 'border-[#DEDAD6]',
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
    bg: 'bg-[#1C1C1C]',
    border: 'border-[#333333]',
    items: [
      'Creación de tienda TikTok Shop desde cero',
      'Carga y sincronización de catálogo Repli-k',
      'Videos UGC IA específicos para TikTok',
      'Campaña de lanzamiento + operación del canal',
    ],
    tools: 'TikTok Shop · TikTok Ads · UGC IA',
    dark: true,
  },
]

function TresPilares() {
  return (
    <section id="pilares" className="py-24 bg-[#FAFAFA] px-6">
      <div className="max-w-6xl mx-auto">

        <div className="mb-12">
          <p className="text-[#F96B09] font-semibold text-xs uppercase tracking-widest mb-3">
            La solución
          </p>
          <h2 className="font-space text-4xl md:text-5xl font-bold leading-tight text-[#1C1C1C]">
            Tres pilares.<br />Un plan completo.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {pilares.map((pilar) => (
            <div
              key={pilar.num}
              className={`${pilar.bg} border ${pilar.border} rounded-3xl p-8 transition-all duration-300`}
            >
              <p className={`font-space font-bold text-6xl mb-6 leading-none ${pilar.dark ? 'text-[#F96B09]/40' : 'text-[#F96B09]/25'}`}>
                {pilar.num}
              </p>
              <h3 className={`font-space text-2xl font-bold mb-1 ${pilar.dark ? 'text-white' : 'text-[#1C1C1C]'}`}>
                {pilar.title}
              </h3>
              <p className={`text-sm mb-6 ${pilar.dark ? 'text-[#888888]' : 'text-[#999999]'}`}>
                {pilar.subtitle}
              </p>
              <ul className="space-y-3 mb-8">
                {pilar.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <IconCheck />
                    <span className={`leading-relaxed ${pilar.dark ? 'text-[#CCCCCC]' : 'text-[#555555]'}`}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <p className={`text-xs border-t pt-4 font-mono ${pilar.dark ? 'text-[#555555] border-[#333333]' : 'text-[#BBBBBB] border-[#E4E4E4]'}`}>
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
    bg: 'bg-[#FFF5EE]',
  },
  {
    num: '02',
    title: 'Selección de productos',
    desc: 'Top sellers + productos con mayor margen para priorizar en campaña y TikTok Shop.',
    bg: 'bg-[#F2F0EE]',
  },
  {
    num: '03',
    title: 'Campaña creativa',
    desc: 'Mensajes, formatos, canales y presupuestos. Todo estructurado y presentado para aprobación.',
    bg: 'bg-[#FFF5EE]',
  },
  {
    num: '04',
    title: 'Generación IA multimedia',
    desc: 'Videos UGC + arte fijo generados con motores IA (ElevenLabs, Artlist, GPT, Canva) por canal.',
    bg: 'bg-[#F2F0EE]',
  },
  {
    num: '05',
    title: 'Aprobación',
    desc: 'Repli-k revisa y aprueba todo el material. Ajustamos hasta que esté perfecto.',
    bg: 'bg-[#FFF5EE]',
  },
  {
    num: '06',
    title: 'Upload & Live',
    desc: 'Distribución por canal, monitoreo activo y optimización continua en tiempo real.',
    bg: 'bg-[#1C1C1C]',
    dark: true,
  },
]

function Proceso() {
  return (
    <section className="py-24 bg-[#F2F0EE] px-6">
      <div className="max-w-6xl mx-auto">

        <div className="mb-12">
          <p className="text-[#F96B09] font-semibold text-xs uppercase tracking-widest mb-3">
            Cómo lo hacemos
          </p>
          <h2 className="font-space text-4xl md:text-5xl font-bold leading-tight text-[#1C1C1C]">
            6 pasos.<br />Nada improvisado.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {pasos.map((paso) => (
            <div key={paso.num} className={`${paso.bg} rounded-2xl p-7 border ${paso.dark ? 'border-[#333]' : 'border-transparent'}`}>
              <div className="flex items-center gap-3 mb-4">
                <span className="font-space font-bold text-[#F96B09] text-3xl leading-none opacity-50">
                  {paso.num}
                </span>
              </div>
              <h3 className={`font-space font-bold text-lg mb-2 ${paso.dark ? 'text-white' : 'text-[#1C1C1C]'}`}>
                {paso.title}
              </h3>
              <p className={`text-sm leading-relaxed ${paso.dark ? 'text-[#888888]' : 'text-[#666666]'}`}>
                {paso.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

// ─── TIKTOK SHOP ─────────────────────────────────────────────────────────────

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
    <section className="py-24 bg-[#0F0F0F] px-6">
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

          <p className="text-[#777777] text-xl mb-12 max-w-2xl leading-relaxed">
            Las ventas de perfumes alternativos en TikTok Shop crecen +340% año a año.
            Repli-k todavía no está ahí. Cada día sin TikTok Shop es dinero que no entra.
          </p>

          <div className="grid md:grid-cols-2 gap-3">
            {tiktokItems.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-[#1A1A1A] p-5 rounded-2xl border border-[#2A2A2A]"
              >
                <IconArrow />
                <span className="text-[#DDDDDD] font-medium text-sm leading-relaxed">{item}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

// ─── HERRAMIENTAS ────────────────────────────────────────────────────────────

const tools = [
  { name: 'ElevenLabs', desc: 'Videos y voz con IA', bg: 'bg-[#FFF5EE] border-[#F9D5BB]' },
  { name: 'Artlist', desc: 'Música y stock UGC', bg: 'bg-[#F2F0EE] border-[#DEDAD6]' },
  { name: 'ChatGPT', desc: 'Copy, guiones, mensajes', bg: 'bg-[#FFF5EE] border-[#F9D5BB]' },
  { name: 'Canva', desc: 'Arte fijo y formatos', bg: 'bg-[#F2F0EE] border-[#DEDAD6]' },
  { name: 'Meta Ads', desc: 'Campañas pagadas', bg: 'bg-[#FFF5EE] border-[#F9D5BB]' },
  { name: 'Google Ads', desc: 'SEM y display', bg: 'bg-[#F2F0EE] border-[#DEDAD6]' },
  { name: 'TikTok Shop', desc: 'Canal de venta nuevo', bg: 'bg-[#1C1C1C] border-[#333333]', dark: true },
  { name: 'HubSpot', desc: 'CRM + automatización', bg: 'bg-[#FFF5EE] border-[#F9D5BB]' },
]

function Herramientas() {
  return (
    <section className="py-24 bg-[#FAFAFA] px-6">
      <div className="max-w-6xl mx-auto">

        <div className="mb-12">
          <p className="text-[#F96B09] font-semibold text-xs uppercase tracking-widest mb-3">
            Stack tecnológico
          </p>
          <h2 className="font-space text-4xl md:text-5xl font-bold leading-tight text-[#1C1C1C]">
            Las herramientas<br />que ejecutan el plan.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className={`${tool.bg} rounded-2xl p-6 border`}
            >
              <p className={`font-space font-bold text-lg mb-1 ${tool.dark ? 'text-white' : 'text-[#1C1C1C]'}`}>
                {tool.name}
              </p>
              <p className={`text-sm ${tool.dark ? 'text-[#666666]' : 'text-[#999999]'}`}>
                {tool.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Nota de licencias */}
        <div className="p-5 bg-[#FFF5EE] border border-[#F9D5BB] rounded-2xl flex items-start gap-3">
          <IconStar />
          <p className="text-sm text-[#555555] leading-relaxed">
            <span className="font-semibold text-[#F96B09]">Nota sobre licencias:</span>{' '}
            Las licencias de ElevenLabs y Artlist corren por cuenta de Repli-k.
            Gens opera y produce con todas las herramientas incluidas en el plan.
          </p>
        </div>

      </div>
    </section>
  )
}

// ─── CIERRE ──────────────────────────────────────────────────────────────────

function Cierre() {
  return (
    <section className="py-24 bg-[#0F0F0F] px-6">
      <div className="max-w-6xl mx-auto">

        <div className="max-w-3xl">
          <p className="text-[#F96B09] font-semibold text-xs uppercase tracking-widest mb-6">
            Gens × Repli-k
          </p>

          <h2 className="font-space text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Un plan construido<br />
            específicamente<br />
            para <span className="text-[#F96B09]">Repli-k.</span>
          </h2>

          <p className="text-[#666666] text-lg mb-14 max-w-xl leading-relaxed">
            Contenido IA, campañas optimizadas y TikTok Shop.
            Todo en un solo plan ejecutado por Gens, sin fricciones.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14">
            {[
              { label: 'Contenido IA', detail: 'Videos UGC + arte fijo generados por IA por canal' },
              { label: 'Performance', detail: 'Auditoría y optimización de Meta Ads + Google Ads' },
              { label: 'TikTok Shop', detail: 'Tienda creada, catálogo cargado y operación activa' },
            ].map((item) => (
              <div key={item.label} className="bg-[#1A1A1A] rounded-2xl p-6 border border-[#2A2A2A]">
                <p className="font-space font-bold text-white mb-2">{item.label}</p>
                <p className="text-[#666666] text-sm leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>

          <div className="border-t border-[#1E1E1E] pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <span className="font-space font-bold text-white text-lg">
                Full Stack <span className="text-[#F96B09]">Marketing 360</span>
              </span>
              <p className="text-[#555555] text-sm mt-1">by Gens — Alejandro Sánchez</p>
            </div>
            <div className="flex flex-col gap-1 text-right">
              <span className="text-[#666666] text-sm">contacto@somosgens.com</span>
              <span className="text-[#666666] text-sm">somosgens.com</span>
            </div>
          </div>
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
      <Cierre />
    </main>
  )
}
