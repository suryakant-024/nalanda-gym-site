// PLACEHOLDER: generic "Nalanda, Bihar" query embed — swap for the exact gym address/pin once available
export default function GoogleMap() {
  return (
    <div className="w-full rounded-2xl overflow-hidden shadow-md border border-gray-100 aspect-video">
      <iframe
        title="Nalanda Gym location"
        src="https://www.google.com/maps?q=Nalanda,Bihar&output=embed"
        className="w-full h-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
