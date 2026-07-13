const WORDS = ["STRENGTH", "CARDIO", "CROSSFIT", "YOGA", "HIIT", "PERSONAL TRAINING"];

function WordRow() {
  return (
    <>
      {WORDS.map((word, i) => (
        <span
          key={i}
          className="h-14 sm:h-16 flex items-center text-2xl sm:text-4xl font-semibold text-gray-800 whitespace-nowrap"
          style={{ fontFamily: "var(--font-matter)" }}
        >
          {word}
          <span className="text-blue-500 mx-4 sm:mx-6">•</span>
        </span>
      ))}
    </>
  );
}

export default function ScrollStrips() {
  return (
    <div className="flex flex-col items-center space-y-6 w-full mt-16">
      <div className="w-full overflow-hidden">
        <div className="strip-left flex gap-4">
          <WordRow />
          <WordRow />
        </div>
      </div>
      <div className="w-full overflow-hidden relative isolate">
        <div className="strip-right flex gap-4">
          <WordRow />
          <WordRow />
        </div>
      </div>
    </div>
  );
}
