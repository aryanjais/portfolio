
import { type FC } from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const experiences = [
  {
    company: "InstaVC Technologies Pvt. Ltd.",
    role: "Associate Software Engineer",
    period: "July 2023 – January 2026",
    location: "Hyderabad, India",
    description: "Spearheaded the frontend development of the Inlynk platform, ensuring scalability and performance.",
    achievements: [
        "Developed scalable web apps using React, TypeScript, MUI, and Firebase.",
        "Implemented Real-time Collaboration Tools including messaging and video calls.",
        "Optimized frontend performance, achieving Lighthouse scores of 90+.",
        "Mentored junior developers on React best practices."
    ]
  },
  {
    company: "PeopleLink Unified Communications Pvt. Ltd.",
    role: "Software Intern",
    period: "July 2022 – June 2023",
    location: "Hyderabad, India",
    description: "Contributed to internal tools and the initial phase of the Inlynk platform.",
    achievements: [
        "Built production-grade components using React and MUI.",
        "Assisted with state management and bug fixing.",
        "Collaborated with UI/UX teams for interface implementation."
    ]
  }
];

const Experience: FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-950">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
          Work <span className="text-primary">Experience</span>
        </h2>

        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-0 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary rounded-full border-4 border-slate-950 shadow-[0_0_10px_rgba(139,92,246,0.5)]" />
              
              <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-primary/30 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                   <div>
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                   </div>
                   <div className="flex items-center gap-2 text-slate-500 text-sm mt-2 md:mt-0">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                   </div>
                </div>
                
                <p className="text-slate-400 mb-4 text-sm">{exp.description}</p>
                
                <ul className="space-y-2">
                   {exp.achievements.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                         <span className="mt-1.5 w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0" />
                         {item}
                      </li>
                   ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
