import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import qezvoroLogo from "@/assets/qezvoro-logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "О платформе", href: "#platform" },
    { label: "Qezvoro Отзывы", href: "#reviews" },
    { label: "Контакты", href: "/contacts" },
    { label: "Политика конфиденциальности", href: "#privacy" },
  ];

  const languages = [
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'es', name: 'España', flag: '🇪🇸' },
    { code: 'en-sg', name: 'Singapore', flag: '🇸🇬' },
    { code: 'en-my', name: 'Malaysia', flag: '🇲🇾' },
    { code: 'pt', name: 'Portugal', flag: '🇵🇹' },
    { code: 'ja', name: '日本', flag: '🇯🇵' },
    { code: 'cs', name: 'Česká', flag: '🇨🇿' },
    { code: 'it-ch', name: 'Italiano (CH)', flag: '🇨🇭' },
    { code: 'fr-ch', name: 'Français (CH)', flag: '🇨🇭' },
    { code: 'de-ch', name: 'Deutsch (CH)', flag: '🇨🇭' },
  ];

  const [currentLanguage, setCurrentLanguage] = useState(languages[0]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={qezvoroLogo} 
              alt="Qezvoro Invest" 
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold gradient-text">
              Qezvoro Invest
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a 
                key={index}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Language Selector & CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="flex items-center space-x-2">
                  <span className="text-lg">{currentLanguage.flag}</span>
                  <span className="text-sm">{currentLanguage.name}</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setCurrentLanguage(lang)}
                    className="flex items-center space-x-3 cursor-pointer"
                  >
                    <span className="text-lg">{lang.flag}</span>
                    <span>{lang.name}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button className="gradient-bg hover:opacity-90 transition-opacity">
              Начать сейчас
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-border">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <a 
                  key={index}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col space-y-4 mt-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="flex items-center space-x-2 w-full justify-center">
                      <span className="text-lg">{currentLanguage.flag}</span>
                      <span className="text-sm">{currentLanguage.name}</span>
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="center" className="w-48">
                    {languages.map((lang) => (
                      <DropdownMenuItem
                        key={lang.code}
                        onClick={() => setCurrentLanguage(lang)}
                        className="flex items-center space-x-3 cursor-pointer"
                      >
                        <span className="text-lg">{lang.flag}</span>
                        <span>{lang.name}</span>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
                
                <Button className="gradient-bg hover:opacity-90 transition-opacity">
                  Начать сейчас
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;