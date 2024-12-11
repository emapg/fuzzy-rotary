import { motion } from 'framer-motion';
import type { Skill } from '../../types';

 skills: Skill[] = [
  { name: 'React', icon: '⚛️', level: 90, category: 'frontend' },
  { name: 'TypeScript', icon: '📘', level: 85, category: 'frontend' },
  { name: 'Node.js', icon: '🟢', level: 80, category: 'backend' },
  { name: 'Three.js', icon: '🎮', level: 75, category: 'frontend' },
  { name: 'Python', icon: '🐍', level: 70, category: 'backend' },
  { name: 'Docker', icon: '🐳', level: 65, category: 'tools' },
  { name: 'GraphQL', icon: '🔗', level: 80, category: 'backend' },
  { name: 'HTML5', icon: '📄', level: 95, category: 'frontend' },
  { name: 'CSS3', icon: '🎨', level: 90, category: 'frontend' },
  { name: 'Sass', icon: '💅', level: 85, category: 'frontend' },
  { name: 'MongoDB', icon: '🍃', level: 75, category: 'database' },
  { name: 'PostgreSQL', icon: '🐘', level: 70, category: 'database' },
  { name: 'Git', icon: '🔧', level: 85, category: 'tools' },
  { name: 'Webpack', icon: '📦', level: 80, category: 'tools' },
  { name: 'Jest', icon: '🃏', level: 75, category: 'testing' },
  { name: 'Cypress', icon: '🎭', level: 70, category: 'testing' },
  { name: 'AWS', icon: '☁️', level: 65, category: 'cloud' },
  { name: 'Firebase', icon: '🔥', level: 70, category: 'backend' },
  { name: 'Tailwind CSS', icon: '🌬️', level: 85, category: 'frontend' },
  { name: 'Redux', icon: '🔄', level: 80, category: 'state management' }
];

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl">{skill.icon}</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {skill.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {skill.category}
                  </p>
                </div>
              </div>
              <div className="relative h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  className="absolute top-0 left-0 h-full bg-blue-600 dark:bg-blue-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
