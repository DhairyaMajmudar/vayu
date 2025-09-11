import Link from "next/link";

export function CallToAction() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to make the most of your weekends?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-blue-100">
            Start planning your perfect weekend adventures today with our
            simple, intuitive calendar interface.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/planner"
              className="rounded-md bg-white px-6 py-3 text-sm text-blue-600 shadow-sm transition hover:bg-blue-50 font-semibold"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
