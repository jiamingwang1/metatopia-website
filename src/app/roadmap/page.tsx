'use client'

import { useState, useEffect } from 'react'
import { Calendar, CheckCircle, Clock, Target, TrendingUp, Users, Zap, Globe } from 'lucide-react'

const RoadmapPage = () => {
  const [mounted, setMounted] = useState(false)
  const [selectedPhase, setSelectedPhase] = useState(0)

  useEffect(() => {
    setMounted(true)
  }, [])

  const roadmapPhases = [
    {
      id: 1,
      title: '基础设施建设',
      subtitle: 'Foundation Building',
      period: '2024 Q4 - 2025 Q1',
      status: 'completed',
      progress: 100,
      description: '构建核心技术架构，完成基础设施搭建，为平台上线做好准备。',
      milestones: [
        {
          title: '团队组建完成',
          description: '核心技术团队、产品团队、运营团队全部到位',
          status: 'completed',
          date: '2024-10'
        },
        {
          title: '技术架构设计',
          description: '完成整体技术架构设计，确定技术选型和开发方案',
          status: 'completed',
          date: '2024-11'
        },
        {
          title: '智能合约开发',
          description: '核心智能合约开发完成，通过初步安全审计',
          status: 'completed',
          date: '2024-12'
        },
        {
          title: '白皮书发布',
          description: '正式发布项目白皮书，启动社区建设',
          status: 'completed',
          date: '2025-01'
        }
      ],
      keyMetrics: {
        teamSize: '25人',
        codeCommits: '1,200+',
        securityAudits: '2轮',
        communityMembers: '5,000+'
      }
    },
    {
      id: 2,
      title: '平台正式上线',
      subtitle: 'Platform Launch',
      period: '2025 Q2',
      status: 'current',
      progress: 65,
      description: '主网上线，首批游戏接入，代币发行，开启METATOPIA生态元年。',
      milestones: [
        {
          title: '测试网上线',
          description: '测试网络正式上线，开启公测活动',
          status: 'completed',
          date: '2025-02'
        },
        {
          title: 'AI算法优化',
          description: '智能匹配算法优化完成，匹配准确率达到95%+',
          status: 'completed',
          date: '2025-03'
        },
        {
          title: '主网部署',
          description: '主网正式部署，核心功能全面上线',
          status: 'in-progress',
          date: '2025-04'
        },
        {
          title: 'MTP代币发行',
          description: '代币正式发行，开启公开发售和交易',
          status: 'upcoming',
          date: '2025-05'
        },
        {
          title: '首批游戏上线',
          description: '3-5款精品游戏正式接入平台',
          status: 'upcoming',
          date: '2025-06'
        }
      ],
      keyMetrics: {
        gamesLaunched: '5款',
        activeUsers: '50,000+',
        transactionVolume: '$1M+',
        partnerships: '10+'
      }
    },
    {
      id: 3,
      title: '生态快速扩展',
      subtitle: 'Ecosystem Expansion',
      period: '2025 Q3 - Q4',
      status: 'upcoming',
      progress: 0,
      description: '大规模扩展游戏生态，建立全球赛事体系，完善DAO治理机制。',
      milestones: [
        {
          title: '游戏生态扩展',
          description: '接入20+款优质游戏，覆盖多个游戏类型',
          status: 'upcoming',
          date: '2025-07'
        },
        {
          title: 'DAO治理启动',
          description: '社区治理机制正式启动，开启去中心化治理',
          status: 'upcoming',
          date: '2025-08'
        },
        {
          title: 'NFT市场上线',
          description: '去中心化NFT交易市场正式上线',
          status: 'upcoming',
          date: '2025-09'
        },
        {
          title: '全球赛事启动',
          description: '首届METATOPIA全球电竞锦标赛举办',
          status: 'upcoming',
          date: '2025-10'
        },
        {
          title: '跨链功能上线',
          description: '支持多链资产互通，实现真正的跨链生态',
          status: 'upcoming',
          date: '2025-11'
        }
      ],
      keyMetrics: {
        totalGames: '25+',
        globalUsers: '500,000+',
        tournamentPrize: '$5M+',
        daoProposals: '100+'
      }
    },
    {
      id: 4,
      title: '全球化发展',
      subtitle: 'Global Expansion',
      period: '2026年及以后',
      status: 'future',
      progress: 0,
      description: '实现全球化布局，成为领先的GameFi生态平台，推动行业标准制定。',
      milestones: [
        {
          title: '多语言本地化',
          description: '支持10+种语言，覆盖全球主要市场',
          status: 'future',
          date: '2026-Q1'
        },
        {
          title: '移动端应用',
          description: '移动端APP正式发布，支持移动游戏生态',
          status: 'future',
          date: '2026-Q2'
        },
        {
          title: '元宇宙整合',
          description: '与主流元宇宙平台深度整合',
          status: 'future',
          date: '2026-Q3'
        },
        {
          title: '行业标准制定',
          description: '参与制定GameFi行业标准和规范',
          status: 'future',
          date: '2026-Q4'
        },
        {
          title: '生态自主发展',
          description: '实现完全去中心化，生态自主可持续发展',
          status: 'future',
          date: '2027+'
        }
      ],
      keyMetrics: {
        globalReach: '100+国家',
        ecosystemValue: '$1B+',
        industryPosition: 'Top 3',
        sustainability: '100%去中心化'
      }
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-success-green'
      case 'current': case 'in-progress': return 'text-esports-gold'
      case 'upcoming': return 'text-neon-cyan'
      case 'future': return 'text-light-gray'
      default: return 'text-light-gray'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-5 h-5" />
      case 'current': case 'in-progress': return <Clock className="w-5 h-5" />
      case 'upcoming': return <Target className="w-5 h-5" />
      case 'future': return <Calendar className="w-5 h-5" />
      default: return <Calendar className="w-5 h-5" />
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
            发展 <span className="text-gradient">路线图</span>
          </h1>
          <p className="text-xl md:text-2xl text-light-gray mb-8 max-w-4xl mx-auto">
            分阶段稳步推进，构建完整的GameFi生态系统
          </p>
        </div>
      </section>

      {/* Timeline Overview */}
      <section className="py-16 bg-dark-gray/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {roadmapPhases.map((phase, index) => (
              <div 
                key={phase.id}
                className={`card-esports cursor-pointer transition-all duration-300 ${
                  selectedPhase === index ? 'border-esports-purple shadow-lg shadow-esports-purple/20 scale-105' : 'hover:scale-102'
                }`}
                onClick={() => setSelectedPhase(index)}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-sm px-3 py-1 rounded-full ${
                    phase.status === 'completed' ? 'bg-success-green/20 text-success-green' :
                    phase.status === 'current' ? 'bg-esports-gold/20 text-esports-gold' :
                    phase.status === 'upcoming' ? 'bg-neon-cyan/20 text-neon-cyan' :
                    'bg-light-gray/20 text-light-gray'
                  }`}>
                    阶段 {phase.id}
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
                
                {phase.status !== 'future' && (
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-light-gray">进度</span>
                      <span className={getStatusColor(phase.status)}>{phase.progress}%</span>
                    </div>
                    <div className="w-full bg-dark-gray rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-500 ${
                          phase.status === 'completed' ? 'bg-success-green' :
                          phase.status === 'current' ? 'bg-esports-gold' :
                          'bg-neon-cyan'
                        }`}
                        style={{ width: `${phase.progress}%` }}
                      />
                    </div>
                  </div>
                )}
                
                <p className="text-sm text-light-gray">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Phase View */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Phase Details */}
            <div className="lg:col-span-2">
              <div className="card-esports">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {roadmapPhases[selectedPhase].title}
                    </h2>
                    <p className="text-esports-gold">
                      {roadmapPhases[selectedPhase].subtitle} • {roadmapPhases[selectedPhase].period}
                    </p>
                  </div>
                  <div className={`${getStatusColor(roadmapPhases[selectedPhase].status)}`}>
                    {getStatusIcon(roadmapPhases[selectedPhase].status)}
                  </div>
                </div>
                
                <p className="text-light-gray mb-8 text-lg">
                  {roadmapPhases[selectedPhase].description}
                </p>
                
                <h3 className="text-xl font-semibold text-white mb-6">关键里程碑</h3>
                
                <div className="space-y-6">
                  {roadmapPhases[selectedPhase].milestones.map((milestone, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className={`mt-1 ${getStatusColor(milestone.status)}`}>
                        {getStatusIcon(milestone.status)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-white font-semibold">{milestone.title}</h4>
                          <span className="text-sm text-light-gray">{milestone.date}</span>
                        </div>
                        <p className="text-light-gray text-sm">{milestone.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Key Metrics */}
            <div>
              <div className="card-esports">
                <h3 className="text-xl font-semibold text-white mb-6">关键指标与目标</h3>
                
                <div className="space-y-4">
                  {Object.entries(roadmapPhases[selectedPhase].keyMetrics).map(([key, value], index) => {
                    const labels: Record<string, string> = {
                      teamSize: '团队规模',
                      codeCommits: '代码提交',
                      securityAudits: '安全审计',
                      communityMembers: '社区成员',
                      gamesLaunched: '上线游戏',
                      activeUsers: '活跃用户',
                      transactionVolume: '交易量',
                      partnerships: '合作伙伴',
                      totalGames: '游戏总数',
                      globalUsers: '全球用户',
                      tournamentPrize: '赛事奖金',
                      daoProposals: 'DAO提案',
                      globalReach: '全球覆盖',
                      ecosystemValue: '生态价值',
                      industryPosition: '行业地位',
                      sustainability: '可持续性'
                    }
                    
                    return (
                      <div key={index} className="flex justify-between items-center p-3 bg-dark-gray/30 rounded-lg">
                        <span className="text-light-gray text-sm">{labels[key]}</span>
                        <span className="text-white font-semibold">{value}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
              
              {/* Quick Stats */}
              <div className="card-esports mt-6">
                <h3 className="text-lg font-semibold text-white mb-4">总体进展</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-success-green mb-1">1</div>
                    <div className="text-xs text-light-gray">已完成阶段</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-esports-gold mb-1">1</div>
                    <div className="text-xs text-light-gray">进行中阶段</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-neon-cyan mb-1">2</div>
                    <div className="text-xs text-light-gray">未来阶段</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gradient mb-1">4</div>
                    <div className="text-xs text-light-gray">总阶段数</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-esports-purple/20 to-neon-cyan/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            与我们一起构建未来
          </h2>
          <p className="text-xl text-light-gray mb-8">
            加入METATOPIA生态，成为GameFi革命的参与者和见证者
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-neon">
              <Users className="w-5 h-5 mr-2" />
              加入社区
            </button>
            <button className="px-6 py-3 border border-light-gray/30 rounded-lg hover:border-neon-cyan transition-colors duration-300">
              关注进展
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default RoadmapPage