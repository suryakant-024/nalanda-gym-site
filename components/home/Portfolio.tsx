import ScrollReveal from "@/components/ScrollReveal";
import { PROJECTS } from "@/lib/homeData";

export default function Portfolio() {
  return (
    <section id="programs" style={{ fontFamily: "var(--font-matter)" }} className="py-8 md:mt-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block px-4 py-1 bg-white shadow-md rounded-full text-gray-500 font-medium text-sm mb-4">
          What We Offer
        </div>
        <h2 className="text-2xl sm:text-5xl text-center text-gray-800 mb-10 px-3 leading-snug">
          Our Programs
        </h2>
      </div>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid gap-x-10 gap-y-8 justify-center grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
          {PROJECTS.map((project, i) => (
            <ScrollReveal key={project.title} delay={(i % 3) * 0.1}>
              <div className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-transform duration-300 w-80 max-w-full mx-auto">
                {/* PLACEHOLDER: Unsplash stock photo — replace with real class/program photos */}
                <img
                  alt={project.title}
                  src={project.img}
                  className="rounded-xl w-full h-44 object-cover mb-4"
                />
                <h3 className="text-lg font-semibold mb-2 text-gray-900">{project.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-12">
        <button className="border border-black px-6 py-2 rounded-full text-sm font-medium hover:bg-black hover:text-white transition">
          View All
        </button>
      </div>
    </section>
  );
}
