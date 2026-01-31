
import { type FC } from 'react';
import Skills from './Skills';

const About: FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
           <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8">
                 About <span className="text-primary">Me</span>
              </h2>
              <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                <p>
                  I'm a passionate Frontend Developer based in Hyderabad, India, with a B.Tech in Computer Science from GLA University. 
                  My journey involves building responsive, high-performance web applications using the latest technologies.
                </p>
                <p>
                  Currently, I work at <span className="text-white font-medium">Instavc technologies pvt ltd</span>, where I've contributed to scalable platforms like Inlynk. 
                  I specialize in translating complex UX designs into interactive, scalable interfaces, ensuring top-notch performance and accessibility.
                </p>
                <p>
                  Beyond coding, I am constantly learning and exploring modern web trends to deliver the best digital solutions.
                </p>
              </div>

              <div className="mt-8 flex gap-8">
                 <div>
                    <h4 className="text-4xl font-bold text-white mb-2">3+</h4>
                    <span className="text-slate-500">Years Exp.</span>
                 </div>
                 <div>
                    <h4 className="text-4xl font-bold text-white mb-2">10+</h4>
                    <span className="text-slate-500">Modules</span>
                 </div>
              </div>
           </div>

           <div>
              <Skills />
           </div>
        </div>
      </div>
    </section>
  );
};

export default About;
