// Image URLs below are hot-linked Unsplash stock photos (direct images.unsplash.com
// links, confirmed reachable). Swap with real Nalanda Gym photography when available —
// each is marked PLACEHOLDER at its point of use.
const u = (id: string, w = 800, q = 70) => `https://images.unsplash.com/photo-${id}?w=${w}&q=${q}&auto=format&fit=crop`;

export const FEATURE_IMAGES = [u("1534438327276-14e5300c3a48", 900), u("1517836357463-d25dfeac3438", 900)];
export const VIDEO_POSTER = u("1526506118085-60ce8714f8c5", 1600, 75);

export const TEAM = [
  { name: "Rahul Verma", role: "Head Coach (Strength)", img: u("1583454110551-21f2fa2afe61", 500) },
  { name: "Priya Singh", role: "Yoga & Mobility Coach", img: u("1594381898411-846e7d193883", 500) },
  { name: "Amit Kumar", role: "CrossFit Coach", img: u("1518611012118-696072aa579a", 500) },
  { name: "Neha Sharma", role: "Personal Trainer", img: u("1546483875-ad9014c88eba", 500) },
  { name: "Vikram Raj", role: "Cardio & HIIT Coach", img: u("1571902943202-507ec2618e8f", 500) },
  { name: "Anjali Das", role: "Nutrition Coach", img: u("1522898467493-49726bf28798", 500) },
];

export const PROJECTS = [
  {
    title: "Strength Training",
    description: "Build raw power with free weights and guided compound lifts.",
    img: u("1517960413843-0aee8e2b3285", 700),
  },
  {
    title: "Cardio & HIIT",
    description: "Torch calories and boost stamina with high-intensity sessions.",
    img: u("1571731956672-f2b94d7dd0cb", 700),
  },
  {
    title: "CrossFit",
    description: "Functional, competitive workouts that push your limits.",
    img: u("1541534741688-6078c6bfb5c5", 700),
  },
  {
    title: "Yoga & Mobility",
    description: "Improve flexibility, balance, and recovery.",
    img: u("1476480862126-209bfaa8edc8", 700),
  },
  {
    title: "Personal Training",
    description: "Coaching tailored one-on-one to your goals.",
    img: u("1550345332-09e3ac987658", 700),
  },
  {
    title: "Group Classes",
    description: "High-energy sessions that keep you motivated.",
    img: u("1554284126-aa88f22d8b74", 700),
  },
];

// PLACEHOLDER: "transformations" photos — replace with real before/after member photos
export const REELS = [
  { caption: "Rohit — down 10kg in 3 months", img: u("1584466977773-e625c37cdd50", 500) },
  { caption: "Anjali's strength journey", img: u("1571008887538-b36bb32f4571", 500) },
  { caption: "Morning HIIT crew", img: u("1461896836934-ffe607ba8211", 500) },
  { caption: "CrossFit Saturday session", img: u("1576678927484-cc907957088c", 500) },
  { caption: "Yoga & recovery day", img: u("1517838277536-f5f99be501cd", 500) },
  { caption: "New PR on deadlift day", img: u("1434682772747-f16d3ea162c3", 500) },
];

// PLACEHOLDER testimonial — dummy member quotes, swap for real reviews later
export const TESTIMONIALS = [
  {
    quote: "Best gym in the city. The trainers actually care.",
    name: "Rohit S.",
    role: "Member since 2024",
  },
  {
    quote: "Lost 12kg in 4 months with their program.",
    name: "Anjali K.",
    role: "Member since 2023",
  },
  {
    quote: "Great equipment and an amazing community.",
    name: "Vikram R.",
    role: "Member since 2024",
  },
  {
    quote: "The free trial sold me instantly. Joined the same day.",
    name: "Neha M.",
    role: "Member since 2025",
  },
];

export const FAQS = [
  {
    question: "What are your opening hours?",
    answer: "Mon–Sat 5 AM–10 PM, Sun 6 AM–12 PM.",
  },
  {
    question: "Do you offer a free trial?",
    answer: 'Yes — book one using the "Book a Free Trial" form on this page.',
  },
  {
    question: "Can I freeze or pause my membership?",
    answer: "Yes, for up to 30 days.",
  },
  {
    question: "Do you have personal trainers?",
    answer: "Yes, certified trainers for every goal.",
  },
  {
    question: "Is parking available?",
    answer: "Yes, free parking for members.",
  },
];
