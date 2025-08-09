'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, Users, Trophy, Zap, Shield, Globe, Download, Play, Star, TrendingUp, Target, Award } from 'lucide-react'

const AboutPage = () => {
  const [mounted, setMounted] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')

  useEffect(() => {
    setMounted(true)
  }, [])

  const features = [
    {
      icon: Zap,
      title: 'AI智能赛事匹配',
      description: '基于深度学习的智能匹配算法，分析玩家技能水平、游戏风格和历史表现，为每位玩家匹配最合适的对手，确保公平竞技和最佳游戏体验。',
      highlights: ['技能水平评估', '游戏风格分析', '实时匹配优化', '公平竞技保障']
    },
    {
      icon: Trophy,
      title: '多元化GameFi生态',
      description: '整合多款优质链游，构建统一的GameFi生态系统。玩家可以在不同游戏间自由转移资产，享受跨游戏的一致体验和价值积累。',
      highlights: ['跨游戏资产互通', '统一经济体系', '多样化游戏选择', '价值持续积累']
    },
    {
      icon: Users,
      title: 'DAO社区治理',
      description: '采用去中心化自治组织模式，让社区成员共同参与平台治理。通过MTP代币投票，决定平台发展方向、新功能上线和重要参数调整。',
      highlights: ['社区自主治理', '透明决策过程', '代币投票机制', '共建共享生态']
    },
    {
      icon: Shield,
      title: '链上反作弊系统',
      description: '利用区块链不可篡改特性和AI行为分析技术，构建强大的反作弊系统。实时监控异常行为，确保竞技环境的公平性和游戏的可信度。',
      highlights: ['行为模式识别', '实时监控预警', '自动处罚机制', '公平竞技环境']
    },
    {
      icon: Globe,
      title: '电竞赛事体系',
      description: '打造完整的电竞赛事生态，从日常匹配到全球锦标赛，为不同水平的玩家提供展示舞台。丰厚的奖金池和荣誉系统激励玩家持续进步。',
      highlights: ['多层级赛事体系', '丰厚奖金池', '荣誉成就系统', '全球玩家参与']
    },
    {
      icon: Star,
      title: '跨链资产管理',
      description: '支持多条主流区块链，实现真正的跨链资产管理。玩家可以在不同链上自由转移和交易NFT资产，享受更大的流动性和更多的机会。',
      highlights: ['多链支持', '跨链桥接', '资产自由流转', '流动性最大化']
    }
  ]

  const stats = [
    { label: '代币总供应量', value: '10', unit: '亿 MTP', icon: TrendingUp },
    { label: '预计用户规模', value: '100', unit: '万+', icon: Users },
    { label: '合作游戏数量', value: '50', unit: '+', icon: Trophy },
    { label: '支持区块链', value: '5', unit: '+', icon: Globe },
    { label: 'AI算法模型', value: '20', unit: '+', icon: Zap },
    { label: '安全审计轮次', value: '3', unit: '轮', icon: Shield }
  ]

  const roadmapData = [
    {
      phase: '第一阶段',
      title: '基础设施建设',
      period: '2024 Q4 - 2025 Q1',
      status: 'current',
      items: [
        '智能合约开发与部署',
        'AI匹配算法优化',
        '跨链桥接技术实现',
        '安全审计与测试'
      ]
    },
    {
      phase: '第二阶段',
      title: '平台正式上线',
      period: '2025 Q2',
      status: 'upcoming',
      items: [
        '主网正式发布',
        '首批游戏接入',
        'MTP代币发行',
        '社区治理启动'
      ]
    },
    {
      phase: '第三阶段',
      title: '生态快速扩展',
      period: '2025 Q3 - Q4',
      status: 'upcoming',
      items: [
        '更多游戏伙伴加入',
        '全球赛事体系建立',
        'NFT市场上线',
        '移动端应用发布'
      ]
    },
    {
      phase: '第四阶段',
      title: '全球化发展',
      period: '2026年及以后',
      status: 'future',
      items: [
        '多语言本地化',
        '全球合规布局',
        '元宇宙整合',
        '生态自主发展'
      ]
    }
  ]

  const teamMembers = [
    {
      name: 'Alex Chen',
      role: '创始人 & CEO',
      background: '前腾讯游戏高级架构师，10年游戏行业经验',
      expertise: '游戏架构设计、团队管理、战略规划'
    },
    {
      name: 'Sarah Wang',
      role: 'CTO',
      background: '前阿里巴巴区块链技术专家，AI算法博士',
      expertise: '区块链技术、人工智能、系统架构'
    },
    {
      name: 'Michael Liu',
      role: 'CPO',
      background: '前网易游戏产品总监，多款爆款游戏制作人',
      expertise: '产品设计、用户体验、游戏策划'
    },
    {
      name: 'Emily Zhang',
      role: 'CMO',
      background: '前字节跳动市场总监，Web3营销专家',
      expertise: '品牌营销、社区运营、商务合作'
    }
  ]

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
            关于 <span className="text-gradient">METATOPIA</span>
          </h1>
          <p className="text-xl md:text-2xl text-light-gray mb-8 max-w-4xl mx-auto">
            我们正在构建下一代GameFi生态系统，通过AI、电竞与区块链的深度融合，
            为全球玩家创造前所未有的游戏体验和价值创造机会。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/whitepaper" className="btn-neon group">
              查看白皮书
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="flex items-center space-x-2 px-6 py-3 border border-light-gray/30 rounded-lg hover:border-neon-cyan transition-colors duration-300">
              <Play className="w-5 h-5" />
              <span>观看演示</span>
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-dark-gray/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              项目数据概览
            </h2>
            <p className="text-xl text-light-gray">
              用数据说话，展现METATOPIA的发展潜力
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="card-esports text-center group hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-purple-cyan flex items-center justify-center group-hover:animate-pulse">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-gradient mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-light-gray">{stat.unit}</div>
                  <div className="text-xs text-esports-gold mt-1">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              核心特色功能
            </h2>
            <p className="text-xl text-light-gray max-w-3xl mx-auto">
              六大核心特色，构建完整的GameFi生态系统
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="card-esports group hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 rounded-xl bg-gradient-purple-cyan flex items-center justify-center mb-6 group-hover:animate-pulse">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-light-gray mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <div className="space-y-2">
                    {feature.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <div className="w-2 h-2 rounded-full bg-esports-gold mr-3" />
                        <span className="text-light-gray">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-20 bg-dark-gray/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              发展路线图
            </h2>
            <p className="text-xl text-light-gray">
              分阶段实施，稳步推进生态建设
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {roadmapData.map((phase, index) => (
              <div key={index} className="relative">
                <div className={`card-esports h-full ${
                  phase.status === 'current' ? 'border-esports-gold shadow-lg shadow-esports-gold/20' :
                  phase.status === 'upcoming' ? 'border-neon-cyan/50' :
                  'border-light-gray/20'
                }`}>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-sm px-3 py-1 rounded-full ${
                      phase.status === 'current' ? 'bg-esports-gold/20 text-esports-gold' :
                      phase.status === 'upcoming' ? 'bg-neon-cyan/20 text-neon-cyan' :
                      'bg-light-gray/20 text-light-gray'
                    }`}>
                      {phase.phase}
                    </span>
                    {phase.status === 'current' && (
                      <div className="w-3 h-3 rounded-full bg-esports-gold animate-pulse" />
                    )}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {phase.title}
                  </h3>
                  
                  <p className="text-sm text-light-gray mb-4">
                    {phase.period}
                  </p>
                  
                  <ul className="space-y-2">
                    {phase.items.map((item, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-esports-purple mt-2 mr-3 flex-shrink-0" />
                        <span className="text-light-gray">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              核心团队
            </h2>
            <p className="text-xl text-light-gray">
              经验丰富的专业团队，致力于打造卓越产品
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="card-esports text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-purple-cyan flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-1">
                  {member.name}
                </h3>
                
                <p className="text-esports-gold text-sm mb-3">
                  {member.role}
                </p>
                
                <p className="text-light-gray text-sm mb-3">
                  {member.background}
                </p>
                
                <p className="text-xs text-neon-cyan">
                  {member.expertise}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-esports-purple/20 to-neon-cyan/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            加入METATOPIA生态
          </h2>
          <p className="text-xl text-light-gray mb-8">
            成为下一代GameFi革命的参与者和受益者
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/whitepaper" className="btn-neon">
              <Download className="w-5 h-5 mr-2" />
              下载白皮书
            </Link>
            <Link href="/contact" className="px-6 py-3 border border-light-gray/30 rounded-lg hover:border-neon-cyan transition-colors duration-300">
              联系我们
            </Link>
            <Link href="/dao" className="px-6 py-3 bg-dark-gray/50 rounded-lg hover:bg-dark-gray/70 transition-colors duration-300">
              加入社区
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage