'use client'

import { useState, useEffect } from 'react'
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Users, Globe, Twitter, Github, Linkedin, Hash, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react'

const ContactPage = () => {
  const [mounted, setMounted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    category: 'general',
    message: '',
    newsletter: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const contactInfo = [
    {
      icon: Mail,
      title: '邮箱联系',
      content: 'contact@metatopia.io',
      description: '商务合作、技术支持、媒体咨询',
      action: 'mailto:contact@metatopia.io'
    },
    {
      icon: MessageSquare,
      title: '在线客服',
      content: '24/7 在线支持',
      description: '实时解答您的问题和疑虑',
      action: '#chat'
    },
    {
      icon: MapPin,
      title: '办公地址',
      content: '新加坡滨海湾金融中心',
      description: 'Marina Bay Financial Centre, Singapore',
      action: '#location'
    },
    {
      icon: Clock,
      title: '工作时间',
      content: '周一至周五 9:00-18:00',
      description: 'GMT+8 (新加坡时间)',
      action: '#schedule'
    }
  ]

  const socialLinks = [
    {
      icon: Twitter,
      name: 'Twitter',
      handle: '@MetaTopia_io',
      url: 'https://twitter.com/MetaTopia_io',
      color: 'hover:text-blue-400'
    },
    {
      icon: Hash,
      name: 'Discord',
      handle: 'MetaTopia Community',
      url: 'https://discord.gg/metatopia',
      color: 'hover:text-indigo-400'
    },
    {
      icon: MessageCircle,
      name: 'Telegram',
      handle: '@MetaTopia_Official',
      url: 'https://t.me/MetaTopia_Official',
      color: 'hover:text-blue-500'
    },
    {
      icon: Github,
      name: 'GitHub',
      handle: 'MetaTopia-Labs',
      url: 'https://github.com/MetaTopia-Labs',
      color: 'hover:text-gray-400'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      handle: 'MetaTopia',
      url: 'https://linkedin.com/company/metatopia',
      color: 'hover:text-blue-600'
    }
  ]

  const categories = [
    { value: 'general', label: '一般咨询' },
    { value: 'business', label: '商务合作' },
    { value: 'technical', label: '技术支持' },
    { value: 'media', label: '媒体采访' },
    { value: 'investment', label: '投资咨询' },
    { value: 'partnership', label: '合作伙伴' }
  ]

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // 模拟API调用
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // 这里应该是实际的API调用
      console.log('Form submitted:', formData)
      
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        category: 'general',
        message: '',
        newsletter: false
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <div className="relative pt-20 pb-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              联系我们
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              无论您是开发者、投资者还是合作伙伴，我们都期待与您建立联系。
              让我们一起构建去中心化的未来。
            </p>
          </div>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon
            return (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-500/20 rounded-lg mr-4">
                    <IconComponent className="h-6 w-6 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{info.title}</h3>
                </div>
                <p className="text-white font-medium mb-2">{info.content}</p>
                <p className="text-gray-300 text-sm">{info.description}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6">发送消息</h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  <span className="text-green-300">消息发送成功！我们会尽快回复您。</span>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center">
                  <AlertCircle className="h-5 w-5 text-red-400 mr-3" />
                  <span className="text-red-300">发送失败，请稍后重试。</span>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      姓名 *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="请输入您的姓名"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      邮箱 *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="请输入您的邮箱"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      公司/组织
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="请输入公司或组织名称"
                    />
                  </div>
                  <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-300 mb-2">
                      咨询类型 *
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {categories.map((category) => (
                        <option key={category.value} value={category.value} className="bg-gray-800">
                          {category.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    主题 *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="请简要描述您的咨询主题"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    详细信息 *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="请详细描述您的问题或需求..."
                  />
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="newsletter"
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="newsletter" className="ml-2 block text-sm text-gray-300">
                    订阅我们的新闻通讯，获取最新产品动态和技术资讯
                  </label>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      发送中...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      发送消息
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-8">
            {/* Social Links */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-6">社交媒体</h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-200 group ${social.color}`}
                    >
                      <div className="p-2 bg-white/10 rounded-lg mr-4 group-hover:bg-white/20 transition-colors">
                        <IconComponent className="h-5 w-5 text-gray-300 group-hover:text-white" />
                      </div>
                      <div>
                        <div className="text-white font-medium">{social.name}</div>
                        <div className="text-gray-400 text-sm">{social.handle}</div>
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>
            
            {/* FAQ */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-6">常见问题</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-medium mb-2">响应时间</h4>
                  <p className="text-gray-300 text-sm">我们通常在24小时内回复邮件咨询。</p>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2">技术支持</h4>
                  <p className="text-gray-300 text-sm">开发者可通过GitHub或Discord获得技术支持。</p>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2">商务合作</h4>
                  <p className="text-gray-300 text-sm">请通过邮件联系我们的商务团队。</p>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2">媒体采访</h4>
                  <p className="text-gray-300 text-sm">媒体朋友请提前预约采访时间。</p>
                </div>
              </div>
            </div>
            
            {/* Office Hours */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-6">办公时间</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-300">周一 - 周五</span>
                  <span className="text-white">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">周六</span>
                  <span className="text-white">10:00 - 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">周日</span>
                  <span className="text-gray-400">休息</span>
                </div>
                <div className="mt-4 pt-4 border-t border-white/20">
                  <p className="text-gray-300 text-sm">
                    时区: GMT+8 (新加坡时间)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage