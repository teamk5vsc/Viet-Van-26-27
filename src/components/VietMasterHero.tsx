import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Send, Star, Pencil, Leaf } from 'lucide-react';

interface VietMasterHeroProps {
  studentName?: string;
}

// Thick white "sticker" outline behind the orange headline, built from stacked
// text-shadows (works everywhere, unlike -webkit-text-stroke which renders
// unevenly in some browsers) plus a soft drop shadow for a little lift.
const HEADLINE_STICKER_SHADOW = [
  '2px 0 0 #fff', '-2px 0 0 #fff', '0 2px 0 #fff', '0 -2px 0 #fff',
  '3px 3px 0 #fff', '-3px 3px 0 #fff', '3px -3px 0 #fff', '-3px -3px 0 #fff',
  '0 8px 14px rgba(140,80,20,0.25)',
].join(', ');

function HeroDecorations() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <motion.span
        className="absolute top-[9%] left-[5%] text-amber-900/25"
        animate={{ y: [0, -3, 0], rotate: [-4, 2, -4] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <BookOpen className="w-7 h-7 sm:w-9 sm:h-9" strokeWidth={2} />
      </motion.span>

      <motion.span
        className="absolute top-[8%] left-[32%] hidden sm:block text-white/80"
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Send className="w-6 h-6" strokeWidth={2.25} />
      </motion.span>

      <svg
        className="absolute top-[15%] left-[19%] w-24 h-14 hidden sm:block opacity-50"
        viewBox="0 0 120 60"
        fill="none"
      >
        <path d="M2 48 Q 42 -6, 108 18" stroke="white" strokeWidth="2" strokeDasharray="4 7" strokeLinecap="round" />
      </svg>

      <span className="absolute bottom-[16%] left-[38%] hidden sm:block text-white/70">
        <Star className="w-4 h-4" strokeWidth={2.5} />
      </span>

      <span className="absolute bottom-[6%] left-[3%] text-emerald-900/20">
        <Leaf className="w-8 h-8 sm:w-10 sm:h-10" strokeWidth={2} />
      </span>
    </div>
  );
}

function HeroIllustration() {
  return (
    <div
      className="relative h-40 sm:h-full w-full sm:w-[55%] shrink-0 sm:self-stretch"
      style={{
        maskImage: 'linear-gradient(to right, transparent 0%, black 14%)',
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 14%)',
      }}
    >
      <img
        src="/hero-illustration.jpg"
        alt="Cú Văn cùng hai bạn nhỏ đang đọc và viết văn"
        loading="eager"
        className="h-full w-full object-cover object-[65%_50%] sm:object-[35%_50%]"
      />
    </div>
  );
}

function HeroContent({ studentName }: VietMasterHeroProps) {
  return (
    <div className="relative z-10 w-full sm:w-[45%] flex flex-col justify-center gap-4 sm:gap-5 px-5 py-8 sm:px-8 sm:py-10">
      <div>
        <h1
          className="font-heading font-extrabold leading-[1.15] text-[26px] sm:text-[34px] lg:text-[40px]"
          style={{ fontFamily: "'Baloo 2', 'Outfit', system-ui, sans-serif", color: '#F15A24', textShadow: HEADLINE_STICKER_SHADOW }}
        >
          Mỗi bài văn là một cuộc phiêu lưu!
        </h1>
        <svg className="mt-2 ml-0.5 w-40 sm:w-52 h-2.5" viewBox="0 0 200 12" fill="none">
          <path d="M3 8 Q 50 2, 100 7 T 197 5" stroke="white" strokeWidth="4" strokeLinecap="round" opacity="0.9" />
        </svg>
      </div>

      <p className="text-sm sm:text-lg font-semibold leading-relaxed max-w-xs sm:max-w-sm flex items-start gap-1.5" style={{ color: '#8A5525' }}>
        <span>
          {studentName
            ? `${studentName} ơi, hôm nay mình sẽ kể câu chuyện gì nhỉ?`
            : 'Em có cả một thế giới trong trí tưởng tượng — hãy viết nó ra nào!'}
        </span>
        <Pencil className="w-4 h-4 mt-1 shrink-0" />
      </p>
    </div>
  );
}

export default function VietMasterHero({ studentName }: VietMasterHeroProps) {
  return (
    <div
      className="relative flex flex-col sm:flex-row overflow-hidden mx-auto"
      style={{
        width: 'min(100%, 1100px)',
        minHeight: '220px',
        borderRadius: '24px',
        boxShadow: '0 8px 24px rgba(140,80,20,0.18)',
        background: 'linear-gradient(135deg, #FFB238 0%, #FFA329 100%)',
      }}
    >
      <HeroDecorations />
      <HeroContent studentName={studentName} />
      <HeroIllustration />
    </div>
  );
}
