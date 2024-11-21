export default function About() {
  return (
    <div id="about" className="relative bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:col-start-2">
            <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <img
                    className="rounded-lg shadow-lg object-cover object-center"
                    src="https://ik.imagekit.io/ri5cvrkrr/neve-accounting-01.jpg?updatedAt=1732207350705"
                    alt="Team meeting"
                  />
                </div>
              </figure>
            </div>
          </div>
          <div className="relative lg:col-start-1">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              About Us
            </h2>
            <div className="mt-6 text-gray-500 space-y-6">
              <p className="text-lg">
                Salem Taleb Efaifa Auditing and consultancy is an organization of substance with a full-service capability available in Qatar.
              </p>
              <p className="text-base leading-7">
                We construct our team to reflect your organization structure. We make all aspects of our service delivery transparent to the client. Our performance is pre-scheduled, agreed with you for deliverables, timetable, and maximum cost effectiveness.
              </p>
              <p className="text-base leading-7">
                Our aim is to beat your expectations from any assignments. The approach we adopt ensures that we bring our views to you about business operations as well as Financial and legal compliance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}