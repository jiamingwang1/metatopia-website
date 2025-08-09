'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Twitter, Github, Linkedin, Globe, Users, Headphones, FileText, Zap } from 'lucide-react'

const ContactPage = () => {
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
  const [submitStatus, setSubmitStatus] = useState('')

  const contactMethods = [
    {
      icon: Mail,
      title: '邮箱联系',
      description: '发送邮件给我们的团队',
      contact: 'hello@metatopia.io',
      action: 'mailto:hello@metatopia.io',
      color: 'text-neon-cyan'
    },
    {
      icon: MessageCircle,
      title: '在线客服',
      description: '7x24小时在线支持',
      contact: '立即开始对话',
      action: '#',
      color: 'text-esports-purple'
    },
    {
      icon: Phone,
      title: '电话咨询',
      description: '工作日 9:00-18:00',
      contact: '+86 400-888-0000',
      action: 'tel:+8640088800000',
      color: 'text-success-green'
    },
    {
      icon: MapPin,
      title: '办公地址',
      description: '欢迎预约参观',
      contact: '上海市浦东新区张江高科技园区',
      action: '#',
      color: 'text-esports-gold'
    }
  ]

  const socialLinks = [
    { icon: Twitter, label: 'Twitter', url: 'https://twitter.com/metatopia', color: 'hover:text-blue-400' },
    { icon: Github, label: 'GitHub', url: 'https://github.com/metatopia', color: 'hover:text-gray-400' },
    { icon: Linkedin, label: 'LinkedIn', url: 'https://linkedin.com/company/metatopia', color: 'hover:text-blue-600' },
    { icon: Globe, label: 'Website', url: 'https://metatopia.io', color: 'hover:text-neon-cyan' }
  ]

  const contactCategories = [
    { value: 'general', label: '一般咨询', icon: MessageCircle },
    { value: 'partnership', label: '商务合作', icon: Users },
    { value: 'support', label: '技术支持', icon: Headphones },
    { value: 'media', label: '媒体采访', icon: FileText },
    { value: 'investment', label: '投资相关', icon: Zap }
  ]

  const offices = [
    {
      city: '上海总部',
      address: '上海市浦东新区张江高科技园区科苑路399号',
      phone: '+86 21-5888-0000',
      email: 'shanghai@metatopia.io',
      hours: '周一至周五 9:00-18:00'
    },
    {
      city: '北京分部',
      address: '北京市海淀区中关村软件园二期',
      phone: '+86 10-8888-0000',
      email: 'beijing@metatopia.io',
      hours: '周一至周五 9:00-18:00'
    },
    {
      city: '深圳分部',
      address: '深圳市南山区科技园南区高新南七道',
      phone: '+86 755-8888-0000',
      email: 'shenzhen@metatopia.io',
      hours: '周一至周五 9:00-18:00'
    },
    {
      city: '新加坡办事处',
      address: '1 Raffles Place, #20-61, One Raffles Place',
      phone: '+65 6888-0000',
      email: 'singapore@metatopia.io',
      hours: 'Mon-Fri 9:00-18:00'
    }
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
    
    // 模拟表单提交
    setTimeout(() => {
      setIsSubmitting(false)
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
      
      setTimeout(() => setSubmitStatus(''), 3000)
    }, 2000)
  }

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 particles-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
            联系我们
          </h1>
          <p className="text-xl md:text-2xl text-light-gray mb-8 max-w-3xl mx-auto">
            有任何问题或建议？我们很乐意听到您的声音
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <a
                  key={index}
                  href={method.action}
                  className="card-esports group hover:scale-105 transition-all duration-300 text-center"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-purple-cyan flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-8 h-8 ${method.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{method.title}</h3>
                  <p className="text-light-gray text-sm mb-3">{method.description}</p>
                  <p className={`font-medium ${method.color} group-hover:text-white transition-colors`}>
                    {method.contact}
                  </p>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-dark-gray/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="card-esports">
              <h2 className="text-2xl font-bold text-white mb-6">发送消息</h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-success-green/20 border border-success-green/50 rounded-lg">
                  <p className="text-success-green">消息发送成功！我们会尽快回复您。</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-light-gray mb-2">
                      姓名 *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-dark-gray/50 border border-dark-gray rounded-lg text-white placeholder-light-gray focus:outline-none focus:border-neon-cyan"
                      placeholder="请输入您的姓名"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-light-gray mb-2">
                      邮箱 *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-dark-gray/50 border border-dark-gray rounded-lg text-white placeholder-light-gray focus:outline-none focus:border-neon-cyan"
                      placeholder="请输入您的邮箱"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-light-gray mb-2">
                      公司/组织
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-dark-gray/50 border border-dark-gray rounded-lg text-white placeholder-light-gray focus:outline-none focus:border-neon-cyan"
                      placeholder="请输入公司或组织名称"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-light-gray mb-2">
                      咨询类型 *
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-dark-gray/50 border border-dark-gray rounded-lg text-white focus:outline-none focus:border-neon-cyan"
                    >
                      {contactCategories.map((category) => (
                        <option key={category.value} value={category.value}>
                          {category.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-light-gray mb-2">
                    主题 *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-dark-gray/50 border border-dark-gray rounded-lg text-white placeholder-light-gray focus:outline-none focus:border-neon-cyan"
                    placeholder="请简要描述您的问题或需求"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-light-gray mb-2">
                    详细信息 *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-dark-gray/50 border border-dark-gray rounded-lg text-white placeholder-light-gray focus:outline-none focus:border-neon-cyan resize-none"
                    placeholder="请详细描述您的问题、建议或需求..."
                  />
                </div>
                
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    name="newsletter"
                    id="newsletter"
                    checked={formData.newsletter}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-neon-cyan bg-dark-gray border-dark-gray rounded focus:ring-neon-cyan focus:ring-2"
                  />
                  <label htmlFor="newsletter" className="text-sm text-light-gray">
                    订阅我们的新闻通讯，获取最新动态
                  </label>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-neon-glow flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>发送中...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>发送消息</span>
                    </>
                  )}
                </button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-8">
              {/* Office Hours */}
              <div className="card-esports">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-neon-cyan" />
                  <span>工作时间</span>
                </h3>
                <div className="space-y-2 text-light-gray">
                  <p><span className="font-medium text-white">周一至周五:</span> 9:00 - 18:00</p>
                  <p><span className="font-medium text-white">周六:</span> 10:00 - 16:00</p>
                  <p><span className="font-medium text-white">周日:</span> 休息</p>
                  <p className="text-sm mt-3 text-neon-cyan">* 在线客服7x24小时为您服务</p>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="card-esports">
                <h3 className="text-xl font-semibold text-white mb-4">关注我们</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center space-x-3 p-3 bg-dark-gray/50 rounded-lg hover:bg-dark-gray/70 transition-all duration-300 ${social.color}`}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="text-sm font-medium">{social.label}</span>
                      </a>
                    )
                  })}
                </div>
              </div>
              
              {/* Quick Response */}
              <div className="card-esports">
                <h3 className="text-xl font-semibold text-white mb-4">快速响应承诺</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-light-gray">一般咨询</span>
                    <span className="text-success-green font-medium">24小时内</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-light-gray">技术支持</span>
                    <span className="text-success-green font-medium">4小时内</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-light-gray">商务合作</span>
                    <span className="text-success-green font-medium">48小时内</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-light-gray">紧急问题</span>
                    <span className="text-success-green font-medium">1小时内</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            全球办公室
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office, index) => (
              <div key={index} className="card-esports">
                <h3 className="text-lg font-semibold text-white mb-3">{office.city}</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-4 h-4 text-neon-cyan mt-0.5 flex-shrink-0" />
                    <span className="text-light-gray">{office.address}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-esports-purple" />
                    <span className="text-light-gray">{office.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-success-green" />
                    <span className="text-light-gray">{office.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-esports-gold" />
                    <span className="text-light-gray">{office.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-dark-gray/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            常见问题
          </h2>
          
          <div className="space-y-4">
            {[
              {
                question: '如何参与METATOPIA的测试版本？',
                answer: '您可以通过官网注册测试资格，我们会根据测试进度分批邀请用户参与。'
              },
              {
                question: 'MTP代币什么时候上线交易所？',
                answer: '我们正在与多家顶级交易所洽谈，具体上线时间请关注官方公告。'
              },
              {
                question: '如何成为METATOPIA的合作伙伴？',
                answer: '请通过商务合作邮箱联系我们，或填写上方表单选择"商务合作"类型。'
              },
              {
                question: '平台支持哪些游戏类型？',
                answer: '目前主要支持MOBA、FPS、RTS等竞技类游戏，未来会扩展到更多游戏类型。'
              }
            ].map((faq, index) => (
              <div key={index} className="card-esports">
                <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                <p className="text-light-gray">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage