const services = [
  {
    title: 'External Audit',
    image: 'https://ik.imagekit.io/ri5cvrkrr/audit.jpeg?updatedAt=1732207356936',
  },
  {
    title: 'Real Time Accounting Software',
    image: 'https://ik.imagekit.io/ri5cvrkrr/neve-accounting-110.jpg?updatedAt=1732207350748',
  },
  {
    title: 'Consulting',
    image: 'https://ik.imagekit.io/ri5cvrkrr/neve-accounting-07.jpg?updatedAt=1732207350583',
  },
  {
    title: 'Financial Statements',
    image: 'https://ik.imagekit.io/ri5cvrkrr/neve-accounting-13.jpg?updatedAt=1732207352726',
  },
  {
    title: 'Budgeting',
    image: 'https://ik.imagekit.io/ri5cvrkrr/neve-accounting-14.jpg?updatedAt=1732207352673',
  },
  {
    title: 'Payroll Services',
    image: 'https://ik.imagekit.io/ri5cvrkrr/neve-accounting-15.jpg?updatedAt=1732207353030',
  },
];

export default function Services() {
  return (
    <div id="services" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Comprehensive solutions for your business needs
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={service.image} alt={service.title} />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <p className="text-xl font-semibold text-gray-900">{service.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}