'use client'

import { useState } from 'react'
import { Calendar, CheckCircle, Clock, Target, Rocket, Users, Globe, Zap } from 'lucide-react'

const RoadmapPage = () => {
  const [selectedPhase, setSelectedPhase] = useState(null)

  const roadmapData = [
    {
      phase: 'Phase 1',
      title: '基础设施建设',
      period: '2024 Q1 - Q2',
      status: 'in-progress',
      progress: 75,
      description: '构建核心技术基础设施，部署基础功能模块',
      icon: Rocket,
      color: 'from-blue-500 to-cyan-500',
      milestones: [
        {
          title: '智能合约部署',
          description: '部署核心智能合约到主网',
          status: 'completed',
          date: '2024-01-15',
          details: ['MTP代币合约', 'NFT市场合约', '质押挖矿合约', '治理合约']
        },
        {
          title: 'AI匹配算法v1.0',
          description: '发布基础AI匹配系统',
          status: 'completed',
          date: '2024-02-20',
          details: ['技能评估算法', '延迟优化', '基础匹配逻辑', '反作弊检测']
        },
        {
          title: 'NFT市场上线',
          description: '启动NFT交易市场',
          status: 'in-progress',
          date: '2024-03-30',
          details: ['角色NFT交易', '装备市场', '皮肤商城', '土地拍卖']
        },
        {
          title: '多链桥接',
          description: '实现跨链资产转移',
          status: 'planned',
          date: '2024-04-15',
          details: ['Ethereum桥接', 'Polygon集成', 'BNB Chain支持', '资产同步']
        }
      ]
    },
    {
      phase: 'Phase 2',
      title: '生态系统扩展',
      period: '2024 Q3 - Q4',
      status: 'planned',
      progress: 0,
      description: '扩展平台功能，建设完整的GameFi生态系统',
      icon: Users,
      color: 'from-purple-500 to-pink-500',
      milestones: [
        {
          title: '电竞赛事平台',
          description: '推出全球电竞赛事系统',
          status: 'planned',
          date: '2024-07-01',
          details: ['赛事创建工具', '实时直播', '奖金池管理', '战队系统']
        },
        {
          title: 'DAO治理系统',
          description: '启动去中心化治理',
          status: 'planned',
          date: '2024-08-15',
          details: ['提案系统', '投票机制', '国库管理', '社区治理']
        },
        {
          title: 'AI算法升级',
          description: '发布高级AI功能',
          status: 'planned',
          date: '2024-09-30',
          details: ['深度学习模型', '行为分析', '个性化推荐', '预测算法']
        },
        {
          title: '移动端应用',
          description: '发布iOS和Android应用',
          status: 'planned',
          date: '2024-11-20',
          details: ['原生应用', '钱包集成', '推送通知', '离线功能']
        }
      ]
    },
    {
      phase: 'Phase 3',
      title: '全球化部署',
      period: '2025 Q1 - Q2',
      status: 'planned',
      progress: 0,
      description: '实现全球化运营，建立国际合作伙伴关系',
      icon: Globe,
      color: 'from-green-500 to-emerald-500',
      milestones: [
        {
          title: '全球服务器',
          description: '部署全球CDN和服务器',
          status: 'planned',
          date: '2025-01-15',
          details: ['亚洲节点', '欧洲节点', '美洲节点', '负载均衡']
        },
        {
          title: '多语言支持',
          description: '支持20+种语言',
          status: 'planned',
          date: '2025-02-28',
          details: ['界面本地化', '客服支持', '社区管理', '文档翻译']
        },
        {
          title: '合规认证',
          description: '获得各国监管许可',
          status: 'planned',
          date: '2025-04-10',
          details: ['美国许可', '欧盟合规', '亚洲认证', '法律框架']
        },
        {
          title: '企业合作',
          description: '建立战略合作伙伴关系',
          status: 'planned',
          date: '2025-06-01',
          details: ['游戏厂商', '电竞组织', '投资机构', '技术伙伴']
        }
      ]
    },
    {
      phase: 'Phase 4',
      title: '生态成熟',
      period: '2025 Q3 - Q4',
      status: 'planned',
      progress: 0,
      description: '实现生态系统的完全自治和可持续发展',
      icon: Target,
      color: 'from-yellow-500 to-orange-500',
      milestones: [
        {
          title: 'AI自主运营',
          description: '实现AI驱动的自主运营',
          status: 'planned',
          date: '2025-07-15',
          details: ['自动化管理', '智能调优', '预测维护', '自适应算法']
        },
        {
          title: '元宇宙集成',
          description: '集成VR/AR元宇宙功能',
          status: 'planned',
          date: '2025-09-01',
          details: ['VR竞技场', 'AR增强', '3D世界', '沉浸体验']
        },
        {
          title: '生态自治',
          description: '实现完全去中心化治理',
          status: 'planned',
          date: '2025-10-30',
          details: ['自动执行', '社区驱动', '算法治理', '经济平衡']
        },
        {
          title: '可持续发展',
          description: '建立可持续的经济模型',
          status: 'planned',
          date: '2025-12-15',
          details: ['碳中和', '绿色挖矿', '循环经济', '社会责任']
        }
      ]
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'text-success-green'
      case 'in-progress': return 'text-neon-cyan'
      case 'planned': return 'text-light-gray'
      default: return 'text-light-gray'
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed': return CheckCircle
      case 'in-progress': return Clock
      case 'planned': return Target
      default: return Target
    }
  }

  const getStatusBg = (status) => {
    switch (status) {
      case 'completed': return 'bg-success-green/20'
      case 'in-progress': return 'bg-neon-cyan/20'
      case 'planned': return 'bg-light-gray/20'
      default: return 'bg-light-gray/20'
    }
  }

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 particles-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
            发展路线图
          </h1>
          <p className="text-xl md:text-2xl text-light-gray mb-8 max-w-3xl mx-auto">
            从基础设施到全球化部署，见证METATOPIA的成长历程
          </p>
          
          {/* 总体进度 */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="card-esports text-center">
                <div className="text-2xl font-bold text-success-green mb-2">1</div>
                <div className="text-sm text-light-gray">已完成阶段</div>
              </div>
              <div className="card-esports text-center">
                <div className="text-2xl font-bold text-neon-cyan mb-2">1</div>
                <div className="text-sm text-light-gray">进行中阶段</div>
              </div>
              <div className="card-esports text-center">
                <div className="text-2xl font-bold text-esports-gold mb-2">2</div>
                <div className="text-sm text-light-gray">计划中阶段</div>
              </div>
              <div className="card-esports text-center">
                <div className="text-2xl font-bold text-esports-purple mb-2">16</div>
                <div className="text-sm text-light-gray">总里程碑</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-cyan via-esports-purple to-esports-gold" />
            
            <div className="space-y-16">
              {roadmapData.map((phase, phaseIndex) => {
                const PhaseIcon = phase.icon
                return (
                  <div key={phaseIndex} className="relative">
                    {/* Phase Icon */}
                    <div className="absolute left-4 w-8 h-8 bg-gradient-to-r from-space-blue to-esports-purple rounded-full flex items-center justify-center border-4 border-space-blue">
                      <PhaseIcon className="w-4 h-4 text-white" />
                    </div>
                    
                    {/* Phase Content */}
                    <div className="ml-20">
                      <div className="card-esports mb-8">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <div>
                            <div className="flex items-center space-x-3 mb-2">
                              <h2 className="text-2xl font-bold text-white">{phase.title}</h2>
                              <span className={`text-sm px-3 py-1 rounded-full ${
                                phase.status === 'completed' ? 'bg-success-green/20 text-success-green' :
                                phase.status === 'in-progress' ? 'bg-neon-cyan/20 text-neon-cyan' :
                                'bg-light-gray/20 text-light-gray'
                              }`}>
                                {phase.status === 'completed' ? '已完成' :
                                 phase.status === 'in-progress' ? '进行中' : '计划中'}
                              </span>
                            </div>
                            <p className="text-light-gray mb-2">{phase.description}</p>
                            <div className="flex items-center space-x-2 text-sm">
                              <Calendar className="w-4 h-4 text-esports-gold" />
                              <span className="text-esports-gold">{phase.period}</span>
                              <span className="text-light-gray">•</span>
                              <span className="text-light-gray">{phase.phase}</span>
                            </div>
                          </div>
                          
                          {/* Progress Bar */}
                          {phase.status === 'in-progress' && (
                            <div className="mt-4 md:mt-0 md:ml-8">
                              <div className="text-right mb-2">
                                <span className="text-neon-cyan font-semibold">{phase.progress}%</span>
                              </div>
                              <div className="w-32 bg-dark-gray/50 rounded-full h-2">
                                <div 
                                  className="bg-gradient-purple-cyan h-2 rounded-full transition-all duration-300"
                                  style={{ width: `${phase.progress}%` }}
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      {/* Milestones */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {phase.milestones.map((milestone, milestoneIndex) => {
                          const StatusIcon = getStatusIcon(milestone.status)
                          return (
                            <div 
                              key={milestoneIndex} 
                              className="card-esports hover:scale-105 transition-transform duration-300 cursor-pointer"
                              onClick={() => setSelectedPhase(selectedPhase === `${phaseIndex}-${milestoneIndex}` ? null : `${phaseIndex}-${milestoneIndex}`)}
                            >
                              <div className="flex items-start justify-between mb-3">
                                <div className="flex items-center space-x-2">
                                  <StatusIcon className={`w-5 h-5 ${getStatusColor(milestone.status)}`} />
                                  <h3 className="font-semibold text-white">{milestone.title}</h3>
                                </div>
                                <span className="text-xs text-light-gray">{milestone.date}</span>
                              </div>
                              
                              <p className="text-light-gray text-sm mb-3">
                                {milestone.description}
                              </p>
                              
                              {/* Milestone Details */}
                              {selectedPhase === `${phaseIndex}-${milestoneIndex}` && (
                                <div className="mt-4 pt-4 border-t border-dark-gray/50">
                                  <h4 className="text-sm font-semibold text-esports-gold mb-2">详细功能</h4>
                                  <div className="grid grid-cols-1 gap-2">
                                    {milestone.details.map((detail, detailIndex) => (
                                      <div key={detailIndex} className="flex items-center space-x-2">
                                        <div className="w-1.5 h-1.5 bg-neon-cyan rounded-full" />
                                        <span className="text-xs text-light-gray">{detail}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                              
                              <div className={`mt-3 text-xs px-2 py-1 rounded inline-block ${getStatusBg(milestone.status)} ${getStatusColor(milestone.status)}`}>
                                {milestone.status === 'completed' ? '已完成' :
                                 milestone.status === 'in-progress' ? '进行中' : '计划中'}
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-dark-gray/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            关键指标目标
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card-esports text-center">
              <div className="w-16 h-16 bg-gradient-purple-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">用户增长</h3>
              <div className="text-2xl font-bold text-neon-cyan mb-2">1M+</div>
              <p className="text-light-gray text-sm">2025年底注册用户</p>
            </div>
            
            <div className="card-esports text-center">
              <div className="w-16 h-16 bg-gradient-gold-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">交易量</h3>
              <div className="text-2xl font-bold text-esports-gold mb-2">$100M+</div>
              <p className="text-light-gray text-sm">年度NFT交易量</p>
            </div>
            
            <div className="card-esports text-center">
              <div className="w-16 h-16 bg-gradient-purple-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">全球覆盖</h3>
              <div className="text-2xl font-bold text-esports-purple mb-2">50+</div>
              <p className="text-light-gray text-sm">支持国家和地区</p>
            </div>
            
            <div className="card-esports text-center">
              <div className="w-16 h-16 bg-gradient-gold-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">生态价值</h3>
              <div className="text-2xl font-bold text-success-green mb-2">$1B+</div>
              <p className="text-light-gray text-sm">生态系统总价值</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            与我们一起构建未来
          </h2>
          <p className="text-xl text-light-gray mb-8">
            加入METATOPIA社区，参与这场GameFi革命的每一个重要时刻
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-neon-glow">
              <Users className="w-5 h-5 mr-2" />
              加入社区
            </button>
            <button className="px-8 py-3 bg-dark-gray/50 text-white rounded-lg hover:bg-dark-gray/70 transition-all duration-300 flex items-center justify-center">
              <Calendar className="w-5 h-5 mr-2" />
              订阅更新
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default RoadmapPage