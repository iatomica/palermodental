import { CLINIC_INFO, getWhatsAppUrl } from '../data/clinicData';
import { Award, ShieldCheck, MessageCircle, CheckCircle2 } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';

export const AboutDoctor = () => {
  return (
    <section id="profesional" className="py-20 sm:py-28 bg-white border-b border-[#162C46]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Portrait & Reputation Badge (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Doctor Frame in Deep Navy Aesthetic */}
              <div className="rounded-[32px] overflow-hidden bg-[#162C46] p-2 border border-[#162C46]/20 shadow-xl">
                <div className="rounded-[24px] overflow-hidden h-[480px] sm:h-[540px] bg-neutral-100 relative">
                  <img
                    src="/images/cg-carolina-gala.jpg"
                    alt="Lic. Carolina Gala Kinesiología y Fisiatría Sarandí 724"
                    className="w-full h-full object-cover object-[center_18%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1C2E]/85 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="px-3 py-1 rounded-full bg-white text-[#162C46] text-[10px] font-extrabold uppercase tracking-widest inline-block mb-1.5 shadow-sm">
                      Kinesióloga Fisiatra
                    </span>
                    <h3 className="text-2xl font-display font-medium text-white leading-tight">
                      Lic. Carolina Gala
                    </h3>
                    <p className="text-xs text-neutral-200 font-light mt-0.5">
                      Sarandí 724 • CABA
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Instagram pill */}
              <a
                href={CLINIC_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute -bottom-4 -right-2 sm:-right-4 bg-white p-4 rounded-2xl border border-neutral-200 shadow-xl flex items-center gap-3 hover:scale-105 transition-transform"
              >
                <div className="w-10 h-10 rounded-xl bg-[#162C46] flex items-center justify-center text-white shrink-0">
                  <InstagramIcon className="w-5 h-5 text-[#E1306C]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-neutral-900">{CLINIC_INFO.instagramHandle}</div>
                  <div className="text-[11px] text-neutral-500">Instagram Profesional</div>
                </div>
              </a>

            </div>
          </div>

          {/* Right Column: Bio, Philosophy & Credentials (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF8F5] border border-[#162C46]/15 text-xs font-bold uppercase tracking-wider text-[#162C46]">
              <Award className="w-3.5 h-3.5 text-[#4A90E2]" />
              <span>Vocación Profesional &amp; Compromiso con tu Recuperación</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-[#162C46] leading-tight">
              Lic. Carolina Gala
            </h2>

            <p className="text-sm sm:text-base text-neutral-700 font-light leading-relaxed">
              Especialista en <strong>kinesiología traumatológica, rehabilitación deportiva, lesiones articulares y reeducación postural</strong>. Con una valoración de 5,0 estrellas en Google Maps basada en testimonios reales de pacientes, brinda un acompañamiento empático y riguroso.
            </p>

            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">
              Su consultorio en <strong>Sarandí 724 (CABA)</strong> está 100% equipado para kinesiología activa y pasiva: espaldar sueco, camilla clínica, bandas elásticas, aparatología fisioterápica y elementos de propiocepción, combinando técnicas manuales con entrenamiento funcional para devolverte autonomía y bienestar sin dolor.
            </p>

            {/* Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#162C46]/10 space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-[#162C46]">
                  <CheckCircle2 className="w-4 h-4 text-[#4A90E2]" />
                  <span>Rehabilitación Activa y Funcional</span>
                </div>
                <p className="text-[11px] text-neutral-600 font-light">
                  Ejercicios biomecánicos y readaptación progresiva para volver a entrenar y moverte con total seguridad.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#162C46]/10 space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-[#162C46]">
                  <ShieldCheck className="w-4 h-4 text-[#4A90E2]" />
                  <span>Atención 1 a 1 sin Esperas</span>
                </div>
                <p className="text-[11px] text-neutral-600 font-light">
                  Sesiones exclusivas y personalizadas, monitoreando minuto a minuto tu progreso sin tratamientos genéricos.
                </p>
              </div>
            </div>

            {/* Direct CTA */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={getWhatsAppUrl('Hola Lic. Carolina Gala, quisiera coordinar una consulta de evaluación con usted.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tactile inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#162C46] hover:bg-[#1E3A5F] text-white text-xs font-bold uppercase tracking-wider shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#6BA4E8]" />
                <span>Consultar con la Licenciada</span>
              </a>

              <a
                href={CLINIC_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-neutral-50 text-neutral-800 border border-neutral-300 text-xs font-semibold"
              >
                <InstagramIcon className="w-4 h-4 text-[#E1306C]" />
                <span>Ver @kine.carogala</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
