import { Grid } from "./icons";

const features = [
  {
    id: 1,
    title: "2-4 Days",
    description:
      "Plan regular, long, or extended weekends with our flexible calendar",
  },
  {
    id: 2,
    title: "Holidays",
    description:
      "Indian holidays and festivals automatically marked on your calendar",
  },
  {
    id: 3,
    title: "Long Weekends",
    description: "Get suggestions for upcoming long weekends to plan ahead",
  },
];

function HeroCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-lg bg-white/10 shadow-sm px-4 py-6 backdrop-blur-sm ">
      <div className="mb-2 text-2xl font-bold">{title}</div>
      <p className="text-blue-100">{description}</p>
    </div>
  );
}

export function HeroSection() {
  return (
    <div className="relative mb-16 overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 py-16 text-white">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Grid className="absolute top-0 left-0 h-full w-full transform-gpu opacity-20" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Weekend Planning Made Simple
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-lg sm:text-xl">
            Create and share your perfect weekend adventures with the speed of
            wind.
          </p>

          <div className="mx-auto mt-8 max-w-2xl">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {features.map((feature) => (
                <HeroCard
                  key={feature.id}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
