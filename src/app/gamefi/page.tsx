'use client'

import { useState, useEffect } from 'react'
import { Play, Trophy, Zap, Users, Star, Coins, Shield, Globe, ArrowRight, TrendingUp } from 'lucide-react'

const GameFiPage = () => {
  const [mounted, setMounted] = useState(false)
  const [activeTab, setActiveTab] = useState('ai-system')

  useEffect(() => {
    setMounted(true)
  }, [])

  const aiFeatures = [
    {
      icon: Zap,
      title: '智能匹配算法',
      description: '基于深度学习的玩家匹配系统，分析技能水平、游戏风格、历史表现等多维度数据，为每位玩家匹配最合适的对手。',
      benefits: ['匹配准确率95%+', '游戏体验提升40%', '公平竞技保障', '实时算法优化']
    },
    {
      icon: Shield,
      title: '反作弊检测',
      description: '利用AI行为分析技术，实时监控玩家操作模式，识别异常行为和作弊行为，确保竞技环境的公平性。',
      benefits: ['99.9%检测准确率', '毫秒级响应', '自动处罚机制', '持续学习优化']
    },
    {
      icon: TrendingUp,
      title: '技能评估系统',
      description: '多维度技能评估模型，准确评估玩家的游戏技能水平，为匹配和排名提供科学依据。',
      benefits: ['多维度评估', '动态调整', '技能成长追踪', '个性化建议']
    },
    {
      icon: Users,
      title: '团队组合推荐',
      description: 'AI分析玩家特长和配合风格，智能推荐最佳团队组合，提升团队协作效果。',
      benefits: ['配合度分析', '角色匹配', '战术推荐', '团队优化']
    }
  ]

  const esportsSystem = [
    {
      level: '日常匹配',
      description: '随时随地的快速匹配，享受公平竞技',
      rewards: '经验值、代币奖励',
      participants: '所有玩家',
      frequency: '24/7'
    },
    {
      level: '周赛锦标',
      description: '每周举办的主题赛事，不同难度等级',
      rewards: 'NFT奖励、排名积分',
      participants: '注册玩家',
      frequency: '每周'
    },
    {
      level: '月度联赛',
      description: '高水平的月度竞技联赛，顶尖玩家对决',
      rewards: '丰厚奖金、专属NFT',
      participants: '排名前1000',
      frequency: '每月'
    },
    {
      level: '季度杯赛',
      description: '跨游戏的综合性赛事，全能选手的舞台',
      rewards: '巨额奖金、荣誉称号',
      participants: '邀请制',
      frequency: '每季度'
    },
    {
      level: '年度总决赛',
      description: 'METATOPIA最高级别赛事，全球瞩目',
      rewards: '百万奖金、传奇地位',
      participants: '全球前100',
      frequency: '每年'
    }
  ]

  const nftAssets = [
    {
      type: '角色NFT',
      icon: '🎮',
      description: '独特的游戏角色，拥有专属外观、技能和成长属性',
      features: ['独特外观设计', '专属技能树', '成长记录链上存储', '跨游戏使用'],
      rarity: ['普通', '稀有', '史诗', '传说', '神话'],
      utility: '游戏内使用、展示收藏、交易流通'
    },
    {
      type: '装备NFT',
      icon: '⚔️',
      description: '各种游戏装备和道具，提升角色能力和战斗力',
      features: ['属性加成', '视觉效果', '升级强化', '套装组合'],
      rarity: ['白色', '绿色', '蓝色', '紫色', '橙色', '红色'],
      utility: '装备使用、属性提升、合成升级'
    },
    {
      type: '土地NFT',
      icon: '🏰',
      description: '虚拟世界中的土地资产，可建设和经营',
      features: ['建筑权限', '资源产出', '社交空间', '投资价值'],
      rarity: ['郊区', '城镇', '城市', '核心区', '特殊地段'],
      utility: '建设经营、资源收益、社交活动'
    },
    {
      type: '收藏品NFT',
      icon: '💎',
      description: '限量发行的纪念品和艺术品，具有收藏价值',
      features: ['限量发行', '艺术价值', '历史意义', '社区地位'],
      rarity: ['限量1000', '限量500', '限量100', '限量10', '唯一'],
      utility: '收藏展示、身份象征、投资增值'
    }
  ]

  const crossChainEcosystem = [
    {
      chain: 'Ethereum',
      logo: '🔷',
      features: ['主要NFT交易', '核心智能合约', 'DeFi集成'],
      advantages: '安全性高、生态成熟、流动性好'
    },
    {
      chain: 'BSC',
      logo: '🟡',
      features: ['快速交易', '低手续费', '游戏优化'],
      advantages: '交易成本低、速度快、游戏友好'
    },
    {
      chain: 'Polygon',
      logo: '🟣',
      features: ['Layer2扩容', '高性能', '环保节能'],
      advantages: '扩展性强、环保、开发友好'
    },
    {
      chain: 'Arbitrum',
      logo: '🔵',
      features: ['以太坊兼容', '低费用', '高吞吐'],
      advantages: '兼容性好、成本低、性能优'
    }
  ]

  const ecosystemGames = [
    {
      name: 'MetaBattle Arena',
      genre: 'MOBA竞技',
      status: '已上线',
      players: '50,000+',
      description: '5v5团队竞技游戏，融合传统MOBA与区块链经济',
      features: ['AI智能匹配', 'NFT英雄', '代币奖励', '赛事体系']
    },
    {
      name: 'Crypto Racing',
      genre: '竞速游戏',
      status: '测试中',
      players: '20,000+',
      description: '高速竞技赛车游戏，拥有和交易独特的赛车NFT',
      features: ['赛车NFT', '改装系统', '锦标赛', '车队模式']
    },
    {
      name: 'Strategy Empire',
      genre: '策略游戏',
      status: '开发中',
      players: '预注册中',
      description: '大型多人在线策略游戏，建设帝国征服世界',
      features: ['土地NFT', '资源管理', '联盟战争', 'DAO治理']
    },
    {
      name: 'Card Masters',
      genre: '卡牌游戏',
      status: '即将上线',
      players: '预注册中',
      description: '策略卡牌对战游戏，收集和交易稀有卡牌',
      features: ['卡牌NFT', '策略对战', '卡包开启', '锦标赛']
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
            <span className="text-gradient">GameFi</span> 生态系统
          </h1>
          <p className="text-xl md:text-2xl text-light-gray mb-8 max-w-4xl mx-auto">
            AI驱动的智能游戏生态，融合电竞、NFT与DeFi，创造全新的游戏经济模式
          </p>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 bg-dark-gray/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { id: 'ai-system', label: 'AI智能系统', icon: Zap },
              { id: 'esports', label: '电竞赛事', icon: Trophy },
              { id: 'nft-assets', label: 'NFT资产', icon: Star },
              { id: 'cross-chain', label: '跨链生态', icon: Globe }
            ].map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-esports-purple text-white shadow-lg shadow-esports-purple/30'
                      : 'bg-dark-gray/50 text-light-gray hover:text-white hover:bg-dark-gray/70'
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

      {/* AI System Tab */}
      {activeTab === 'ai-system' && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                AI智能系统
              </h2>
              <p className="text-xl text-light-gray max-w-3xl mx-auto">
                先进的人工智能技术，为游戏体验提供智能化支持
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {aiFeatures.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="card-esports group hover:scale-105 transition-transform duration-300">
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
                      <h4 className="text-sm font-semibold text-esports-gold mb-3">核心优势</h4>
                      {feature.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <div className="w-2 h-2 rounded-full bg-neon-cyan mr-3" />
                          <span className="text-light-gray">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Esports Tab */}
      {activeTab === 'esports' && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                电竞赛事体系
              </h2>
              <p className="text-xl text-light-gray max-w-3xl mx-auto">
                多层级赛事体系，为不同水平的玩家提供展示舞台
              </p>
            </div>
            
            <div className="space-y-6">
              {esportsSystem.map((level, index) => (
                <div key={index} className="card-esports">
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
                    <div className="md:col-span-2">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {level.level}
                      </h3>
                      <p className="text-light-gray">
                        {level.description}
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-sm text-light-gray mb-1">奖励机制</div>
                      <div className="text-esports-gold font-semibold">{level.rewards}</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-sm text-light-gray mb-1">参与条件</div>
                      <div className="text-neon-cyan font-semibold">{level.participants}</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-sm text-light-gray mb-1">举办频率</div>
                      <div className="text-esports-purple font-semibold">{level.frequency}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <div className="card-esports inline-block">
                <h3 className="text-xl font-semibold text-white mb-4">总奖金池</h3>
                <div className="text-4xl font-bold text-gradient mb-2">$10,000,000</div>
                <div className="text-light-gray">年度总奖金池，持续增长中</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* NFT Assets Tab */}
      {activeTab === 'nft-assets' && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                NFT资产系统
              </h2>
              <p className="text-xl text-light-gray max-w-3xl mx-auto">
                多样化的NFT资产类型，真正的数字资产所有权
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {nftAssets.map((asset, index) => (
                <div key={index} className="card-esports">
                  <div className="flex items-center mb-6">
                    <div className="text-4xl mr-4">{asset.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{asset.type}</h3>
                      <p className="text-light-gray text-sm">{asset.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-esports-gold mb-2">核心特性</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {asset.features.map((feature, idx) => (
                          <div key={idx} className="text-xs text-light-gray bg-dark-gray/30 rounded px-2 py-1">
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-neon-cyan mb-2">稀有度等级</h4>
                      <div className="flex flex-wrap gap-1">
                        {asset.rarity.map((rarity, idx) => (
                          <span key={idx} className="text-xs bg-esports-purple/20 text-esports-purple rounded px-2 py-1">
                            {rarity}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-success-green mb-2">实用价值</h4>
                      <p className="text-xs text-light-gray">{asset.utility}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Cross-chain Tab */}
      {activeTab === 'cross-chain' && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                跨链生态系统
              </h2>
              <p className="text-xl text-light-gray max-w-3xl mx-auto">
                支持多条主流区块链，实现真正的跨链资产流通
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {crossChainEcosystem.map((chain, index) => (
                <div key={index} className="card-esports text-center group hover:scale-105 transition-transform duration-300">
                  <div className="text-6xl mb-4">{chain.logo}</div>
                  <h3 className="text-lg font-semibold text-white mb-4">{chain.chain}</h3>
                  
                  <div className="space-y-3 mb-4">
                    {chain.features.map((feature, idx) => (
                      <div key={idx} className="text-sm text-light-gray bg-dark-gray/30 rounded px-3 py-1">
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <p className="text-xs text-neon-cyan">{chain.advantages}</p>
                </div>
              ))}
            </div>
            
            <div className="card-esports text-center">
              <h3 className="text-xl font-semibold text-white mb-4">跨链桥接技术</h3>
              <p className="text-light-gray mb-6">
                采用先进的跨链桥接技术，确保资产在不同区块链间安全、快速转移
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-success-green mb-2">99.9%</div>
                  <div className="text-sm text-light-gray">安全性保障</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-esports-gold mb-2">&lt;5min</div>
                  <div className="text-sm text-light-gray">跨链转移时间</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-neon-cyan mb-2">$0.1</div>
                  <div className="text-sm text-light-gray">平均手续费</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Ecosystem Games */}
      <section className="py-20 bg-dark-gray/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              生态游戏
            </h2>
            <p className="text-xl text-light-gray">
              多样化的游戏类型，满足不同玩家的需求
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ecosystemGames.map((game, index) => (
              <div key={index} className="card-esports group hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{game.name}</h3>
                    <p className="text-esports-gold text-sm">{game.genre}</p>
                  </div>
                  <div className="text-right">
                    <div className={`text-sm px-3 py-1 rounded-full ${
                      game.status === '已上线' ? 'bg-success-green/20 text-success-green' :
                      game.status === '测试中' ? 'bg-esports-gold/20 text-esports-gold' :
                      'bg-neon-cyan/20 text-neon-cyan'
                    }`}>
                      {game.status}
                    </div>
                    <div className="text-light-gray text-xs mt-1">{game.players}</div>
                  </div>
                </div>
                
                <p className="text-light-gray mb-6">{game.description}</p>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-white">核心特性</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {game.features.map((feature, idx) => (
                      <div key={idx} className="text-xs text-light-gray bg-dark-gray/30 rounded px-2 py-1">
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-6">
                  <button className="w-full btn-neon group">
                    {game.status === '已上线' ? '立即游戏' : 
                     game.status === '测试中' ? '申请测试' : '预约游戏'}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-esports-purple/20 to-neon-cyan/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            开启你的GameFi之旅
          </h2>
          <p className="text-xl text-light-gray mb-8">
            加入METATOPIA生态，体验AI驱动的下一代游戏经济
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-neon">
              <Play className="w-5 h-5 mr-2" />
              开始游戏
            </button>
            <button className="px-6 py-3 border border-light-gray/30 rounded-lg hover:border-neon-cyan transition-colors duration-300">
              了解更多
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default GameFiPage