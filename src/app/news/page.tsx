"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, User, Search, Filter, ChevronRight, ExternalLink } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// 新闻数据类型
interface NewsItem {
  id: number
  title: string
  summary: string
  content: string
  author: string
  date: string
  category: string
  readTime: number
  image?: string
  tags: string[]
  featured?: boolean
}

// 模拟新闻数据
const newsData: NewsItem[] = [
  {
    id: 1,
    title: "MetaTopia生态系统重大更新：引入AI驱动的治理机制",
    summary: "我们很高兴宣布MetaTopia生态系统的最新重大更新，引入了革命性的AI驱动治理机制，为去中心化自治组织(DAO)带来前所未有的智能化管理体验。",
    content: "详细内容...",
    author: "MetaTopia团队",
    date: "2024-01-15",
    category: "技术更新",
    readTime: 5,
    tags: ["AI", "治理", "DAO", "更新"],
    featured: true
  },
  {
    id: 2,
    title: "MTP代币经济模型2.0正式发布",
    summary: "经过社区广泛讨论和专家团队精心设计，MTP代币经济模型2.0正式发布，新模型将更好地平衡生态系统各方利益，促进长期可持续发展。",
    content: "详细内容...",
    author: "经济学团队",
    date: "2024-01-12",
    category: "经济模型",
    readTime: 8,
    tags: ["MTP", "代币经济", "模型", "发布"]
  },
  {
    id: 3,
    title: "MetaTopia与顶级GameFi项目达成战略合作",
    summary: "MetaTopia宣布与多个顶级GameFi项目达成战略合作伙伴关系，将共同构建更加丰富和互联的元宇宙游戏生态系统。",
    content: "详细内容...",
    author: "商务发展部",
    date: "2024-01-10",
    category: "合作伙伴",
    readTime: 6,
    tags: ["GameFi", "合作", "生态", "游戏"]
  },
  {
    id: 4,
    title: "社区治理提案：新的奖励分配机制",
    summary: "社区提出了新的奖励分配机制提案，旨在更公平地分配生态系统收益，鼓励长期持有者和活跃贡献者。",
    content: "详细内容...",
    author: "社区委员会",
    date: "2024-01-08",
    category: "社区治理",
    readTime: 4,
    tags: ["治理", "奖励", "社区", "提案"]
  },
  {
    id: 5,
    title: "MetaTopia技术路线图Q1更新",
    summary: "2024年第一季度技术路线图更新，包括跨链桥接、Layer 2扩展方案和新的DeFi协议集成等重要功能。",
    content: "详细内容...",
    author: "技术团队",
    date: "2024-01-05",
    category: "技术更新",
    readTime: 7,
    tags: ["路线图", "跨链", "Layer2", "DeFi"]
  },
  {
    id: 6,
    title: "年度社区贡献者表彰大会成功举办",
    summary: "MetaTopia年度社区贡献者表彰大会圆满结束，表彰了在过去一年中为生态系统发展做出杰出贡献的社区成员。",
    content: "详细内容...",
    author: "社区运营",
    date: "2024-01-03",
    category: "社区活动",
    readTime: 3,
    tags: ["社区", "表彰", "贡献者", "活动"]
  }
]

const categories = ["全部", "技术更新", "经济模型", "合作伙伴", "社区治理", "社区活动"]
const sortOptions = ["最新发布", "最受欢迎", "阅读时间"]

