'use client'

import { useState, useEffect } from 'react'
import { Download, Search, BookOpen, Bookmark, Sun, Moon, Plus, Minus, ChevronRight } from 'lucide-react'

const WhitepaperPage = () => {
  const [mounted, setMounted] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [fontSize, setFontSize] = useState(16)
  const [darkMode, setDarkMode] = useState(true)
  const [bookmarks, setBookmarks] = useState<string[]>([])
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    setMounted(true)
  }, [])

  const tableOfContents = [
    { id: 'abstract', title: '摘要', level: 1 },
    { id: 'introduction', title: '1. 项目背景与介绍', level: 1 },
    { id: 'vision', title: '1.1 项目愿景', level: 2 },
    { id: 'mission', title: '1.2 使命与目标', level: 2 },
    { id: 'tokenomics', title: '2. 代币经济模型', level: 1 },
    { id: 'token-distribution', title: '2.1 代币分配', level: 2 },
    { id: 'token-utility', title: '2.2 代币用途', level: 2 },
    { id: 'nft-assets', title: '3. NFT与资产系统', level: 1 },
    { id: 'ai-esports', title: '4. AI电竞生态模型', level: 1 },
    { id: 'technology', title: '5. 技术架构', level: 1 },
    { id: 'roadmap', title: '6. 发展路线图', level: 1 },
    { id: 'risks', title: '7. 风险与合规', level: 1 },
    { id: 'conclusion', title: '8. 结语', level: 1 }
  ]

  const toggleBookmark = (sectionId: string) => {
    setBookmarks(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    )
  }

  const downloadPDF = () => {
    // 模拟PDF下载
    const link = document.createElement('a')
    link.href = '/metatopia-whitepaper.pdf'
    link.download = 'METATOPIA-白皮书.pdf'
    link.click()
  }

  if (!mounted) {
    return <div className="min-h-screen bg-space-blue" />
  }

  return (
    <div className="pt-16 min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-esports-purple/20 to-neon-cyan/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              METATOPIA 白皮书
            </h1>
            <p className="text-xl text-light-gray mb-8">
              AI × 电竞 × GameFi 的未来生态系统
            </p>
            
            {/* 工具栏 */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <button 
                onClick={downloadPDF}
                className="btn-neon"
              >
                <Download className="w-5 h-5 mr-2" />
                下载PDF
              </button>
              
              <div className="flex items-center space-x-2 bg-dark-gray/50 rounded-lg px-4 py-2">
                <Search className="w-5 h-5 text-light-gray" />
                <input
                  type="text"
                  placeholder="搜索内容..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-transparent text-white placeholder-light-gray outline-none"
                />
              </div>
              
              <div className="flex items-center space-x-2 bg-dark-gray/50 rounded-lg px-4 py-2">
                <button onClick={() => setFontSize(Math.max(12, fontSize - 2))}>
                  <Minus className="w-4 h-4 text-light-gray" />
                </button>
                <span className="text-white text-sm">{fontSize}px</span>
                <button onClick={() => setFontSize(Math.min(24, fontSize + 2))}>
                  <Plus className="w-4 h-4 text-light-gray" />
                </button>
              </div>
              
              <button 
                onClick={() => setDarkMode(!darkMode)}
                className="bg-dark-gray/50 rounded-lg px-4 py-2 text-light-gray hover:text-white"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* 目录侧边栏 */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="card-esports">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <BookOpen className="w-5 h-5 mr-2" />
                  目录
                </h3>
                <nav className="space-y-2">
                  {tableOfContents.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`block py-2 px-3 rounded text-sm transition-colors duration-200 ${
                        item.level === 2 ? 'ml-4' : ''
                      } ${
                        activeSection === item.id 
                          ? 'bg-esports-purple/20 text-esports-purple' 
                          : 'text-light-gray hover:text-white hover:bg-dark-gray/30'
                      }`}
                      onClick={() => setActiveSection(item.id)}
                    >
                      <div className="flex items-center justify-between">
                        <span>{item.title}</span>
                        <div className="flex items-center space-x-1">
                          {bookmarks.includes(item.id) && (
                            <Bookmark className="w-3 h-3 text-esports-gold" />
                          )}
                          <button
                            onClick={(e) => {
                              e.preventDefault()
                              toggleBookmark(item.id)
                            }}
                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <Bookmark className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* 主要内容 */}
          <div className="lg:col-span-3">
            <div className="whitepaper-content" style={{ fontSize: `${fontSize}px` }}>
              
              {/* 摘要 */}
              <section id="abstract" className="mb-12">
                <h2>摘要</h2>
                <div className="info-box">
                  <p>
                    METATOPIA是全球首个融合人工智能、电子竞技与区块链GameFi的创新平台。通过AI智能匹配系统、
                    去中心化治理机制和跨链资产管理，我们致力于构建一个公平、透明、可持续发展的数字游戏生态系统。
                  </p>
                  <p>
                    本白皮书详细阐述了METATOPIA的技术架构、经济模型、治理机制以及发展路线图，
                    为投资者、开发者和玩家提供全面的项目信息。
                  </p>
                </div>
              </section>

              {/* 项目背景与介绍 */}
              <section id="introduction" className="mb-12">
                <h2>1. 项目背景与介绍</h2>
                
                <h3 id="vision">1.1 项目愿景</h3>
                <p>
                  随着区块链技术的成熟和电子竞技产业的蓬勃发展，传统游戏行业正面临着前所未有的变革机遇。
                  METATOPIA应运而生，旨在通过创新的技术融合，打造下一代游戏生态系统。
                </p>
                
                <div className="info-box success">
                  <h4>核心愿景</h4>
                  <ul>
                    <li><strong>技术创新：</strong>将AI、区块链、电竞完美融合</li>
                    <li><strong>生态共建：</strong>构建开放、包容的游戏生态</li>
                    <li><strong>价值共享：</strong>让每个参与者都能获得应有回报</li>
                    <li><strong>可持续发展：</strong>建立长期稳定的经济模型</li>
                  </ul>
                </div>

                <h3 id="mission">1.2 使命与目标</h3>
                <p>
                  我们的使命是通过技术创新，为全球玩家提供更公平、更有趣、更有价值的游戏体验。
                  具体目标包括：
                </p>
                <ol>
                  <li>建立基于AI的智能匹配系统，提升游戏体验</li>
                  <li>构建去中心化的治理机制，让社区自主发展</li>
                  <li>创建跨链资产管理系统，实现真正的数字资产所有权</li>
                  <li>打造可持续的经济激励模型，促进生态繁荣</li>
                </ol>
              </section>

              {/* 代币经济模型 */}
              <section id="tokenomics" className="mb-12">
                <h2>2. 代币经济模型</h2>
                
                <div className="token-card">
                  <h3>MTP代币基本信息</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold">10亿</div>
                      <div className="text-sm opacity-80">总供应量</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">ERC-20</div>
                      <div className="text-sm opacity-80">代币标准</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">多链</div>
                      <div className="text-sm opacity-80">支持网络</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">通缩</div>
                      <div className="text-sm opacity-80">经济模型</div>
                    </div>
                  </div>
                </div>

                <h3 id="token-distribution">2.1 代币分配</h3>
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>分配类别</th>
                      <th>比例</th>
                      <th>数量</th>
                      <th>释放周期</th>
                      <th>用途说明</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>生态激励</td>
                      <td>40%</td>
                      <td>4亿 MTP</td>
                      <td>5年线性释放</td>
                      <td>游戏奖励、质押挖矿、社区激励</td>
                    </tr>
                    <tr>
                      <td>团队与顾问</td>
                      <td>20%</td>
                      <td>2亿 MTP</td>
                      <td>4年线性释放，1年锁定期</td>
                      <td>团队激励、顾问报酬</td>
                    </tr>
                    <tr>
                      <td>私募投资</td>
                      <td>15%</td>
                      <td>1.5亿 MTP</td>
                      <td>2年线性释放，6个月锁定期</td>
                      <td>早期投资者</td>
                    </tr>
                    <tr>
                      <td>公募发售</td>
                      <td>10%</td>
                      <td>1亿 MTP</td>
                      <td>上线即释放</td>
                      <td>公开发售</td>
                    </tr>
                    <tr>
                      <td>生态基金</td>
                      <td>10%</td>
                      <td>1亿 MTP</td>
                      <td>根据发展需要释放</td>
                      <td>合作伙伴、生态建设</td>
                    </tr>
                    <tr>
                      <td>储备基金</td>
                      <td>5%</td>
                      <td>5000万 MTP</td>
                      <td>紧急情况使用</td>
                      <td>应急储备、市场稳定</td>
                    </tr>
                  </tbody>
                </table>

                <h3 id="token-utility">2.2 代币用途</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="info-box">
                    <h4>游戏内应用</h4>
                    <ul>
                      <li>游戏道具购买</li>
                      <li>赛事报名费用</li>
                      <li>NFT交易媒介</li>
                      <li>技能升级费用</li>
                    </ul>
                  </div>
                  <div className="info-box">
                    <h4>生态治理</h4>
                    <ul>
                      <li>DAO提案投票</li>
                      <li>协议参数调整</li>
                      <li>新游戏上线决策</li>
                      <li>社区发展方向</li>
                    </ul>
                  </div>
                  <div className="info-box">
                    <h4>经济激励</h4>
                    <ul>
                      <li>质押挖矿奖励</li>
                      <li>流动性提供奖励</li>
                      <li>推荐用户奖励</li>
                      <li>社区贡献奖励</li>
                    </ul>
                  </div>
                  <div className="info-box">
                    <h4>价值捕获</h4>
                    <ul>
                      <li>平台手续费支付</li>
                      <li>高级功能解锁</li>
                      <li>VIP会员权益</li>
                      <li>独家活动参与</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* NFT与资产系统 */}
              <section id="nft-assets" className="mb-12">
                <h2>3. NFT与资产系统</h2>
                <p>
                  METATOPIA构建了完整的NFT资产体系，包括角色、装备、土地、收藏品等多种类型，
                  所有NFT资产都具有跨游戏互通性和真实经济价值。
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="card-esports">
                    <h4 className="text-esports-gold mb-3">角色NFT</h4>
                    <ul className="text-sm space-y-1">
                      <li>• 独特外观与属性</li>
                      <li>• 技能树系统</li>
                      <li>• 成长记录链上存储</li>
                      <li>• 跨游戏角色迁移</li>
                    </ul>
                  </div>
                  <div className="card-esports">
                    <h4 className="text-neon-cyan mb-3">装备NFT</h4>
                    <ul className="text-sm space-y-1">
                      <li>• 稀有度分级系统</li>
                      <li>• 属性随机生成</li>
                      <li>• 强化升级机制</li>
                      <li>• 装备合成系统</li>
                    </ul>
                  </div>
                  <div className="card-esports">
                    <h4 className="text-esports-purple mb-3">土地NFT</h4>
                    <ul className="text-sm space-y-1">
                      <li>• 虚拟世界地块</li>
                      <li>• 建筑与装饰权限</li>
                      <li>• 资源产出收益</li>
                      <li>• 社交活动场所</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* AI电竞生态模型 */}
              <section id="ai-esports" className="mb-12">
                <h2>4. AI电竞生态模型</h2>
                <p>
                  METATOPIA的核心创新在于将人工智能技术深度融入电竞生态，
                  通过智能算法提升游戏体验、优化赛事组织、防范作弊行为。
                </p>
                
                <div className="info-box warning">
                  <h4>AI技术应用场景</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h5 className="text-white font-semibold mb-2">智能匹配系统</h5>
                      <ul className="text-sm">
                        <li>• 技能水平评估</li>
                        <li>• 游戏风格分析</li>
                        <li>• 最优对手匹配</li>
                        <li>• 团队组合推荐</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-white font-semibold mb-2">反作弊检测</h5>
                      <ul className="text-sm">
                        <li>• 行为模式识别</li>
                        <li>• 异常操作检测</li>
                        <li>• 实时监控预警</li>
                        <li>• 自动处罚机制</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* 技术架构 */}
              <section id="technology" className="mb-12">
                <h2>5. 技术架构</h2>
                <p>
                  METATOPIA采用模块化的技术架构设计，确保系统的可扩展性、安全性和高性能。
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="card-esports">
                    <h4 className="text-white mb-3">区块链层</h4>
                    <ul className="text-sm text-light-gray space-y-1">
                      <li>• 多链支持（Ethereum、BSC、Polygon）</li>
                      <li>• 跨链桥接技术</li>
                      <li>• Layer 2 扩容方案</li>
                      <li>• 智能合约安全审计</li>
                    </ul>
                  </div>
                  <div className="card-esports">
                    <h4 className="text-white mb-3">AI算法层</h4>
                    <ul className="text-sm text-light-gray space-y-1">
                      <li>• 机器学习模型</li>
                      <li>• 深度神经网络</li>
                      <li>• 实时数据处理</li>
                      <li>• 模型持续优化</li>
                    </ul>
                  </div>
                  <div className="card-esports">
                    <h4 className="text-white mb-3">游戏引擎层</h4>
                    <ul className="text-sm text-light-gray space-y-1">
                      <li>• Unity/Unreal Engine支持</li>
                      <li>• 跨平台兼容性</li>
                      <li>• 高性能渲染</li>
                      <li>• 实时同步机制</li>
                    </ul>
                  </div>
                  <div className="card-esports">
                    <h4 className="text-white mb-3">数据存储层</h4>
                    <ul className="text-sm text-light-gray space-y-1">
                      <li>• IPFS分布式存储</li>
                      <li>• 链上关键数据</li>
                      <li>• 链下辅助数据</li>
                      <li>• 数据备份机制</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* 发展路线图 */}
              <section id="roadmap" className="mb-12">
                <h2>6. 发展路线图</h2>
                
                <div className="roadmap-timeline">
                  <div className="roadmap-item completed">
                    <div className="roadmap-content">
                      <h4 className="text-white font-semibold mb-2">2024 Q4 - 项目启动</h4>
                      <ul className="text-sm text-light-gray">
                        <li>• 团队组建完成</li>
                        <li>• 技术架构设计</li>
                        <li>• 白皮书发布</li>
                        <li>• 社区建设启动</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="roadmap-item current">
                    <div className="roadmap-content">
                      <h4 className="text-white font-semibold mb-2">2025 Q1 - 基础建设</h4>
                      <ul className="text-sm text-light-gray">
                        <li>• 智能合约开发</li>
                        <li>• AI算法优化</li>
                        <li>• 测试网络上线</li>
                        <li>• 私募轮融资</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="roadmap-item upcoming">
                    <div className="roadmap-content">
                      <h4 className="text-white font-semibold mb-2">2025 Q2 - 平台上线</h4>
                      <ul className="text-sm text-light-gray">
                        <li>• 主网正式上线</li>
                        <li>• 首款游戏发布</li>
                        <li>• 代币公开发售</li>
                        <li>• 交易所上线</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="roadmap-item upcoming">
                    <div className="roadmap-content">
                      <h4 className="text-white font-semibold mb-2">2025 Q3-Q4 - 生态扩展</h4>
                      <ul className="text-sm text-light-gray">
                        <li>• 多款游戏接入</li>
                        <li>• DAO治理启动</li>
                        <li>• 跨链功能上线</li>
                        <li>• 全球赛事举办</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* 风险与合规 */}
              <section id="risks" className="mb-12">
                <h2>7. 风险与合规</h2>
                
                <div className="info-box warning">
                  <h4>主要风险因素</h4>
                  <ul>
                    <li><strong>技术风险：</strong>智能合约漏洞、AI算法偏差、系统性能瓶颈</li>
                    <li><strong>市场风险：</strong>加密货币市场波动、竞争对手威胁、用户接受度</li>
                    <li><strong>监管风险：</strong>政策法规变化、合规要求提升、跨境监管差异</li>
                    <li><strong>运营风险：</strong>团队执行力、资金管理、合作伙伴关系</li>
                  </ul>
                </div>
                
                <div className="info-box success">
                  <h4>风险缓解措施</h4>
                  <ul>
                    <li><strong>技术保障：</strong>多轮安全审计、渐进式升级、备份机制</li>
                    <li><strong>合规建设：</strong>法律顾问团队、合规框架建立、监管沟通</li>
                    <li><strong>风险管理：</strong>风险评估体系、应急预案、保险机制</li>
                    <li><strong>透明治理：</strong>社区监督、定期报告、开源代码</li>
                  </ul>
                </div>
              </section>

              {/* 结语 */}
              <section id="conclusion" className="mb-12">
                <div className="conclusion-section">
                  <h2 className="text-white mb-6">8. 结语</h2>
                  <p className="text-lg mb-4">
                    METATOPIA代表着游戏行业的未来发展方向，通过AI、电竞与区块链的深度融合，
                    我们正在构建一个全新的数字娱乐生态系统。
                  </p>
                  <p className="text-lg mb-6">
                    我们相信，在社区的共同努力下，METATOPIA将成为连接虚拟与现实、
                    技术与人文、创新与传统的桥梁，为全球玩家带来前所未有的游戏体验。
                  </p>
                  <p className="text-xl font-semibold">
                    加入我们，一起创造游戏的未来！
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhitepaperPage