const PHRASES = ["JOIN NALANDA GYM", "TRAIN HARD", "STAY STRONG", "NO EXCUSES"];

function PhraseRow() {
  return (
    <>
      {PHRASES.map((phrase, i) => (
        <span
          key={i}
          className="h-16 sm:h-20 flex items-center text-3xl sm:text-5xl font-bold text-white whitespace-nowrap px-4"
          style={{ fontFamily: "var(--font-matter)" }}
        >
          {phrase}
          <span className="text-blue-400 mx-6 sm:mx-8">•</span>
        </span>
      ))}
    </>
  );
}

export default function DeveloperMarquee() {
  return (
    <div className="overflow-hidden w-full bg-black">
      <div className="marquee inline-flex items-center">
        <PhraseRow />
        <PhraseRow />
      </div>
    </div>
  );
}
