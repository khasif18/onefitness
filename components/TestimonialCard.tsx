import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { StarRating } from "@/components/StarRating";

type TestimonialCardProps = {
  name: string;
  quote: string;
  rating: number;
  image?: string;
  transformation?: string;
};

export function TestimonialCard({
  name,
  quote,
  rating,
  image,
  transformation,
}: TestimonialCardProps) {
  return (
    <Card className="flex flex-col justify-between transition hover:border-white/20 hover:shadow-lg hover:shadow-black/20">
      <CardContent className="space-y-4 pt-6">
        {/* Star rating */}
        <StarRating rating={rating} />

        {/* Quote */}
        <blockquote className="text-sm italic leading-relaxed text-slate-300">
          &ldquo;{quote}&rdquo;
        </blockquote>

        {/* Transformation badge */}
        {transformation && (
          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary ring-1 ring-primary/20">
            {transformation}
          </span>
        )}
      </CardContent>

      <CardFooter className="gap-3">
        {/* Member photo or placeholder */}
        <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-slate-700">
          {image ? (
            <img
              src={image}
              alt={name}
              className="h-full w-full object-cover"
            />
          ) : (
            <svg
              className="h-5 w-5 text-slate-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          )}
        </div>

        {/* Name */}
        <span className="text-sm font-medium text-white">{name}</span>
      </CardFooter>
    </Card>
  );
}
