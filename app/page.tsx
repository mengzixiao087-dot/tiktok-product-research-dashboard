'use client';

import { useState } from 'react';
import { Search, TrendingUp, DollarSign, Users, Target } from 'lucide-react';

export default function TikTokProductResearchDashboard() {
  const [keyword, setKeyword] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  // Mock data - 后续可接真实数据
  const mockResults = {
    estimatedSales: 1240,
    competition: 68,
    profitMargin: 42,
    roi: 3.2,
    trendScore: 87,
  };

  const competitors = [
    { name: '水袋背包 A', price: 89, sales: 3200 },
    { name: '水袋背包 B', price: 95, sales: 2800 },
    { name: '水袋背包 C', price: 78, sales: 4100 },
  ];

  const handleSearch = () => {
    if (!keyword.trim()) return;
    setIsSearching(true);
    setTimeout(() => setIsSearching(false), 800);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Header */}
      <header className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-emerald-500 rounded-xl flex items-center justify-center">
              <Target className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-2xl font-semibold tracking-tight">TikTok Shop 选品工具</h1>
              <p className="text-xs text-zinc-400">Product Research Dashboard</p>
            </div>
          </div>
          <div className="text-sm text-zinc-400">v0.1 • 初始版</div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Search Section */}
        <div className="mb-8">
          <div className="flex gap-3 max-w-2xl">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-3.5 text-zinc-400 w-5 h-5" />
              <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                placeholder="输入关键词或产品名称（例：跑步水袋、户外背包）"
                className="w-full bg-zinc-900 border border-zinc-700 rounded-2xl pl-12 pr-4 py-3.5 text-lg focus:outline-none focus:border-emerald-500 placeholder:text-zinc-500"
              />
            </div>
            <button
              onClick={handleSearch}
              disabled={isSearching || !keyword.trim()}
              className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 disabled:bg-zinc-700 rounded-2xl font-medium flex items-center gap-2 transition-colors"
            >
              {isSearching ? '分析中...' : '开始分析'}
            </button>
          </div>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <TrendingUp className="text-emerald-400" />
              <div className="text-sm text-zinc-400">预估销量</div>
            </div>
            <div className="text-4xl font-semibold tracking-tighter">{mockResults.estimatedSales}</div>
            <div className="text-emerald-400 text-sm mt-1">价值高 ↑ 18%</div>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <Users className="text-orange-400" />
              <div className="text-sm text-zinc-400">竞争度</div>
            </div>
            <div className="text-4xl font-semibold tracking-tighter">{mockResults.competition}<span className="text-xl font-normal">/100</span></div>
            <div className="text-orange-400 text-sm mt-1">中等竞争</div>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <DollarSign className="text-blue-400" />
              <div className="text-sm text-zinc-400">利润率</div>
            </div>
            <div className="text-4xl font-semibold tracking-tighter">{mockResults.profitMargin}<span className="text-xl font-normal">%</span></div>
            <div className="text-blue-400 text-sm mt-1">预估月利润 ¥ 18,400</div>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <Target className="text-purple-400" />
              <div className="text-sm text-zinc-400">ROI</div>
            </div>
            <div className="text-4xl font-semibold tracking-tighter">{mockResults.roi}x</div>
            <div className="text-purple-400 text-sm mt-1">投资回报率优秀</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* TikTok Trends */}
          <div className="lg:col-span-3 bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="font-semibold text-lg">TikTok 视频趋势</div>
                <div className="text-sm text-zinc-400">{keyword || '水袋背包'} 相关视频表现</div>
              </div>
              <div className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs rounded-full">87 点 热度</div>
            </div>
            
            <div className="h-64 flex items-center justify-center text-zinc-500">
              [趋势图表区域 - 后续接入真实数据]
            </div>
          </div>

          {/* Competitor Comparison */}
          <div className="lg:col-span-2 bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
            <div className="font-semibold text-lg mb-4">竞品价格对比</div>
            <div className="space-y-4">
              {competitors.map((item, index) => (
                <div key={index} className="flex justify-between items-center border-b border-zinc-800 pb-3 last:border-0 last:pb-0">
                  <div>
                    <div className="font-medium">{item.name}</div>
                    <div className="text-xs text-zinc-500">销量 {item.sales}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-lg">¥{item.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AI Listing Generator */}
        <div className="mt-6 bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="font-semibold text-lg">AI Listing 文案生成</div>
              <div className="text-sm text-zinc-400">基于关键词自动生成高转化标题与描述</div>
            </div>
            <button className="px-5 py-2 bg-white text-black rounded-2xl text-sm font-medium hover:bg-zinc-200 transition-colors">
              生成文案
            </button>
          </div>
          
          <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-5 text-sm text-zinc-400">
            点击“生成文案”后将在此显示 AI 生成的标题、描述和卖点。
          </div>
        </div>
      </div>
    </div>
  );
}