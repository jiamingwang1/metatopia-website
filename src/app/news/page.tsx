'use client'

import { useState } from 'react'
import { Calendar, Clock, Eye, Share2, Filter, Search, TrendingUp, Award, Rocket, Users } from 'lucide-react'

const NewsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = [
    { id: 'all', label: '全部', count: 24 },
    { id: 'product', label: '产品更新', count: 8 },
    { id: 'partnership', label: '合作伙伴', count: 6 },
    { id: 'funding', label: '融资消息', count: 4 },
    { id: 'community', label: '社区活动', count: 6 }
  ]

  const featuredNews = {
    title: 'METATOPIA完成7000万美元A轮融资，a16z领投',
    excerpt: '本轮融资将用于加速AI算法研发、扩展全球市场和建设GameFi生态系统',
    image: '/api/placeholder/600/300',
    date: '2024-02-01',
    category: 'funding',
    readTime: '5分钟',
    views: 15420
  }

  const newsData = [
    {
      id: 1,
      title: 'METATOPIA AI匹配算法2.0正式上线',
      excerpt: '新版本算法提升匹配准确率至95%，大幅改善玩家游戏体验',
      image: '/api/placeholder/400/200',
      date: '2024-01-28',
      category: 'product',
      readTime: '3分钟',
      views: 8920,
      tags: ['AI算法', '产品更新', '用户体验']
    },
    {
      id: 2,
      title: '与Riot Games达成战略合作，共建电竞生态',
      excerpt: '双方将在电竞赛事、选手培养和技术创新等领域展开深度合作',
      image: '/api/placeholder/400/200',
      date: '2024-01-25',
      category: 'partnership',
      readTime: '4分钟',
      views: 12350,
      tags: ['战略合作', 'Riot Games', '电竞']
    },
    {
      id: 3,
      title: '全球首届METATOPIA锦标赛即将开幕',
      excerpt: '总奖金池100万MTP，来自50个国家的10000名选手将参与角逐',
      image: '/api/placeholder/400/200',
      date: '2024-01-22',
      category: 'community',
      readTime: '6分钟',
      views: 18750,
      tags: ['电竞赛事', '全球锦标赛', '奖金池']
    },
    {
      id: 4,
      title: 'NFT市场交易量突破1000万美元里程碑',
      excerpt: '平台NFT生态蓬勃发展，用户活跃度和交易频次持续攀升',
      image: '/api/placeholder/400/200',
      date: '2024-01-20',
      category: 'product',
      readTime: '3分钟',
      views: 9680,
      tags: ['NFT', '交易量', '里程碑']
    },
    {
      id: 5,
      title: 'Binance Labs战略投资METATOPIA',
      excerpt: '将在技术开发、市场拓展和生态建设等方面提供全方位支持',
      image: '/api/placeholder/400/200',
      date: '2024-01-18',
      category: 'funding',
      readTime: '4分钟',
      views: 14200,
      tags: ['投资', 'Binance Labs', '战略合作']
    },
    {
      id: 6,
      title: '社区DAO治理系统Beta版本发布',
      excerpt: '社区成员现可参与平台重要决策，共同塑造METATOPIA的未来',
      image: '/api/placeholder/400/200',
      date: '2024-01-15',
      category: 'product',
      readTime: '5分钟',
      views: 7890,
      tags: ['DAO治理', 'Beta版本', '社区参与']
    },
    {
      id: 7,
      title: '跨链桥接功能正式启用',
      excerpt: '支持Ethereum、Polygon、BNB Chain等多条主流区块链',
      image: '/api/placeholder/400/200',
      date: '2024-01-12',
      category: 'product',
      readTime: '4分钟',
      views: 11200,
      tags: ['跨链', '区块链', '技术升级']
    },
    {
      id: 8,
      title: '与Epic Games建立技术合作关系',
      excerpt: '将在游戏引擎优化和3D渲染技术方面展开合作',
      image: '/api/placeholder/400/200',
      date: '2024-01-10',
      category: 'partnership',
      readTime: '3分钟',
      views: 9450,
      tags: ['Epic Games', '技术合作', '游戏引擎']
    }
  ]

  const mediaReports = [
    {
      outlet: 'TechCrunch',
      title: 'METATOPIA: The Future of GameFi is Here',
      date: '2024-01-30',
      url: '#'
    },
    {
      outlet: 'CoinDesk',
      title: 'How AI is Revolutionizing Gaming Economics',
      date: '2024-01-28',
      url: '#'
    },
    {
      outlet: 'VentureBeat',
      title: 'The Rise of Intelligent Gaming Platforms',
      date: '2024-01-25',
      url: '#'
    },
    {
      outlet: 'Forbes',
      title: 'Web3 Gaming: Beyond Play-to-Earn',
      date: '2024-01-22',
      url: '#'
    }
  ]

  const filteredNews = newsData.filter(news => {
    const matchesCategory = selectedCategory === 'all' || news.category === selectedCategory
    const matchesSearch = news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         news.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'product': return Rocket
      case 'partnership': return Users
      case 'funding': return TrendingUp
      case 'community': return Award
      default: return Clock
    }
  }

  const getCategoryColor = (category) => {
    switch (category) {
      case 'product': return 'text-neon-cyan'
      case 'partnership': return 'text-esports-purple'
      case 'funding': return 'text-success-green'
      case 'community': return 'text-esports-gold'
      default: return 'text-light-gray'
    }
  }

  const getCategoryBg = (category) => {
    switch (category) {
      case 'product': return 'bg-neon-cyan/20'
      case 'partnership': return 'bg-esports-purple/20'
      case 'funding': return 'bg-success-green/20'
      case 'community': return 'bg-esports-gold/20'
      default: return 'bg-light-gray/20'
    }
  }

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 particles-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
            最新动态
          </h1>
          <p className="text-xl md:text-2xl text-light-gray mb-8 max-w-3xl mx-auto">
            关注METATOPIA的最新发展，了解GameFi行业前沿资讯
          </p>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-16 bg-dark-gray/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">头条新闻</h2>
          <div className="card-esports overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="relative">
                <div className="w-full h-64 bg-gradient-purple-cyan rounded-lg flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">Featured Image</span>
                </div>
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryBg('funding')} ${getCategoryColor('funding')}`}>
                    融资消息
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {featuredNews.title}
                </h3>
                <p className="text-light-gray mb-6 text-lg">
                  {featuredNews.excerpt}
                </p>
                <div className="flex items-center space-x-6 text-sm text-light-gray mb-6">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{featuredNews.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{featuredNews.readTime}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Eye className="w-4 h-4" />
                    <span>{featuredNews.views.toLocaleString()}</span>
                  </div>
                </div>
                <button className="btn-neon-glow w-fit">
                  阅读全文
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-light-gray" />
              <input
                type="text"
                placeholder="搜索新闻..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-dark-gray/50 border border-dark-gray rounded-lg text-white placeholder-light-gray focus:outline-none focus:border-neon-cyan"
              />
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-purple-cyan text-white'
                      : 'bg-dark-gray/50 text-light-gray hover:bg-dark-gray/70'
                  }`}
                >
                  {category.label} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((news) => {
              const CategoryIcon = getCategoryIcon(news.category)
              return (
                <div key={news.id} className="card-esports group hover:scale-105 transition-transform duration-300 cursor-pointer">
                  {/* Image */}
                  <div className="relative mb-4">
                    <div className="w-full h-48 bg-gradient-purple-cyan rounded-lg flex items-center justify-center">
                      <span className="text-white font-semibold">News Image</span>
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1 ${getCategoryBg(news.category)} ${getCategoryColor(news.category)}`}>
                        <CategoryIcon className="w-3 h-3" />
                        <span>
                          {news.category === 'product' ? '产品更新' :
                           news.category === 'partnership' ? '合作伙伴' :
                           news.category === 'funding' ? '融资消息' :
                           news.category === 'community' ? '社区活动' : '其他'}
                        </span>
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-white group-hover:text-neon-cyan transition-colors">
                      {news.title}
                    </h3>
                    <p className="text-light-gray text-sm line-clamp-2">
                      {news.excerpt}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1">
                      {news.tags.slice(0, 2).map((tag, index) => (
                        <span key={index} className="text-xs bg-dark-gray/50 text-light-gray px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Meta */}
                    <div className="flex items-center justify-between text-xs text-light-gray pt-2 border-t border-dark-gray/50">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{news.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{news.readTime}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1">
                          <Eye className="w-3 h-3" />
                          <span>{news.views.toLocaleString()}</span>
                        </div>
                        <button className="hover:text-neon-cyan transition-colors">
                          <Share2 className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          
          {/* Load More */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-dark-gray/50 text-white rounded-lg hover:bg-dark-gray/70 transition-all duration-300">
              加载更多新闻
            </button>
          </div>
        </div>
      </section>

      {/* Media Reports */}
      <section className="py-16 bg-dark-gray/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            媒体报道
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mediaReports.map((report, index) => (
              <div key={index} className="card-esports">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-white mb-1">{report.title}</h3>
                    <div className="flex items-center space-x-3 text-sm">
                      <span className="text-esports-gold font-medium">{report.outlet}</span>
                      <span className="text-light-gray">•</span>
                      <span className="text-light-gray">{report.date}</span>
                    </div>
                  </div>
                  <button className="text-neon-cyan hover:text-white transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            订阅新闻通讯
          </h2>
          <p className="text-xl text-light-gray mb-8">
            第一时间获取METATOPIA的最新动态和行业资讯
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="输入您的邮箱地址"
              className="flex-1 px-4 py-3 bg-dark-gray/50 border border-dark-gray rounded-lg text-white placeholder-light-gray focus:outline-none focus:border-neon-cyan"
            />
            <button className="btn-neon-glow whitespace-nowrap">
              立即订阅
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