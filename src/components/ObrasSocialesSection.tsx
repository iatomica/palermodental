import { getWhatsAppUrl, CLINIC_INFO } from '../data/clinicData';
import { ShieldCheck, Receipt, CreditCard, MessageCircle, ArrowRight } from 'lucide-react';

export const ObrasSocialesSection = () => {
  const paymentFeatures = [
    {
      icon: Receipt,
      title: 'Factura para Reintegros',
      badge: 'Prepagas & Obras Sociales',
      desc: 'Emitimos factura oficial homologada por AFIP/ARCA con detalle de sesiones kinésicas y diagnóstico para que gestiones el reintegro con tu cobertura médica (OSDE, Swiss Medical, Galeno, Medicus, etc.).'
    },
    {
      icon: CreditCard,
      title: 'Múltiples Medios de Pago',
      badge: 'Efectivo, Tarjeta & Transf.',
      desc: 'Aceptamos transferencias bancarias, tarjetas de débito, crédito y pagos en efectivo para facilitarte la continuidad de tus sesiones de recuperación.'
    },
    {
      icon: ShieldCheck,
      title: 'Plan Terapéutico Claro',
      badge: 'Sin Sorpresas',
      desc: 'Evaluación funcional inicial para estimar el número de sesiones necesarias según tu evolución real, sin compromisos innecesarios ni sobretratamientos.'
    }
  ];

  return (
    <section id="coberturas" className="py-20 sm:py-24 bg-white border-b border-[#162C46]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF8F5] border border-[#162C46]/15 text-xs font-bold text-[#162C46] uppercase tracking-wider shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5 text-[#4A90E2]" />
            <span>Transparencia &amp; Reintegros</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-medium text-[#162C46] tracking-tight">
            Modalidad de Atención &amp; Coberturas
          </h2>
          <p className="text-neutral-600 text-xs sm:text-sm font-light leading-relaxed">
            Priorizamos la calidad médica, la atención individualizada y la total claridad en cada consulta en nuestro consultorio de {CLINIC_INFO.address}.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
          {paymentFeatures.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="bg-[#FAF8F5] rounded-3xl p-7 border border-[#162C46]/10 shadow-2xs hover:border-[#162C46]/30 transition-all text-left flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#162C46] text-white flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-[#6BA4E8]" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#4A90E2] block mb-1">
                    {feat.badge}
                  </span>
                  <h3 className="font-display font-medium text-[#162C46] text-xl mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed font-light">
                    {feat.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Direct WhatsApp Action */}
        <div className="text-center">
          <a
            href={getWhatsAppUrl('Consulta sobre aranceles kinesiológicos y reintegros con mi prepaga')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-tactile inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#162C46] hover:bg-[#1E3A5F] text-white text-xs font-bold uppercase tracking-wider shadow-md transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-[#6BA4E8]" />
            <span>Consultar Aranceles por WhatsApp</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
