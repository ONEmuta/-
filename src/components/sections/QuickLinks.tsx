// src/components/sections/QuickLinks.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { navLinks } from '@/lib/data'; // navLinks를 직접 활용
import { ArrowRight, Building, Wrench, GraduationCap, Briefcase, Info, Users, FileText, MoreHorizontal } from 'lucide-react';

// 각 메뉴에 맞는 아이콘을 매핑하는 객체
const iconMap: { [key: string]: React.ElementType } = {
  '/about': Building,
  '/equipment': Wrench,
  '/space': Building,
  '/programs': GraduationCap,
  '/related-business': Briefcase,
  '/information': Info,
  '/community': Users,
  '/etc': FileText,
};

const QuickLinks: React.FC = () => {
  // 홈 링크를 제외한 나머지 링크만 필터링
  const quickLinkItems = navLinks.filter(link => link.href !== '/');

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-4xl font-bold text-center text-primary mb-4">주요 서비스 바로가기</h2>
        <p className="text-center text-textSecondary max-w-2xl mx-auto mb-12">
          동대문의류봉제협회가 제공하는 핵심 서비스를 빠르게 만나보세요.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickLinkItems.map((link) => {
            const Icon = iconMap[link.href] || MoreHorizontal;
            return (
              <Link to={link.href} key={link.href} className="group block h-full">
                <Card className="h-full border-2 border-border bg-surface hover:border-primary hover:shadow-lg transition-all duration-300 flex flex-col">
                  <CardHeader className="flex-grow">
                    <div className="flex items-center justify-between mb-3">
                      <Icon className="h-10 w-10 text-primary" />
                      <ArrowRight className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-text">{link.name}</CardTitle>
                  </CardHeader>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
