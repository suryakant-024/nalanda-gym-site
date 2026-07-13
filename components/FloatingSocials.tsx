import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function FloatingSocials() {
  return (
    <>
      {/* PLACEHOLDER: Instagram handle — swap for the real @nalandagym account */}
      <a
        href="https://www.instagram.com/nalandagym/"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed left-3 bottom-4 z-50 sm:left-5 sm:bottom-6 md:left-6 md:bottom-8 transition-transform duration-300 hover:scale-125 hover:-translate-y-2 hover:rotate-6 animate-floatingSmooth"
      >
        <div
          className="w-13 h-13 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-14 lg:h-14 flex items-center justify-center rounded-full shadow-lg drop-shadow-[0_0_8px_rgba(255,0,150,0.25)] hover:drop-shadow-[0_0_15px_rgba(255,50,180,0.45)] transition-all duration-300"
          style={{ background: "linear-gradient(45deg, #833AB4, #FD1D1D, #FCB045)" }}
        >
          <FaInstagram className="w-2/3 h-2/3 text-white" />
        </div>
      </a>
      {/* PLACEHOLDER: WhatsApp number — swap +919999999999 for the real gym contact number */}
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-3 bottom-4 z-50 sm:right-5 sm:bottom-6 md:right-6 md:bottom-8 transition-transform duration-300 hover:scale-125 hover:-translate-y-2 hover:-rotate-6 animate-floatingSmooth"
      >
        <div
          className="w-15 h-15 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex items-center justify-center rounded-full shadow-lg drop-shadow-[0_0_8px_rgba(0,255,70,0.25)] hover:drop-shadow-[0_0_15px_rgba(0,255,100,0.45)] transition-all duration-300"
          style={{ backgroundColor: "#25D366" }}
        >
          <FaWhatsapp className="w-2/3 h-2/3 text-white" />
        </div>
      </a>
    </>
  );
}
