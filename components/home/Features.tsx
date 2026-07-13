import ScrollReveal from "@/components/ScrollReveal";
import { FEATURE_IMAGES } from "@/lib/homeData";

const CARDS = [
  {
    // PLACEHOLDER: Unsplash stock photo — replace with real gym photography
    img: FEATURE_IMAGES[0],
    title: "Personal Training",
    description: "One-on-one coaching built around your goals.",
  },
  {
    // PLACEHOLDER: Unsplash stock photo — replace with real gym photography
    img: FEATURE_IMAGES[1],
    title: "Membership from ₹999/mo",
    description: "Flexible plans for every fitness level.",
  },
];

export default function Features() {
  return (
    <section
      style={{ fontFamily: "var(--font-matter)" }}
      className="w-full flex flex-col items-center py-16 bg-transparent"
    >
      <div className="px-4 py-1 bg-white shadow-md rounded-full text-gray-500 font-medium text-sm mb-4">
        Features
      </div>
      <h2 className="text-2xl sm:text-5xl text-center text-gray-800 mb-10 px-3 leading-snug">
        Streamline Your Fitness with our
        <br />
        Flexible Options
      </h2>
      <div className="w-full max-w-6xl px-4 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 justify-center">
        {CARDS.map((card, i) => (
          <ScrollReveal key={card.title} delay={i * 0.15}>
            <article className="cursor-pointer bg-cover bg-white flex flex-col items-center rounded-xl overflow-hidden shadow-sm ring-1 ring-gray-200 p-4 transition-all duration-300 hover:shadow-xl hover:scale-[1.03] max-w-[500px] mx-auto">
              <div className="flex justify-center items-center h-[200px] sm:h-[250px] w-full mb-4 overflow-hidden">
                <img src={card.img} alt={card.title} className="w-full h-full object-cover rounded-lg" />
              </div>
              <div className="w-full text-left px-2">
                <h3 className="text-lg sm:text-2xl font-semibold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{card.description}</p>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
