// src/pages/EtcInfo.tsx
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { historyData } from '@/lib/data';

const EtcInfo: React.FC = () => {
  return (
    <div className="container mx-auto py-16 px-4 md:px-8">
      <h1 className="text-5xl font-bold text-primary mb-6 text-center">기타내용</h1>
      <p className="text-lg text-textSecondary max-w-3xl mx-auto text-center mb-12">
        협회 운영에 관한 주요 문서, 보도자료, 자주 묻는 질문 및 협회의 발자취를 확인하실 수 있습니다.
      </p>

      <Tabs defaultValue="history" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto p-1 mb-8">
          <TabsTrigger value="resources" className="py-2 px-4 text-base">자료실</TabsTrigger>
          <TabsTrigger value="press" className="py-2 px-4 text-base">보도자료</TabsTrigger>
          <TabsTrigger value="faq" className="py-2 px-4 text-base">FAQ</TabsTrigger>
          <TabsTrigger value="history" className="py-2 px-4 text-base">연혁</TabsTrigger>
        </TabsList>

        <TabsContent value="resources" className="py-8 text-center">
          <p className="text-muted-foreground">자료실 콘텐츠가 준비 중입니다.</p>
        </TabsContent>
        <TabsContent value="press" className="py-8 text-center">
          <p className="text-muted-foreground">보도자료 콘텐츠가 준비 중입니다.</p>
        </TabsContent>
        <TabsContent value="faq" className="py-8 text-center">
          <p className="text-muted-foreground">FAQ 콘텐츠가 준비 중입니다.</p>
        </TabsContent>
        
        <TabsContent value="history">
          <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-0.5 before:bg-border max-w-3xl mx-auto">
            {historyData.map((item, index) => (
              <div key={index} className="mb-10 relative">
                <div className="absolute -left-[11px] top-1 h-6 w-6 rounded-full bg-primary border-4 border-background"></div>
                <h3 className="text-2xl font-semibold text-text mb-2">{item.year} - {item.event}</h3>
                <p className="text-textSecondary leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default EtcInfo;
