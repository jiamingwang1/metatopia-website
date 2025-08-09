import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'METATOPIA (MTP) - 融合AI、电竞与链上经济的下一代GameFi平台',
  description: 'METATOPIA是全球首个融合AI、电竞与链上经济的下一代GameFi平台，致力于打造去中心化电竞生态。通过智能赛事匹配、链上反作弊、跨游戏资产互通和多元化NFT经济，为玩家提供完整的Web3游戏体验。',
  keywords: 'METATOPIA, MTP, GameFi, 电竞, AI, 区块链游戏, NFT, DAO, Web3',
  authors: [{ name: 'METATOPIA Team' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'METATOPIA (MTP) - 下一代GameFi平台',
    description: '融合AI、电竞与链上经济的创新GameFi生态系统',
    type: 'website',
    locale: 'zh_CN',
    alternateLocale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'METATOPIA (MTP)',
    description: '下一代GameFi平台 - AI × 电竞 × 区块链',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh" className="dark">
      <body className={`${inter.className} min-h-screen bg-space-blue`}>
        <div className="relative">
          {/* 背景粒子效果 */}
          <div className="fixed inset-0 tech-grid-bg opacity-20 pointer-events-none" />
          
          {/* 主要内容 */}
          <div className="relative z-10">
            <Navbar />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}