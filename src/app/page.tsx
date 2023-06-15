import { About } from '@/sections/about/section';
import { Contact } from '@/sections/contact/section';
import { Hero } from '@/sections/hero/section';
import { ProjectsList } from '@/sections/projects/section';
import { SkillsList } from '@/sections/skills/section';
import { TestimonialsList } from '@/sections/testimonials/section';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <SkillsList />
      <ProjectsList />
      <TestimonialsList />
      <Contact />
    </main>
  );
}
