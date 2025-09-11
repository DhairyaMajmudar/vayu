"use client";

import {
  ArrowPathIcon,
  CalendarDaysIcon,
  SparklesIcon,
  SwatchIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Visual Planning",
    description:
      "Design your perfect weekend with our intuitive drag-and-drop calendar interface.",
    icon: CalendarDaysIcon,
  },
  {
    name: "Activity Categories",
    description:
      "Choose from a variety of categorized activities or create your own custom experiences.",
    icon: SwatchIcon,
  },
  {
    name: "Save & Share",
    description:
      "Save your weekend plans for future reference or share them with friends and family.",
    icon: ArrowPathIcon,
  },
  {
    name: "Customization",
    description:
      "Personalize activities, timing, and preferences to create the perfect weekend just for you.",
    icon: SparklesIcon,
  },
];

export function FeaturesSection() {
  return (
    <div className="bg-gray-50 py-16 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Make the most of your weekends
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Powerful features to help you plan memorable experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="rounded-xl bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                <feature.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">
                {feature.name}
              </h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
