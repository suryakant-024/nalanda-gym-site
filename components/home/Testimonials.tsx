import { CircularTestimonials } from "@/components/ui/circular-testimonials";
import { TESTIMONIALS } from "@/lib/homeData";

export default function Testimonials() {
  return (
    <section
      className="my-12 w-full flex flex-col items-center text-center px-6 bg-white"
      style={{ fontFamily: "var(--font-matter)" }}
    >
      <div className="px-5 py-2 bg-white shadow-md rounded-full text-gray-600 text-xs sm:text-sm font-medium">
        Client Testimonials
      </div>
      <h2 className="text-2xl sm:text-5xl mt-4 text-gray-800 mb-10 px-3 leading-snug">
        Happy Clients Testimonials
      </h2>
      <div className="w-full flex justify-center">
        <CircularTestimonials
          testimonials={TESTIMONIALS}
          autoplay={true}
          colors={{
            name: "#0a0a0a",
            designation: "#454545",
            testimony: "#171717",
            arrowBackground: "#141414",
            arrowForeground: "#f1f1f7",
            arrowHoverBackground: "#e63946",
          }}
          fontSizes={{
            name: "28px",
            designation: "20px",
            quote: "20px",
          }}
        />
      </div>
    </section>
  );
}
