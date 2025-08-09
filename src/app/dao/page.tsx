'use client'

import { useState } from 'react'
import { Vote, Users, TrendingUp, Shield, Clock, CheckCircle, XCircle, AlertCircle } from 'lucide-react'

const DAOPage = () => {
  const [activeProposal, setActiveProposal] = useState(null)
  const [userVote, setUserVote] = useState({})

  const proposals = [
    {
      id: 1,
      title: '提升AI匹配算法精度',
      description: '升级现有的AI匹配系统，提高玩家匹配的准确性和公平性',
      category: '技术升级',
      status: '投票中',
      endTime: '2024-02-15',
      votes: {
        for: 15420,
        against: 3280,
        abstain: 1200
      },
      totalVotes: 19900,
      quorum: 20000,
      proposer: '0x1234...5678',
      details: {
        budget: '50万 MTP',
        timeline: '3个月',
        impact: '提升匹配准确率至95%'
      }
    },
    {
      id: 2,
      title: '新增Solana链支持',
      description: '扩展跨链功能，支持Solana生态系统',
      category: '生态扩展',
      status: '投票中',
      endTime: '2024-02-20',
      votes: {
        for: 12800,
        against: 5600,
        abstain: 800
      },
      totalVotes: 19200,
      quorum: 20000,
      proposer: '0xabcd...efgh',
      details: {
        budget: '80万 MTP',
        timeline: '4个月',
        impact: '支持Solana NFT和DeFi'
      }
    },
    {
      id: 3,
      title: '社区奖励池分配方案',
      description: '调整社区奖励池的分配机制，增加长期持有者奖励',
      category: '经济模型',
      status: '已通过',
      endTime: '2024-01-30',
      votes: {
        for: 25600,
        against: 2400,
        abstain: 1000
      },
      totalVotes: 29000,
      quorum: 20000,
      proposer: '0x9876...5432',
      details: {
        budget: '200万 MTP',
        timeline: '立即执行',
        impact: '提升代币持有激励'
      }
    },
    {
      id: 4,
      title: '引入新游戏类型',
      description: '在平台上新增MOBA和FPS游戏类型支持',
      category: '产品功能',
      status: '讨论中',
      endTime: '2024-02-25',
      votes: {
        for: 0,
        against: 0,
        abstain: 0
      },
      totalVotes: 0,
      quorum: 20000,
      proposer: '0xdef0...1234',
      details: {
        budget: '120万 MTP',
        timeline: '6个月',
        impact: '扩大用户群体'
      }
    }
  ]

  const governanceStats = {
    totalMembers: 45678,
    activeVoters: 23456,
    totalProposals: 156,
    passedProposals: 89,
    treasuryBalance: '12.5M MTP',
    votingPower: {
      whales: 35, // >100k MTP
      dolphins: 25, // 10k-100k MTP
      fish: 40 // <10k MTP
    }
  }

  const votingHistory = [
    { date: '2024-01-30', proposal: '社区奖励池分配方案', result: '通过', participation: '87%' },
    { date: '2024-01-15', proposal: '平台手续费调整', result: '通过', participation: '82%' },
    { date: '2023-12-20', proposal: '新增游戏合作伙伴', result: '通过', participation: '79%' },
    { date: '2023-12-05', proposal: '代币销毁机制', result: '否决', participation: '91%' },
    { date: '2023-11-18', proposal: 'NFT质押奖励提升', result: '通过', participation: '85%' }
  ]

  const handleVote = (proposalId, voteType) => {
    setUserVote(prev => ({ ...prev, [proposalId]: voteType }))
  }

  const getStatusColor = (status) => {
    switch (status) {
      case '投票中': return 'text-neon-cyan'
      case '已通过': return 'text-success-green'
      case '已否决': return 'text-error-red'
      case '讨论中': return 'text-esports-gold'
      default: return 'text-light-gray'
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case '投票中': return Clock
      case '已通过': return CheckCircle
      case '已否决': return XCircle
      case '讨论中': return AlertCircle
      default: return Clock
    }
  }

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 particles-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
            DAO社区治理
          </h1>
          <p className="text-xl md:text-2xl text-light-gray mb-8 max-w-3xl mx-auto">
            去中心化自治组织，让每个社区成员都能参与平台的重要决策
          </p>
          
          {/* Governance Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="card-esports text-center">
              <div className="text-2xl font-bold text-esports-gold mb-2">{governanceStats.totalMembers.toLocaleString()}</div>
              <div className="text-sm text-light-gray">DAO成员</div>
            </div>
            <div className="card-esports text-center">
              <div className="text-2xl font-bold text-neon-cyan mb-2">{governanceStats.activeVoters.toLocaleString()}</div>
              <div className="text-sm text-light-gray">活跃投票者</div>
            </div>
            <div className="card-esports text-center">
              <div className="text-2xl font-bold text-esports-purple mb-2">{governanceStats.totalProposals}</div>
              <div className="text-sm text-light-gray">总提案数</div>
            </div>
            <div className="card-esports text-center">
              <div className="text-2xl font-bold text-success-green mb-2">{governanceStats.treasuryBalance}</div>
              <div className="text-sm text-light-gray">国库余额</div>
            </div>
          </div>
        </div>
      </section>

      {/* Voting Power Distribution */}
      <section className="py-16 bg-dark-gray/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            投票权分布
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-esports text-center">
              <div className="w-16 h-16 bg-gradient-gold-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">鲸鱼用户</h3>
              <div className="text-3xl font-bold text-esports-gold mb-2">{governanceStats.votingPower.whales}%</div>
              <p className="text-light-gray text-sm">持有 >100K MTP</p>
            </div>
            <div className="card-esports text-center">
              <div className="w-16 h-16 bg-gradient-purple-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">海豚用户</h3>
              <div className="text-3xl font-bold text-neon-cyan mb-2">{governanceStats.votingPower.dolphins}%</div>
              <p className="text-light-gray text-sm">持有 10K-100K MTP</p>
            </div>
            <div className="card-esports text-center">
              <div className="w-16 h-16 bg-gradient-purple-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">小鱼用户</h3>
              <div className="text-3xl font-bold text-esports-purple mb-2">{governanceStats.votingPower.fish}%</div>
              <p className="text-light-gray text-sm">持有 <10K MTP</p>
            </div>
          </div>
        </div>
      </section>

      {/* Active Proposals */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            提案列表
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {proposals.map((proposal) => {
              const StatusIcon = getStatusIcon(proposal.status)
              const votePercentage = proposal.totalVotes > 0 ? {
                for: (proposal.votes.for / proposal.totalVotes * 100).toFixed(1),
                against: (proposal.votes.against / proposal.totalVotes * 100).toFixed(1),
                abstain: (proposal.votes.abstain / proposal.totalVotes * 100).toFixed(1)
              } : { for: 0, against: 0, abstain: 0 }
              
              return (
                <div key={proposal.id} className="card-esports hover:scale-105 transition-transform duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center space-x-2">
                      <StatusIcon className={`w-5 h-5 ${getStatusColor(proposal.status)}`} />
                      <span className={`text-sm font-medium ${getStatusColor(proposal.status)}`}>
                        {proposal.status}
                      </span>
                    </div>
                    <span className="text-xs text-light-gray bg-dark-gray/50 px-2 py-1 rounded">
                      {proposal.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {proposal.title}
                  </h3>
                  
                  <p className="text-light-gray mb-4 text-sm">
                    {proposal.description}
                  </p>
                  
                  {/* Proposal Details */}
                  <div className="grid grid-cols-3 gap-4 mb-4 text-xs">
                    <div>
                      <span className="text-light-gray">预算:</span>
                      <div className="text-esports-gold font-semibold">{proposal.details.budget}</div>
                    </div>
                    <div>
                      <span className="text-light-gray">时间:</span>
                      <div className="text-neon-cyan font-semibold">{proposal.details.timeline}</div>
                    </div>
                    <div>
                      <span className="text-light-gray">截止:</span>
                      <div className="text-white font-semibold">{proposal.endTime}</div>
                    </div>
                  </div>
                  
                  {/* Voting Results */}
                  {proposal.totalVotes > 0 && (
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-light-gray">投票进度</span>
                        <span className="text-white">
                          {proposal.totalVotes.toLocaleString()} / {proposal.quorum.toLocaleString()}
                        </span>
                      </div>
                      
                      <div className="w-full bg-dark-gray/50 rounded-full h-2 mb-3">
                        <div 
                          className="bg-gradient-purple-cyan h-2 rounded-full transition-all duration-300"
                          style={{ width: `${Math.min(proposal.totalVotes / proposal.quorum * 100, 100)}%` }}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-success-green text-sm">支持 ({votePercentage.for}%)</span>
                          <span className="text-success-green font-semibold">{proposal.votes.for.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-error-red text-sm">反对 ({votePercentage.against}%)</span>
                          <span className="text-error-red font-semibold">{proposal.votes.against.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-light-gray text-sm">弃权 ({votePercentage.abstain}%)</span>
                          <span className="text-light-gray font-semibold">{proposal.votes.abstain.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Voting Buttons */}
                  {proposal.status === '投票中' && (
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleVote(proposal.id, 'for')}
                        className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300 ${
                          userVote[proposal.id] === 'for'
                            ? 'bg-success-green text-white'
                            : 'bg-success-green/20 text-success-green hover:bg-success-green/30'
                        }`}
                      >
                        支持
                      </button>
                      <button
                        onClick={() => handleVote(proposal.id, 'against')}
                        className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300 ${
                          userVote[proposal.id] === 'against'
                            ? 'bg-error-red text-white'
                            : 'bg-error-red/20 text-error-red hover:bg-error-red/30'
                        }`}
                      >
                        反对
                      </button>
                      <button
                        onClick={() => handleVote(proposal.id, 'abstain')}
                        className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300 ${
                          userVote[proposal.id] === 'abstain'
                            ? 'bg-light-gray text-black'
                            : 'bg-light-gray/20 text-light-gray hover:bg-light-gray/30'
                        }`}
                      >
                        弃权
                      </button>
                    </div>
                  )}
                  
                  {proposal.status === '讨论中' && (
                    <button className="w-full py-2 px-4 bg-esports-gold/20 text-esports-gold rounded-lg text-sm font-medium hover:bg-esports-gold/30 transition-all duration-300">
                      参与讨论
                    </button>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Voting History */}
      <section className="py-16 bg-dark-gray/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            投票历史
          </h2>
          
          <div className="card-esports">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-dark-gray">
                    <th className="text-left py-3 px-4 text-light-gray font-medium">日期</th>
                    <th className="text-left py-3 px-4 text-light-gray font-medium">提案</th>
                    <th className="text-left py-3 px-4 text-light-gray font-medium">结果</th>
                    <th className="text-left py-3 px-4 text-light-gray font-medium">参与率</th>
                  </tr>
                </thead>
                <tbody>
                  {votingHistory.map((item, index) => (
                    <tr key={index} className="border-b border-dark-gray/50 hover:bg-dark-gray/30 transition-colors">
                      <td className="py-3 px-4 text-white">{item.date}</td>
                      <td className="py-3 px-4 text-white">{item.proposal}</td>
                      <td className="py-3 px-4">
                        <span className={`font-medium ${
                          item.result === '通过' ? 'text-success-green' : 'text-error-red'
                        }`}>
                          {item.result}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-neon-cyan font-medium">{item.participation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* How to Participate */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            如何参与治理
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-esports text-center">
              <div className="w-16 h-16 bg-gradient-purple-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">持有MTP代币</h3>
              <p className="text-light-gray">
                持有MTP代币即可获得投票权，持有越多投票权重越大
              </p>
            </div>
            
            <div className="card-esports text-center">
              <div className="w-16 h-16 bg-gradient-gold-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">参与讨论</h3>
              <p className="text-light-gray">
                在社区论坛和Discord中参与提案讨论，发表你的观点
              </p>
            </div>
            
            <div className="card-esports text-center">
              <div className="w-16 h-16 bg-gradient-purple-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">投票决策</h3>
              <p className="text-light-gray">
                对正在进行的提案进行投票，影响平台的发展方向
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button className="btn-neon-glow">
              <Vote className="w-5 h-5 mr-2" />
              立即参与治理
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DAOPage