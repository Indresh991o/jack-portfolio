import FadeIn from '../components/FadeIn';

const SERVICES = [
  {
    number: '01',
    name: 'Restaurant Website',
    description:
      'Modern, appetizing restaurant websites with menus, online ordering, and reservation systems that bring customers to your table.',
  },
  {
    number: '02',
    name: 'Gym Website',
    description:
      'High-energy gym and fitness websites with class schedules, membership plans, and trainer profiles built to convert visitors into members.',
  },
  {
    number: '03',
    name: 'Salon Website',
    description:
      "Elegant salon and spa websites with booking systems, service galleries, and pricing that reflect your brand's style.",
  },
  {
    number: '04',
    name: 'E-commerce Website',
    description:
      'Fully functional online stores with secure checkout, product catalogs, and a smooth shopping experience that drives sales.',
  },
  {
    number: '05',
    name: 'Cafe Website',
    description:
      'Warm, inviting cafe websites with menus, ambience galleries, and location details that bring people through the door.',
  },
  {
    number: '06',
    name: 'Bar Website',
    description:
      'Stylish bar and lounge websites with event listings, drink menus, and reservation options for a great night out.',
  },
  {
    number: '07',
    name: 'Resort Website',
    description:
      'Immersive resort and hospitality websites with booking engines, photo galleries, and amenities that inspire getaways.',
  },
];

export default function ServicesSection() {
  return (
    <section
      id="price"
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ background: '#FFFFFF' }}
    >
      <FadeIn>
        <h2
          className="font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
          style={{ color: '#0C0C0C', fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Services
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {SERVICES.map((service, i) => (
          <FadeIn
            key={service.number}
            delay={i * 0.1}
            className="flex items-center gap-6 sm:gap-8 md:gap-10 py-8 sm:py-10 md:py-12"
            style={{
              borderBottom:
                i < SERVICES.length - 1 ? '1px solid rgba(12, 12, 12, 0.15)' : 'none',
            }}
          >
            <span
              className="font-black flex-shrink-0"
              style={{ color: '#0C0C0C', fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {service.number}
            </span>
            <div className="flex flex-col gap-2 sm:gap-3">
              <h3
                className="font-medium uppercase"
                style={{ color: '#0C0C0C', fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
              >
                {service.name}
              </h3>
              <p
                className="font-light leading-relaxed max-w-2xl"
                style={{
                  color: '#0C0C0C',
                  opacity: 0.6,
                  fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)',
                }}
              >
                {service.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
