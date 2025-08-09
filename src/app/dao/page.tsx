'use client'

import { useState, useEffect } from 'react'
import { Vote, Users, TrendingUp, Clock, CheckCircle, XCircle, Calendar, Target, ArrowRight, Plus } from 'lucide-react'

const DAOPage = () => {
  const [mounted, setMounted] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedProposal, setSelectedProposal] = useState(0)

  useEffect(() => {
    setMounted(true)
  }, [])

  const governanceStats = {
    totalProposals: 156,
    activeProposals: 8,
    totalVoters: 12450,
    treasuryValue: '$2.5M',
    votingPower: '85.6%',
    passRate: '73.2%'
  }

  const governanceFeatures = [
    {
      icon: Vote,
      title: '民主投票',
      description: '每个MTP持有者都拥有投票权，参与重要决策的制定',
      benefits: ['一人一票制', '透明公开', '链上记录', '实时统计']
    },
    {
      icon: Users,
      title: '社区治理',
      description: '由社区成员共同管理和发展METATOPIA生态系统',
      benefits: ['去中心化', '集体智慧', '利益共享', '责任共担']
    },
    {
      icon: TrendingUp,
      title: '提案系统',
      description: '任何持币者都可以提出改进建议和发展方案',
      benefits: ['开放提案', '专业评估', '社区讨论', '投票决策']
    },
    {
      icon: Target,
      title: '执行监督',
      description: '确保通过的提案得到有效执行和监督',
      benefits: ['执行追踪', '进度报告', '结果评估', '责任追究']
    }
  ]

  const proposals = [
    {
      id: 'MTP-001',
      title: '增加游戏奖励池分配比例',
      category: '经济模型',
      status: 'active',
      endTime: '2025-04-15',
      description: '提议将游戏奖励池的分配比例从当前的30%提升至40%，以激励更多玩家参与游戏生态。',
      proposer: '0x1234...5678',
      votesFor: 8520,
      votesAgainst: 2340,
      totalVotes: 10860,
      quorum: 15000,
      summary: '通过增加游戏奖励池分配，提升玩家参与积极性，促进生态发展。',
      benefits: [
        '提高玩家收益，增强游戏吸引力',
        '促进更多用户参与游戏生态',
        '增加代币流通和使用场景',
        '提升整体生态活跃度'
      ],
      risks: [
        '可能影响其他资金池的分配',
        '需要调整现有经济模型',
        '短期内可能增加代币通胀压力'
      ],
      timeline: [
        { date: '2025-03-01', event: '提案提交', status: 'completed' },
        { date: '2025-03-08', event: '社区讨论期', status: 'completed' },
        { date: '2025-03-15', event: '投票开始', status: 'completed' },
        { date: '2025-04-15', event: '投票结束', status: 'upcoming' },
        { date: '2025-04-20', event: '结果公布', status: 'upcoming' }
      ]
    },
    {
      id: 'MTP-002',
      title: '新增跨链桥接功能',
      category: '技术升级',
      status: 'active',
      endTime: '2025-04-20',
      description: '提议开发并部署跨链桥接功能，支持与Polygon和Arbitrum网络的资产互通。',
      proposer: '0xabcd...efgh',
      votesFor: 6780,
      votesAgainst: 1230,
      totalVotes: 8010,
      quorum: 15000,
      summary: '扩展跨链功能，提升用户体验和生态互操作性。',
      benefits: [
        '降低交易成本，提升用户体验',
        '扩大用户群体和市场覆盖',
        '增强生态系统的互操作性',
        '提供更多DeFi集成机会'
      ],
      risks: [
        '技术开发复杂度较高',
        '需要额外的安全审计',
        '可能存在跨链安全风险'
      ],
      timeline: [
        { date: '2025-03-05', event: '提案提交', status: 'completed' },
        { date: '2025-03-12', event: '技术评估', status: 'completed' },
        { date: '2025-03-20', event: '投票开始', status: 'completed' },
        { date: '2025-04-20', event: '投票结束', status: 'upcoming' },
        { date: '2025-05-01', event: '开发启动', status: 'upcoming' }
      ]
    },
    {
      id: 'MTP-003',
      title: '建立社区开发者基金',
      category: '生态发展',
      status: 'passed',
      endTime: '2025-03-30',
      description: '设立专门的开发者基金，支持第三方开发者为METATOPIA生态贡献代码和应用。',
      proposer: '0x9876...5432',
      votesFor: 12340,
      votesAgainst: 2100,
      totalVotes: 14440,
      quorum: 15000,
      summary: '通过设立开发者基金，激励社区贡献，加速生态发展。',
      benefits: [
        '吸引更多开发者参与生态建设',
        '加速新功能和应用的开发',
        '提升生态系统的创新能力',
        '建立可持续的开发者激励机制'
      ],
      risks: [
        '需要建立完善的评估机制',
        '资金使用需要透明监督',
        '可能存在资源分配争议'
      ],
      timeline: [
        { date: '2025-02-15', event: '提案提交', status: 'completed' },
        { date: '2025-02-22', event: '社区讨论', status: 'completed' },
        { date: '2025-03-01', event: '投票开始', status: 'completed' },
        { date: '2025-03-30', event: '投票通过', status: 'completed' },
        { date: '2025-04-10', event: '基金启动', status: 'upcoming' }
      ]
    }
  ]

  const historyProposals = [
    {
      id: 'MTP-H001',
      title: '代币经济模型优化',
      status: 'passed',
      date: '2025-02-28',
      votes: { for: 15680, against: 3420 }
    },
    {
      id: 'MTP-H002',
      title: '游戏反作弊系统升级',
      status: 'passed',
      date: '2025-02-15',
      votes: { for: 18920, against: 1580 }
    },
    {
      id: 'MTP-H003',
      title: '增加新游戏类型支持',
      status: 'rejected',
      date: '2025-01-30',
      votes: { for: 7890, against: 12110 }
    },
    {
      id: 'MTP-H004',
      title: '社区治理规则修订',
      status: 'passed',
      date: '2025-01-15',
      votes: { for: 16540, against: 2460 }
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-esports-gold'
      case 'passed': return 'text-success-green'
      case 'rejected': return 'text-red-400'
      case 'pending': return 'text-neon-cyan'
      default: return 'text-light-gray'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return <Clock className="w-4 h-4" />
      case 'passed': return <CheckCircle className="w-4 h-4" />
      case 'rejected': return <XCircle className="w-4 h-4" />
      case 'pending': return <Calendar className="w-4 h-4" />
      default: return <Clock className="w-4 h-4" />
    }
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
            <span className="text-gradient">DAO</span> 治理
          </h1>
          <p className="text-xl md:text-2xl text-light-gray mb-8 max-w-4xl mx-auto">
            去中心化自治组织，由社区共同决策METATOPIA的未来发展方向
          </p>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 bg-dark-gray/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { id: 'overview', label: '治理概览', icon: TrendingUp },
              { id: 'proposals', label: '提案列表', icon: Vote },
              { id: 'history', label: '历史记录', icon: Calendar }
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

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Governance Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
              <div className="card-esports text-center">
                <div className="text-2xl font-bold text-esports-gold mb-2">{governanceStats.totalProposals}</div>
                <div className="text-sm text-light-gray">总提案数</div>
              </div>
              <div className="card-esports text-center">
                <div className="text-2xl font-bold text-neon-cyan mb-2">{governanceStats.activeProposals}</div>
                <div className="text-sm text-light-gray">活跃提案</div>
              </div>
              <div className="card-esports text-center">
                <div className="text-2xl font-bold text-success-green mb-2">{governanceStats.totalVoters.toLocaleString()}</div>
                <div className="text-sm text-light-gray">参与投票者</div>
              </div>
              <div className="card-esports text-center">
                <div className="text-2xl font-bold text-esports-purple mb-2">{governanceStats.treasuryValue}</div>
                <div className="text-sm text-light-gray">国库价值</div>
              </div>
              <div className="card-esports text-center">
                <div className="text-2xl font-bold text-gradient mb-2">{governanceStats.votingPower}</div>
                <div className="text-sm text-light-gray">投票参与率</div>
              </div>
              <div className="card-esports text-center">
                <div className="text-2xl font-bold text-esports-gold mb-2">{governanceStats.passRate}</div>
                <div className="text-sm text-light-gray">提案通过率</div>
              </div>
            </div>

            {/* Governance Features */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                治理特性
              </h2>
              <p className="text-xl text-light-gray max-w-3xl mx-auto">
                完善的DAO治理机制，确保社区的声音得到充分体现
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {governanceFeatures.map((feature, index) => {
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

      {/* Proposals Tab */}
      {activeTab === 'proposals' && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-white">活跃提案</h2>
              <button className="btn-neon">
                <Plus className="w-5 h-5 mr-2" />
                创建提案
              </button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Proposals List */}
              <div className="lg:col-span-1 space-y-4">
                {proposals.map((proposal, index) => (
                  <div 
                    key={proposal.id}
                    className={`card-esports cursor-pointer transition-all duration-300 ${
                      selectedProposal === index ? 'border-esports-purple shadow-lg shadow-esports-purple/20' : 'hover:border-neon-cyan/50'
                    }`}
                    onClick={() => setSelectedProposal(index)}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-esports-gold">{proposal.id}</span>
                      <div className={`flex items-center space-x-1 text-sm ${getStatusColor(proposal.status)}`}>
                        {getStatusIcon(proposal.status)}
                        <span className="capitalize">{proposal.status}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-white font-semibold mb-2 line-clamp-2">
                      {proposal.title}
                    </h3>
                    
                    <div className="flex items-center justify-between text-sm text-light-gray mb-3">
                      <span>{proposal.category}</span>
                      <span>截止: {proposal.endTime}</span>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-light-gray">支持票数</span>
                        <span className="text-success-green">{proposal.votesFor.toLocaleString()}</span>
                      </div>
                      <div className="w-full bg-dark-gray rounded-full h-2">
                        <div 
                          className="h-2 rounded-full bg-success-green transition-all duration-500"
                          style={{ width: `${(proposal.votesFor / proposal.quorum) * 100}%` }}
                        />
                      </div>
                      <div className="text-xs text-light-gray text-center">
                        {proposal.totalVotes.toLocaleString()} / {proposal.quorum.toLocaleString()} 票 (需要达到法定人数)
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Proposal Details */}
              <div className="lg:col-span-2">
                <div className="card-esports">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {proposals[selectedProposal].title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-light-gray">
                        <span>{proposals[selectedProposal].id}</span>
                        <span>•</span>
                        <span>{proposals[selectedProposal].category}</span>
                        <span>•</span>
                        <span>提案者: {proposals[selectedProposal].proposer}</span>
                      </div>
                    </div>
                    <div className={`flex items-center space-x-2 ${getStatusColor(proposals[selectedProposal].status)}`}>
                      {getStatusIcon(proposals[selectedProposal].status)}
                      <span className="capitalize font-semibold">{proposals[selectedProposal].status}</span>
                    </div>
                  </div>
                  
                  {/* Proposal Summary */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-white mb-3">提案摘要</h4>
                    <p className="text-light-gray leading-relaxed mb-4">
                      {proposals[selectedProposal].description}
                    </p>
                    <div className="bg-esports-purple/10 border border-esports-purple/30 rounded-lg p-4">
                      <p className="text-esports-purple font-medium">
                        {proposals[selectedProposal].summary}
                      </p>
                    </div>
                  </div>
                  
                  {/* Benefits and Risks */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="text-lg font-semibold text-success-green mb-3">预期收益</h4>
                      <div className="space-y-2">
                        {proposals[selectedProposal].benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start text-sm">
                            <div className="w-2 h-2 rounded-full bg-success-green mr-3 mt-2 flex-shrink-0" />
                            <span className="text-light-gray">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-red-400 mb-3">潜在风险</h4>
                      <div className="space-y-2">
                        {proposals[selectedProposal].risks.map((risk, idx) => (
                          <div key={idx} className="flex items-start text-sm">
                            <div className="w-2 h-2 rounded-full bg-red-400 mr-3 mt-2 flex-shrink-0" />
                            <span className="text-light-gray">{risk}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-white mb-4">时间线</h4>
                    <div className="space-y-4">
                      {proposals[selectedProposal].timeline.map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-4">
                          <div className={`w-4 h-4 rounded-full ${
                            item.status === 'completed' ? 'bg-success-green' :
                            item.status === 'current' ? 'bg-esports-gold' :
                            'bg-light-gray/30'
                          }`} />
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <span className="text-white font-medium">{item.event}</span>
                              <span className="text-sm text-light-gray">{item.date}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Voting Section */}
                  {proposals[selectedProposal].status === 'active' && (
                    <div className="border-t border-light-gray/20 pt-6">
                      <h4 className="text-lg font-semibold text-white mb-4">参与投票</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <button className="btn-neon">
                          <CheckCircle className="w-5 h-5 mr-2" />
                          支持提案
                        </button>
                        <button className="px-6 py-3 border border-red-400 text-red-400 rounded-lg hover:bg-red-400/10 transition-colors duration-300">
                          <XCircle className="w-5 h-5 mr-2" />
                          反对提案
                        </button>
                      </div>
                      <p className="text-sm text-light-gray mt-4">
                        投票权重基于您持有的MTP代币数量。投票截止时间：{proposals[selectedProposal].endTime}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* History Tab */}
      {activeTab === 'history' && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">历史提案</h2>
            
            <div className="space-y-4">
              {historyProposals.map((proposal, index) => (
                <div key={proposal.id} className="card-esports">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-2">
                        <span className="text-esports-gold font-semibold">{proposal.id}</span>
                        <div className={`flex items-center space-x-1 ${getStatusColor(proposal.status)}`}>
                          {getStatusIcon(proposal.status)}
                          <span className="capitalize text-sm">{proposal.status}</span>
                        </div>
                        <span className="text-light-gray text-sm">{proposal.date}</span>
                      </div>
                      <h3 className="text-white font-semibold mb-2">{proposal.title}</h3>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-sm text-light-gray mb-1">投票结果</div>
                      <div className="flex items-center space-x-4">
                        <div className="text-success-green">
                          <span className="font-semibold">{proposal.votes.for.toLocaleString()}</span>
                          <span className="text-xs ml-1">支持</span>
                        </div>
                        <div className="text-red-400">
                          <span className="font-semibold">{proposal.votes.against.toLocaleString()}</span>
                          <span className="text-xs ml-1">反对</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-esports-purple/20 to-neon-cyan/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            参与社区治理
          </h2>
          <p className="text-xl text-light-gray mb-8">
            持有MTP代币，参与METATOPIA的重要决策，共同塑造生态未来
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-neon">
              <Vote className="w-5 h-5 mr-2" />
              开始投票
            </button>
            <button className="px-6 py-3 border border-light-gray/30 rounded-lg hover:border-neon-cyan transition-colors duration-300">
              了解治理规则
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DAOPage