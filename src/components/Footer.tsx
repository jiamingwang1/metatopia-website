'use client'

import Link from 'next/link'
import { Github, Twitter, Linkedin, Mail, MapPin, Phone, ExternalLink } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    product: [
      { name: '白皮书', href: '/whitepaper' },
      { name: '路线图', href: '/roadmap' },
      { name: 'GameFi生态', href: '/gamefi' },
      { name: 'DAO治理', href: '/dao' }
    ],
    company: [
      { name: '关于我们', href: '/team' },
      { name: '新闻动态', href: '/news' },
      { name: '联系我们', href: '/contact' },
      { name: '合作伙伴', href: '/partners' }
    ],
    resources: [
      { name: '开发者文档', href: '/docs' },
      { name: 'API参考', href: '/api' },
      { name: '社区论坛', href: '/forum' },
      { name: '帮助中心', href: '/help' }
    ],
    legal: [
      { name: '隐私政策', href: '/privacy' },
      { name: '服务条款', href: '/terms' },
      { name: '免责声明', href: '/disclaimer' },
      { name: 'Cookie政策', href: '/cookies' }
    ]
  }

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/metatopia' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/metatopia' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/metatopia' },
    { name: 'Email', icon: Mail, href: 'mailto:contact@metatopia.com' }
  ]

  const contactInfo = [
    {
      icon: MapPin,
      title: '总部地址',
      content: '新加坡滨海湾金融中心'
    },
    {
      icon: Mail,
      title: '商务合作',
      content: 'business@metatopia.com'
    },
    {
      icon: Phone,
      title: '技术支持',
      content: 'support@metatopia.com'
    }
  ]

  return (
    <footer className="bg-gradient-to-br from-dark-blue via-space-blue to-dark-blue border-t border-esports-purple/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 rounded-lg overflow-hidden">
                  <img src="/logo.svg" alt="METATOPIA Logo" className="w-full h-full object-cover" />
                </div>
                <div>
                  <span className="text-xl font-bold text-gradient">METATOPIA</span>
                  <p className="text-xs text-light-gray">AI×电竞×GameFi</p>
                </div>
              </div>
              <p className="text-light-gray text-sm leading-relaxed mb-6">
                全球首个融合AI、电竞与链上经济的下一代GameFi平台，
                为玩家创造真正的数字价值。
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-esports-purple/20 rounded-lg flex items-center justify-center text-light-gray hover:text-neon-cyan hover:bg-esports-purple/30 transition-all duration-300 group"
                    >
                      <IconComponent className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">产品</h3>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-light-gray hover:text-neon-cyan transition-colors text-sm flex items-center group"
                    >
                      {link.name}
                      <ExternalLink className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">公司</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-light-gray hover:text-neon-cyan transition-colors text-sm flex items-center group"
                    >
                      {link.name}
                      <ExternalLink className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">资源</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-light-gray hover:text-neon-cyan transition-colors text-sm flex items-center group"
                    >
                      {link.name}
                      <ExternalLink className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">法律</h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-light-gray hover:text-neon-cyan transition-colors text-sm flex items-center group"
                    >
                      {link.name}
                      <ExternalLink className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-12 pt-8 border-t border-esports-purple/20">
            <h3 className="text-white font-semibold mb-6 text-center">联系信息</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon
                return (
                  <div key={index} className="flex items-center space-x-3 justify-center md:justify-start">
                    <div className="w-8 h-8 bg-esports-purple/20 rounded-lg flex items-center justify-center">
                      <IconComponent className="h-4 w-4 text-neon-cyan" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">{contact.title}</p>
                      <p className="text-light-gray text-xs">{contact.content}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-esports-purple/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-light-gray text-sm">
              © {currentYear} METATOPIA. 保留所有权利。
            </div>
            <div className="flex items-center space-x-6 text-xs text-light-gray">
              <span>基于区块链技术构建</span>
              <span className="w-1 h-1 bg-esports-purple rounded-full"></span>
              <span>AI驱动的智能匹配</span>
              <span className="w-1 h-1 bg-esports-purple rounded-full"></span>
              <span>社区治理DAO</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer