import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Basic",
    description: "Great for beginners who want to get started with fitness.",
    price: "$19",
    period: "/mo",
    recommended: false,
    features: [
      "Access to gym floor",
      "Locker room access",
      "1 group class per week",
    ],
    cta: "Get Started",
  },
  {
    name: "Standard",
    description: "Our most popular plan for regular gym-goers.",
    price: "$39",
    period: "/mo",
    recommended: true,
    features: [
      "Full gym access",
      "Unlimited group classes",
      "1 personal training session/month",
      "Access to sauna",
    ],
    cta: "Get Standard",
  },
  {
    name: "Premium",
    description: "The ultimate package for serious athletes.",
    price: "$69",
    period: "/mo",
    recommended: false,
    features: [
      "24/7 gym access",
      "Unlimited group classes",
      "4 personal training sessions/month",
      "Nutrition consultation",
      "Priority booking",
    ],
    cta: "Go Premium",
  },
];

export default function PlansPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        {/* Page heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Pricing
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Membership Plans
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            Choose a plan that fits your fitness goals. No contracts, cancel
            anytime.
          </p>
        </div>

        {/* Plan cards grid */}
        <div className="mt-16 grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={cn(
                "relative flex flex-col transition hover:border-white/20",
                plan.recommended
                  ? "border-primary/50 bg-white/[0.07] ring-1 ring-primary/30"
                  : ""
              )}
            >
              {/* Recommended badge */}
              {plan.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                    Recommended
                  </span>
                </div>
              )}

              <CardHeader className={cn("gap-3", plan.recommended && "pt-8")}>
                <CardTitle className="text-xl font-bold text-white">
                  {plan.name}
                </CardTitle>
                <CardDescription className="min-h-[40px]">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-1 space-y-6">
                {/* Price */}
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold tracking-tight text-white">
                    {plan.price}
                  </span>
                  <span className="text-sm text-slate-400">{plan.period}</span>
                </div>

                {/* Divider */}
                <hr className="border-white/10" />

                {/* Features list */}
                <ul className="space-y-3 text-sm text-slate-300">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-green-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="pt-4">
                <Button
                  className="w-full rounded-full"
                  size="lg"
                  variant={plan.recommended ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
