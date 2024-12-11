import { NavLink } from 'react-router-dom';
import { Code2 } from 'lucide-react';

export function Logo() {
  return (
    <NavLink 
      to="/" 
      className="flex items-center space-x-2 text-2xl font-bold text-gray-900 dark:text-white"
    >
      <Code2 className="w-8 h-8" />
      <span>Portfolio</span>
    </NavLink>
  );
}