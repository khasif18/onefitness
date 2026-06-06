import { TestimonialCard } from "@/components/TestimonialCard";

type Testimonial = {
  id: number;
  name: string;
  quote: string;
  rating: number;
  image?: string;
  transformation?: string;
};

type TestimonialsListProps = {
  testimonials: Testimonial[];
};

export function TestimonialsList({ testimonials }: TestimonialsListProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((testimonial) => (
        <TestimonialCard
          key={testimonial.id}
          name={testimonial.name}
          quote={testimonial.quote}
          rating={testimonial.rating}
          image={testimonial.image}
          transformation={testimonial.transformation}
        />
      ))}
    </div>
  );
}
