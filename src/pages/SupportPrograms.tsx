import React from 'react';
import { externalLinks } from '@/lib/data'; // Import externalLinks

const SupportPrograms: React.FC = () => {
  return (
    <div className="container mx-auto py-16 px-4 md:px-8">
      <h1 className="text-5xl font-bold text-primary mb-6 text-center">지원 사업</h1>
      <p className="text-lg text-textSecondary max-w-3xl mx-auto text-center mb-12">
        동대문의류봉제협회는 소상공인 여러분의 성장을 위한 다양한 지원 사업을 운영하고 있습니다.
        맞춤형 컨설팅부터 자금 지원, 판로 개척까지 실질적인 도움을 드립니다.
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-surface p-6 rounded-lg shadow-lg border border-border">
          <h2 className="text-2xl font-semibold text-text mb-3">경영 컨설팅</h2>
          <p className="text-textSecondary">
            전문가와 함께 사업 전략, 마케팅, 재무 등 경영 전반에 대한 맞춤형 컨설팅을 제공합니다.
          </p>
        </div>
        <div className="bg-surface p-6 rounded-lg shadow-lg border border-border">
          <h2 className="text-2xl font-semibold text-text mb-3">자금 지원 연계</h2>
          <p className="text-textSecondary">
            정부 및 지자체의 소상공인 지원 자금 정보를 제공하고, 신청 절차를 안내하여 자금 확보를 돕습니다.
          </p>
        </div>
        <div className="bg-surface p-6 rounded-lg shadow-lg border border-border">
          <h2 className="text-2xl font-semibold text-text mb-3">판로 개척 지원</h2>
          <p className="text-textSecondary">
            온라인 플랫폼 입점, 국내외 전시회 참가 등 새로운 판로를 개척할 수 있도록 지원합니다.
          </p>
        </div>
        <div className="bg-surface p-6 rounded-lg shadow-lg border border-border">
          <h2 className="text-2xl font-semibold text-text mb-3">기술 및 생산성 향상</h2>
          <p className="text-textSecondary">
            최신 기술 도입, 생산 공정 개선을 위한 교육 및 전문가 매칭을 지원합니다.
          </p>
        </div>
        <div className="bg-surface p-6 rounded-lg shadow-lg border border-border">
          <h2 className="text-2xl font-semibold text-text mb-3">법률 및 세무 상담</h2>
          <p className="text-textSecondary">
            사업 운영 중 발생할 수 있는 법률 및 세무 문제에 대한 전문 상담을 제공합니다.
          </p>
        </div>
        <div className="bg-surface p-6 rounded-lg shadow-lg border border-border">
          <h2 className="text-2xl font-semibold text-text mb-3">네트워킹 기회</h2>
          <p className="text-textSecondary">
            다양한 산업 분야의 소상공인들과 교류하고 협력할 수 있는 네트워킹 행사를 주최합니다.
          </p>
        </div>
      </div>

      {/* External Link: Programs */}
      <section className="mt-16 mb-12 text-center">
        <h2 className="text-3xl font-semibold text-text mb-8">더 많은 프로그램 정보</h2>
        <p className="text-lg text-textSecondary max-w-2xl mx-auto mb-6">
          협회에서 제공하는 다양한 프로그램에 대한 상세 정보는 외부 사이트에서 확인하실 수 있습니다.
        </p>
        <a
          href={externalLinks.programs.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:bg-primary/90 transition-colors duration-300 shadow-lg"
        >
          {externalLinks.programs.label} 바로가기 &rarr;
        </a>
      </section>

      <div className="mt-12">
        <img
          src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Support Programs"
          className="rounded-lg shadow-xl mx-auto w-full max-w-4xl"
        />
      </div>
    </div>
  );
};

export default SupportPrograms;
