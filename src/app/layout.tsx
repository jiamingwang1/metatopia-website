import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import { Menu, X, Github, Twitter, Telegram } from 'lucide-react'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'METATOPIA - AI×电竞×GameFi的未来',
  description: '全球首个融合AI、电竞与链上经济的下一代GameFi平台',
}

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: '/', label: '首页' },
    { href: '/about', label: '关于项目' },
    { href: '/whitepaper', label: '白皮书' },
    { href: '/roadmap', label: '路线图' },
    { href: '/gamefi', label: 'GameFi生态' },
    { href: '/dao', label: 'DAO治理' },
    { href: '/team', label: '团队' },
    { href: '/news', label: '新闻' },
    { href: '/contact', label: '联系我们' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-space-blue/90 backdrop-blur-md border-b border-light-gray/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg overflow-hidden">
              <img src="/logo.jpg" alt="METATOPIA" className="w-full h-full object-cover" />
            </div>
            <span className="text-xl font-bold text-gradient">METATOPIA</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-light-gray hover:text-neon-cyan transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-light-gray/10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 text-light-gray hover:text-neon-cyan transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

function Footer() {
  return (
    <footer className="bg-dark-gray/50 border-t border-light-gray/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-lg overflow-hidden">
                <img src="/logo.jpg" alt="METATOPIA" className="w-full h-full object-cover" />
              </div>
              <span className="text-xl font-bold text-gradient">METATOPIA</span>
            </div>
            <p className="text-light-gray mb-6 max-w-md">
              全球首个融合AI、电竞与链上经济的下一代GameFi平台，为玩家创造前所未有的游戏体验。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-light-gray hover:text-neon-cyan transition-colors duration-200">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-light-gray hover:text-neon-cyan transition-colors duration-200">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-light-gray hover:text-neon-cyan transition-colors duration-200">
                <Telegram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-light-gray hover:text-neon-cyan transition-colors duration-200">关于项目</Link></li>
              <li><Link href="/whitepaper" className="text-light-gray hover:text-neon-cyan transition-colors duration-200">白皮书</Link></li>
              <li><Link href="/roadmap" className="text-light-gray hover:text-neon-cyan transition-colors duration-200">路线图</Link></li>
              <li><Link href="/team" className="text-light-gray hover:text-neon-cyan transition-colors duration-200">团队</Link></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-white font-semibold mb-4">社区</h3>
            <ul className="space-y-2">
              <li><Link href="/dao" className="text-light-gray hover:text-neon-cyan transition-colors duration-200">DAO治理</Link></li>
              <li><Link href="/news" className="text-light-gray hover:text-neon-cyan transition-colors duration-200">最新动态</Link></li>
              <li><Link href="/contact" className="text-light-gray hover:text-neon-cyan transition-colors duration-200">联系我们</Link></li>
              <li><a href="#" className="text-light-gray hover:text-neon-cyan transition-colors duration-200">社区论坛</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-light-gray/10 mt-8 pt-8 text-center">
          <p className="text-light-gray">
            © 2025 METATOPIA. All rights reserved. | 构建未来的GameFi生态
          </p>
        </div>
      </div>
    </footer>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className={`${inter.className} bg-space-blue text-white min-h-screen`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}