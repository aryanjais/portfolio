
import { type FC } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

const Contact: FC = () => {
  return (
    <section id="contact" className="py-20 bg-slate-950 relative overflow-hidden">
       {/* Accents */}
      <div className="absolute -left-20 bottom-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
         <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
               Let's <span className="text-primary">Connect</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8">
               I'm actively looking for new opportunities. Whether you have a question or just want to say hi, I'll do my best to get back to you!
            </p>

            <div className="space-y-6">
               <div className="flex items-center gap-4 text-slate-300">
                  <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-primary border border-slate-800">
                     <Mail size={20} />
                  </div>
                  <div>
                     <p className="text-sm text-slate-500">Email</p>
                     <a href="mailto:aryanj9889@gmail.com" className="font-medium hover:text-white transition-colors">aryanj9889@gmail.com</a>
                  </div>
               </div>

               <div className="flex items-center gap-4 text-slate-300">
                  <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-secondary border border-slate-800">
                     <Phone size={20} />
                  </div>
                  <div>
                     <p className="text-sm text-slate-500">Mobile</p>
                     <span className="font-medium hover:text-white transition-colors">+91-9795511838</span>
                  </div>
               </div>

               <div className="flex items-center gap-4 text-slate-300">
                  <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-green-400 border border-slate-800">
                     <MapPin size={20} />
                  </div>
                  <div>
                     <p className="text-sm text-slate-500">Location</p>
                     <span className="font-medium hover:text-white transition-colors">Hyderabad, India</span>
                  </div>
               </div>
            </div>

            <div className="flex gap-4 mt-10">
               <a href="https://github.com/aryanjais" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-900 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all">
                  <Github size={24} />
               </a>
               <a href="https://www.linkedin.com/in/aryanjais" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-900 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all">
                  <Linkedin size={24} />
               </a>
            </div>
         </div>

         {/* <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
               <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                  <input type="text" id="name" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="Your Name" />
               </div>
               <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                  <input type="email" id="email" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="your@email.com" />
               </div>
               <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                  <textarea id="message" rows={4} className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="Hello..." />
               </div>
               <button className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
                  Send Message <Send size={18} />
               </button>
            </form>
         </div> */}
      </div>
    </section>
  );
};

export default Contact;
