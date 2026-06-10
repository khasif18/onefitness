// Member testimonials data.

export type Testimonial = {
  id: number;
  name: string;
  quote: string;
  rating: number;
  image?: string;
  transformation?: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ravi K.",
    quote: "Best gym in Rasapūdipalem! The trainers are amazing and the atmosphere keeps me coming back every day.",
    rating: 5,
    image: "/images/testimonials/member-1.jpg",
    transformation: "Lost 12kg in 3 months",
  },
  {
    id: 2,
    name: "Priya S.",
    quote: "Lost 10kg in 2 months. OneFitness changed my life. The personal training sessions are worth every rupee.",
    rating: 5,
    transformation: "Lost 10kg in 2 months",
  },
  {
    id: 3,
    name: "Arjun M.",
    quote: "Great equipment, clean facility, supportive community. I switched from another gym and never looked back.",
    rating: 4,
    image: "/images/testimonials/member-3.jpg",
  },
  {
    id: 4,
    name: "Sneha R.",
    quote: "The group classes are so much fun. I actually look forward to working out now. The yoga sessions are top-notch.",
    rating: 5,
    transformation: "Gained flexibility and confidence",
  },
  {
    id: 5,
    name: "Vikram D.",
    quote: "I joined as a complete beginner and the coaches made me feel welcome from day one. Now I train 5 days a week.",
    rating: 5,
    image: "/images/testimonials/member-5.jpg",
    transformation: "Gained 8kg muscle in 6 months",
  },
  {
    id: 6,
    name: "Anjali P.",
    quote: "The 24/7 access is a game-changer for my schedule. Clean, well-maintained, and never too crowded.",
    rating: 4,
  },
];
