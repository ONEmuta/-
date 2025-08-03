// src/pages/EquipmentIntroduction.tsx

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { equipmentData } from '@/lib/data'; // 정의된 장비 데이터를 임포트
import { Badge } from '@/components/ui/badge'; // 사양을 표시하기 위한 뱃지 컴포넌트
import { CheckCircle } from 'lucide-react'; // 사양 목록 아이콘

const EquipmentIntroduction: React.FC = () => {
  return (
    <div className="container mx-auto py-16 px-4 md:px-8">
      {/* 페이지 헤더: 제목과 소개 문구 */}
      <h1 className="text-5xl font-bold text-primary mb-6 text-center">
        보유 장비 소개
      </h1>
      <p className="text-lg text-textSecondary max-w-3xl mx-auto text-center mb-12">
        회원 여러분의 창작 활동과 비즈니스를 지원하기 위해 최신 기술이 집약된
        전문 장비를 갖추고 있습니다. 디지털 디자인부터 자동 재단, 특수 봉제까지
        다양한 공정을 지원합니다.
      </p>

      {/* 장비 목록을 표시하는 반응형 그리드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* equipmentData 배열을 순회하며 각 장비에 대한 카드를 생성 */}
        {equipmentData.map((equipment) => (
          <Card
            key={equipment.id}
            className="flex flex-col bg-surface border-border hover:shadow-xl hover:border-primary transition-all duration-300"
          >
            <CardHeader>
              {/* 장비 이미지 */}
              <div className="aspect-video bg-muted rounded-md mb-4 flex items-center justify-center overflow-hidden">
                <img src={equipment.imageUrl} alt={equipment.name} className="w-full h-full object-cover rounded-md" />
              </div>
              {/* 장비명과 카테고리 뱃지 */}
              <div className="flex justify-between items-start">
                <CardTitle className="text-2xl font-semibold text-text">
                  {equipment.name}
                </CardTitle>
                <Badge variant="secondary">{equipment.category}</Badge>
              </div>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col">
              {/* 장비 설명 */}
              <p className="text-textSecondary mb-6 flex-grow">
                {equipment.description}
              </p>
              {/* 장비 주요 사양 목록 */}
              <div>
                <h4 className="font-semibold text-text mb-3">주요 사양</h4>
                <ul className="space-y-2">
                  {equipment.specifications.map((spec, index) => (
                    <li key={index} className="flex items-center text-sm text-textSecondary">
                      <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default EquipmentIntroduction;
