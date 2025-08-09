'use client'

import { useState } from 'react'
import { Brain, Shield, Globe, Zap, Users, Trophy, Gamepad2, TrendingUp, Target, Lightbulb, Rocket } from 'lucide-react'

const AboutPage = () => {
  const [activeSection, setActiveSection] = useState('vision')

  const sections = [
    { id: 'vision', label: '项目愿景', icon: Target },
    { id: 'features', label: '核心特色', icon: Lightbulb },
    { id: 'architecture', label: '技术架构', icon: Globe },
    { id: 'tokenomics', label: '代币经济', icon: TrendingUp }
  ]

  const coreFeatures = [
    {
      icon: Brain,
      title: 'AI智能匹配',
      description: '先进的人工智能算法，基于玩家技能、偏好和历史表现进行精准匹配',
      highlights: ['技能等级评估', '游戏风格分析', '延迟优化', '公平性保障'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: '链上反作弊',
      description: '区块链技术结合AI算法，构建透明可信的反作弊系统',
      highlights: ['行为异常检测', '数据完整性验证', '实时监控', '社区举报'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Trophy,
      title: '电竞赛事',
      description: '全球化的电竞赛事平台，为玩家提供公平竞技的舞台',
      highlights: ['多级别赛事', '实时直播', '奖金池分配', '战队管理'],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Gamepad2,
      title: 'NFT生态',
      description: '丰富的NFT资产系统，包括角色、装备、皮肤和虚拟土地',
      highlights: ['角色NFT', '装备系统', '皮肤收藏', '土地经营'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'DAO治理',
      description: '去中心化自治组织，让社区成员参与平台重要决策',
      highlights: ['提案投票', '社区治理', '资金管理', '发展规划'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Globe,
      title: '跨链互操作',
      description: '多链兼容的基础设施，实现资产自由流转',
      highlights: ['多链支持', '资产桥接', '统一身份', '流动性挖矿'],
      color: 'from-teal-500 to-blue-500'
    }
  ]

  const techStack = {
    blockchain: [
      { name: 'Ethereum', role: '主链', status: '已部署' },
      { name: 'Polygon', role: '扩容方案', status: '已部署' },
      { name: 'BNB Chain', role: '生态扩展', status: '已部署' },
      { name: 'Arbitrum', role: 'Layer 2', status: '开发中' }
    ],
    ai: [
      { name: 'TensorFlow', role: 'AI框架', status: '使用中' },
      { name: 'PyTorch', role: '深度学习', status: '使用中' },
      { name: 'OpenAI API', role: 'NLP处理', status: '集成中' },
      { name: '自研算法', role: '匹配引擎', status: '优化中' }
    ],
    backend: [
      { name: 'Node.js', role: '后端服务', status: '运行中' },
      { name: 'GraphQL', role: 'API层', status: '运行中' },
      { name: 'Redis', role: '缓存系统', status: '运行中' },
      { name: 'MongoDB', role: '数据存储', status: '运行中' }
    ],
    frontend: [
      { name: 'React', role: '前端框架', status: '使用中' },
      { name: 'Next.js', role: 'SSR框架', status: '使用中' },
      { name: 'Web3.js', role: '区块链交互', status: '使用中' },
      { name: 'Three.js', role: '3D渲染', status: '开发中' }
    ]
  }

  const tokenomics = {
    totalSupply: '1,000,000,000',
    distribution: [
      { category: '生态激励', percentage: 30, amount: '300,000,000', color: 'bg-blue-500' },
      { category: '团队与顾问', percentage: 20, amount: '200,000,000', color: 'bg-purple-500' },
      { category: '私募投资', percentage: 15, amount: '150,000,000', color: 'bg-green-500' },
      { category: '公开销售', percentage: 10, amount: '100,000,000', color: 'bg-yellow-500' },
      { category: '流动性池', percentage: 10, amount: '100,000,000', color: 'bg-cyan-500' },
      { category: '社区治理', percentage: 10, amount: '100,000,000', color: 'bg-pink-500' },
      { category: '储备基金', percentage: 5, amount: '50,000,000', color: 'bg-orange-500' }
    ],
    utilities: [
      '游戏内支付和奖励',
      'NFT购买和交易',
      '质押挖矿收益',
      'DAO治理投票权',
      '平台手续费支付',
      '赛事报名费用'
    ]
  }

  const milestones = [
    {
      phase: 'Phase 1',
      title: '基础设施建设',
      period: '2024 Q1-Q2',
      status: '进行中',
      achievements: [
        '核心智能合约部署',
        'AI匹配算法v1.0',
        '基础NFT市场',
        '多链桥接功能'
      ]
    },
    {
      phase: 'Phase 2',
      title: '生态系统扩展',
      period: '2024 Q3-Q4',
      status: '计划中',
      achievements: [
        '电竞赛事平台',
        'DAO治理系统',
        '高级AI功能',
        '移动端应用'
      ]
    },
    {
      phase: 'Phase 3',
      title: '全球化部署',
      period: '2025 Q1-Q2',
      status: '规划中',
      achievements: [
        '全球服务器部署',
        '多语言支持',
        '合规性认证',
        '企业级合作'
      ]
    }
  ]

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 particles-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Logo */}
          <div className="mb-8">
            <div className="w-20 h-20 md:w-24 md:h-24 mx-auto rounded-xl overflow-hidden shadow-xl shadow-esports-purple/30">
              <img src="/logo.jpg" alt="METATOPIA Logo" className="w-full h-full object-cover" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
            关于 METATOPIA
          </h1>
          <p className="text-xl md:text-2xl text-light-gray mb-8 max-w-3xl mx-auto">
            融合AI、电竞与链上经济的下一代GameFi平台
          </p>
          <div className="text-lg text-light-gray max-w-4xl mx-auto">
            <span className="text-neon-cyan font-semibold">玩转电竞未来，掌控你的数字宇宙</span>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 bg-dark-gray/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {sections.map((section) => {
              const Icon = section.icon
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                    activeSection === section.id
                      ? 'bg-gradient-purple-cyan text-white shadow-lg'
                      : 'bg-dark-gray/50 text-light-gray hover:bg-esports-purple/20 hover:text-white'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{section.label}</span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 项目愿景 */}
          {activeSection === 'vision' && (
            <div className="space-y-16">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                  项目愿景
                </h2>
                <div className="max-w-4xl mx-auto space-y-6 text-lg text-light-gray">
                  <p>
                    METATOPIA致力于构建一个革命性的GameFi生态系统，通过融合人工智能、电竞竞技和区块链技术，
                    为全球玩家创造一个公平、透明、充满机遇的数字游戏宇宙。
                  </p>
                  <p>
                    我们相信，游戏不仅仅是娱乐，更是一种新的经济模式和社交方式。在METATOPIA中，
                    每个玩家都能通过技能和努力获得真实的经济回报，每个决策都能影响整个生态系统的发展。
                  </p>
                </div>
              </div>
              
              {/* 核心价值观 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="card-esports text-center">
                  <div className="w-16 h-16 bg-gradient-purple-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">公平竞技</h3>
                  <p className="text-light-gray">
                    通过AI算法和区块链技术确保每场比赛的公平性，让技能成为唯一的胜负标准
                  </p>
                </div>
                
                <div className="card-esports text-center">
                  <div className="w-16 h-16 bg-gradient-gold-purple rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">社区驱动</h3>
                  <p className="text-light-gray">
                    去中心化治理让每个社区成员都能参与平台发展，共同塑造GameFi的未来
                  </p>
                </div>
                
                <div className="card-esports text-center">
                  <div className="w-16 h-16 bg-gradient-purple-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                    <Rocket className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">持续创新</h3>
                  <p className="text-light-gray">
                    不断探索新技术和新模式，为玩家提供前所未有的游戏体验和经济机会
                  </p>
                </div>
              </div>
              
              {/* 发展里程碑 */}
              <div>
                <h3 className="text-2xl font-bold text-white text-center mb-8">发展路线图</h3>
                <div className="space-y-8">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="card-esports">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div className="flex items-center space-x-4 mb-2 md:mb-0">
                          <div className="w-12 h-12 bg-gradient-purple-cyan rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold">{index + 1}</span>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-white">{milestone.title}</h4>
                            <p className="text-sm text-light-gray">{milestone.phase} • {milestone.period}</p>
                          </div>
                        </div>
                        <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                          milestone.status === '进行中' ? 'bg-neon-cyan/20 text-neon-cyan' :
                          milestone.status === '计划中' ? 'bg-esports-gold/20 text-esports-gold' :
                          'bg-light-gray/20 text-light-gray'
                        }`}>
                          {milestone.status}
                        </span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {milestone.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-neon-cyan rounded-full" />
                            <span className="text-light-gray text-sm">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 核心特色 */}
          {activeSection === 'features' && (
            <div className="space-y-12">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                  核心特色
                </h2>
                <p className="text-xl text-light-gray max-w-3xl mx-auto">
                  六大核心功能模块，构建完整的GameFi生态系统
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {coreFeatures.map((feature, index) => {
                  const Icon = feature.icon
                  return (
                    <div key={index} className="card-esports group hover:scale-105 transition-transform duration-300">
                      <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:animate-pulse`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-light-gray mb-4">
                        {feature.description}
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        {feature.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-neon-cyan rounded-full" />
                            <span className="text-sm text-light-gray">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {/* 技术架构 */}
          {activeSection === 'architecture' && (
            <div className="space-y-12">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                  技术架构
                </h2>
                <p className="text-xl text-light-gray max-w-3xl mx-auto">
                  先进的技术栈支撑，确保平台的安全性、可扩展性和用户体验
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* 区块链层 */}
                <div className="card-esports">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <Globe className="w-6 h-6 mr-2 text-neon-cyan" />
                    区块链基础设施
                  </h3>
                  <div className="space-y-3">
                    {techStack.blockchain.map((tech, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-dark-gray/30 rounded-lg">
                        <div>
                          <div className="font-medium text-white">{tech.name}</div>
                          <div className="text-sm text-light-gray">{tech.role}</div>
                        </div>
                        <span className={`text-xs px-2 py-1 rounded ${
                          tech.status === '已部署' ? 'bg-success-green/20 text-success-green' :
                          tech.status === '开发中' ? 'bg-esports-gold/20 text-esports-gold' :
                          'bg-light-gray/20 text-light-gray'
                        }`}>
                          {tech.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* AI层 */}
                <div className="card-esports">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <Brain className="w-6 h-6 mr-2 text-esports-purple" />
                    人工智能技术
                  </h3>
                  <div className="space-y-3">
                    {techStack.ai.map((tech, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-dark-gray/30 rounded-lg">
                        <div>
                          <div className="font-medium text-white">{tech.name}</div>
                          <div className="text-sm text-light-gray">{tech.role}</div>
                        </div>
                        <span className={`text-xs px-2 py-1 rounded ${
                          tech.status === '使用中' ? 'bg-success-green/20 text-success-green' :
                          tech.status === '集成中' ? 'bg-esports-gold/20 text-esports-gold' :
                          'bg-neon-cyan/20 text-neon-cyan'
                        }`}>
                          {tech.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* 后端服务 */}
                <div className="card-esports">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <Zap className="w-6 h-6 mr-2 text-esports-gold" />
                    后端服务
                  </h3>
                  <div className="space-y-3">
                    {techStack.backend.map((tech, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-dark-gray/30 rounded-lg">
                        <div>
                          <div className="font-medium text-white">{tech.name}</div>
                          <div className="text-sm text-light-gray">{tech.role}</div>
                        </div>
                        <span className="text-xs px-2 py-1 rounded bg-success-green/20 text-success-green">
                          {tech.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* 前端技术 */}
                <div className="card-esports">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <Gamepad2 className="w-6 h-6 mr-2 text-neon-cyan" />
                    前端技术
                  </h3>
                  <div className="space-y-3">
                    {techStack.frontend.map((tech, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-dark-gray/30 rounded-lg">
                        <div>
                          <div className="font-medium text-white">{tech.name}</div>
                          <div className="text-sm text-light-gray">{tech.role}</div>
                        </div>
                        <span className={`text-xs px-2 py-1 rounded ${
                          tech.status === '使用中' ? 'bg-success-green/20 text-success-green' :
                          'bg-esports-gold/20 text-esports-gold'
                        }`}>
                          {tech.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 代币经济 */}
          {activeSection === 'tokenomics' && (
            <div className="space-y-12">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                  MTP代币经济学
                </h2>
                <p className="text-xl text-light-gray max-w-3xl mx-auto">
                  精心设计的代币经济模型，确保生态系统的可持续发展
                </p>
              </div>
              
              {/* 代币总量 */}
              <div className="card-esports text-center">
                <h3 className="text-2xl font-semibold text-white mb-4">代币总供应量</h3>
                <div className="text-4xl font-bold text-gradient mb-2">
                  {tokenomics.totalSupply} MTP
                </div>
                <p className="text-light-gray">固定总量，无增发机制</p>
              </div>
              
              {/* 分配方案 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="card-esports">
                  <h3 className="text-xl font-semibold text-white mb-6">代币分配</h3>
                  <div className="space-y-4">
                    {tokenomics.distribution.map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`w-4 h-4 rounded ${item.color}`} />
                          <span className="text-white">{item.category}</span>
                        </div>
                        <div className="text-right">
                          <div className="text-white font-semibold">{item.percentage}%</div>
                          <div className="text-xs text-light-gray">{item.amount}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* 饼图可视化 */}
                  <div className="mt-6 relative">
                    <div className="w-48 h-48 mx-auto relative">
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                        {tokenomics.distribution.map((item, index) => {
                          const startAngle = tokenomics.distribution.slice(0, index).reduce((sum, prev) => sum + prev.percentage, 0) * 3.6
                          const endAngle = startAngle + item.percentage * 3.6
                          const largeArcFlag = item.percentage > 50 ? 1 : 0
                          const x1 = 50 + 40 * Math.cos((startAngle * Math.PI) / 180)
                          const y1 = 50 + 40 * Math.sin((startAngle * Math.PI) / 180)
                          const x2 = 50 + 40 * Math.cos((endAngle * Math.PI) / 180)
                          const y2 = 50 + 40 * Math.sin((endAngle * Math.PI) / 180)
                          
                          return (
                            <path
                              key={index}
                              d={`M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
                              className={item.color.replace('bg-', 'fill-')}
                              opacity="0.8"
                            />
                          )
                        })}
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* 代币用途 */}
                <div className="card-esports">
                  <h3 className="text-xl font-semibold text-white mb-6">代币用途</h3>
                  <div className="space-y-4">
                    {tokenomics.utilities.map((utility, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-neon-cyan rounded-full" />
                        <span className="text-light-gray">{utility}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* 代币价值驱动因素 */}
                  <div className="mt-8">
                    <h4 className="text-lg font-semibold text-white mb-4">价值驱动因素</h4>
                    <div className="grid grid-cols-1 gap-3">
                      <div className="bg-dark-gray/30 p-3 rounded-lg">
                        <div className="font-medium text-neon-cyan mb-1">生态增长</div>
                        <div className="text-sm text-light-gray">用户增长和交易量提升</div>
                      </div>
                      <div className="bg-dark-gray/30 p-3 rounded-lg">
                        <div className="font-medium text-esports-gold mb-1">质押收益</div>
                        <div className="text-sm text-light-gray">质押挖矿和流动性奖励</div>
                      </div>
                      <div className="bg-dark-gray/30 p-3 rounded-lg">
                        <div className="font-medium text-esports-purple mb-1">通缩机制</div>
                        <div className="text-sm text-light-gray">手续费销毁和回购机制</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default AboutPage