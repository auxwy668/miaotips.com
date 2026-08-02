// ============================================================
// miaotips.com — 快喵VPN中文教程与评测站
// ============================================================
export const siteConfig = {
  // ── 基础信息 ──
  name: '快喵教程',
  title: '快喵VPN教程 — 下载安装使用评测一站式指南',
  description: '快喵VPN最新官方下载与中文教程。涵盖Windows/Mac/Android/iOS全平台安装、使用教程、节点选择、套餐对比、常见问题排查和竞品对比评测。',
  keywords: '快喵,VPN教程,快喵下载,快喵VPN,翻墙,快喵官网,快喵使用教程,快喵评测',
  url: 'https://miaotips.com',
  language: 'zh-CN',
  author: '快喵教程',
  email: 'contact@miaotips.com',

  // ── 下载链接 ──
  cpaDownloadUrl: 'https://acekuaimiao.com/zh-hans/products/windows',
  cpaDownloadText: '立即下载快喵',

  // ── 更新浮窗 ──
  newsFloat: {
    date: '更新日期：2026-08-02',
    label: '快喵VPN 最新动态',
    items: [
      '1. 快喵最新版本发布，全球节点提速',
      '2. IPLC 专线节点稳定优化',
      '3. 新增多国免费节点可选',
    ],
  },

  // ── Logo 区 ──
  logo: {
    text: '快喵教程',
    img: 'TG.svg',
    imgWidth: 200,
    imgHeight: 25,
  },

  // ── Hero 下载区 ──
  downloadButtons: [
    { img: 'window_img.png', btnSvg: 'down.svg',    onClick: "window.open('https://acekuaimiao.com/zh-hans/products/windows')" },
    { img: 'android_img.png', btnSvg: 'down-android.svg', onClick: "window.open('https://acekuaimiao.com/zh-hans/products/android')" },
    { img: 'iphone_img.png',  btnSvg: 'down-iphone.svg',  onClick: "window.open('https://acekuaimiao.com/zh-hans/products/ios')" },
  ],

  // ── Features 区（9 个）──
  features: [
    { gif: 'img1.gif', title: '不限流量', desc: '所有套餐均不限制流量，观看4K视频、下载大文件无需担心超额。' },
    { gif: 'img2.gif', title: '多国节点', desc: '覆盖美国、日本、新加坡、香港等十余个国家和地区，一键切换位置。' },
    { gif: 'img3.gif', title: '全平台支持', desc: 'Windows/Mac/Android/iOS/Linux 全平台客户端，一个账号多设备同时用。' },
    { gif: 'img4.gif', title: 'IPLC专线', desc: 'VIP套餐提供IPLC内网专线节点，更低延迟更稳定，追剧视频通话无压力。' },
    { gif: 'img5.gif', title: '一键连接', desc: '打开App点击连接即可使用，无需复杂配置，新手也能3分钟上手。' },
    { gif: 'img6.gif', title: '智能分流', desc: '国内网站直连不减速，海外网站走代理，智能切换无需手动操作。' },
    { gif: 'img7.gif', title: '免注册试用', desc: '免费版无需注册即可体验，多国免费节点可用，满意后再付费。' },
    { gif: 'img8.gif', title: '流媒体解锁', desc: '解锁 Netflix、Disney+、YouTube、TikTok 等主流流媒体平台。' },
    { gif: 'img9.gif', title: '加密安全', desc: 'AES-256加密保护隐私，公共WiFi下安全上网，防止数据被窃取。' },
  ],

  // ── 内容分类 ──
  categories: [
    { id: 'download', name: '下载安装' },
    { id: 'guide',    name: '使用教程' },
    { id: 'fix',      name: '问题排查' },
    { id: 'compare',  name: '对比评测' },
    { id: 'plans',    name: '套餐与价格' },
  ],

  // ── 分类标签映射 ──
  catLabels: {
    download: '下载安装',
    guide: '使用教程',
    fix: '问题排查',
    compare: '对比评测',
    plans: '套餐与价格',
  } as Record<string, string>,

  // ── 分类标签调色板 ──
  catTagPalette: [
    { bg: '#e0f2fe', color: '#0369a1' },
    { bg: '#ecfdf5', color: '#065f46' },
    { bg: '#fef3c7', color: '#92400e' },
    { bg: '#f3e8ff', color: '#7c3aed' },
    { bg: '#fce7f3', color: '#be185d' },
  ],

  // ── 配色方案（快喵蓝绿渐变）──
  colors: {
    primary: '#0891B2',
    primaryHover: '#22D3EE',
    bg: '#ffffff',
    bgCard: '#f5f7fa',
    textPrimary: '#1e293b',
    textSecondary: '#475569',
    textMuted: '#94a3b8',
    featTitle: '#0891B2',
    btnBorder: '#ffffff',
    border: '#e8ecf1',
  },

  // ── 字体 ──
  fonts: {
    heading: "'Inter', 'Noto Sans SC', system-ui, sans-serif",
    body: "'Inter', 'Noto Sans SC', system-ui, sans-serif",
  },

  // ── 页脚 ──
  footer: {
    notice: '本站为独立教程与评测站点。快喵是其所属公司的商标。所有下载链接指向官方源。',
  },

  // ── 结构化数据 ──
  structuredData: {
    organization: '快喵教程',
    homepageType: 'WebSite' as 'WebSite' | 'Organization',
  },
};
