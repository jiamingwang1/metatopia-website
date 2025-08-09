"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Search, 
  BookOpen, 
  Download, 
  Share2, 
  ChevronRight, 
  ChevronDown,
  Bookmark,
  BookmarkCheck,
  Eye,
  Clock,
  FileText,
  ExternalLink
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// 白皮书章节数据类型
interface WhitepaperSection {
  id: string
  title: string
  content: string
  subsections?: WhitepaperSection[]
  readTime?: number
  isBookmarked?: boolean
}

// 白皮书数据
const whitepaperData: WhitepaperSection[] = [
  {
    id: "executive-summary",
    title: "执行摘要",
    content: "MetaTopia是一个革命性的去中心化元宇宙生态系统，旨在通过区块链技术、人工智能和虚拟现实的融合，创建一个真正由用户拥有和治理的数字世界。我们的愿景是构建一个开放、包容、可持续的元宇宙平台，让每个参与者都能从中受益并贡献价值。",
    readTime: 3
  },
  {
    id: "introduction",
    title: "项目介绍",
    content: "在数字化转型的浪潮中，元宇宙概念正在重新定义人类与数字世界的交互方式。MetaTopia应运而生，致力于解决当前元宇宙项目面临的核心挑战：中心化控制、价值分配不均、用户体验割裂等问题。",
    readTime: 5,
    subsections: [
      {
        id: "vision",
        title: "愿景与使命",
        content: "我们的愿景是创建一个真正去中心化的元宇宙生态系统，让用户拥有完全的数字资产所有权和治理权。使命是通过创新技术和社区驱动的治理模式，构建一个公平、透明、可持续发展的数字世界。",
        readTime: 2
      },
      {
        id: "market-opportunity",
        title: "市场机遇",
        content: "全球元宇宙市场预计将在2030年达到8000亿美元的规模。随着Web3技术的成熟和用户对数字资产所有权意识的提高，去中心化元宇宙平台将迎来巨大的发展机遇。",
        readTime: 3
      }
    ]
  },
  {
    id: "technology",
    title: "技术架构",
    content: "MetaTopia采用多层架构设计，结合区块链、IPFS、AI和VR/AR技术，构建一个高性能、可扩展的元宇宙基础设施。",
    readTime: 8,
    subsections: [
      {
        id: "blockchain-layer",
        title: "区块链层",
        content: "基于以太坊和Polygon的混合架构，确保安全性和可扩展性。支持跨链互操作性，允许用户在不同区块链网络间自由转移资产。",
        readTime: 4
      },
      {
        id: "storage-layer",
        title: "存储层",
        content: "采用IPFS分布式存储系统，确保元宇宙内容的去中心化存储和高可用性。结合Arweave永久存储，保障重要数据的长期保存。",
        readTime: 3
      },
      {
        id: "ai-layer",
        title: "AI智能层",
        content: "集成先进的AI算法，提供智能NPC、自动内容生成、个性化推荐等功能。AI治理系统协助社区决策，提高治理效率。",
        readTime: 5
      }
    ]
  },
  {
    id: "tokenomics",
    title: "代币经济学",
    content: "MTP代币是MetaTopia生态系统的核心，采用通缩机制和多重实用性设计，确保代币价值的长期增长和生态系统的可持续发展。",
    readTime: 10,
    subsections: [
      {
        id: "token-distribution",
        title: "代币分配",
        content: "总供应量：1,000,000,000 MTP。分配方案：社区奖励40%，生态发展25%，团队15%，投资者10%，储备基金10%。",
        readTime: 3
      },
      {
        id: "utility",
        title: "代币用途",
        content: "MTP代币具有多重用途：治理投票、交易手续费、质押奖励、NFT购买、土地租赁、服务支付等。",
        readTime: 4
      },
      {
        id: "deflationary-mechanism",
        title: "通缩机制",
        content: "通过交易销毁、质押锁定、生态消耗等机制，逐步减少市场流通量，支撑代币长期价值。",
        readTime: 3
      }
    ]
  },
  {
    id: "governance",
    title: "治理机制",
    content: "MetaTopia采用渐进式去中心化治理模式，从初期的核心团队治理逐步过渡到完全的社区自治。",
    readTime: 6,
    subsections: [
      {
        id: "dao-structure",
        title: "DAO结构",
        content: "多层级DAO治理结构，包括核心DAO、专业委员会和地方治理组织，确保决策的专业性和执行效率。",
        readTime: 3
      },
      {
        id: "voting-mechanism",
        title: "投票机制",
        content: "采用二次方投票和时间加权投票相结合的机制，防止巨鲸操控，保护小额持有者权益。",
        readTime: 3
      }
    ]
  },
  {
    id: "ecosystem",
    title: "生态系统",
    content: "MetaTopia生态系统包含多个核心组件：虚拟世界、NFT市场、DeFi协议、GameFi平台、社交网络等。",
    readTime: 12,
    subsections: [
      {
        id: "virtual-world",
        title: "虚拟世界",
        content: "高度可定制的3D虚拟空间，支持用户创建、拥有和交易虚拟土地和建筑。集成VR/AR技术，提供沉浸式体验。",
        readTime: 4
      },
      {
        id: "nft-marketplace",
        title: "NFT市场",
        content: "去中心化NFT交易平台，支持各类数字资产的创建、展示和交易。提供版税分配、拍卖、租赁等高级功能。",
        readTime: 3
      },
      {
        id: "defi-protocols",
        title: "DeFi协议",
        content: "集成多种DeFi协议，包括去中心化交易所、借贷平台、流动性挖矿、收益农场等，为用户提供丰富的金融服务。",
        readTime: 5
      }
    ]
  },
  {
    id: "roadmap",
    title: "发展路线图",
    content: "MetaTopia的发展分为四个阶段：基础建设期、生态扩展期、治理完善期和全球化期。",
    readTime: 8,
    subsections: [
      {
        id: "phase1",
        title: "第一阶段：基础建设（2024 Q1-Q4）",
        content: "完成核心技术开发、主网上线、基础功能实现、初始社区建设。",
        readTime: 2
      },
      {
        id: "phase2",
        title: "第二阶段：生态扩展（2025 Q1-Q4）",
        content: "推出NFT市场、DeFi协议、GameFi平台，扩大合作伙伴网络，增强用户体验。",
        readTime: 3
      },
      {
        id: "phase3",
        title: "第三阶段：治理完善（2026 Q1-Q2）",
        content: "完成去中心化治理过渡，建立完善的DAO治理体系，实现社区自治。",
        readTime: 2
      },
      {
        id: "phase4",
        title: "第四阶段：全球化（2026 Q3+）",
        content: "全球市场扩张，跨链互操作性完善，成为领先的去中心化元宇宙平台。",
        readTime: 1
      }
    ]
  },
  {
    id: "team",
    title: "团队介绍",
    content: "MetaTopia团队由来自区块链、AI、游戏开发、金融等领域的资深专家组成，具有丰富的项目经验和深厚的技术背景。",
    readTime: 4
  },
  {
    id: "partnerships",
    title: "合作伙伴",
    content: "我们与多家知名区块链项目、技术公司、投资机构建立了战略合作关系，共同推动元宇宙生态的发展。",
    readTime: 3
  },
  {
    id: "risks",
    title: "风险提示",
    content: "投资有风险，参与需谨慎。本白皮书不构成投资建议，请投资者充分了解项目风险，理性投资。",
    readTime: 2
  }
]

