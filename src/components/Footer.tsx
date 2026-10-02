import { CLINIC_INFO, getWhatsAppUrl, SPECIALTIES } from '../data/clinicData';
import { MapPin, Phone, Star, Clock, MessageCircle } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';

export const Footer = () => {
  return (
    <footer className="bg-[#0D1C2E] text-white text-xs pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: Brand & Logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/images/cg-logo.jpg" 
                alt="Lic. Carolina Gala - Kinesiología" 
                className="h-14 w-auto object-contain bg-white rounded-xl p-1"
              />
              <div>
                <div className="text-base font-bold text-white leading-tight">Lic. Carolina Gala</div>
                <div className="text-[11px] text-[#6BA4E8] font-semibold tracking-wider uppercase">Kinesiología &amp; Fisiatría</div>
              </div>
            </div>
            <p className="text-xs text-neutral-300 font-light leading-relaxed">
              Consultorio de kinesiología y fisiatría en CABA. Atención 1 a 1 para rehabilitación funcional, recuperación de lesiones articulares, columna y vuelta al deporte.
            </p>
            <div className="flex items-center gap-1.5 text-amber-400 font-bold text-xs pt-1">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>{CLINIC_INFO.rating} de 5 Estrellas • {CLINIC_INFO.reviewCount} opiniones en Google Maps</span>
            </div>
          </div>

          {/* Col 2: Especialidades */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Especialidades Terapéuticas
            </h4>
            <ul className="space-y-2 text-neutral-300">
              {SPECIALTIES.slice(0, 5).map((spec) => (
                <li key={spec.id}>
                  <a href="#servicios" className="hover:text-[#6BA4E8] transition-colors">
                    • {spec.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Ubicación y Horarios */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Consultorio en CABA
            </h4>
            <div className="space-y-2.5 text-neutral-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#6BA4E8] shrink-0 mt-0.5" />
                <span>{CLINIC_INFO.address} — CABA</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#6BA4E8] shrink-0" />
                <span>{CLINIC_INFO.hours}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#6BA4E8] shrink-0" />
                <span>WhatsApp: {CLINIC_INFO.phoneDisplay}</span>
              </div>
            </div>
          </div>

          {/* Col 4: Redes & Citas */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Redes &amp; Turnos
            </h4>
            <div className="space-y-3">
              <a
                href={CLINIC_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors"
              >
                <InstagramIcon className="w-4 h-4 text-[#E1306C]" />
                <span>{CLINIC_INFO.instagramHandle}</span>
              </a>

              <div className="pt-2">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-tactile inline-flex items-center justify-center gap-2 w-full py-3 rounded-full bg-[#1E3A5F] hover:bg-[#294D7A] text-white font-bold uppercase tracking-wider text-xs shadow-sm transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#6BA4E8]" />
                  <span>Pedir Turno por WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-400">
          <div>
            © {new Date().getFullYear()} Lic. Carolina Gala Kinesiología y Fisiatría. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-4">
            <span>Sarandí 724, CABA</span>
            <span>•</span>
            <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:underline">
              WhatsApp {CLINIC_INFO.phoneDisplay}
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
