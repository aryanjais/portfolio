
import { type FC } from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: "React.js", level: 95, color: "bg-blue-500" },
  { name: "TypeScript", level: 90, color: "bg-blue-600" },
  { name: "JavaScript (ES6+)", level: 95, color: "bg-yellow-400" },
  { name: "HTML5/CSS3", level: 98, color: "bg-orange-500" },
  { name: "Tailwind CSS", level: 90, color: "bg-cyan-400" },
  { name: "MUI (Material UI)", level: 85, color: "bg-blue-400" },
  { name: "Git & Version Control", level: 88, color: "bg-red-500" },
  { name: "Redux / Context API", level: 85, color: "bg-purple-500" }
];

const Skills: FC = () => {
  return (
    <div className="py-10">
       <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <span className="w-8 h-1 bg-primary rounded-full"></span>
          Technical Proficiency
       </h3>
       
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
             <motion.div 
               key={index}
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: index * 0.1 }}
               className="bg-slate-900/50 p-4 rounded-lg border border-slate-800"
             >
                <div className="flex justify-between mb-2">
                   <span className="font-medium text-slate-200">{skill.name}</span>
                </div>
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                   <motion.div 
                     initial={{ width: 0 }}
                     whileInView={{ width: `${skill.level}%` }}
                     transition={{ duration: 1, delay: 0.5 }}
                     className={`h-full rounded-full ${skill.color}`}
                   />
                </div>
             </motion.div>
          ))}
       </div>
    </div>
  );
};

export default Skills;
