import { VIDEO_POSTER } from "@/lib/homeData";

// {/* replace with hero video */} — no reliably hotlinkable free gym video clip was
// found (Pexels/Coverr direct video URLs return 403 without an authenticated referrer),
// so this uses a photo poster with a play-button overlay as instructed by the fallback rule.
export default function VideoBlock() {
  return (
    <div
      className="relative w-full sm:min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 py-12 sm:py-8 bg-cover bg-center bg-gray-900"
      /* PLACEHOLDER: background — replace with /home/Frame-4.png */
      style={{ fontFamily: "var(--font-matter)" }}
    >
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium text-center mb-6 sm:mb-8 text-white leading-snug">
        See Nalanda Gym
        <br />
        <span className="block ml-4 sm:ml-8 md:ml-12">in Action</span>
      </h1>
      <div className="w-full max-w-4xl h-48 sm:h-[22.5rem] md:h-[31.5rem] relative rounded-2xl shadow-lg overflow-hidden group cursor-pointer">
        {/* PLACEHOLDER: video — replace this poster image with an actual autoplay/muted/loop <video> once a licensed gym clip is sourced */}
        <img src={VIDEO_POSTER} alt="Nalanda Gym workout preview" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-colors group-hover:bg-black/40">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
            <div
              className="w-0 h-0 ml-1"
              style={{
                borderTop: "12px solid transparent",
                borderBottom: "12px solid transparent",
                borderLeft: "20px solid black",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
