import { TRUST_POINTS } from '../data/clinicData';
import { Award, Star, Users, ShieldCheck } from 'lucide-react';

export const TrustBar = () => {
  const icons = [Star, Users, Award, ShieldCheck];

  return (
    <section className="bg-white border-b border-[#162C46]/10 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {TRUST_POINTS.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div 
                key={idx} 
                className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#162C46]/10 flex flex-col items-center text-center transition-all hover:border-[#162C46]/30 shadow-2xs"
              >
                <div className="w-10 h-10 rounded-full bg-[#162C46] text-white flex items-center justify-center mb-3">
                  <Icon className="w-4 h-4 text-[#6BA4E8]" />
                </div>
                <div className="text-2xl sm:text-3xl font-display font-medium text-[#162C46]">
                  {item.value}
                </div>
                <div className="text-xs text-neutral-600 font-medium mt-1">
                  {item.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
