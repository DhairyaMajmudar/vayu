import { Quotes } from "../icons";

const testimonials = [
  {
    id: 1,
    content:
      "Vayu has completely transformed how I plan my weekends. The visual interface makes it so easy to organize activities and manage my time effectively.",
    author: "Amrish Majmudar",
    role: "Busy professional",
  },
  {
    id: 2,
    content:
      "As a parent of three kids, I needed a simple way to plan fun family weekends. Vayu helps me balance activities for everyone and makes planning enjoyable.",
    author: "Dharti Majmudar",
    role: "Parent",
  },
  {
    id: 3,
    content:
      "I love that I can save my weekend plans and reuse them later. It's become an essential tool for organizing my leisure time.",
    author: "Kartik Sharma",
    role: "Travel enthusiast",
  },
];

export function TestimonialsSection() {
  return (
    <div className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            What our users say
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Discover how Vayu helps people create memorable weekend experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="rounded-xl bg-gray-50 p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-4 text-blue-600">
                <Quotes className="h-8 w-8" />
              </div>
              <blockquote className="text-lg text-gray-600">
                {testimonial.content}
              </blockquote>
              <div className="mt-4">
                <p className="font-medium text-gray-900">
                  {testimonial.author}
                </p>
                <p className="text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
