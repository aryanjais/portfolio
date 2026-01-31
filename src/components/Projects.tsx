
import { type FC } from 'react';
import { motion } from 'framer-motion';
import { Layers, Layout, Users, FileText, Video } from 'lucide-react';

const projects = [
  {
    title: "Inlynk Platform",
    category: "SaaS Platform",
    description: "A comprehensive Business Growth & Employee Management Platform.",
    tech: ["React", "TypeScript", "MUI", "Firebase"],
    icon: <Layout size={40} className="text-primary" />,
    features: [
       "Employee Management System",
       "Role-based access controls",
       "Analytics Dashboards"
    ]
  },
  {
    title: "Collaboration Suite",
    category: "Real-time Tools",
    description: "Real-time communication tools for seamless enterprise collaboration.",
    tech: ["WebSockets", "React", "WebRTC"],
    icon: <Video size={40} className="text-secondary" />,
    features: [
       "Messaging & Video Calls",
       "Chat filtering & moderation",
       "Broadcast functionality"
    ]
  },
  {
    title: "Media Drive & Library",
    category: "File Management",
    description: "Secure cloud storage and multimedia sharing system.",
    tech: ["React", "Cloud Storage", "File APIs"],
    icon: <FileText size={40} className="text-green-400" />,
    features: [
       "File sharing & Zipping",
       "Folder structure management",
       "Multimedia resource library"
    ]
  },
  {
    title: "Social Engagement",
    category: "Social Media",
    description: "Internal social network for company-wide engagement.",
    tech: ["React", "Social APIs"],
    icon: <Users size={40} className="text-purple-400" />,
    features: [
       "News Feed & Posts",
       "Content filtering",
       "External platform integration"
    ]
  }
];

const Projects: FC = () => {
  return (
    <section id="projects" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
           Featured <span className="text-primary">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
           {projects.map((project, index) => (
             <motion.div 
               key={index}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: index * 0.1 }}
               className="group bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-primary/50 transition-all hover:shadow-[0_0_30px_rgba(139,92,246,0.1)]"
             >
                <div className="flex justify-between items-start mb-6">
                   <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 group-hover:border-primary/30 transition-colors">
                      {project.icon}
                   </div>
                   <div className="px-3 py-1 text-xs font-semibold text-slate-400 bg-slate-800 rounded-full">
                      {project.category}
                   </div>
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                   {project.title}
                </h3>
                <p className="text-slate-400 mb-6 leading-relaxed">
                   {project.description}
                </p>

                <div className="space-y-4">
                   <div className="flex flex-wrap gap-2">
                      {project.tech.map((t, i) => (
                         <span key={i} className="text-xs px-2 py-1 bg-slate-950 text-slate-300 rounded border border-slate-800">
                            {t}
                         </span>
                      ))}
                   </div>
                   
                   <ul className="space-y-1">
                      {project.features.map((feature, i) => (
                         <li key={i} className="flex items-center gap-2 text-sm text-slate-500">
                            <Layers size={14} className="text-secondary" />
                            {feature}
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

export default Projects;
