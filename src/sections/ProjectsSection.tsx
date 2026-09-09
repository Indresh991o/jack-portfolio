import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import LiveProjectButton from '../components/LiveProjectButton';

interface Project {
  number: string;
  name: string;
  category: string;
  link: string;
  image: string;
}

const PROJECTS: Project[] = [
  {
    number: '01',
    name: 'Jai Mata Di Restaurant',
    category: 'Client',
    link: 'https://jaimatadiresturent.netlify.app/',
    image: '/restaurant1.jpg',
  },
  {
    number: '02',
    name: 'Glams Beauty Salon',
    category: 'Client',
    link: 'https://glamsbeautysalon.netlify.app/',
    image: '/salon.jpg',
  },
  {
    number: '03',
    name: 'Apex Forge Gym',
    category: 'Client',
    link: 'https://apexforgezym.netlify.app/',
    image: '/gym.jpg',
  },
  {
    number: '04',
    name: 'Wild Rook Resort',
    category: 'Client',
    link: 'https://wildrookresort.netlify.app/',
    image: '/resort.jpg',
  },
  {
    number: '05',
    name: 'Angeethi',
    category: 'Client',
    link: 'https://angeethi.lovable.app/',
    image: '/restaurant2.jpg',
  },
];

function ProjectCard({ project, index, total }: { project: Project; index: number; total: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'start start'],
  });

  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={cardRef}
      className="sticky top-24 md:top-32 h-[85vh]"
      style={{ top: `${6 + index * 28}px` }}
    >
      <motion.div
        style={{ scale, transformOrigin: 'top' }}
        className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] p-4 sm:p-6 md:p-8 h-full flex flex-col"
      >
        {/* Top row */}
        <div className="flex items-center justify-between gap-4 flex-wrap mb-4 sm:mb-6 md:mb-8">
          <div className="flex items-center gap-4 sm:gap-6">
            <span
              className="font-black"
              style={{ color: '#0C0C0C', fontSize: 'clamp(2.5rem, 8vw, 100px)' }}
            >
              {project.number}
            </span>
            <div className="flex flex-col">
              <span
                className="uppercase tracking-widest text-[#D7E2EA]/60"
                style={{ fontSize: 'clamp(0.7rem, 1.2vw, 1rem)' }}
              >
                {project.category}
              </span>
              <span
                className="font-medium uppercase text-[#D7E2EA]"
                style={{ fontSize: 'clamp(1.2rem, 3vw, 2.2rem)' }}
              >
                {project.name}
              </span>
            </div>
          </div>
          <LiveProjectButton href={project.link} />
        </div>

        {/* Bottom row: single project image */}
        <div className="flex-1 min-h-0">
          <img
            src={project.image}
            alt={`${project.name} preview`}
            className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
          />
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn>
        <h2
          className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Project
        </h2>
      </FadeIn>

      <div className="max-w-6xl mx-auto">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.number} project={project} index={i} total={PROJECTS.length} />
        ))}
      </div>
    </section>
  );
}
