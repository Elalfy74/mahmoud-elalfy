'use client';

import { About } from '@/sections/about/section';
import { Contact } from '@/sections/contact/section';
import { Hero } from '@/sections/hero/section';
import { ProjectsList } from '@/sections/projects/section';
import { SkillsList } from '@/sections/skills/section';
import { TestimonialsList } from '@/sections/testimonials/section';
import { useMode } from '@/store/mode';

export default function Home() {
  const mode = useMode((state) => state.mode);

  return (
    <main className={`${mode}`}>
      <div className='dark:bg-slate-900 dark:text-slate-500'>
        <Hero />
        <About />
        <SkillsList />
        <ProjectsList />
        <TestimonialsList />
        <Contact />
      </div>
    </main>
  );
}
