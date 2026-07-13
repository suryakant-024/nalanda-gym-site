import { TEAM } from "@/lib/homeData";

function TeamCard({ name, role, img }: { name: string; role: string; img: string }) {
  return (
    <div className="px-2 shrink-0 w-56">
      <div className="relative group w-full aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer bg-gray-100">
        {/* PLACEHOLDER: Unsplash stock photo — replace with real trainer headshots */}
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[80%] bg-white/80 backdrop-blur-md border border-white/40 p-3 rounded-xl text-center shadow-lg transform transition-all duration-300 group-hover:-translate-y-2">
          <h3 className="text-gray-900 font-bold text-base sm:text-lg leading-tight">{name}</h3>
          <p className="text-gray-600 text-xs sm:text-sm font-medium tracking-wide">{role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Team() {
  // Team list duplicated once to create a seamless infinite loop (matches the
  // duplicated-list pattern seen in the live site's source).
  const doubled = [...TEAM, ...TEAM];

  return (
    <section id="trainers" className="mt-16 mb-12 w-full" style={{ fontFamily: "var(--font-matter)" }}>
      <div className="max-w-4xl mx-auto text-center mb-12 px-4">
        <div className="inline-block px-4 py-1 bg-white shadow-sm border border-gray-100 rounded-full text-gray-500 font-medium text-xs sm:text-sm mb-4">
          Our Trainers
        </div>
        <h2 className="text-2xl sm:text-5xl mt-2 text-gray-800 mb-10 px-3 leading-snug">
          Meet Our Trainers
        </h2>
      </div>
      <div className="w-full overflow-hidden">
        <div className="team-track flex">
          {doubled.map((member, i) => (
            <TeamCard key={`${member.name}-${i}`} name={member.name} role={member.role} img={member.img} />
          ))}
        </div>
      </div>
    </section>
  );
}
