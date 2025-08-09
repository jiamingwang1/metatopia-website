'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Globe } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [language, setLanguage] = useState('zh')

  const navItems = [
    { href: '/', label: '首页', labelEn: 'Home' },
    { href: '/about', label: '关于项目', labelEn: 'About' },
    { href: '/whitepaper', label: '白皮书', labelEn: 'Whitepaper' },
    { href: '/gamefi', label: 'GameFi生态', labelEn: 'GameFi' },
    { href: '/roadmap', label: '路线图', labelEn: 'Roadmap' },
    { href: '/dao', label: 'DAO治理', labelEn: 'DAO' },
    { href: '/team', label: '团队', labelEn: 'Team' },
    { href: '/news', label: '新闻', labelEn: 'News' },
    { href: '/contact', label: '联系我们', labelEn: 'Contact' },
  ]

  const toggleLanguage = () => {
    setLanguage(language === 'zh' ? 'en' : 'zh')
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-space-blue/90 backdrop-blur-md border-b border-esports-purple/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg overflow-hidden">
              <img src="/logo.jpg" alt="METATOPIA Logo" className="w-full h-full object-cover" />
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-gradient">METATOPIA</span>
              <span className="text-sm text-esports-gold ml-2">(MTP)</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-light-gray hover:text-neon-cyan transition-colors duration-200 text-sm font-medium"
              >
                {language === 'zh' ? item.label : item.labelEn}
              </Link>
            ))}
          </div>

          {/* Language Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-light-gray hover:text-neon-cyan transition-colors duration-200"
            >
              <Globe size={16} />
              <span className="text-sm">{language === 'zh' ? '中' : 'EN'}</span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-light-gray hover:text-neon-cyan transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-dark-gray/95 backdrop-blur-md border-t border-esports-purple/30">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2 text-light-gray hover:text-neon-cyan hover:bg-esports-purple/10 rounded-md transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {language === 'zh' ? item.label : item.labelEn}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar