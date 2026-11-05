import React from 'react';
import { 
  Compass, 
  MapPin, 
  CheckCircle2, 
  Search, 
  ShieldCheck, 
  Sparkles, 
  HelpCircle, 
  GraduationCap, 
  ArrowRight,
  Phone,
  Building2
} from 'lucide-react';
import { HOSTEL_CONTACT, BRANCHES } from '../data/hostelData';

interface SeoGuideSectionProps {
  onOpenBooking: () => void;
}

export const SeoGuideSection: React.FC<SeoGuideSectionProps> = ({ onOpenBooking }) => {
  const targetKeywords = [
    { label: 'Udaan Hostel', desc: 'Premier student accommodation' },
    { label: 'Udaan Girls Hostel', desc: 'Safe & homely residence' },
    { label: 'Udaan Hostel and PG', desc: 'All-inclusive meals & Wi-Fi' },
    { label: 'Hostel in Patna', desc: 'Top-rated student living' },
    { label: 'Girls Hostel in Patna', desc: '24x7 CCTV & female warden' },
    { label: 'Girls hostel in Patna Boring Road', desc: '2 mins from Allen Institute' },
    { label: 'Hostel for Girls', desc: 'Single, Double, Triple sharing' },
    { label: 'PG for Girls', desc: 'Homely food & power backup' },
    { label: 'Patna Girls Hostel', desc: 'Affordable from ₹6,000/mo' },
    { label: 'Boys Hostel in Patna Guide', desc: 'Nearby verified PG referral' },
    { label: 'PG for boys Info Desk', desc: 'Parent counseling assistance' }
  ];

  const nearbyCoachingHubs = [
    { name: 'Allen Career Institute', dist: '2-3 min walk (180m)', note: 'Closest girls hostel to Allen Boring Road' },
    { name: 'Carrier Planner Coaching', dist: '1 min walk (80m)', note: 'Directly opposite Om Enclave branch' },
    { name: 'Patna Women\'s College', dist: '8-10 mins commute', note: 'Quick access via Bailey Road & SK Puri' },
    { name: 'Aakash Institute Patna', dist: '5 mins walk', note: 'Convenient daily commute for NEET aspirants' },
    { name: 'Atal Path Expressway', dist: 'Direct connectivity', note: 'Fast transport to Patna Junction & AIIMS' },
    { name: 'Boring Road Chauraha', dist: '4 mins walk', note: 'Centrally located near markets, banks & cafes' }
  ];

  return (
    <section id="patna-hostel-guide" className="py-20 bg-stone-100/80 border-t border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-[#931c51]/10 text-[#931c51] px-3.5 py-1 rounded-full text-xs font-bold tracking-wide uppercase mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Patna Student Living & Location Guide</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 font-['Playfair_Display',serif] tracking-tight">
            Udaan Hostel and PG: Patna's #1 Choice for Girls
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed">
            Whether you are searching for the best <strong>Hostel in Patna</strong>, a safe <strong>Girls Hostel in Patna Boring Road</strong>, or an affordable <strong>PG for Girls</strong> near your coaching institute, Udaan provides parents and students complete peace of mind.
          </p>
        </div>

        {/* 3 Pillars Grid: Why Udaan Ranks #1 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          <div className="bg-white p-6 rounded-2xl shadow-xs border border-stone-200/80 hover:border-[#931c51]/30 transition-all">
            <div className="w-10 h-10 rounded-xl bg-rose-50 text-[#931c51] flex items-center justify-center mb-4">
              <Building2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-stone-900 mb-2">
              Best Girls Hostel in Patna Boring Road
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Located right off Atal Path at Om Enclave, our Boring Road branch places students within footsteps of premier medical and engineering coaching centers like Allen, Carrier Planner, and Aakash. No long commutes or autos needed.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-xs border border-stone-200/80 hover:border-[#931c51]/30 transition-all">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-stone-900 mb-2">
              Uncompromising Safety for Girls & PG
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Our residential premises feature 24x7 resident female wardens, round-the-clock IP CCTV coverage, strict biometric access, and an absolute no-male-visitor rule on living floors. Gates close strictly at 8:00 PM.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-xs border border-stone-200/80 hover:border-[#931c51]/30 transition-all">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-stone-900 mb-2">
              Affordable Fees from ₹6,000/Month
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              All packages include 3 fresh, hygienic daily meals, 100% dual power backup, unlimited high-speed Wi-Fi, laundry machines, and daily room cleaning. Choose from 4-sharing (₹6,000), triple (₹6,500), double (₹7,500), or single deluxe (₹8,000).
            </p>
          </div>

        </div>

        {/* Proximity to Key Hubs & Coaching Centers */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-100">
            <div>
              <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#931c51]" />
                <span>Prime Connectivity to Coaching Hubs & Colleges in Patna</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-500 mt-1">
                Zero travel stress allows students to dedicate maximum time to studies and revision.
              </p>
            </div>
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-1.5 bg-[#931c51] hover:bg-[#7a1341] text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors cursor-pointer self-start sm:self-auto"
            >
              <span>Schedule Guided Visit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-6">
            {nearbyCoachingHubs.map((hub, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/70 hover:bg-rose-50/40 transition-colors">
                <div className="flex items-center justify-between text-xs font-bold text-stone-900">
                  <span>{hub.name}</span>
                  <span className="text-[#931c51] bg-[#931c51]/10 px-2 py-0.5 rounded-full text-[11px] font-semibold">{hub.dist}</span>
                </div>
                <p className="text-[11px] text-stone-500 mt-1.5">{hub.note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Informational Guidance for Boys Hostel & Boys PG Searchers */}
        <div className="bg-amber-50/80 rounded-2xl p-5 sm:p-6 border border-amber-200/80 mb-12">
          <div className="flex items-start gap-3.5">
            <div className="p-2 rounded-xl bg-amber-100 text-amber-800 flex-shrink-0 mt-0.5">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-amber-950">
                Are You Looking for Boys Hostel in Patna or PG for Boys?
              </h4>
              <p className="text-xs sm:text-sm text-amber-900/80 mt-1 leading-relaxed">
                Please note that <strong>Udaan Girls' Hostel</strong> is strictly and exclusively dedicated to female students and working women to maintain 100% privacy and security. However, because many parents arrive in Patna with both daughters and sons preparing for competitive exams in Boring Road, our admissions counseling desk gladly provides verified referrals and guidance for trusted <strong>Boys Hostel in Patna</strong> and <strong>PG for boys</strong> located within safe walking distance of Boring Road and Atal Path.
              </p>
              <div className="mt-3 flex items-center gap-3">
                <a
                  href={`tel:${HOSTEL_CONTACT.primaryPhone}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-900 hover:text-amber-950 underline"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Admissions Desk for Guidance ({HOSTEL_CONTACT.primaryPhone})</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* High-Intent Search Keyword Tags Cloud for SEO Indexing */}
        <div className="bg-white rounded-2xl p-6 border border-stone-200 text-center">
          <p className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-3">
            Popular Searches for Patna Student Living & Hostel Booking
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {targetKeywords.map((item, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 bg-stone-100 hover:bg-rose-50 text-stone-700 hover:text-[#931c51] px-3 py-1.5 rounded-full text-xs font-medium border border-stone-200 transition-colors"
                title={`${item.label} - ${item.desc}`}
              >
                <Search className="w-3 h-3 text-[#931c51]/60" />
                <span className="font-semibold">{item.label}</span>
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
