import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: '凌梓菲 - 财务 / 商业财务 / AP&AR | 个人简历',
  description: '凌梓菲，上海对外经贸大学审计学（注册会计师方向）2026届毕业生。拥有哔哩哔哩、Godiva、前程无忧、安永会计师事务所实习经历，擅长财务对账、数据整理分析、流程优化。',
  keywords: ['财务', '商业财务', 'AP&AR', '会计', '审计', '注册会计师', '哔哩哔哩', '安永', 'Godiva', '前程无忧', '财务实习'],
  authors: [{ name: '凌梓菲' }],
  creator: '凌梓菲',
  publisher: '凌梓菲',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    title: '凌梓菲 - 财务 / 商业财务 / AP&AR',
    description: '个人简历 - 上海对外经贸大学审计学专业，互联网+外企+四大实习经历',
    siteName: '凌梓菲 个人简历',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '凌梓菲 个人简历',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '凌梓菲 - 财务 / 商业财务 / AP&AR',
    description: '个人简历 - 上海对外经贸大学审计学专业，互联网+外企+四大实习经历',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    maxSnippet: -1,
    maxImagePreview: 'large',
    maxVideoPreview: -1,
  },
  alternates: {
    canonical: '',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-navy-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}