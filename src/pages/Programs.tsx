// src/pages/Programs.tsx
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { programsData, Program } from '@/lib/data';
import { Calendar, Check, X, Clock } from 'lucide-react';

const ProgramCard = ({ program }: { program: Program }) => {
  const statusStyles = {
    모집중: 'bg-green-100 text-green-800 border-green-300',
    마감: 'bg-red-100 text-red-800 border-red-300',
    진행예정: 'bg-blue-100 text-blue-800 border-blue-300',
  };

  const statusIcons = {
    모집중: <Check className="h-4 w-4 mr-1.5" />,
    마감: <X className="h-4 w-4 mr-1.5" />,
    진행예정: <Clock className="h-4 w-4 mr-1.5" />,
  };

  return (
    <Card className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <Badge className={statusStyles[program.status]}>
            {statusIcons[program.status]}
            {program.status}
          </Badge>
        </div>
        <CardTitle className="text-xl font-semibold text-primary">{program.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col">
        <p className="text-sm text-textSecondary flex-grow mb-4">{program.description}</p>
        <div className="text-xs text-muted-foreground flex items-center mt-auto pt-4 border-t border-border">
          <Calendar className="h-4 w-4 mr-2" />
          <span>{program.period}</span>
        </div>
      </CardContent>
    </Card>
  );
};

const Programs: React.FC = () => {
  const supportPrograms = programsData.filter(p => p.type === '지원 사업');
  const educationEvents = programsData.filter(p => p.type === '교육 및 행사');

  return (
    <div className="container mx-auto py-16 px-4 md:px-8">
      <h1 className="text-5xl font-bold text-primary mb-6 text-center">프로그램 안내</h1>
      <p className="text-lg text-textSecondary max-w-3xl mx-auto text-center mb-12">
        회원사의 역량 강화와 비즈니스 성장을 위해 마련된 다양한 지원 사업과 교육 프로그램을 만나보세요.
      </p>

      <Tabs defaultValue="support" className="w-full">
        <TabsList className="grid w-full grid-cols-2 h-auto p-1 mb-8">
          <TabsTrigger value="support" className="py-2 px-4 text-base">지원 사업</TabsTrigger>
          <TabsTrigger value="education" className="py-2 px-4 text-base">교육 및 행사</TabsTrigger>
        </TabsList>

        <TabsContent value="support">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {supportPrograms.map(program => <ProgramCard key={program.id} program={program} />)}
          </div>
        </TabsContent>

        <TabsContent value="education">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {educationEvents.map(program => <ProgramCard key={program.id} program={program} />)}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Programs;