export default function NewsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('全部')
  const [sortBy, setSortBy] = useState('最新发布')
  const [filteredNews, setFilteredNews] = useState<NewsItem[]>(newsData)
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null)

  // 过滤和排序新闻
  useEffect(() => {
    let filtered = newsData.filter(news => {
      const matchesSearch = news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           news.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           news.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      const matchesCategory = selectedCategory === '全部' || news.category === selectedCategory
      return matchesSearch && matchesCategory
    })

    // 排序
    switch (sortBy) {
      case '最新发布':
        filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        break
      case '最受欢迎':
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
        break
      case '阅读时间':
        filtered.sort((a, b) => a.readTime - b.readTime)
        break
    }

    setFilteredNews(filtered)
  }, [searchTerm, selectedCategory, sortBy])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const NewsCard = ({ news }: { news: NewsItem }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="bg-dark-gray/50 backdrop-blur-sm border border-light-gray/20 rounded-xl p-6 cursor-pointer group hover:border-neon-cyan/50 transition-all duration-300"
      onClick={() => setSelectedNews(news)}
    >
      {news.featured && (
        <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full text-xs font-medium text-white mb-4">
          精选文章
        </div>
      )}
      
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors">
        {news.title}
      </h3>
      
      <p className="text-light-gray mb-4 line-clamp-3">
        {news.summary}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {news.tags.map((tag, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-neon-cyan/20 text-neon-cyan text-xs rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex items-center justify-between text-sm text-light-gray">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <User className="w-4 h-4" />
            <span>{news.author}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Calendar className="w-4 h-4" />
            <span>{formatDate(news.date)}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{news.readTime}分钟阅读</span>
          </div>
        </div>
        <ChevronRight className="w-5 h-5 group-hover:text-neon-cyan transition-colors" />
      </div>
    </motion.div>
  )

  const NewsDetail = ({ news }: { news: NewsItem }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={() => setSelectedNews(null)}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-dark-gray border border-light-gray/20 rounded-xl max-w-4xl max-h-[90vh] overflow-y-auto p-8"
        onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <span className="px-3 py-1 bg-neon-cyan/20 text-neon-cyan text-sm rounded-full">
              {news.category}
            </span>
            {news.featured && (
              <span className="px-3 py-1 bg-gradient-to-r from-neon-cyan to-neon-purple text-white text-sm rounded-full">
                精选
              </span>
            )}
          </div>
          <button
            onClick={() => setSelectedNews(null)}
            className="text-light-gray hover:text-white transition-colors"
          >
            ✕
          </button>
        </div>
        
        <h1 className="text-3xl font-bold text-white mb-4">{news.title}</h1>
        
        <div className="flex items-center space-x-6 text-light-gray mb-6">
          <div className="flex items-center space-x-2">
            <User className="w-5 h-5" />
            <span>{news.author}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="w-5 h-5" />
            <span>{formatDate(news.date)}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-5 h-5" />
            <span>{news.readTime}分钟阅读</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {news.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-neon-cyan/20 text-neon-cyan text-sm rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-light-gray text-lg leading-relaxed mb-6">
            {news.summary}
          </p>
          <div className="text-light-gray leading-relaxed">
            {news.content}
          </div>
        </div>
        
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-light-gray/20">
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 px-4 py-2 bg-neon-cyan/20 text-neon-cyan rounded-lg hover:bg-neon-cyan/30 transition-colors">
              <span>分享</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )

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
                新闻资讯
              </h1>
              <p className="text-xl text-light-gray max-w-3xl mx-auto">
                获取MetaTopia生态系统的最新动态、技术更新和社区资讯
              </p>
            </motion.div>
            
            {/* 搜索和过滤 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-dark-gray/50 backdrop-blur-sm border border-light-gray/20 rounded-xl p-6 mb-12"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* 搜索框 */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-light-gray w-5 h-5" />
                  <input
                    type="text"
                    placeholder="搜索新闻..."
                    value={searchTerm}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-dark-gray/50 border border-light-gray/20 rounded-lg text-white placeholder-light-gray focus:border-neon-cyan focus:outline-none"
                  />
                </div>
                
                {/* 分类过滤 */}
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-light-gray w-5 h-5" />
                  <select
                    value={selectedCategory}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedCategory(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-dark-gray/50 border border-light-gray/20 rounded-lg text-white focus:border-neon-cyan focus:outline-none appearance-none"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
                
                {/* 排序 */}
                <div>
                  <select
                    value={sortBy}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSortBy(e.target.value)}
                    className="w-full px-4 py-3 bg-dark-gray/50 border border-light-gray/20 rounded-lg text-white focus:border-neon-cyan focus:outline-none appearance-none"
                  >
                    {sortOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>
            </motion.div>
            
            {/* 新闻列表 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.map((news, index) => (
                <motion.div
                  key={news.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <NewsCard news={news} />
                </motion.div>
              ))}
            </div>
            
            {filteredNews.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-light-gray text-lg">没有找到匹配的新闻</p>
              </motion.div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
      
      {/* 新闻详情弹窗 */}
      {selectedNews && <NewsDetail news={selectedNews} />}
    </div>
  )
}