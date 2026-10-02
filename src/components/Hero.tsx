import { CLINIC_INFO, getWhatsAppUrl } from '../data/clinicData';
import { MessageCircle, Star, ShieldCheck, MapPin, ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-10 pb-20 lg:pt-16 lg:pb-28 border-b border-[#162C46]/10">
      
      {/* Subtle canvas background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F5] via-white to-[#FAF8F5]/60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Copy & Authority (7 cols) */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#162C46] text-white text-[11px] font-bold uppercase tracking-wider shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6BA4E8] animate-pulse" />
                <span>Lic. Carolina Gala • Sarandí 724</span>
              </span>

              <a
                href={CLINIC_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F0F6FD] hover:bg-[#E3EFFB] text-[#162C46] text-xs font-semibold transition-colors border border-[#6BA4E8]/30"
              >
                <div className="flex text-amber-500">
                  <Star className="w-3.5 h-3.5 fill-amber-500" />
                  <Star className="w-3.5 h-3.5 fill-amber-500" />
                  <Star className="w-3.5 h-3.5 fill-amber-500" />
                  <Star className="w-3.5 h-3.5 fill-amber-500" />
                  <Star className="w-3.5 h-3.5 fill-amber-500" />
                </div>
                <span className="font-bold">{CLINIC_INFO.rating}</span>
                <span className="text-neutral-500 font-normal">({CLINIC_INFO.reviewCount} opiniones en Google)</span>
              </a>

              <a
                href={CLINIC_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-100 hover:bg-neutral-200/80 text-neutral-800 text-xs font-medium transition-colors"
              >
                <span className="font-bold">{CLINIC_INFO.instagramHandle}</span>
                <span className="text-neutral-500">en Instagram</span>
              </a>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium text-[#162C46] leading-[1.08] tracking-tight">
              Kinesiología, fisiatría y <span className="italic font-normal text-[#1E3A5F]">rehabilitación funcional</span>.
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-neutral-600 font-light leading-relaxed max-w-2xl">
              Atención personalizada y cercana dirigida por la <strong>Lic. Carolina Gala</strong> en Sarandí 724. Especialista en recuperación de lesiones de rodilla, columna, alivio de dolores crónicos y readaptación deportiva con consultorio totalmente equipado.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tactile inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#162C46] hover:bg-[#1E3A5F] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#162C46]/15 group cursor-pointer transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#6BA4E8] group-hover:scale-110 transition-transform" />
                <span>Pedir Turno por WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#6BA4E8] group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#servicios"
                className="btn-tactile inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white hover:bg-neutral-50 text-[#162C46] border border-[#162C46]/20 font-bold text-xs uppercase tracking-wider transition-all"
              >
                <span>Ver Especialidades</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#4A90E2]" />
              </a>
            </div>

            {/* Trust Footer Badges */}
            <div className="pt-6 border-t border-neutral-200/90 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-neutral-700">
              <div className="flex items-center gap-2 p-3 rounded-2xl bg-white border border-neutral-200/80 shadow-2xs">
                <MapPin className="w-4 h-4 text-[#162C46] shrink-0" />
                <div>
                  <div className="font-bold text-neutral-900 leading-tight">Sarandí 724</div>
                  <div className="text-[11px] text-neutral-500">Balvanera / San Cristóbal, CABA</div>
                </div>
              </div>

              <div className="flex items-center gap-2 p-3 rounded-2xl bg-white border border-neutral-200/80 shadow-2xs">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <div>
                  <div className="font-bold text-neutral-900 leading-tight">Atención 1 a 1</div>
                  <div className="text-[11px] text-neutral-500">Espaldar sueco &amp; fisiatría</div>
                </div>
              </div>

              <div className="flex items-center gap-2 p-3 rounded-2xl bg-white border border-neutral-200/80 shadow-2xs">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500 shrink-0" />
                <div>
                  <div className="font-bold text-neutral-900 leading-tight">5,0 Estrellas</div>
                  <div className="text-[11px] text-neutral-500">42 opiniones verificadas</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: High-Res Portrait of Lic. Carolina Gala (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Card with Deep Navy Frame */}
              <div className="relative rounded-[28px] overflow-hidden bg-[#162C46] p-2 shadow-2xl border border-[#162C46]/20 group">
                <div className="relative rounded-[22px] overflow-hidden h-[460px] sm:h-[520px] bg-neutral-100">
                  <img
                    src="/images/cg-carolina-gala.jpg"
                    alt="Lic. Carolina Gala - Kinesióloga y Fisiatra en CABA"
                    className="w-full h-full object-cover object-[center_20%] group-hover:scale-103 transition-transform duration-700 ease-out"
                  />

                  {/* Gradient vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1C2E]/90 via-transparent to-transparent pointer-events-none" />

                  {/* Floating Doctor Badge */}
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <div className="inline-block px-3 py-1 rounded-full bg-white text-[#162C46] text-[10px] font-extrabold uppercase tracking-widest mb-1.5">
                      Kinesiología &amp; Fisiatría
                    </div>
                    <h3 className="text-2xl font-display font-medium text-white leading-tight">
                      Lic. Carolina Gala
                    </h3>
                    <p className="text-xs text-neutral-200 font-light mt-0.5">
                      Rehabilitación Funcional, Deportiva y Columna
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Review pill */}
              <div className="absolute -top-4 -right-2 sm:-right-4 bg-white p-3.5 rounded-2xl border border-neutral-200 shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#162C46] text-white flex flex-col items-center justify-center shrink-0">
                  <span className="text-sm font-bold leading-none">5.0</span>
                  <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400 mt-0.5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-neutral-900">42 Reseñas</div>
                  <div className="text-[10px] text-neutral-500">Google Maps Verificado</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
