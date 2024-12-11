import { NavLink } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import { ThemeToggle } from './ThemeToggle';
import { Logo } from './Logo';

export function Header() {
  return (
    <header className="fixed w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Logo />
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}