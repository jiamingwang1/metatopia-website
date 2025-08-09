'use client'

import { useState, useEffect } from 'react'
import { Calendar, Clock, User, Tag, ArrowRight, Search, Filter, TrendingUp, MessageCircle, Share2, Eye } from 'lucide-react'

const NewsPage = () => {
  const [mounted, setMounted] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedArticle, setSelectedArticle] = useState(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const categories = [
    { id: 'all', label: '全部', count: 24 },
    { id: 'product', label: '产品更新', count: 8 },
    { id: 'partnership', label: '合作伙伴', count: 6 },
    { id: 'community', label: '社区动态', count: 5 },
    { id: 'technology', label: '技术进展', count: 3 },
    { id: 'events', label: '活动公告', count: 2 }
  ]

  const featuredNews = {
    id: 1,
    title: 'METATOPIA主网正式上线，开启GameFi新纪元',
    excerpt: '经过18个月的精心开发和测试，METATOPIA主网今日正式上线，标志着我们向构建完整GameFi生态系统迈出了重要一步。',
    content: `
      <p>今天是METATOPIA发展历程中的重要里程碑。经过18个月的精心开发、严格测试和社区反馈，我们很高兴地宣布METATOPIA主网正式上线！</p>
      
      <h3>主网上线亮点</h3>
      <ul>
        <li><strong>完整的GameFi基础设施</strong>：支持游戏资产NFT化、代币经济系统和跨链互操作</li>
        <li><strong>AI驱动的智能匹配</strong>：基于机器学习的玩家匹配和游戏推荐系统</li>
        <li><strong>去中心化治理</strong>：MTP持有者可参与平台重要决策的投票</li>
        <li><strong>安全可靠</strong>：通过多家知名安全公司的智能合约审计</li>
      </ul>
      
      <h3>技术创新</h3>
      <p>METATOPIA主网采用了多项创新技术，包括：</p>
      <ul>
        <li>Layer 2扩容解决方案，实现低成本、高速度交易</li>
        <li>跨链桥接技术，支持多个区块链网络</li>
        <li>AI反作弊系统，确保游戏公平性</li>
        <li>模块化架构，支持快速集成新游戏</li>
      </ul>
      
      <h3>生态系统发展</h3>
      <p>主网上线后，我们将重点发展以下几个方面：</p>
      <ul>
        <li>与更多游戏开发商建立合作关系</li>
        <li>扩大社区规模和用户基础</li>
        <li>推出更多创新的GameFi产品</li>
        <li>加强与传统游戏行业的融合</li>
      </ul>
      
      <p>感谢所有社区成员、合作伙伴和团队成员的支持。让我们一起开启GameFi的新纪元！</p>
    `,
    category: 'product',
    author: 'METATOPIA Team',
    date: '2025-04-01',
    readTime: '5 分钟',
    views: 15420,
    comments: 89,
    tags: ['主网上线', 'GameFi', '里程碑'],
    image: '🚀'
  }

  const newsArticles = [
    {
      id: 2,
      title: '与Unity Technologies达成战略合作',
      excerpt: 'METATOPIA与全球领先的游戏引擎公司Unity Technologies签署战略合作协议，将为开发者提供更好的GameFi开发工具。',
      category: 'partnership',
      author: 'Emily Zhang',
      date: '2025-03-28',
      readTime: '3 分钟',
      views: 8920,
      comments: 45,
      tags: ['合作伙伴', 'Unity', '开发工具'],
      image: '🤝'
    },
    {
      id: 3,
      title: 'MTP代币正式上线Binance交易所',
      excerpt: 'MTP代币今日正式在Binance交易所上线交易，为全球用户提供更便捷的交易渠道。',
      category: 'product',
      author: 'Michael Johnson',
      date: '2025-03-25',
      readTime: '2 分钟',
      views: 12350,
      comments: 156,
      tags: ['MTP代币', 'Binance', '上线'],
      image: '💰'
    },
    {
      id: 4,
      title: '社区治理提案投票系统上线',
      excerpt: '全新的DAO治理系统正式上线，MTP持有者现在可以参与平台重要决策的投票。',
      category: 'community',
      author: 'Sarah Kim',
      date: '2025-03-22',
      readTime: '4 分钟',
      views: 6780,
      comments: 67,
      tags: ['DAO治理', '投票系统', '社区'],
      image: '🗳️'
    },
    {
      id: 5,
      title: '首届METATOPIA电竞锦标赛启动',
      excerpt: '总奖金池100万美元的首届METATOPIA电竞锦标赛正式启动，全球玩家均可参与。',
      category: 'events',
      author: 'David Rodriguez',
      date: '2025-03-20',
      readTime: '3 分钟',
      views: 9540,
      comments: 234,
      tags: ['电竞锦标赛', '奖金池', '全球赛事'],
      image: '🏆'
    },
    {
      id: 6,
      title: 'AI反作弊系统技术详解',
      excerpt: '深入解析METATOPIA的AI反作弊系统如何确保游戏公平性和用户体验。',
      category: 'technology',
      author: 'Alex Chen',
      date: '2025-03-18',
      readTime: '6 分钟',
      views: 4320,
      comments: 28,
      tags: ['AI技术', '反作弊', '技术解析'],
      image: '🤖'
    },
    {
      id: 7,
      title: '跨链桥接功能正式发布',
      excerpt: 'METATOPIA跨链桥接功能正式发布，支持以太坊、Polygon和Arbitrum网络。',
      category: 'product',
      author: 'Sarah Kim',
      date: '2025-03-15',
      readTime: '4 分钟',
      views: 7890,
      comments: 92,
      tags: ['跨链桥接', '多链支持', '技术升级'],
      image: '🌉'
    },
    {
      id: 8,
      title: '社区开发者基金正式启动',
      excerpt: '总价值500万美元的社区开发者基金正式启动，支持第三方开发者为生态贡献。',
      category: 'community',
      author: 'Emily Zhang',
      date: '2025-03-12',
      readTime: '3 分钟',
      views: 5670,
      comments: 78,
      tags: ['开发者基金', '生态建设', '社区支持'],
      image: '💡'
    },
    {
      id: 9,
      title: '与Polygon Studios深化合作',
      excerpt: 'METATOPIA与Polygon Studios签署深度合作协议，共同推进Layer 2生态发展。',
      category: 'partnership',
      author: 'Michael Johnson',
      date: '2025-03-10',
      readTime: '3 分钟',
      views: 6230,
      comments: 54,
      tags: ['Polygon', 'Layer 2', '生态合作'],
      image: '🟣'
    }
  ]

  const allNews = [featuredNews, ...newsArticles]

  const filteredNews = allNews.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const getCategoryColor = (category) => {
    const colors = {
      product: 'text-esports-gold',
      partnership: 'text-neon-cyan',
      community: 'text-success-green',
      technology: 'text-esports-purple',
      events: 'text-red-400'
    }
    return colors[category] || 'text-light-gray'
  }

  const getCategoryBg = (category) => {
    const colors = {
      product: 'bg-esports-gold/10 border-esports-gold/30',
      partnership: 'bg-neon-cyan/10 border-neon-cyan/30',
      community: 'bg-success-green/10 border-success-green/30',
      technology: 'bg-esports-purple/10 border-esports-purple/30',
      events: 'bg-red-400/10 border-red-400/30'
    }
    return colors[category] || 'bg-light-gray/10 border-light-gray/30'
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
            最新 <span className="text-gradient">动态</span>
          </h1>
          <p className="text-xl md:text-2xl text-light-gray mb-8 max-w-4xl mx-auto">
            了解METATOPIA的最新发展、产品更新和社区动态
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-dark-gray/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-light-gray w-5 h-5" />
                <input
                  type="text"
                  placeholder="搜索新闻..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-dark-gray/50 border border-light-gray/20 rounded-lg text-white placeholder-light-gray focus:border-neon-cyan focus:outline-none"
                />
              </div>
            </div>
            
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-esports-purple text-white'
                      : 'bg-dark-gray/50 text-light-gray hover:text-white hover:bg-dark-gray/70'
                  }`}
                >
                  {category.label} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured News */}
      {selectedCategory === 'all' && !searchTerm && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-8">头条新闻</h2>
            
            <div className="card-esports overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="order-2 lg:order-1">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs border ${getCategoryBg(featuredNews.category)}`}>
                      {categories.find(c => c.id === featuredNews.category)?.label}
                    </span>
                    <div className="flex items-center text-sm text-light-gray space-x-4">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {featuredNews.date}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {featuredNews.readTime}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {featuredNews.title}
                  </h3>
                  
                  <p className="text-light-gray mb-6 leading-relaxed">
                    {featuredNews.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4 text-sm text-light-gray">
                      <span className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {featuredNews.views.toLocaleString()}
                      </span>
                      <span className="flex items-center">
                        <MessageCircle className="w-4 h-4 mr-1" />
                        {featuredNews.comments}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      {featuredNews.tags.map((tag, idx) => (
                        <span key={idx} className="px-2 py-1 bg-dark-gray/50 rounded text-xs text-light-gray">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => setSelectedArticle(featuredNews)}
                    className="btn-neon"
                  >
                    阅读全文
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
                
                <div className="order-1 lg:order-2 flex items-center justify-center">
                  <div className="text-8xl">{featuredNews.image}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* News List */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white">
              {selectedCategory === 'all' ? '所有新闻' : categories.find(c => c.id === selectedCategory)?.label}
            </h2>
            <div className="text-light-gray">
              共 {filteredNews.length} 篇文章
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.slice(selectedCategory === 'all' && !searchTerm ? 1 : 0).map((article) => (
              <div key={article.id} className="card-esports group hover:scale-105 transition-transform duration-300">
                <div className="text-4xl mb-4 text-center">{article.image}</div>
                
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs border ${getCategoryBg(article.category)}`}>
                    {categories.find(c => c.id === article.category)?.label}
                  </span>
                  <div className="flex items-center text-xs text-light-gray space-x-2">
                    <Calendar className="w-3 h-3" />
                    <span>{article.date}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-3 line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-light-gray text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-light-gray mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="flex items-center">
                      <User className="w-3 h-3 mr-1" />
                      {article.author}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {article.readTime}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="flex items-center">
                      <Eye className="w-3 h-3 mr-1" />
                      {article.views.toLocaleString()}
                    </span>
                    <span className="flex items-center">
                      <MessageCircle className="w-3 h-3 mr-1" />
                      {article.comments}
                    </span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {article.tags.slice(0, 2).map((tag, idx) => (
                    <span key={idx} className="px-2 py-1 bg-dark-gray/30 rounded text-xs text-light-gray">
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <button 
                  onClick={() => setSelectedArticle(article)}
                  className="w-full px-4 py-2 border border-light-gray/30 rounded-lg hover:border-neon-cyan hover:text-neon-cyan transition-colors duration-300 text-sm"
                >
                  阅读更多
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Article Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-space-blue border border-light-gray/20 rounded-xl max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <span className={`px-3 py-1 rounded-full text-xs border ${getCategoryBg(selectedArticle.category)}`}>
                    {categories.find(c => c.id === selectedArticle.category)?.label}
                  </span>
                  <div className="flex items-center text-sm text-light-gray space-x-4">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {selectedArticle.date}
                    </span>
                    <span className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {selectedArticle.author}
                    </span>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedArticle(null)}
                  className="text-light-gray hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>
              
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-6">
                {selectedArticle.title}
              </h1>
              
              <div className="text-center mb-8">
                <div className="text-6xl">{selectedArticle.image}</div>
              </div>
              
              <div className="prose prose-invert max-w-none">
                {selectedArticle.content ? (
                  <div dangerouslySetInnerHTML={{ __html: selectedArticle.content }} />
                ) : (
                  <p className="text-light-gray leading-relaxed">{selectedArticle.excerpt}</p>
                )}
              </div>
              
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-light-gray/20">
                <div className="flex flex-wrap gap-2">
                  {selectedArticle.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-dark-gray/30 rounded-full text-sm text-light-gray">
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-2 text-light-gray hover:text-neon-cyan transition-colors">
                    <Share2 className="w-4 h-4" />
                    <span>分享</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Newsletter Subscription */}
      <section className="py-20 bg-gradient-to-r from-esports-purple/20 to-neon-cyan/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            订阅新闻通讯
          </h2>
          <p className="text-xl text-light-gray mb-8">
            第一时间获取METATOPIA的最新动态和重要公告
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="输入您的邮箱地址"
              className="flex-1 px-4 py-3 bg-dark-gray/50 border border-light-gray/20 rounded-lg text-white placeholder-light-gray focus:border-neon-cyan focus:outline-none"
            />
            <button className="btn-neon whitespace-nowrap">
              <TrendingUp className="w-4 h-4 mr-2" />
              订阅
            </button>
          </div>
          
          <p className="text-sm text-light-gray mt-4">
            我们承诺保护您的隐私，不会向第三方分享您的邮箱地址
          </p>
        </div>
      </section>
    </div>
  )
}

export default NewsPage