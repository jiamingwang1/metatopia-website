'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, Play, Users, Trophy, Zap, Shield, Globe, Download } from 'lucide-react'

const HomePage = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const features = [
    {
      icon: Zap,
      title: 'AI智能赛事匹配',
      description: '基于AI算法的智能对手匹配系统，为每位玩家提供最佳游戏体验',
      color: 'text-esports-gold'
    },
    {
      icon: Trophy,
      title: '多元化GameFi生态',
      description: '融合多款链游的综合生态系统，实现跨游戏资产互通',
      color: 'text-neon-cyan'
    },
    {
      icon: Users,
      title: 'DAO社区治理',
      description: '由社区驱动的去中心化治理机制，让每个玩家都有发言权',
      color: 'text-esports-purple'
    },
    {
      icon: Shield,
      title: '链上反作弊系统',
      description: '区块链技术保障的公平竞技环境，杜绝作弊行为',
      color: 'text-success-green'
    }
  ]

  const stats = [
    { label: '代币总供应量', value: '10亿', unit: 'MTP' },
    { label: '预计玩家数量', value: '100万+', unit: '用户' },
    { label: '合作游戏', value: '50+', unit: '款' },
    { label: '全球赛事', value: '365天', unit: '不间断' }
  ]

  const news = [
    {
      title: 'METATOPIA白皮书正式发布',
      date: '2025-01-15',
      category: '重要公告',
      excerpt: '详细介绍了AI×电竞×GameFi的创新生态模式...'
    },
    {
      title: '首款AI电竞链游Beta版即将上线',
      date: '2025-01-10',
      category: '产品更新',
      excerpt: '集成智能匹配系统的电竞游戏即将开启测试...'
    },
    {
      title: '与顶级电竞战队达成合作',
      date: '2025-01-05',
      category: '合作伙伴',
      excerpt: '多支知名电竞战队加入METATOPIA生态...'
    }
  ]

  if (!mounted) {
    return <div className="min-h-screen bg-space-blue" />
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center particles-container overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-esports-purple/20 via-transparent to-neon-cyan/20" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-float">
            {/* Logo */}
            <div className="mb-8">
              <div className="w-24 h-24 md:w-32 md:h-32 mx-auto rounded-2xl overflow-hidden shadow-2xl shadow-esports-purple/50">
                <img src="/logo.svg" alt="METATOPIA Logo" className="w-full h-full object-cover" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-gradient">METATOPIA</span>
              <br />
              <span className="text-white text-2xl md:text-3xl lg:text-4xl">
                玩转电竞未来，掌控你的数字宇宙
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-light-gray mb-8 max-w-3xl mx-auto">
              全球首个融合<span className="text-esports-gold">AI</span>、
              <span className="text-neon-cyan">电竞</span>与
              <span className="text-esports-purple">链上经济</span>的下一代GameFi平台
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/whitepaper" className="btn-primary group">
                查看白皮书
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="btn-secondary group">
                <Play className="mr-2 h-5 w-5" />
                观看演示
              </button>
            </div>
          </div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-space-blue via-dark-blue to-space-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-light-gray text-sm md:text-base">
                  {stat.label}
                </div>
                <div className="text-neon-cyan text-xs md:text-sm">
                  {stat.unit}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-space-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              核心<span className="text-gradient">特性</span>
            </h2>
            <p className="text-light-gray text-lg max-w-2xl mx-auto">
              METATOPIA将AI技术、电竞竞技与区块链经济完美融合
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div key={index} className="feature-card group">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-esports-purple to-neon-cyan flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-light-gray text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className="py-20 bg-gradient-to-br from-dark-blue via-space-blue to-dark-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              生态<span className="text-gradient">系统</span>
            </h2>
            <p className="text-light-gray text-lg max-w-2xl mx-auto">
              构建完整的AI×电竞×GameFi生态闭环
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/gamefi" className="ecosystem-card group">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-esports-gold to-esports-purple flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Trophy className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">GameFi生态</h3>
              <p className="text-light-gray mb-6">
                多款链游集成，跨游戏资产互通，真正的Play-to-Earn体验
              </p>
              <div className="flex items-center text-neon-cyan group-hover:translate-x-2 transition-transform">
                <span>了解更多</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Link>
            
            <Link href="/dao" className="ecosystem-card group">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-neon-cyan to-esports-purple flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">DAO治理</h3>
              <p className="text-light-gray mb-6">
                社区驱动的去中心化治理，每个持币者都有决策权
              </p>
              <div className="flex items-center text-neon-cyan group-hover:translate-x-2 transition-transform">
                <span>参与治理</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Link>
            
            <Link href="/roadmap" className="ecosystem-card group">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-esports-purple to-esports-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">发展路线</h3>
              <p className="text-light-gray mb-6">
                清晰的发展规划，从MVP到全球化部署的完整路径
              </p>
              <div className="flex items-center text-neon-cyan group-hover:translate-x-2 transition-transform">
                <span>查看路线图</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-space-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                最新<span className="text-gradient">动态</span>
              </h2>
              <p className="text-light-gray text-lg">
                关注METATOPIA的最新发展
              </p>
            </div>
            <Link href="/news" className="btn-secondary hidden md:flex">
              查看全部
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <article key={index} className="news-card group">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-esports-purple/20 text-esports-purple text-sm rounded-full">
                    {item.category}
                  </span>
                  <span className="text-light-gray text-sm">
                    {item.date}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-neon-cyan transition-colors">
                  {item.title}
                </h3>
                <p className="text-light-gray text-sm leading-relaxed mb-4">
                  {item.excerpt}
                </p>
                <div className="flex items-center text-neon-cyan text-sm group-hover:translate-x-1 transition-transform">
                  <span>阅读更多</span>
                  <ArrowRight className="ml-1 h-3 w-3" />
                </div>
              </article>
            ))}
          </div>
          
          <div className="text-center mt-8 md:hidden">
            <Link href="/news" className="btn-secondary">
              查看全部动态
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-esports-purple via-neon-cyan to-esports-gold">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            准备好进入METATOPIA了吗？
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            加入我们的社区，成为AI×电竞×GameFi革命的先行者
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/whitepaper" className="bg-white text-esports-purple px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
              <Download className="mr-2 h-5 w-5" />
              下载白皮书
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-esports-purple transition-colors flex items-center justify-center">
              联系我们
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage