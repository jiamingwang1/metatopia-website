'use client'

import { useState } from 'react'
import { Linkedin, Twitter, Github, Mail, Award, Users, Brain, Code, Briefcase, Globe } from 'lucide-react'

const TeamPage = () => {
  const [activeCategory, setActiveCategory] = useState('core')

  const categories = [
    { id: 'core', label: '核心团队', icon: Users },
    { id: 'advisors', label: '顾问团队', icon: Award },
    { id: 'investors', label: '投资机构', icon: Briefcase }
  ]

  const coreTeam = [
    {
      name: 'Alex Chen',
      role: '创始人 & CEO',
      avatar: '/api/placeholder/150/150',
      bio: '前腾讯游戏高级架构师，10年游戏行业经验，区块链技术专家',
      expertise: ['游戏架构', '区块链技术', '产品战略', '团队管理'],
      education: 'MIT计算机科学硕士',
      experience: '腾讯游戏 • Google • 斯坦福研究院',
      social: {
        linkedin: 'https://linkedin.com/in/alexchen',
        twitter: 'https://twitter.com/alexchen',
        github: 'https://github.com/alexchen'
      },
      achievements: [
        '主导开发了3款DAU超千万的游戏',
        '发表15篇区块链技术论文',
        '获得8项游戏技术专利'
      ]
    },
    {
      name: 'Sarah Kim',
      role: '联合创始人 & CTO',
      avatar: '/api/placeholder/150/150',
      bio: 'AI算法专家，前Meta AI研究员，专注于机器学习和游戏AI',
      expertise: ['人工智能', '机器学习', '算法优化', '系统架构'],
      education: 'Stanford AI博士',
      experience: 'Meta AI • DeepMind • 微软研究院',
      social: {
        linkedin: 'https://linkedin.com/in/sarahkim',
        twitter: 'https://twitter.com/sarahkim',
        github: 'https://github.com/sarahkim'
      },
      achievements: [
        '开发了业界领先的游戏AI算法',
        '在顶级AI会议发表20+论文',
        '获得AI领域青年科学家奖'
      ]
    },
    {
      name: 'David Rodriguez',
      role: '首席产品官 CPO',
      avatar: '/api/placeholder/150/150',
      bio: '资深产品专家，前Riot Games产品总监，电竞行业资深从业者',
      expertise: ['产品设计', '用户体验', '电竞运营', '社区建设'],
      education: 'UC Berkeley商学院MBA',
      experience: 'Riot Games • Blizzard • Epic Games',
      social: {
        linkedin: 'https://linkedin.com/in/davidrodriguez',
        twitter: 'https://twitter.com/davidrodriguez'
      },
      achievements: [
        '主导《英雄联盟》全球赛事产品',
        '构建了千万级用户社区',
        '获得游戏行业产品创新奖'
      ]
    },
    {
      name: 'Emily Zhang',
      role: '首席运营官 COO',
      avatar: '/api/placeholder/150/150',
      bio: '运营管理专家，前币安全球运营总监，具有丰富的加密货币行业经验',
      expertise: ['运营管理', '商务拓展', '合规事务', '全球化'],
      education: 'Wharton商学院MBA',
      experience: 'Binance • Coinbase • McKinsey',
      social: {
        linkedin: 'https://linkedin.com/in/emilyzhang',
        twitter: 'https://twitter.com/emilyzhang'
      },
      achievements: [
        '管理币安全球50+市场运营',
        '建立了完善的合规体系',
        '获得区块链行业杰出女性奖'
      ]
    },
    {
      name: 'Marcus Johnson',
      role: '首席技术架构师',
      avatar: '/api/placeholder/150/150',
      bio: '区块链技术专家，前以太坊核心开发者，智能合约安全专家',
      expertise: ['区块链开发', '智能合约', '安全审计', '跨链技术'],
      education: 'CMU计算机科学博士',
      experience: 'Ethereum Foundation • ConsenSys • IBM',
      social: {
        linkedin: 'https://linkedin.com/in/marcusjohnson',
        twitter: 'https://twitter.com/marcusjohnson',
        github: 'https://github.com/marcusjohnson'
      },
      achievements: [
        '参与以太坊2.0核心开发',
        '审计了价值10亿美元的智能合约',
        '发现并修复多个重大安全漏洞'
      ]
    },
    {
      name: 'Lisa Wang',
      role: '首席营销官 CMO',
      avatar: '/api/placeholder/150/150',
      bio: '数字营销专家，前字节跳动全球营销总监，Web3营销先驱',
      expertise: ['数字营销', '品牌建设', '社区运营', '内容策略'],
      education: 'Columbia商学院MBA',
      experience: 'ByteDance • Facebook • Ogilvy',
      social: {
        linkedin: 'https://linkedin.com/in/lisawang',
        twitter: 'https://twitter.com/lisawang'
      },
      achievements: [
        '打造了多个千万级用户产品',
        '获得数字营销金奖',
        '建立了Web3营销最佳实践'
      ]
    }
  ]

  const advisors = [
    {
      name: 'Dr. Vitalik Buterin',
      role: '技术顾问',
      company: 'Ethereum Foundation',
      avatar: '/api/placeholder/150/150',
      bio: '以太坊创始人，区块链技术先驱',
      expertise: ['区块链技术', '智能合约', '去中心化'],
      contribution: '提供区块链技术战略指导'
    },
    {
      name: 'Marc Merrill',
      role: '游戏行业顾问',
      company: 'Riot Games',
      avatar: '/api/placeholder/150/150',
      bio: 'Riot Games联合创始人，电竞产业先驱',
      expertise: ['游戏开发', '电竞运营', '社区建设'],
      contribution: '指导电竞生态系统建设'
    },
    {
      name: 'Cathie Wood',
      role: '投资顾问',
      company: 'ARK Invest',
      avatar: '/api/placeholder/150/150',
      bio: 'ARK Invest创始人，颠覆性创新投资专家',
      expertise: ['投资策略', '创新技术', '市场分析'],
      contribution: '提供投资和战略发展建议'
    },
    {
      name: 'Dr. Fei-Fei Li',
      role: 'AI顾问',
      company: 'Stanford AI Lab',
      avatar: '/api/placeholder/150/150',
      bio: '斯坦福AI实验室主任，计算机视觉专家',
      expertise: ['人工智能', '计算机视觉', '机器学习'],
      contribution: '指导AI算法研发和优化'
    }
  ]

  const investors = [
    {
      name: 'Andreessen Horowitz',
      type: '领投机构',
      logo: '/api/placeholder/100/100',
      investment: 'Series A - $20M',
      focus: '加密货币和Web3投资',
      portfolio: 'Coinbase, OpenSea, Dapper Labs'
    },
    {
      name: 'Sequoia Capital',
      type: '战略投资',
      logo: '/api/placeholder/100/100',
      investment: 'Series A - $15M',
      focus: '科技创新投资',
      portfolio: 'Google, Apple, Airbnb'
    },
    {
      name: 'Binance Labs',
      type: '生态投资',
      logo: '/api/placeholder/100/100',
      investment: 'Strategic - $10M',
      focus: '区块链生态投资',
      portfolio: 'Polygon, Sandbox, Axie Infinity'
    },
    {
      name: 'Animoca Brands',
      type: '游戏投资',
      logo: '/api/placeholder/100/100',
      investment: 'Strategic - $8M',
      focus: 'GameFi和NFT投资',
      portfolio: 'The Sandbox, Axie Infinity, OpenSea'
    },
    {
      name: 'Paradigm',
      type: '技术投资',
      logo: '/api/placeholder/100/100',
      investment: 'Series A - $12M',
      focus: '加密货币基础设施',
      portfolio: 'Uniswap, Compound, FTX'
    },
    {
      name: 'Pantera Capital',
      type: '基金投资',
      logo: '/api/placeholder/100/100',
      investment: 'Venture - $5M',
      focus: '区块链和数字资产',
      portfolio: 'Bitstamp, Ripple, Circle'
    }
  ]

  const teamStats = {
    totalMembers: 45,
    countries: 12,
    avgExperience: 8,
    totalFunding: '$70M'
  }

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 particles-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
            我们的团队
          </h1>
          <p className="text-xl md:text-2xl text-light-gray mb-8 max-w-3xl mx-auto">
            汇聚全球顶尖人才，共同构建GameFi的未来
          </p>
          
          {/* Team Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="card-esports text-center">
              <div className="text-2xl font-bold text-esports-gold mb-2">{teamStats.totalMembers}</div>
              <div className="text-sm text-light-gray">团队成员</div>
            </div>
            <div className="card-esports text-center">
              <div className="text-2xl font-bold text-neon-cyan mb-2">{teamStats.countries}</div>
              <div className="text-sm text-light-gray">覆盖国家</div>
            </div>
            <div className="card-esports text-center">
              <div className="text-2xl font-bold text-esports-purple mb-2">{teamStats.avgExperience}年</div>
              <div className="text-sm text-light-gray">平均经验</div>
            </div>
            <div className="card-esports text-center">
              <div className="text-2xl font-bold text-success-green mb-2">{teamStats.totalFunding}</div>
              <div className="text-sm text-light-gray">总融资额</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-8 bg-dark-gray/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-gradient-purple-cyan text-white shadow-lg'
                      : 'bg-dark-gray/50 text-light-gray hover:bg-esports-purple/20 hover:text-white'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{category.label}</span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Core Team */}
          {activeCategory === 'core' && (
            <div className="space-y-12">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  核心团队
                </h2>
                <p className="text-xl text-light-gray max-w-3xl mx-auto">
                  来自全球顶级科技公司的资深专家
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {coreTeam.map((member, index) => (
                  <div key={index} className="card-esports group hover:scale-105 transition-transform duration-300">
                    {/* Avatar */}
                    <div className="w-24 h-24 bg-gradient-purple-cyan rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    
                    {/* Basic Info */}
                    <div className="text-center mb-4">
                      <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                      <p className="text-esports-gold font-medium mb-2">{member.role}</p>
                      <p className="text-light-gray text-sm">{member.bio}</p>
                    </div>
                    
                    {/* Education & Experience */}
                    <div className="mb-4 space-y-2">
                      <div className="text-xs">
                        <span className="text-neon-cyan font-medium">教育背景: </span>
                        <span className="text-light-gray">{member.education}</span>
                      </div>
                      <div className="text-xs">
                        <span className="text-esports-purple font-medium">工作经历: </span>
                        <span className="text-light-gray">{member.experience}</span>
                      </div>
                    </div>
                    
                    {/* Expertise */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">专业领域</h4>
                      <div className="flex flex-wrap gap-1">
                        {member.expertise.map((skill, idx) => (
                          <span key={idx} className="text-xs bg-dark-gray/50 text-light-gray px-2 py-1 rounded">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">主要成就</h4>
                      <div className="space-y-1">
                        {member.achievements.slice(0, 2).map((achievement, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-neon-cyan rounded-full mt-1.5 flex-shrink-0" />
                            <span className="text-xs text-light-gray">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Social Links */}
                    <div className="flex justify-center space-x-3">
                      {member.social.linkedin && (
                        <a href={member.social.linkedin} className="text-light-gray hover:text-neon-cyan transition-colors">
                          <Linkedin className="w-4 h-4" />
                        </a>
                      )}
                      {member.social.twitter && (
                        <a href={member.social.twitter} className="text-light-gray hover:text-neon-cyan transition-colors">
                          <Twitter className="w-4 h-4" />
                        </a>
                      )}
                      {member.social.github && (
                        <a href={member.social.github} className="text-light-gray hover:text-neon-cyan transition-colors">
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Advisors */}
          {activeCategory === 'advisors' && (
            <div className="space-y-12">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  顾问团队
                </h2>
                <p className="text-xl text-light-gray max-w-3xl mx-auto">
                  行业领袖和技术专家为我们提供战略指导
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {advisors.map((advisor, index) => (
                  <div key={index} className="card-esports">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gradient-gold-purple rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-lg font-bold text-white">
                          {advisor.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-1">{advisor.name}</h3>
                        <p className="text-esports-gold text-sm font-medium mb-1">{advisor.role}</p>
                        <p className="text-neon-cyan text-sm mb-2">{advisor.company}</p>
                        <p className="text-light-gray text-sm mb-3">{advisor.bio}</p>
                        
                        <div className="mb-3">
                          <h4 className="text-xs font-semibold text-white mb-1">专业领域</h4>
                          <div className="flex flex-wrap gap-1">
                            {advisor.expertise.map((skill, idx) => (
                              <span key={idx} className="text-xs bg-dark-gray/50 text-light-gray px-2 py-1 rounded">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="text-xs">
                          <span className="text-esports-purple font-medium">贡献: </span>
                          <span className="text-light-gray">{advisor.contribution}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Investors */}
          {activeCategory === 'investors' && (
            <div className="space-y-12">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  投资机构
                </h2>
                <p className="text-xl text-light-gray max-w-3xl mx-auto">
                  获得全球顶级投资机构的认可和支持
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {investors.map((investor, index) => (
                  <div key={index} className="card-esports text-center">
                    <div className="w-16 h-16 bg-gradient-purple-cyan rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <Briefcase className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-lg font-semibold text-white mb-2">{investor.name}</h3>
                    <p className="text-esports-gold text-sm font-medium mb-2">{investor.type}</p>
                    <p className="text-neon-cyan font-bold mb-3">{investor.investment}</p>
                    
                    <div className="text-left space-y-2">
                      <div className="text-xs">
                        <span className="text-light-gray font-medium">投资领域: </span>
                        <span className="text-light-gray">{investor.focus}</span>
                      </div>
                      <div className="text-xs">
                        <span className="text-light-gray font-medium">知名投资: </span>
                        <span className="text-light-gray">{investor.portfolio}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Investment Summary */}
              <div className="card-esports">
                <h3 className="text-xl font-semibold text-white text-center mb-6">融资概况</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-success-green mb-2">$70M</div>
                    <div className="text-sm text-light-gray">总融资金额</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-neon-cyan mb-2">6</div>
                    <div className="text-sm text-light-gray">投资机构数量</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-esports-gold mb-2">Series A</div>
                    <div className="text-sm text-light-gray">当前轮次</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Join Us */}
      <section className="py-16 bg-dark-gray/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            加入我们的团队
          </h2>
          <p className="text-xl text-light-gray mb-8">
            我们正在寻找充满激情的人才，一起构建GameFi的未来
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="card-esports text-center">
              <Code className="w-8 h-8 text-neon-cyan mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">技术开发</h3>
              <p className="text-light-gray text-sm">区块链、AI、前后端开发</p>
            </div>
            <div className="card-esports text-center">
              <Brain className="w-8 h-8 text-esports-purple mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">产品设计</h3>
              <p className="text-light-gray text-sm">产品经理、UI/UX设计师</p>
            </div>
            <div className="card-esports text-center">
              <Globe className="w-8 h-8 text-esports-gold mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">运营市场</h3>
              <p className="text-light-gray text-sm">市场营销、社区运营</p>
            </div>
          </div>
          
          <button className="btn-neon-glow">
            <Mail className="w-5 h-5 mr-2" />
            查看职位空缺
          </button>
        </div>
      </section>
    </div>
  )
}

export default TeamPage