export default function WhitepaperPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set())
  const [bookmarkedSections, setBookmarkedSections] = useState<Set<string>>(new Set())
  const [currentSection, setCurrentSection] = useState<string>('')
  const [readingSections, setReadingSections] = useState<Set<string>>(new Set())
  const [filteredSections, setFilteredSections] = useState<WhitepaperSection[]>(whitepaperData)

  // 搜索过滤
  useEffect(() => {
    if (!searchTerm) {
      setFilteredSections(whitepaperData)
      return
    }

    const filtered = whitepaperData.filter(section => {
      const matchesTitle = section.title.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesContent = section.content.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesSubsections = section.subsections?.some(sub => 
        sub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sub.content.toLowerCase().includes(searchTerm.toLowerCase())
      )
      return matchesTitle || matchesContent || matchesSubsections
    })

    setFilteredSections(filtered)
  }, [searchTerm])

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections)
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId)
    } else {
      newExpanded.add(sectionId)
    }
    setExpandedSections(newExpanded)
  }

  const toggleBookmark = (sectionId: string) => {
    const newBookmarked = new Set(bookmarkedSections)
    if (newBookmarked.has(sectionId)) {
      newBookmarked.delete(sectionId)
    } else {
      newBookmarked.add(sectionId)
    }
    setBookmarkedSections(newBookmarked)
  }

  const markAsRead = (sectionId: string) => {
    setReadingSections(prev => new Set([...prev, sectionId]))
  }

  const getTotalReadTime = () => {
    return whitepaperData.reduce((total, section) => {
      let sectionTime = section.readTime || 0
      if (section.subsections) {
        sectionTime += section.subsections.reduce((subTotal, sub) => subTotal + (sub.readTime || 0), 0)
      }
      return total + sectionTime
    }, 0)
  }

  const SectionCard = ({ section, level = 0 }: { section: WhitepaperSection, level?: number }) => {
    const isExpanded = expandedSections.has(section.id)
    const isBookmarked = bookmarkedSections.has(section.id)
    const isRead = readingSections.has(section.id)
    const hasSubsections = section.subsections && section.subsections.length > 0

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`bg-dark-gray/50 backdrop-blur-sm border border-light-gray/20 rounded-xl overflow-hidden ${
          level > 0 ? 'ml-6 mt-4' : 'mb-6'
        }`}
      >
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <h3 className={`font-bold text-white ${
                  level === 0 ? 'text-xl' : 'text-lg'
                }`}>
                  {section.title}
                </h3>
                {section.readTime && (
                  <div className="flex items-center space-x-1 text-light-gray text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{section.readTime}分钟</span>
                  </div>
                )}
                {isRead && (
                  <div className="flex items-center space-x-1 text-neon-cyan text-sm">
                    <Eye className="w-4 h-4" />
                    <span>已读</span>
                  </div>
                )}
              </div>
              
              <p className="text-light-gray leading-relaxed mb-4">
                {section.content}
              </p>
              
              <div className="flex items-center space-x-4">
                {hasSubsections && (
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="flex items-center space-x-2 text-neon-cyan hover:text-white transition-colors"
                  >
                    {isExpanded ? (
                      <ChevronDown className="w-4 h-4" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    )}
                    <span>{isExpanded ? '收起' : '展开'}子章节</span>
                  </button>
                )}
                
                <button
                  onClick={() => markAsRead(section.id)}
                  className={`flex items-center space-x-2 transition-colors ${
                    isRead ? 'text-neon-cyan' : 'text-light-gray hover:text-white'
                  }`}
                >
                  <Eye className="w-4 h-4" />
                  <span>{isRead ? '已读' : '标记为已读'}</span>
                </button>
              </div>
            </div>
            
            <div className="flex items-center space-x-1">
              <button
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                  e.stopPropagation()
                  toggleBookmark(section.id)
                }}
                className={`p-2 rounded-lg transition-colors ${
                  isBookmarked 
                    ? 'text-neon-cyan bg-neon-cyan/20' 
                    : 'text-light-gray hover:text-neon-cyan hover:bg-neon-cyan/10'
                }`}
              >
                {isBookmarked ? (
                  <BookmarkCheck className="w-5 h-5" />
                ) : (
                  <Bookmark className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
        
        <AnimatePresence>
          {isExpanded && hasSubsections && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="border-t border-light-gray/20"
            >
              <div className="p-6 pt-4">
                {section.subsections!.map((subsection) => (
                  <SectionCard 
                    key={subsection.id} 
                    section={subsection} 
                    level={level + 1}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-blue via-dark-purple to-dark-blue">
      <Navbar />
      
      <main className="pt-20">
        {/* 页面标题 */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent mb-6">
                白皮书
              </h1>
              <p className="text-xl text-light-gray max-w-3xl mx-auto mb-8">
                深入了解MetaTopia的技术架构、代币经济学和发展愿景
              </p>
              
              {/* 统计信息 */}
              <div className="flex items-center justify-center space-x-8 text-light-gray">
                <div className="flex items-center space-x-2">
                  <FileText className="w-5 h-5" />
                  <span>{whitepaperData.length}个章节</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span>约{getTotalReadTime()}分钟阅读</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Bookmark className="w-5 h-5" />
                  <span>{bookmarkedSections.size}个书签</span>
                </div>
              </div>
            </motion.div>
            
            {/* 操作栏 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-dark-gray/50 backdrop-blur-sm border border-light-gray/20 rounded-xl p-6 mb-12"
            >
              <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                {/* 搜索框 */}
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-light-gray w-5 h-5" />
                  <input
                    type="text"
                    placeholder="搜索内容..."
                    value={searchTerm}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-dark-gray/50 border border-light-gray/20 rounded-lg text-white placeholder-light-gray focus:border-neon-cyan focus:outline-none"
                  />
                </div>
                
                {/* 操作按钮 */}
                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-2 px-4 py-2 bg-neon-cyan/20 text-neon-cyan rounded-lg hover:bg-neon-cyan/30 transition-colors">
                    <Download className="w-4 h-4" />
                    <span>下载PDF</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-neon-purple/20 text-neon-purple rounded-lg hover:bg-neon-purple/30 transition-colors">
                    <Share2 className="w-4 h-4" />
                    <span>分享</span>
                  </button>
                </div>
              </div>
            </motion.div>
            
            {/* 白皮书内容 */}
            <div className="max-w-4xl mx-auto">
              {filteredSections.length > 0 ? (
                filteredSections.map((section, index) => (
                  <motion.div
                    key={section.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <SectionCard section={section} />
                  </motion.div>
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  <p className="text-light-gray text-lg">没有找到匹配的内容</p>
                </motion.div>
              )}
            </div>
            
            {/* 底部操作 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-center mt-16"
            >
              <div className="bg-dark-gray/50 backdrop-blur-sm border border-light-gray/20 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">获取完整白皮书</h3>
                <p className="text-light-gray mb-6">
                  下载完整的PDF版本，随时随地深入了解MetaTopia项目
                </p>
                <div className="flex items-center justify-center space-x-4">
                  <button className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-neon-cyan to-neon-purple text-white rounded-lg hover:shadow-lg hover:shadow-neon-cyan/25 transition-all">
                    <Download className="w-5 h-5" />
                    <span>下载白皮书</span>
                  </button>
                  <button className="flex items-center space-x-2 px-6 py-3 border border-neon-cyan text-neon-cyan rounded-lg hover:bg-neon-cyan/10 transition-colors">
                    <ExternalLink className="w-5 h-5" />
                    <span>在线阅读</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}