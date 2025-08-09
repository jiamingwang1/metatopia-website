'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const navigation = [
    { name: '首页', href: '/' },
    { name: '白皮书', href: '/whitepaper' },
    { name: '路线图', href: '/roadmap' },
    {
      name: '生态系统',
      href: '#',
      dropdown: [
        { name: 'GameFi', href: '/gamefi' },
        { name: 'DAO治理', href: '/dao' }
      ]
    },
    { name: '团队', href: '/team' },
    { name: '新闻', href: '/news' },
    { name: '联系我们', href: '/contact' }
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-space-blue/95 backdrop-blur-sm border-b border-esports-purple/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg overflow-hidden">
                <img src="/logo.svg" alt="METATOPIA Logo" className="w-full h-full object-cover" />
              </div>
              <div className="hidden sm:block">
                <span className="text-xl font-bold text-gradient">METATOPIA</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.dropdown ? (
                    <div className="relative">
                      <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="nav-link flex items-center"
                      >
                        {item.name}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </button>
                      {isDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 w-48 bg-dark-blue border border-esports-purple/20 rounded-lg shadow-lg">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-4 py-2 text-sm text-light-gray hover:text-neon-cyan hover:bg-esports-purple/10 transition-colors"
                              onClick={() => setIsDropdownOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link href={item.href} className="nav-link">
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/whitepaper" className="btn-primary">
              获取白皮书
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-light-gray hover:text-white focus:outline-none focus:text-white transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-dark-blue border-t border-esports-purple/20">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="w-full text-left px-3 py-2 text-base font-medium text-light-gray hover:text-neon-cyan hover:bg-esports-purple/10 transition-colors flex items-center justify-between"
                    >
                      {item.name}
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    {isDropdownOpen && (
                      <div className="pl-4">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-3 py-2 text-sm text-light-gray hover:text-neon-cyan hover:bg-esports-purple/10 transition-colors"
                            onClick={() => {
                              setIsOpen(false)
                              setIsDropdownOpen(false)
                            }}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-light-gray hover:text-neon-cyan hover:bg-esports-purple/10 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4 pb-2">
              <Link
                href="/whitepaper"
                className="block w-full text-center btn-primary"
                onClick={() => setIsOpen(false)}
              >
                获取白皮书
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar