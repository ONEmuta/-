import React from 'react';

const EducationEvents: React.FC = () => {
  return (
    <div className="container mx-auto py-16 px-4 text-center">
      <h1 className="text-5xl font-bold text-primary mb-6">교육 및 행사</h1>
      <p className="text-lg text-textSecondary max-w-3xl mx-auto">
        동대문의류봉제협회는 소상공인의 역량 강화를 위한 다양한 교육 프로그램과
        산업 트렌드를 공유하는 행사를 정기적으로 개최합니다.
      </p>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-surface p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-text mb-3">패션 트렌드 세미나</h2>
          <p className="text-textSecondary">
            최신 패션 트렌드 분석, 시장 동향 예측 등 산업 전문가의 강연을 통해 인사이트를 얻습니다.
          </p>
        </div>
        <div className="bg-surface p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-text mb-3">디지털 마케팅 교육</h2>
          <p className="text-textSecondary">
            온라인 쇼핑몰 운영, SNS 마케팅, 검색 엔진 최적화 등 디지털 역량을 강화하는 교육입니다.
          </p>
        </div>
        <div className="bg-surface p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-text mb-3">생산 관리 워크숍</h2>
          <p className="text-textSecondary">
            생산 효율성 증대, 품질 관리, 스마트 팩토리 도입 등 실무 중심의 워크숍을 진행합니다.
          </p>
        </div>
        <div className="bg-surface p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-text mb-3">법률 및 계약 실무</h2>
          <p className="text-textSecondary">
            사업 운영에 필요한 법률 지식, 계약서 작성 및 검토 실무에 대한 교육입니다.
          </p>
        </div>
        <div className="bg-surface p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-text mb-3">창업 및 사업화 지원</h2>
          <p className="text-textSecondary">
            예비 창업가 및 초기 사업자를 위한 비즈니스 모델 수립, 사업 계획서 작성 교육입니다.
          </p>
        </div>
        <div className="bg-surface p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-text mb-3">산업 교류의 밤</h2>
          <p className="text-textSecondary">
            회원사 간의 정보 교류 및 협력 기회를 제공하는 정기적인 네트워킹 행사입니다.
          </p>
        </div>
      </div>
      <div className="mt-12">
        <img
          src="https://images.pexels.com/photos/3862632/pexels-photo-3862632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Education and Events"
          className="rounded-lg shadow-xl mx-auto w-full max-w-4xl"
        />
      </div>
    </div>
  );
};

export default EducationEvents;
