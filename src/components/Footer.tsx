
import { type FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-8">
      <div className="max-w-7xl mx-auto px-6 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Aryan Jaiswal. All rights reserved.</p>
        <p className="mt-2">Built with React, Tailwind & Framer Motion</p>
      </div>
    </footer>
  );
};

export default Footer;
