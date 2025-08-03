// src/pages/RelatedBusiness.tsx
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { relatedBusinessData } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

const RelatedBusiness: React.FC = () => {
  return (
    <div className="container mx-auto py-16 px-4 md:px-8">
      <h1 className="text-5xl font-bold text-primary mb-6 text-center">연관사업</h1>
      <p className="text-lg text-textSecondary max-w-3xl mx-auto text-center mb-12">
        동대문 패션 생태계의 동반 성장을 위해 다양한 기관 및 기업과 협력하여 시너지를 창출하고 있습니다.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {relatedBusinessData.map((business) => (
          <a href={business.link} key={business.id} className="block group">
            <Card className="flex flex-col h-full overflow-hidden hover:shadow-xl hover:border-primary transition-all duration-300">
              <div className="aspect-video overflow-hidden">
                <img
                  src={business.imageUrl}
                  alt={business.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-text group-hover:text-primary transition-colors">
                  {business.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-textSecondary">{business.description}</p>
              </CardContent>
              <CardFooter className="flex-wrap gap-2">
                {business.tags.map((tag, index) => (
                  <Badge key={index} variant="outline">{tag}</Badge>
                ))}
                <div className="w-full text-right text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">
                  <ArrowRight className="inline-block" />
                </div>
              </CardFooter>
            </Card>
          </a>
        ))}
      </div>
    </div>
  );
};

export default RelatedBusiness;
