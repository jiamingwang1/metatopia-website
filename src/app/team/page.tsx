'use client'

import { useState, useEffect } from 'react'
import { Users, Award, Globe, Linkedin, Twitter, Github, Mail, MapPin, Calendar, TrendingUp } from 'lucide-react'

const TeamPage = () => {
  const [mounted, setMounted] = useState(false)
  const [activeCategory, setActiveCategory] = useState('core')

  useEffect(() => {
    setMounted(true)
  }, [])

  const teamStats = {
    totalMembers: 45,
    countries: 12,
    experience: '8+',
    projects: '50+'
  }

  const coreTeam = [
    {
      name: 'Alex Chen',
      role: '创始人 & CEO',
      avatar: '👨‍💼',
      bio: '前腾讯游戏高级架构师，拥有10年游戏行业经验，区块链技术专家',
      experience: '10年游戏开发经验',
      education: '清华大学计算机科学硕士',
      achievements: ['领导开发多款月活千万级游戏', '区块链技术专利持有者', 'Forbes 30 Under 30'],
      social: {
        linkedin: 'https://linkedin.com/in/alexchen',
        twitter: 'https://twitter.com/alexchen',
        github: 'https://github.com/alexchen'
      }
    },
    {
      name: 'Sarah Kim',
      role: '首席技术官 CTO',
      avatar: '👩‍💻',
      bio: '前以太坊核心开发者，智能合约安全专家，拥有丰富的DeFi项目经验',
      experience: '8年区块链开发经验',
      education: 'MIT计算机科学博士',
      achievements: ['以太坊核心贡献者', '智能合约安全审计专家', '多个DeFi协议架构师'],
      social: {
        linkedin: 'https://linkedin.com/in/sarahkim',
        twitter: 'https://twitter.com/sarahkim',
        github: 'https://github.com/sarahkim'
      }
    },
    {
      name: 'David Rodriguez',
      role: '首席产品官 CPO',
      avatar: '👨‍🎨',
      bio: '前暴雪娱乐产品总监，负责《守望先锋》等知名游戏的产品设计',
      experience: '12年游戏产品经验',
      education: '斯坦福大学设计学硕士',
      achievements: ['《守望先锋》产品负责人', '多项游戏设计专利', 'GDC最佳产品奖'],
      social: {
        linkedin: 'https://linkedin.com/in/davidrodriguez',
        twitter: 'https://twitter.com/davidrodriguez'
      }
    },
    {
      name: 'Emily Zhang',
      role: '首席运营官 COO',
      avatar: '👩‍💼',
      bio: '前币安运营总监，拥有丰富的加密货币交易所和社区运营经验',
      experience: '6年加密货币行业经验',
      education: '北京大学MBA',
      achievements: ['币安全球运营负责人', '社区建设专家', '多语言市场拓展'],
      social: {
        linkedin: 'https://linkedin.com/in/emilyzhang',
        twitter: 'https://twitter.com/emilyzhang'
      }
    },
    {
      name: 'Michael Johnson',
      role: '首席财务官 CFO',
      avatar: '👨‍💻',
      bio: '前高盛投资银行家，专注于科技和游戏行业的投资和财务管理',
      experience: '15年金融行业经验',
      education: '哈佛商学院MBA',
      achievements: ['高盛TMT行业负责人', '多个IPO项目主导', '风险管理专家'],
      social: {
        linkedin: 'https://linkedin.com/in/michaeljohnson',
        twitter: 'https://twitter.com/michaeljohnson'
      }
    },
    {
      name: 'Lisa Wang',
      role: '首席营销官 CMO',
      avatar: '👩‍🎨',
      bio: '前字节跳动全球营销总监，擅长品牌建设和数字营销策略',
      experience: '9年数字营销经验',
      education: '哥伦比亚大学营销学硕士',
      achievements: ['TikTok全球营销负责人', '品牌建设专家', '数字营销创新奖'],
      social: {
        linkedin: 'https://linkedin.com/in/lisawang',
        twitter: 'https://twitter.com/lisawang'
      }
    }
  ]

  const advisors = [
    {
      name: 'Dr. Vitalik Buterin',
      role: '技术顾问',
      avatar: '👨‍🔬',
      bio: '以太坊创始人，区块链技术先驱',
      company: 'Ethereum Foundation',
      expertise: '区块链技术、智能合约、去中心化系统'
    },
    {
      name: 'Jane Chen',
      role: '游戏行业顾问',
      avatar: '👩‍💼',
      bio: '前EA Games副总裁，游戏行业资深专家',
      company: 'EA Games',
      expertise: '游戏开发、产品策略、市场拓展'
    },
    {
      name: 'Robert Kim',
      role: '投资顾问',
      avatar: '👨‍💼',
      bio: 'Andreessen Horowitz合伙人，专注加密货币投资',
      company: 'a16z',
      expertise: '风险投资、加密货币、市场分析'
    },
    {
      name: 'Dr. Amy Liu',
      role: '学术顾问',
      avatar: '👩‍🎓',
      bio: 'MIT计算机科学教授，AI和机器学习专家',
      company: 'MIT',
      expertise: '人工智能、机器学习、算法优化'
    }
  ]

  const partners = [
    {
      name: 'Binance Labs',
      type: '战略投资方',
      logo: '🔶',
      description: '全球领先的区块链生态系统和加密货币交易平台',
      partnership: '战略投资、技术支持、市场推广'
    },
    {
      name: 'Polygon Studios',
      type: '技术合作伙伴',
      logo: '🟣',
      description: 'Layer 2扩容解决方案提供商',
      partnership: '技术集成、跨链支持、生态合作'
    },
    {
      name: 'Unity Technologies',
      type: '技术合作伙伴',
      logo: '⚫',
      description: '全球领先的游戏引擎和开发平台',
      partnership: '游戏引擎支持、开发工具、技术培训'
    },
    {
      name: 'Chainlink',
      type: '基础设施合作伙伴',
      logo: '🔗',
      description: '去中心化预言机网络',
      partnership: '数据预言机、价格馈送、随机数生成'
    },
    {
      name: 'OpenSea',
      type: '生态合作伙伴',
      logo: '🌊',
      description: '全球最大的NFT交易市场',
      partnership: 'NFT交易、市场推广、用户导流'
    },
    {
      name: 'Immutable X',
      type: '技术合作伙伴',
      logo: '❌',
      description: '以太坊Layer 2 NFT解决方案',
      partnership: 'NFT铸造、零Gas费交易、扩容支持'
    }
  ]

  const jobOpenings = [
    {
      title: '高级区块链开发工程师',
      department: '技术部',
      location: '远程/新加坡',
      type: '全职',
      requirements: ['5年以上区块链开发经验', '精通Solidity和Web3技术', '有DeFi项目经验优先'],
      description: '负责智能合约开发、区块链架构设计和安全审计'
    },
    {
      title: '游戏经济设计师',
      department: '产品部',
      location: '远程/上海',
      type: '全职',
      requirements: ['3年以上游戏经济设计经验', '熟悉代币经济学', '有GameFi项目经验'],
      description: '设计游戏内经济系统、代币分配机制和激励模型'
    },
    {
      title: '社区运营经理',
      department: '运营部',
      location: '远程',
      type: '全职',
      requirements: ['3年以上社区运营经验', '熟悉加密货币社区', '多语言能力优先'],
      description: '负责全球社区建设、用户增长和品牌推广'
    },
    {
      title: 'AI算法工程师',
      department: '技术部',
      location: '远程/北京',
      type: '全职',
      requirements: ['机器学习/深度学习背景', 'Python/TensorFlow经验', '有推荐系统经验优先'],
      description: '开发智能匹配算法、反作弊系统和用户行为分析'
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
            我们的 <span className="text-gradient">团队</span>
          </h1>
          <p className="text-xl md:text-2xl text-light-gray mb-8 max-w-4xl mx-auto">
            汇聚全球顶尖人才，共同构建GameFi生态的未来
          </p>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 bg-dark-gray/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">{teamStats.totalMembers}</div>
              <div className="text-light-gray">团队成员</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-esports-gold mb-2">{teamStats.countries}</div>
              <div className="text-light-gray">覆盖国家</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-neon-cyan mb-2">{teamStats.experience}</div>
              <div className="text-light-gray">平均经验</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-success-green mb-2">{teamStats.projects}</div>
              <div className="text-light-gray">成功项目</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Categories */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { id: 'core', label: '核心团队', icon: Users },
              { id: 'advisors', label: '顾问团队', icon: Award },
              { id: 'partners', label: '合作伙伴', icon: Globe }
            ].map((category) => {
              const Icon = category.icon
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-esports-purple text-white shadow-lg shadow-esports-purple/30'
                      : 'bg-dark-gray/50 text-light-gray hover:text-white hover:bg-dark-gray/70'
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

      {/* Core Team */}
      {activeCategory === 'core' && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                核心团队
              </h2>
              <p className="text-xl text-light-gray">
                来自全球顶尖科技公司的资深专家
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreTeam.map((member, index) => (
                <div key={index} className="card-esports group hover:scale-105 transition-transform duration-300">
                  <div className="text-center mb-6">
                    <div className="text-6xl mb-4">{member.avatar}</div>
                    <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                    <p className="text-esports-gold font-medium">{member.role}</p>
                  </div>
                  
                  <p className="text-light-gray text-sm mb-4 leading-relaxed">
                    {member.bio}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm">
                      <Calendar className="w-4 h-4 mr-2 text-neon-cyan" />
                      <span className="text-light-gray">{member.experience}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Award className="w-4 h-4 mr-2 text-esports-gold" />
                      <span className="text-light-gray">{member.education}</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">主要成就</h4>
                    <div className="space-y-1">
                      {member.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start text-xs">
                          <div className="w-1.5 h-1.5 rounded-full bg-success-green mr-2 mt-1.5 flex-shrink-0" />
                          <span className="text-light-gray">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-center space-x-4">
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} className="text-light-gray hover:text-neon-cyan transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a href={member.social.twitter} className="text-light-gray hover:text-neon-cyan transition-colors">
                        <Twitter className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.github && (
                      <a href={member.social.github} className="text-light-gray hover:text-neon-cyan transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Advisors */}
      {activeCategory === 'advisors' && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                顾问团队
              </h2>
              <p className="text-xl text-light-gray">
                行业领袖为项目发展提供战略指导
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {advisors.map((advisor, index) => (
                <div key={index} className="card-esports">
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl">{advisor.avatar}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-1">{advisor.name}</h3>
                      <p className="text-esports-gold font-medium mb-2">{advisor.role}</p>
                      <p className="text-neon-cyan text-sm mb-3">{advisor.company}</p>
                      <p className="text-light-gray text-sm mb-4">{advisor.bio}</p>
                      <div>
                        <h4 className="text-sm font-semibold text-white mb-2">专业领域</h4>
                        <p className="text-xs text-light-gray">{advisor.expertise}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Partners */}
      {activeCategory === 'partners' && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                合作伙伴
              </h2>
              <p className="text-xl text-light-gray">
                与行业领先企业建立战略合作关系
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <div key={index} className="card-esports group hover:scale-105 transition-transform duration-300">
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-3">{partner.logo}</div>
                    <h3 className="text-lg font-semibold text-white mb-1">{partner.name}</h3>
                    <p className="text-esports-gold text-sm">{partner.type}</p>
                  </div>
                  
                  <p className="text-light-gray text-sm mb-4 text-center">
                    {partner.description}
                  </p>
                  
                  <div className="bg-dark-gray/30 rounded-lg p-3">
                    <h4 className="text-sm font-semibold text-white mb-2">合作内容</h4>
                    <p className="text-xs text-light-gray">{partner.partnership}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Join Our Team */}
      <section className="py-20 bg-dark-gray/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              加入我们
            </h2>
            <p className="text-xl text-light-gray">
              寻找志同道合的伙伴，一起构建GameFi的未来
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {jobOpenings.map((job, index) => (
              <div key={index} className="card-esports">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{job.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-light-gray">
                      <span>{job.department}</span>
                      <span>•</span>
                      <span className="flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {job.location}
                      </span>
                      <span>•</span>
                      <span>{job.type}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-light-gray text-sm mb-4">{job.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-2">任职要求</h4>
                  <div className="space-y-1">
                    {job.requirements.map((req, idx) => (
                      <div key={idx} className="flex items-start text-xs">
                        <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan mr-2 mt-1.5 flex-shrink-0" />
                        <span className="text-light-gray">{req}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <button className="w-full btn-neon">
                  <Mail className="w-4 h-4 mr-2" />
                  申请职位
                </button>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-light-gray mb-4">
              没有找到合适的职位？我们随时欢迎优秀的人才加入！
            </p>
            <button className="px-6 py-3 border border-light-gray/30 rounded-lg hover:border-neon-cyan transition-colors duration-300">
              发送简历
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-esports-purple/20 to-neon-cyan/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            与我们一起创造未来
          </h2>
          <p className="text-xl text-light-gray mb-8">
            加入METATOPIA团队，成为GameFi革命的推动者
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-neon">
              <Users className="w-5 h-5 mr-2" />
              查看职位
            </button>
            <button className="px-6 py-3 border border-light-gray/30 rounded-lg hover:border-neon-cyan transition-colors duration-300">
              了解文化
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TeamPage