'use client'

import { useState, useEffect } from 'react'
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Users, Globe, Twitter, Linkedin, Github, Discord, Telegram } from 'lucide-react'

const ContactPage = () => {
  const [mounted, setMounted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: 'general',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const contactInfo = {
    email: 'hello@metatopia.io',
    business: 'business@metatopia.io',
    support: 'support@metatopia.io',
    press: 'press@metatopia.io',
    phone: '+1 (555) 123-4567',
    address: '新加坡滨海湾金融中心 Tower 1, Level 30',
    hours: '周一至周五 9:00-18:00 (SGT)'
  }

  const socialLinks = [
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com/metatopia',
      followers: '125K',
      description: '最新动态和公告'
    },
    {
      name: 'Discord',
      icon: Discord,
      url: 'https://discord.gg/metatopia',
      followers: '89K',
      description: '社区讨论和支持'
    },
    {
      name: 'Telegram',
      icon: Telegram,
      url: 'https://t.me/metatopia',
      followers: '67K',
      description: '官方公告频道'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/company/metatopia',
      followers: '45K',
      description: '商业合作和招聘'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/metatopia',
      followers: '23K',
      description: '开源代码和文档'
    }
  ]

  const contactCategories = [
    { value: 'general', label: '一般咨询', icon: MessageCircle },
    { value: 'business', label: '商业合作', icon: Users },
    { value: 'technical', label: '技术支持', icon: Globe },
    { value: 'press', label: '媒体采访', icon: Mail },
    { value: 'careers', label: '招聘相关', icon: Users }
  ]

  const offices = [
    {
      city: '新加坡',
      address: '滨海湾金融中心 Tower 1, Level 30',
      type: '总部',
      timezone: 'SGT (UTC+8)',
      phone: '+65 6123 4567',
      email: 'singapore@metatopia.io'
    },
    {
      city: '旧金山',
      address: '101 California Street, Suite 2450',
      type: '北美办公室',
      timezone: 'PST (UTC-8)',
      phone: '+1 (415) 123-4567',
      email: 'sf@metatopia.io'
    },
    {
      city: '伦敦',
      address: '1 Canada Square, Canary Wharf',
      type: '欧洲办公室',
      timezone: 'GMT (UTC+0)',
      phone: '+44 20 1234 5678',
      email: 'london@metatopia.io'
    },
    {
      city: '东京',
      address: '東京都港区六本木 1-6-1',
      type: '亚太办公室',
      timezone: 'JST (UTC+9)',
      phone: '+81 3 1234 5678',
      email: 'tokyo@metatopia.io'
    }
  ]

  const faqs = [
    {
      question: '如何开始使用METATOPIA？',
      answer: '您可以访问我们的官网下载钱包，创建账户后即可开始体验我们的GameFi生态系统。'
    },
    {
      question: '如何获得MTP代币？',
      answer: 'MTP代币可以通过参与游戏、质押、流动性挖矿或在支持的交易所购买获得。'
    },
    {
      question: '如何成为合作伙伴？',
      answer: '请通过business@metatopia.io联系我们的商务团队，我们将为您提供详细的合作方案。'
    },
    {
      question: '技术问题如何获得支持？',
      answer: '您可以通过Discord社区、邮件或在线客服获得技术支持，我们的团队会及时回复。'
    }
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // 模拟表单提交
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    alert('感谢您的留言！我们会在24小时内回复您。')
    setFormData({
      name: '',
      email: '',
      subject: '',
      category: 'general',
      message: ''
    })
    setIsSubmitting(false)
  }

  if (!mounted) {
    return <div className="min-h-screen bg-space-blue" />
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-esports-purple/20 via-transparent to-neon-cyan/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            联系 <span className="text-gradient">我们</span>
          </h1>
          <p className="text-xl md:text-2xl text-light-gray mb-8 max-w-4xl mx-auto">
            有任何问题或建议？我们很乐意听到您的声音
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="card-esports">
              <h2 className="text-2xl font-bold text-white mb-6">发送消息</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      姓名 *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-dark-gray/50 border border-light-gray/20 rounded-lg text-white placeholder-light-gray focus:border-neon-cyan focus:outline-none"
                      placeholder="请输入您的姓名"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      邮箱 *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-dark-gray/50 border border-light-gray/20 rounded-lg text-white placeholder-light-gray focus:border-neon-cyan focus:outline-none"
                      placeholder="请输入您的邮箱"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    咨询类型
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-dark-gray/50 border border-light-gray/20 rounded-lg text-white focus:border-neon-cyan focus:outline-none"
                  >
                    {contactCategories.map((category) => (
                      <option key={category.value} value={category.value}>
                        {category.label}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    主题 *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-dark-gray/50 border border-light-gray/20 rounded-lg text-white placeholder-light-gray focus:border-neon-cyan focus:outline-none"
                    placeholder="请简要描述您的问题"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    详细信息 *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-dark-gray/50 border border-light-gray/20 rounded-lg text-white placeholder-light-gray focus:border-neon-cyan focus:outline-none resize-none"
                    placeholder="请详细描述您的问题或建议..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-neon disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                      发送中...
                    </div>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      发送消息
                    </>
                  )}
                </button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <div className="card-esports">
                <h3 className="text-xl font-bold text-white mb-6">快速联系</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-purple-cyan flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-medium">邮箱</div>
                      <div className="text-light-gray text-sm">{contactInfo.email}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-purple-cyan flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-medium">电话</div>
                      <div className="text-light-gray text-sm">{contactInfo.phone}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-purple-cyan flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-medium">地址</div>
                      <div className="text-light-gray text-sm">{contactInfo.address}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-purple-cyan flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-medium">工作时间</div>
                      <div className="text-light-gray text-sm">{contactInfo.hours}</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Specialized Contacts */}
              <div className="card-esports">
                <h3 className="text-xl font-bold text-white mb-6">专门联系方式</h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2">
                    <span className="text-light-gray">商业合作</span>
                    <span className="text-neon-cyan">{contactInfo.business}</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-light-gray">技术支持</span>
                    <span className="text-neon-cyan">{contactInfo.support}</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-light-gray">媒体采访</span>
                    <span className="text-neon-cyan">{contactInfo.press}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-20 bg-dark-gray/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">关注我们</h2>
            <p className="text-light-gray">通过社交媒体获取最新动态</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-esports text-center group hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-purple-cyan flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{social.name}</h3>
                  <div className="text-esports-gold font-medium mb-2">{social.followers}</div>
                  <p className="text-light-gray text-sm">{social.description}</p>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">全球办公室</h2>
            <p className="text-light-gray">我们在全球主要城市设有办公室</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office, index) => (
              <div key={index} className="card-esports">
                <div className="text-center mb-4">
                  <h3 className="text-lg font-semibold text-white mb-1">{office.city}</h3>
                  <span className="text-esports-gold text-sm">{office.type}</span>
                </div>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-4 h-4 text-neon-cyan mt-0.5 flex-shrink-0" />
                    <span className="text-light-gray">{office.address}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-neon-cyan" />
                    <span className="text-light-gray">{office.timezone}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-neon-cyan" />
                    <span className="text-light-gray">{office.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-neon-cyan" />
                    <span className="text-light-gray">{office.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-dark-gray/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">常见问题</h2>
            <p className="text-light-gray">快速找到您需要的答案</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="card-esports">
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-light-gray leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-light-gray mb-4">没有找到您要的答案？</p>
            <button className="btn-neon">
              <MessageCircle className="w-4 h-4 mr-2" />
              联系客服
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-esports-purple/20 to-neon-cyan/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            准备开始了吗？
          </h2>
          <p className="text-xl text-light-gray mb-8">
            加入METATOPIA生态系统，体验GameFi的无限可能
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-neon">
              <Globe className="w-5 h-5 mr-2" />
              开始体验
            </button>
            <button className="px-6 py-3 border border-light-gray/30 rounded-lg hover:border-neon-cyan transition-colors duration-300">
              下载白皮书
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage