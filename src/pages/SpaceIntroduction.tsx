// src/pages/SpaceIntroduction.tsx

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { spaceData } from '@/lib/data'; // 정의된 공간 데이터를 임포트
import { Badge } from '@/components/ui/badge'; // 카테고리 표시용 뱃지
import { Users, Zap } from 'lucide-react'; // 수용 인원, 주요 시설 아이콘

const SpaceIntroduction: React.FC = () => {
  return (
    <div className="container mx-auto py-16 px-4 md:px-8">
      {/* 페이지 헤더: 제목과 소개 문구 */}
      <h1 className="text-5xl font-bold text-primary mb-6 text-center">
        이용 공간 안내
      </h1>
      <p className="text-lg text-textSecondary max-w-3xl mx-auto text-center mb-12">
        교육, 창업, 제작, 네트워킹 등 다양한 활동을 지원하는 전문 공간을
        제공합니다. 목적에 맞는 공간을 확인하고 비즈니스의 가능성을
        넓혀보세요.
      </p>

      {/* 공간 목록을 표시하는 반응형 그리드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* spaceData 배열을 순회하며 각 공간에 대한 카드를 생성 */}
        {spaceData.map((space) => (
          <Card
            key={space.id}
            className="flex flex-col bg-surface border-border hover:shadow-xl hover:border-primary hover:scale-[1.02] transition-all duration-300"
          >
            <CardHeader>
              {/* 공간 이미지 */}
              <div className="aspect-video bg-muted rounded-md mb-4 flex items-center justify-center overflow-hidden">
                 <img src={space.imageUrl} alt={space.name} className="w-full h-full object-cover rounded-md" />
              </div>
              {/* 공간명과 카테고리 뱃지 */}
              <div className="flex justify-between items-start">
                <CardTitle className="text-2xl font-semibold text-text">
                  {space.name}
                </CardTitle>
                <Badge variant="default">{space.category}</Badge>
              </div>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col">
              {/* 공간 상세 설명 */}
              <p className="text-textSecondary mb-6 flex-grow">
                {space.description}
              </p>
              {/* 공간 핵심 정보 (수용 인원, 주요 시설) */}
              <div className="space-y-4">
                <div className="flex items-center text-textSecondary">
                  <Users className="h-5 w-5 mr-3 text-primary" />
                  <div>
                    <h4 className="font-semibold text-text">수용 인원</h4>
                    <p className="text-sm">{space.capacity}</p>
                  </div>
                </div>
                <div className="flex items-start text-textSecondary">
                  <Zap className="h-5 w-5 mr-3 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-text">주요 시설</h4>
                    <p className="text-sm">{space.features.join(', ')}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SpaceIntroduction;
