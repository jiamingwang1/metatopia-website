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
                <img src="/logo.jpg" alt="METATOPIA Logo" className="w-full h-full object-cover" />
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
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/whitepaper" className="btn-neon group">
                查看白皮书
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <button className="flex items-center space-x-2 px-6 py-3 border border-light-gray/30 rounded-lg hover:border-neon-cyan transition-colors duration-300">
                <Play className="w-5 h-5" />
                <span>观看介绍视频</span>
              </button>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="card-esports text-center">
                <div className="text-2xl md:text-3xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-light-gray">{stat.label}</div>
                <div className="text-xs text-esports-gold">{stat.unit}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-dark-gray/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              核心特色
            </h2>
            <p className="text-xl text-light-gray max-w-2xl mx-auto">
              AI × 电竞 × GameFi 的完美融合，打造前所未有的游戏体验
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="card-esports group hover:scale-105 transition-transform duration-300">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-purple-cyan flex items-center justify-center mb-4 group-hover:animate-pulse`}>
                    <Icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-light-gray">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Tokenomics Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                MTP代币经济
              </h2>
              <p className="text-xl text-light-gray mb-8">
                总量10亿枚的MTP代币，支撑整个GameFi生态的价值流转
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center p-4 bg-dark-gray/50 rounded-lg">
                  <span className="text-white">游戏支付</span>
                  <span className="text-esports-gold">✓</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-dark-gray/50 rounded-lg">
                  <span className="text-white">赛事奖励</span>
                  <span className="text-neon-cyan">✓</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-dark-gray/50 rounded-lg">
                  <span className="text-white">质押挖矿</span>
                  <span className="text-esports-purple">✓</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-dark-gray/50 rounded-lg">
                  <span className="text-white">DAO治理</span>
                  <span className="text-success-green">✓</span>
                </div>
              </div>
              
              <Link href="/about" className="btn-neon">
                了解更多
              </Link>
            </div>
            
            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                {/* 简化的饼图展示 */}
                <div className="w-full h-full rounded-full bg-gradient-to-r from-esports-purple via-neon-cyan to-esports-gold animate-spin-slow" style={{animationDuration: '20s'}}>
                  <div className="absolute inset-4 bg-space-blue rounded-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gradient">10亿</div>
                      <div className="text-sm text-light-gray">MTP代币</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20 bg-dark-gray/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              最新动态
            </h2>
            <Link href="/news" className="text-neon-cyan hover:text-esports-gold transition-colors duration-200">
              查看全部 →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <article key={index} className="card-esports group cursor-pointer">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs px-2 py-1 bg-esports-purple/20 text-esports-purple rounded">
                    {item.category}
                  </span>
                  <span className="text-xs text-light-gray">{item.date}</span>
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-neon-cyan transition-colors duration-200">
                  {item.title}
                </h3>
                
                <p className="text-light-gray text-sm">
                  {item.excerpt}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            准备好进入METATOPIA了吗？
          </h2>
          <p className="text-xl text-light-gray mb-8">
            加入我们的社区，成为下一代GameFi革命的一部分
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/whitepaper" className="btn-neon">
              <Download className="w-5 h-5 mr-2" />
              下载白皮书
            </Link>
            <Link href="/contact" className="px-6 py-3 border border-light-gray/30 rounded-lg hover:border-neon-cyan transition-colors duration-300">
              联系我们
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage