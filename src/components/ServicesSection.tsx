import { SPECIALTIES, getWhatsAppUrl } from '../data/clinicData';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

export const ServicesSection = () => {
  return (
    <section id="servicios" className="py-20 sm:py-28 bg-[#FAF8F5] border-b border-[#162C46]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#162C46]/15 text-xs font-bold uppercase tracking-wider text-[#162C46] shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#4A90E2]" />
            <span>Tratamientos &amp; Especialidades</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-[#162C46] leading-tight">
            Rehabilitación motora, columna y readaptación funcional
          </h2>

          <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed">
            Atención individualizada y cercana orientada a la causa de tu molestia. Aliviamos el dolor muscular y articular para que recuperes tu movilidad y vuelvas a entrenar sin limitaciones.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SPECIALTIES.map((spec) => (
            <div
              key={spec.id}
              className="rounded-3xl bg-white border border-[#162C46]/10 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#162C46]/30 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image header if available */}
                {spec.image && (
                  <div className="relative h-48 w-full overflow-hidden bg-neutral-100">
                    <img 
                      src={spec.image} 
                      alt={spec.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D1C2E]/50 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-4 text-[11px] font-bold text-white bg-[#162C46]/80 backdrop-blur-sm px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {spec.subtitle.split(' ')[0]}
                    </span>
                  </div>
                )}

                <div className="p-7">
                  <div className="text-xs font-bold text-[#4A90E2] uppercase tracking-wider mb-2">
                    {spec.subtitle}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-display font-medium text-[#162C46] mb-3 leading-tight group-hover:text-[#1E3A5F] transition-colors">
                    {spec.title}
                  </h3>

                  <p className="text-xs text-neutral-600 leading-relaxed font-light mb-6">
                    {spec.description}
                  </p>

                  {/* Tags */}
                  <div className="space-y-2 mb-4">
                    {spec.tags.map((tag, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-neutral-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#4A90E2] shrink-0" />
                        <span>{tag}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="p-7 pt-0">
                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <a
                    href={getWhatsAppUrl(spec.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#162C46] hover:text-[#4A90E2] transition-colors"
                  >
                    <span>Consultar Turno</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <span className="text-[10px] text-neutral-400 font-mono">Sarandí 724</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
