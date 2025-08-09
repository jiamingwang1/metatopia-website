'use client'

import { useState } from 'react'
import { Brain, Trophy, Gamepad2, Shield, Users, Zap, Globe, Coins } from 'lucide-react'

const GameFiPage = () => {
  const [activeTab, setActiveTab] = useState('ai')

  const tabs = [
    { id: 'ai', label: 'AI智能系统', icon: Brain },
    { id: 'esports', label: '电竞赛事', icon: Trophy },
    { id: 'nft', label: 'NFT资产', icon: Gamepad2 },
    { id: 'crosschain', label: '跨链生态', icon: Globe }
  ]

  const aiFeatures = [
    {
      title: '智能赛事匹配',
      description: '基于玩家技能等级、游戏偏好和历史表现的AI匹配算法',
      features: ['技能等级评估', '游戏风格分析', '延迟优化匹配', '公平性保障'],
      icon: Zap
    },
    {
      title: '玩家行为分析',
      description: '深度学习算法分析玩家行为模式，提供个性化游戏体验',
      features: ['游戏习惯分析', '偏好推荐', '进步轨迹追踪', '个性化奖励'],
      icon: Brain
    },
    {
      title: '链上反作弊',
      description: '区块链技术结合AI算法，构建透明可信的反作弊系统',
      features: ['行为异常检测', '数据完整性验证', '实时监控', '社区举报机制'],
      icon: Shield
    }
  ]

  const esportsData = {
    leagues: [
      { name: 'MetaTopia全球锦标赛', prize: '100万 MTP', participants: '10,000+' },
      { name: '季度精英联赛', prize: '50万 MTP', participants: '5,000+' },
      { name: '每月社区赛', prize: '10万 MTP', participants: '2,000+' },
      { name: '每周快速赛', prize: '2万 MTP', participants: '1,000+' }
    ],
    teams: [
      { name: 'Cyber Dragons', members: 5, wins: 28, rank: 1 },
      { name: 'Neon Warriors', members: 5, wins: 25, rank: 2 },
      { name: 'Quantum Guardians', members: 5, wins: 22, rank: 3 },
      { name: 'Digital Phoenixes', members: 5, wins: 20, rank: 4 }
    ]
  }

  const nftCategories = [
    {
      title: '角色与装备NFT',
      description: '独特的游戏角色和装备，具有不同的属性和稀有度',
      items: ['传奇角色', '史诗装备', '稀有武器', '特殊技能'],
      rarity: ['普通', '稀有', '史诗', '传奇', '神话']
    },
    {
      title: '皮肤与时装NFT',
      description: '个性化的角色外观和时装，展现玩家独特风格',
      items: ['限定皮肤', '节日时装', '联名款式', '定制外观'],
      rarity: ['基础', '高级', '豪华', '至尊', '收藏']
    },
    {
      title: '赛道与土地NFT',
      description: '虚拟世界中的土地和赛道，可用于建设和举办赛事',
      items: ['竞技场', '训练场', '商业区', '住宅区'],
      rarity: ['标准', '优质', '豪华', '顶级', '独一无二']
    }
  ]

  const crosschainSupport = [
    { name: 'Ethereum', status: '已支持', color: 'text-blue-400' },
    { name: 'Polygon', status: '已支持', color: 'text-purple-400' },
    { name: 'BNB Chain', status: '已支持', color: 'text-yellow-400' },
    { name: 'Arbitrum', status: '开发中', color: 'text-orange-400' },
    { name: 'Optimism', status: '计划中', color: 'text-red-400' },
    { name: 'Solana', status: '计划中', color: 'text-green-400' }
  ]

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 particles-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
            GameFi生态系统
          </h1>
          <p className="text-xl md:text-2xl text-light-gray mb-8 max-w-3xl mx-auto">
            AI驱动的智能游戏生态，融合电竞、NFT与DeFi的创新平台
          </p>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="card-esports text-center">
              <div className="text-2xl font-bold text-esports-gold mb-2">50+</div>
              <div className="text-sm text-light-gray">集成游戏</div>
            </div>
            <div className="card-esports text-center">
              <div className="text-2xl font-bold text-neon-cyan mb-2">100万+</div>
              <div className="text-sm text-light-gray">注册玩家</div>
            </div>
            <div className="card-esports text-center">
              <div className="text-2xl font-bold text-esports-purple mb-2">365天</div>
              <div className="text-sm text-light-gray">全年赛事</div>
            </div>
            <div className="card-esports text-center">
              <div className="text-2xl font-bold text-success-green mb-2">1000万+</div>
              <div className="text-sm text-light-gray">NFT交易量</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 bg-dark-gray/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-purple-cyan text-white shadow-lg'
                      : 'bg-dark-gray/50 text-light-gray hover:bg-esports-purple/20 hover:text-white'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* AI智能系统 */}
          {activeTab === 'ai' && (
            <div className="space-y-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  AI智能系统
                </h2>
                <p className="text-xl text-light-gray max-w-3xl mx-auto">
                  先进的人工智能技术为GameFi生态提供智能化服务
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {aiFeatures.map((feature, index) => {
                  const Icon = feature.icon
                  return (
                    <div key={index} className="card-esports group hover:scale-105 transition-transform duration-300">
                      <div className="w-12 h-12 bg-gradient-purple-cyan rounded-lg flex items-center justify-center mb-4 group-hover:animate-pulse">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-light-gray mb-4">
                        {feature.description}
                      </p>
                      <ul className="space-y-2">
                        {feature.features.map((item, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm">
                            <div className="w-2 h-2 bg-neon-cyan rounded-full" />
                            <span className="text-light-gray">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {/* 电竞赛事 */}
          {activeTab === 'esports' && (
            <div className="space-y-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  电竞赛事体系
                </h2>
                <p className="text-xl text-light-gray max-w-3xl mx-auto">
                  全球化的电竞赛事平台，为玩家提供公平竞技的舞台
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* 赛事列表 */}
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                    <Trophy className="w-6 h-6 mr-2 text-esports-gold" />
                    官方赛事
                  </h3>
                  <div className="space-y-4">
                    {esportsData.leagues.map((league, index) => (
                      <div key={index} className="card-esports">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-white">{league.name}</h4>
                          <span className="text-esports-gold font-bold">{league.prize}</span>
                        </div>
                        <div className="flex justify-between text-sm text-light-gray">
                          <span>参赛人数: {league.participants}</span>
                          <span className="text-neon-cyan">报名中</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* 战队排行 */}
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                    <Users className="w-6 h-6 mr-2 text-esports-purple" />
                    顶级战队
                  </h3>
                  <div className="space-y-4">
                    {esportsData.teams.map((team, index) => (
                      <div key={index} className="card-esports">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                              team.rank === 1 ? 'bg-esports-gold text-black' :
                              team.rank === 2 ? 'bg-gray-400 text-black' :
                              team.rank === 3 ? 'bg-orange-600 text-white' :
                              'bg-dark-gray text-white'
                            }`}>
                              {team.rank}
                            </div>
                            <div>
                              <div className="font-semibold text-white">{team.name}</div>
                              <div className="text-sm text-light-gray">{team.members} 成员</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-neon-cyan font-bold">{team.wins}</div>
                            <div className="text-xs text-light-gray">胜场</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* NFT资产 */}
          {activeTab === 'nft' && (
            <div className="space-y-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  NFT资产系统
                </h2>
                <p className="text-xl text-light-gray max-w-3xl mx-auto">
                  丰富多样的NFT资产，构建完整的虚拟经济生态
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {nftCategories.map((category, index) => (
                  <div key={index} className="card-esports">
                    <h3 className="text-xl font-semibold text-white mb-4">
                      {category.title}
                    </h3>
                    <p className="text-light-gray mb-6">
                      {category.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-esports-gold mb-3">资产类型</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {category.items.map((item, idx) => (
                          <div key={idx} className="bg-dark-gray/50 p-2 rounded text-sm text-center text-light-gray">
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-neon-cyan mb-3">稀有度等级</h4>
                      <div className="space-y-1">
                        {category.rarity.map((level, idx) => (
                          <div key={idx} className="flex justify-between items-center text-sm">
                            <span className="text-light-gray">{level}</span>
                            <div className={`w-16 h-2 rounded-full ${
                              idx === 0 ? 'bg-gray-600' :
                              idx === 1 ? 'bg-green-500' :
                              idx === 2 ? 'bg-blue-500' :
                              idx === 3 ? 'bg-purple-500' :
                              'bg-gradient-to-r from-yellow-400 to-orange-500'
                            }`} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* NFT市场统计 */}
              <div className="card-esports">
                <h3 className="text-2xl font-semibold text-white mb-6 text-center">
                  NFT市场实时数据
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-esports-gold mb-2">12,345</div>
                    <div className="text-sm text-light-gray">总NFT数量</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-neon-cyan mb-2">8,901</div>
                    <div className="text-sm text-light-gray">活跃交易</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-esports-purple mb-2">567</div>
                    <div className="text-sm text-light-gray">平均价格(MTP)</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-success-green mb-2">234</div>
                    <div className="text-sm text-light-gray">质押收益率(%)</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 跨链生态 */}
          {activeTab === 'crosschain' && (
            <div className="space-y-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  跨链生态系统
                </h2>
                <p className="text-xl text-light-gray max-w-3xl mx-auto">
                  多链兼容的基础设施，实现资产自由流转和统一身份管理
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* 支持的区块链 */}
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                    <Globe className="w-6 h-6 mr-2 text-neon-cyan" />
                    支持的区块链
                  </h3>
                  <div className="space-y-4">
                    {crosschainSupport.map((chain, index) => (
                      <div key={index} className="card-esports">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-purple-cyan rounded-lg flex items-center justify-center">
                              <span className="text-white font-bold text-sm">
                                {chain.name.charAt(0)}
                              </span>
                            </div>
                            <span className="font-semibold text-white">{chain.name}</span>
                          </div>
                          <span className={`text-sm font-medium ${chain.color}`}>
                            {chain.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* 跨链功能 */}
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                    <Coins className="w-6 h-6 mr-2 text-esports-gold" />
                    跨链功能
                  </h3>
                  <div className="space-y-6">
                    <div className="card-esports">
                      <h4 className="font-semibold text-white mb-2">资产桥接</h4>
                      <p className="text-light-gray text-sm mb-3">
                        安全快速的跨链资产转移，支持MTP代币和NFT资产
                      </p>
                      <div className="flex justify-between text-sm">
                        <span className="text-light-gray">手续费</span>
                        <span className="text-neon-cyan">0.1%</span>
                      </div>
                    </div>
                    
                    <div className="card-esports">
                      <h4 className="font-semibold text-white mb-2">统一身份</h4>
                      <p className="text-light-gray text-sm mb-3">
                        跨链身份认证系统，一个账户管理所有链上资产
                      </p>
                      <div className="flex justify-between text-sm">
                        <span className="text-light-gray">支持链数</span>
                        <span className="text-esports-gold">6+</span>
                      </div>
                    </div>
                    
                    <div className="card-esports">
                      <h4 className="font-semibold text-white mb-2">流动性挖矿</h4>
                      <p className="text-light-gray text-sm mb-3">
                        提供跨链流动性，获得MTP代币奖励
                      </p>
                      <div className="flex justify-between text-sm">
                        <span className="text-light-gray">年化收益</span>
                        <span className="text-success-green">15-25%</span>
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

export default GameFiPage