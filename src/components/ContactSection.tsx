import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  Phone, 
  MessageSquare, 
  MapPin, 
  Sparkles, 
  Copy, 
  Check, 
  ArrowUpRight,
  Instagram,
  Linkedin,
  Globe2
} from 'lucide-react';
import { DESIGNER_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const CONTACT_CHANNELS = [
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      value: '+212 767374925',
      href: 'https://wa.me/212767374925',
      actionText: 'Chat on WhatsApp',
      icon: MessageSquare,
      accent: 'hover:border-[#25D366]/50',
      badgeColor: 'text-[#25D366] bg-[#25D366]/10 border-[#25D366]/30'
    },
    {
      id: 'gmail',
      label: 'Gmail',
      value: 'youdesigner36@gmail.com',
      href: 'mailto:youdesigner36@gmail.com',
      actionText: 'Send Email',
      icon: Mail,
      accent: 'hover:border-[#ff5500]/60',
      badgeColor: 'text-[#ff5500] bg-[#ff5500]/10 border-[#ff5500]/30'
    },
    {
      id: 'phone',
      label: 'Phone',
      value: '+212 767374925',
      href: 'tel:+212767374925',
      actionText: 'Call Directly',
      icon: Phone,
      accent: 'hover:border-[#ff5500]/60',
      badgeColor: 'text-white bg-white/10 border-white/20'
    },
    {
      id: 'location',
      label: 'Location',
      value: 'Taroudant, Morocco',
      href: '#',
      actionText: 'Available Worldwide',
      icon: MapPin,
      accent: 'hover:border-[#ff5500]/40',
      badgeColor: 'text-[#ff5500] bg-[#ff5500]/10 border-[#ff5500]/30'
    }
  ];

  const SOCIAL_LINKS = [
    {
      name: 'Instagram',
      handle: '@younes_oubihi',
      url: 'https://instagram.com/younes_oubihi',
      icon: Instagram,
      color: 'hover:text-[#E4405F]'
    },
    {
      name: 'Behance',
      handle: 'younesoubihi',
      url: 'https://behance.net/younesoubihi',
      icon: Globe2,
      color: 'hover:text-[#0057FF]'
    },
    {
      name: 'LinkedIn',
      handle: 'Younes Oubihi',
      url: 'https://linkedin.com/in/younes-oubihi-b6aa83190',
      icon: Linkedin,
      color: 'hover:text-[#0A66C2]'
    },
    {
      name: 'Facebook',
      handle: 'All About Graphic Design',
      url: 'https://facebook.com/All.About.Graphic.Design.11',
      icon: Globe2,
      color: 'hover:text-[#1877F2]'
    }
  ];

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#27272a]/60">
      {/* Section Header: LET'S CONNECT */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff5500]/10 border border-[#ff5500]/30 text-[#ff5500] text-xs font-mono font-bold tracking-widest uppercase mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>DIRECT CHANNELS</span>
        </div>
        <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase">
          LET'S <span className="text-[#ff5500]">CONNECT</span>
        </h2>
        <p className="text-zinc-300 text-sm sm:text-base md:text-lg mt-3 leading-relaxed max-w-2xl mx-auto">
          Reach out through any of these channels — I'm always happy to discuss new projects.
        </p>
      </div>

      {/* 4 Direct Contact Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
        {CONTACT_CHANNELS.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className={`p-6 sm:p-7 rounded-3xl bg-[#121215] border border-[#27272a] ${item.accent} transition-all flex flex-col justify-between space-y-6 group hover:shadow-2xl hover:shadow-[#ff5500]/10`}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#18181c] border border-[#27272a] flex items-center justify-center text-[#ff5500] group-hover:scale-105 transition-transform">
                  <item.icon className="w-5 h-5" />
                </div>
                <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono border ${item.badgeColor}`}>
                  {item.label}
                </span>
              </div>

              <div>
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider block">
                  {item.label}
                </span>
                <p className="font-display font-bold text-lg sm:text-xl text-white mt-1 group-hover:text-[#ff5500] transition-colors break-words">
                  {item.value}
                </p>
              </div>
            </div>

            {/* Quick Action Button & Copy */}
            <div className="pt-4 border-t border-[#27272a]/60 flex items-center gap-2">
              {item.href !== '#' ? (
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="flex-1 py-2.5 px-3 rounded-xl bg-[#18181c] hover:bg-[#ff5500] text-zinc-200 hover:text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-all group-hover:shadow-md cursor-pointer"
                >
                  <span>{item.actionText}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              ) : (
                <div className="flex-1 py-2.5 px-3 rounded-xl bg-[#18181c] text-zinc-400 text-xs font-mono text-center">
                  Taroudant, Morocco 🇲🇦
                </div>
              )}

              {item.id !== 'location' && (
                <button
                  onClick={() => handleCopy(item.value, item.label)}
                  className="p-2.5 rounded-xl bg-[#18181c] border border-[#27272a] hover:border-[#ff5500]/50 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                  title={`Copy ${item.label}`}
                >
                  {copiedItem === item.label ? (
                    <Check className="w-4 h-4 text-green-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Follow Me Section */}
      <div className="p-8 sm:p-10 rounded-3xl bg-[#101013] border border-[#27272a] space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#27272a]/60 pb-4">
          <div>
            <h3 className="font-display font-black text-xl sm:text-2xl text-white uppercase tracking-tight">
              Follow Me:
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 font-mono mt-0.5">
              Explore my latest creative posts, process decks & updates across social media.
            </p>
          </div>
          <span className="text-xs font-mono text-[#ff5500] font-bold">
            @younes_oubihi
          </span>
        </div>

        {/* Social Links Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          {SOCIAL_LINKS.map((soc) => (
            <a
              key={soc.name}
              href={soc.url}
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-2xl bg-[#141418] border border-[#27272a] hover:border-[#ff5500]/60 transition-all flex items-center justify-between group hover:bg-[#18181c] cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#1c1c20] border border-[#27272a] flex items-center justify-center text-zinc-300 group-hover:text-[#ff5500] transition-colors">
                  <soc.icon className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-display font-bold text-sm text-white group-hover:text-[#ff5500] transition-colors">
                    {soc.name}
                  </div>
                  <div className="text-[11px] text-zinc-500 font-mono line-clamp-1">
                    {soc.handle}
                  </div>
                </div>
              </div>

              <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-[#ff5500] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
