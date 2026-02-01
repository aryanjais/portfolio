
import { type FC } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero: FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-secondary uppercase bg-secondary/10 rounded-full border border-secondary/20">
            Frontend Developer
          </div>
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 mb-6">
            Crafting Digital <br />
            <span className="text-primary/90">Experiences.</span>
          </h1>
          <p className="text-lg text-slate-400 mb-8 max-w-lg leading-relaxed">
            I'm <span className="text-white font-medium">Aryan Jaiswal</span>. I build accessible, pixel-perfect, and performant web applications using modern technologies like React, TypeScript, and the MERN stack.
          </p>

          <div className="flex flex-wrap gap-4">
            <a 
              href="#projects" 
              className="px-6 py-3 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg transition-colors flex items-center gap-2"
            >
              View Work <ArrowRight size={18} />
            </a>
            <a 
              href="/resume.pdf" 
              target="_blank"
              className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-lg transition-colors flex items-center gap-2 border border-slate-700"
            >
              Resume <Download size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="relative z-10 w-full aspect-square bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700/50 p-6 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
             <div className="absolute inset-0 bg-grid-slate-700/[0.1] -z-10 rounded-2xl" />
             <div className="h-full flex flex-col justify-between">
                <div className="flex gap-2">
                   <div className="w-3 h-3 rounded-full bg-red-500" />
                   <div className="w-3 h-3 rounded-full bg-yellow-500" />
                   <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="space-y-3 font-mono text-sm text-slate-400">
                   <div className="flex">
                      <span className="text-purple-400 mr-2">const</span>
                      <span className="text-yellow-200 mr-2">developer</span>
                      <span className="text-slate-200">=</span>
                      <span className="text-slate-200 ml-2">{`{`}</span>
                   </div>
                   <div className="pl-6">
                      <span className="text-blue-400">name</span>: <span className="text-green-400">"Aryan Jaiswal"</span>,
                   </div>
                   <div className="pl-6">
                      <span className="text-blue-400">role</span>: <span className="text-green-400">"Frontend Dev"</span>,
                   </div>
                   <div className="pl-6">
                      <span className="text-blue-400">skills</span>: <span className="text-yellow-400">[</span>
                   </div>
                   <div className="pl-12 text-green-400">
                      "React", "TypeScript", "Javascript", "Redux", "Hooks", "HTML5", "CSS3"
                   </div>
                   <div className="pl-6 text-yellow-400">]</div>
                   <div className="text-slate-200">{`}`}</div>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
