'use client'

import Link from 'next/link'
import * as LucideIcons from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: LucideIcons.Twitter, href: '#', label: 'Twitter' },
    { icon: LucideIcons.Send, href: '#', label: 'Telegram' },
    { icon: LucideIcons.MessageCircle, href: '#', label: 'Discord' },
    { icon: LucideIcons.Github, href: '#', label: 'Github' },
    { icon: LucideIcons.Mail, href: 'mailto:contact@metatopia.io', label: 'Email' },
  ]

  const footerLinks = {
    product: {
      title: '产品',
      links: [
        { label: 'GameFi生态', href: '/gamefi' },
        { label: 'NFT市场', href: '/nft' },
        { label: 'AI赛事系统', href: '/ai-esports' },
        { label: 'DAO治理', href: '/dao' },
      ]
    },
    resources: {
      title: '资源',
      links: [
        { label: '白皮书', href: '/whitepaper' },
        { label: '开发者文档', href: '/docs' },
        { label: 'API文档', href: '/api' },
        { label: '品牌资源', href: '/brand' },
      ]
    },
    community: {
      title: '社区',
      links: [
        { label: '官方论坛', href: '#' },
        { label: '社区治理', href: '/governance' },
        { label: '赛事中心', href: '/esports' },
        { label: '合作伙伴', href: '/partners' },
      ]
    },
    support: {
      title: '支持',
      links: [
        { label: '帮助中心', href: '/help' },
        { label: '联系我们', href: '/contact' },
        { label: '安全报告', href: '/security' },
        { label: '隐私政策', href: '/privacy' },
      ]
    }
  }

  return (
    <footer className="bg-dark-gray/50 backdrop-blur-sm border-t border-esports-purple/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg overflow-hidden">
              <img src="/logo.svg" alt="METATOPIA Logo" className="w-full h-full object-cover" />
            </div>
              <div>
                <span className="text-xl font-bold text-gradient">METATOPIA</span>
                <span className="text-sm text-esports-gold ml-2">(MTP)</span>
              </div>
            </div>
            <p className="text-light-gray text-sm mb-6 max-w-sm">
              全球首个融合AI、电竞与链上经济的下一代GameFi平台，致力于打造去中心化电竞生态。
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-esports-purple/20 hover:bg-esports-purple/40 rounded-lg flex items-center justify-center transition-colors duration-200 group"
                    aria-label={social.label}
                  >
                    <Icon size={18} className="text-light-gray group-hover:text-neon-cyan transition-colors duration-200" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-light-gray hover:text-neon-cyan transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-esports-purple/30 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-light-gray text-sm">
              © {currentYear} METATOPIA. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <Link href="/terms" className="text-light-gray hover:text-neon-cyan transition-colors duration-200">
                服务条款
              </Link>
              <Link href="/privacy" className="text-light-gray hover:text-neon-cyan transition-colors duration-200">
                隐私政策
              </Link>
              <Link href="/cookies" className="text-light-gray hover:text-neon-cyan transition-colors duration-200">
                Cookie政策
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer