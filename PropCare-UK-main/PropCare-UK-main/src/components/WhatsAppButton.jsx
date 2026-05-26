import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/447938849865?text=Hi%20Prop%20Care%2C%20I%27d%20like%20to%20enquire%20about%20your%20property%20services%20in%20North%20West%20England."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-2xl shadow-[#25D366]/30 hover:shadow-[#25D366]/50 transition-shadow duration-300 group"
      aria-label="Chat with Prop Care (NW) LTD on WhatsApp for a free property maintenance quote"
      title="WhatsApp Prop Care NW — Get a free quote"
    >
      <FaWhatsapp className="w-7 h-7 text-white" aria-hidden="true" />

      {/* Pulse Ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" aria-hidden="true" />

      {/* Tooltip */}
      <span
        className="absolute right-full mr-3 px-3 py-2 rounded-lg bg-navy-800 text-white text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg"
        role="tooltip"
      >
        Get a free quote on WhatsApp
      </span>
    </motion.a>
  )
}
