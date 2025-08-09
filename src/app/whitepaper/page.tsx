'use client'

import { useState, useEffect } from 'react'
import { Download, Search, BookOpen, Eye, Moon, Sun, Bookmark } from 'lucide-react'

const WhitepaperPage = () => {
  const [activeSection, setActiveSection] = useState(0)
  const [searchTerm, setSearchTerm] = useState('')
  const [darkMode, setDarkMode] = useState(true)
  const [fontSize, setFontSize] = useState(16)
  const [bookmarks, setBookmarks] = useState<number[]>([])
  const [readingProgress, setReadingProgress] = useState(0)

  const sections = [
    {
      id: 1,
      title: '项目背景与行业调研',
      subsections: ['Web3游戏现状', '市场机会分析']
    },
    {
      id: 2,
      title: '项目介绍',
      subsections: ['核心理念与定位', '项目优势与特色']
    },
    {
      id: 3,
      title: '代币经济模型 (MTP)',
      subsections: ['代币基础信息', '分配方案与解锁规则', '代币功能与应用场景']
    },
    {
      id: 4,
      title: 'NFT与资产系统',
      subsections: ['角色与装备NFT', '皮肤与时装NFT', '赛道与土地NFT', 'NFT市场与质押系统']
    },
    {
      id: 5,
      title: 'AI × 电竞生态模型',
      subsections: ['AI模块', '电竞生态', '生态闭环']
    },
    {
      id: 6,
      title: '技术架构',
      subsections: ['四层架构设计', '多链兼容方案']
    },
    {
      id: 7,
      title: '发展路线图',
      subsections: ['2025 Q3-Q4', '2026 Q1-Q3']
    },
    {
      id: 8,
      title: '风险与合规',
      subsections: ['市场风险', '技术风险', '合规策略']
    },
    {
      id: 9,
      title: '结语',
      subsections: []
    }
  ]

  const toggleBookmark = (sectionId: number) => {
    setBookmarks(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    )
  }

  const handleDownloadPDF = (language: 'cn' | 'en') => {
    const fileName = language === 'cn' ? 'METATOPIA-Whitepaper-CN.pdf' : 'METATOPIA-Whitepaper-EN.pdf'
    const link = document.createElement('a')
    link.href = `/${fileName}`
    link.download = fileName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      const maxHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrolled / maxHeight) * 100
      setReadingProgress(Math.min(progress, 100))
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="pt-16 min-h-screen">
      {/* Reading Progress Bar */}
      <div className="fixed top-16 left-0 right-0 h-1 bg-dark-gray/50 z-40">
        <div 
          className="h-full bg-gradient-purple-cyan transition-all duration-300"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            METATOPIA 白皮书
          </h1>
          <p className="text-xl text-light-gray mb-8">
            融合AI、电竞与链上经济的下一代GameFi平台
          </p>
          
          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button 
              className="btn-neon"
              onClick={() => handleDownloadPDF('cn')}
            >
              <Download className="w-5 h-5 mr-2" />
              下载PDF (中文版)
            </button>
            <button 
              className="px-6 py-3 border border-light-gray/30 rounded-lg hover:border-neon-cyan transition-colors duration-300"
              onClick={() => handleDownloadPDF('en')}
            >
              <Download className="w-5 h-5 mr-2" />
              Download PDF (English)
            </button>
          </div>
          
          {/* Stats */}
          <div className="flex justify-center space-x-8 text-sm text-light-gray">
            <div className="flex items-center space-x-1">
              <Eye className="w-4 h-4" />
              <span>已阅读 1,234 次</span>
            </div>
            <div className="flex items-center space-x-1">
              <Download className="w-4 h-4" />
              <span>已下载 567 次</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              {/* Reading Tools */}
              <div className="card-esports">
                <h3 className="text-lg font-semibold text-white mb-4">阅读工具</h3>
                
                {/* Search */}
                <div className="relative mb-4">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-light-gray" />
                  <input
                    type="text"
                    placeholder="搜索内容..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-dark-gray border border-esports-purple/30 rounded-lg text-white placeholder-light-gray focus:border-neon-cyan focus:outline-none"
                  />
                </div>
                
                {/* Font Size */}
                <div className="mb-4">
                  <label className="text-sm text-light-gray mb-2 block">字体大小</label>
                  <input
                    type="range"
                    min="12"
                    max="20"
                    value={fontSize}
                    onChange={(e) => setFontSize(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="text-xs text-light-gray mt-1">{fontSize}px</div>
                </div>
                
                {/* Dark Mode Toggle */}
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="flex items-center space-x-2 w-full p-2 bg-dark-gray/50 rounded-lg hover:bg-esports-purple/20 transition-colors duration-200"
                >
                  {darkMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                  <span className="text-sm">{darkMode ? '夜间模式' : '日间模式'}</span>
                </button>
              </div>
              
              {/* Table of Contents */}
              <div className="card-esports">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <BookOpen className="w-5 h-5 mr-2" />
                  目录
                </h3>
                
                <nav className="space-y-2 max-h-96 overflow-y-auto scrollbar-thin">
                  {sections.map((section, index) => (
                    <div key={section.id}>
                      <div
                        className={`w-full text-left p-2 rounded-lg transition-colors duration-200 flex items-center justify-between group cursor-pointer ${
                          activeSection === index 
                            ? 'bg-esports-purple/30 text-neon-cyan' 
                            : 'hover:bg-esports-purple/10 text-light-gray hover:text-white'
                        }`}
                      >
                        <span 
                          className="text-sm flex-1"
                          onClick={() => setActiveSection(index)}
                        >
                          {section.title}
                        </span>
                        <div
                          onClick={(e) => {
                            e.stopPropagation()
                            toggleBookmark(section.id)
                          }}
                          className={`opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer ${
                            bookmarks.includes(section.id) ? 'text-esports-gold' : 'text-light-gray'
                          }`}
                        >
                          <Bookmark className="w-4 h-4" />
                        </div>
                      </div>
                      
                      {section.subsections.length > 0 && activeSection === index && (
                        <div className="ml-4 mt-2 space-y-1">
                          {section.subsections.map((subsection, subIndex) => (
                            <button
                              key={subIndex}
                              className="block w-full text-left p-1 text-xs text-light-gray hover:text-neon-cyan transition-colors duration-200"
                            >
                              {subsection}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="card-esports">
              <div className="prose prose-invert max-w-none" style={{ fontSize: `${fontSize}px` }}>
                {/* Section Content */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gradient mb-4">
                    {sections[activeSection]?.title}
                  </h2>
                  
                  {/* Dynamic content based on active section */}
                  {activeSection === 0 && (
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-white">Web3游戏现状</h3>
                      <p className="text-light-gray leading-relaxed">
                        当前Web3游戏市场正处于快速发展阶段，但仍面临着用户体验不佳、经济模型不可持续、
                        游戏性不足等挑战。传统游戏玩家对区块链游戏的接受度仍然有限，主要原因包括：
                      </p>
                      <ul className="list-disc list-inside text-light-gray space-y-2">
                        <li>复杂的钱包操作和Gas费用</li>
                        <li>游戏性与传统游戏差距较大</li>
                        <li>经济模型过度金融化，缺乏可持续性</li>
                        <li>缺乏有效的反作弊机制</li>
                      </ul>
                      
                      <h3 className="text-xl font-semibold text-white mt-8">市场机会分析</h3>
                      <p className="text-light-gray leading-relaxed">
                        尽管面临挑战，Web3游戏市场仍蕴含巨大机遇。根据行业报告，
                        全球游戏市场规模预计将在2025年达到3000亿美元，其中区块链游戏占比将显著提升。
                        METATOPIA看到了以下关键机会：
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div className="bg-dark-gray/50 p-4 rounded-lg">
                          <h4 className="text-esports-gold font-semibold mb-2">AI技术融合</h4>
                          <p className="text-sm text-light-gray">将AI技术应用于游戏匹配、反作弊等场景</p>
                        </div>
                        <div className="bg-dark-gray/50 p-4 rounded-lg">
                          <h4 className="text-neon-cyan font-semibold mb-2">电竞生态</h4>
                          <p className="text-sm text-light-gray">构建去中心化的电竞赛事体系</p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {activeSection === 1 && (
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-white">核心理念与定位</h3>
                      <p className="text-light-gray leading-relaxed">
                        METATOPIA致力于成为全球首个真正融合AI、电竞与链上经济的GameFi平台。
                        我们的核心理念是"玩得尽兴，赢得真实价值"，通过创新的技术架构和经济模型，
                        为玩家提供既有趣又有价值的游戏体验。
                      </p>
                      
                      <div className="bg-gradient-purple-cyan/10 p-6 rounded-lg border border-esports-purple/30">
                        <h4 className="text-lg font-semibold text-gradient mb-3">愿景声明</h4>
                        <p className="text-white italic text-center text-lg">
                          "构建一个由AI驱动、社区治理、价值共享的去中心化电竞宇宙"
                        </p>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-white mt-8">项目优势与特色</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div className="flex items-start space-x-3">
                            <div className="w-8 h-8 bg-esports-gold/20 rounded-lg flex items-center justify-center mt-1">
                              <span className="text-esports-gold font-bold">1</span>
                            </div>
                            <div>
                              <h4 className="font-semibold text-white">AI与电竞融合</h4>
                              <p className="text-sm text-light-gray">智能赛事匹配、行为分析、反作弊系统</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start space-x-3">
                            <div className="w-8 h-8 bg-neon-cyan/20 rounded-lg flex items-center justify-center mt-1">
                              <span className="text-neon-cyan font-bold">2</span>
                            </div>
                            <div>
                              <h4 className="font-semibold text-white">多元化GameFi生态</h4>
                              <p className="text-sm text-light-gray">多款游戏、NFT市场、DeFi协议集成</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <div className="flex items-start space-x-3">
                            <div className="w-8 h-8 bg-esports-purple/20 rounded-lg flex items-center justify-center mt-1">
                              <span className="text-esports-purple font-bold">3</span>
                            </div>
                            <div>
                              <h4 className="font-semibold text-white">社区驱动治理</h4>
                              <p className="text-sm text-light-gray">DAO机制、社区提案、民主决策</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start space-x-3">
                            <div className="w-8 h-8 bg-success-green/20 rounded-lg flex items-center justify-center mt-1">
                              <span className="text-success-green font-bold">4</span>
                            </div>
                            <div>
                              <h4 className="font-semibold text-white">跨链资产互通</h4>
                              <p className="text-sm text-light-gray">多链支持、资产桥接、统一身份</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Add more sections as needed */}
                  {activeSection >= 2 && (
                    <div className="text-center py-12">
                      <div className="text-6xl mb-4">🚧</div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        内容正在完善中
                      </h3>
                      <p className="text-light-gray">
                        {sections[activeSection]?.title} 的详细内容即将上线，敬请期待！
                      </p>
                    </div>
                  )}
                </div>
                
                {/* Navigation */}
                <div className="flex justify-between items-center pt-8 border-t border-esports-purple/30">
                  <button
                    onClick={() => setActiveSection(Math.max(0, activeSection - 1))}
                    disabled={activeSection === 0}
                    className="px-4 py-2 bg-dark-gray/50 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-esports-purple/20 transition-colors duration-200"
                  >
                    ← 上一章
                  </button>
                  
                  <span className="text-sm text-light-gray">
                    {activeSection + 1} / {sections.length}
                  </span>
                  
                  <button
                    onClick={() => setActiveSection(Math.min(sections.length - 1, activeSection + 1))}
                    disabled={activeSection === sections.length - 1}
                    className="px-4 py-2 bg-dark-gray/50 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-esports-purple/20 transition-colors duration-200"
                  >
                    下一章 →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhitepaperPage