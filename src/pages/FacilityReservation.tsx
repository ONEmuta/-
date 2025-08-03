import React from 'react';
import { externalLinks } from '@/lib/data'; // Import externalLinks

const FacilityReservation: React.FC = () => {
  return (
    <div className="container mx-auto py-16 px-4 md:px-8">
      <h1 className="text-5xl font-bold text-primary mb-6 text-center">시설 예약</h1>
      <p className="text-lg text-textSecondary max-w-3xl mx-auto text-center mb-12">
        동대문의류봉제협회는 회원 여러분의 비즈니스 활동을 지원하기 위해
        다양한 시설을 제공하고 있습니다. 편리하게 예약하여 이용하세요.
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-surface p-6 rounded-lg shadow-lg border border-border">
          <h2 className="text-2xl font-semibold text-text mb-3">회의실</h2>
          <p className="text-textSecondary">
            소규모 미팅부터 대규모 회의까지 가능한 다양한 크기의 회의실을 예약할 수 있습니다.
          </p>
        </div>
        <div className="bg-surface p-6 rounded-lg shadow-lg border border-border">
          <h2 className="text-2xl font-semibold text-text mb-3">교육장</h2>
          <p className="text-textSecondary">
            세미나, 워크숍 등 교육 목적에 최적화된 교육 시설을 이용할 수 있습니다.
          </p>
        </div>
        <div className="bg-surface p-6 rounded-lg shadow-lg border border-border">
          <h2 className="text-2xl font-semibold text-text mb-3">작업실/스튜디오</h2>
          <p className="text-textSecondary">
            패션 디자인, 샘플 제작, 촬영 등을 위한 전문 작업 공간 및 스튜디오를 제공합니다.
          </p>
        </div>
        <div className="bg-surface p-6 rounded-lg shadow-lg border border-border">
          <h2 className="text-2xl font-semibold text-text mb-3">상담실</h2>
          <p className="text-textSecondary">
            개별 컨설팅 및 상담을 위한 조용하고 프라이빗한 공간을 예약할 수 있습니다.
          </p>
        </div>
        <div className="bg-surface p-6 rounded-lg shadow-lg border border-border">
          <h2 className="text-2xl font-semibold text-text mb-3">휴게 공간</h2>
          <p className="text-textSecondary">
            편안하게 휴식을 취하거나 비공식적인 교류를 할 수 있는 공간입니다.
          </p>
        </div>
        <div className="bg-surface p-6 rounded-lg shadow-lg border border-border">
          <h2 className="text-2xl font-semibold text-text mb-3">장비 대여</h2>
          <p className="text-textSecondary">
            봉제 기기, 디자인 소프트웨어 등 필요한 장비를 대여하여 사용할 수 있습니다.
          </p>
        </div>
      </div>

      {/* External Links: Equipment & Space Introduction */}
      <section className="mt-16 mb-12 text-center">
        <h2 className="text-3xl font-semibold text-text mb-8">시설 및 장비 상세 안내</h2>
        <p className="text-lg text-textSecondary max-w-2xl mx-auto mb-6">
          협회에서 제공하는 장비 및 공간에 대한 더 자세한 정보는 외부 사이트에서 확인하실 수 있습니다.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <a
            href={externalLinks.equipmentIntro.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:bg-primary/90 transition-colors duration-300 shadow-lg"
          >
            {externalLinks.equipmentIntro.label} 바로가기 &rarr;
          </a>
          <a
            href={externalLinks.spaceIntro.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:bg-primary/90 transition-colors duration-300 shadow-lg"
          >
            {externalLinks.spaceIntro.label} 바로가기 &rarr;
          </a>
        </div>
      </section>

      <div className="mt-12">
        <img
          src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Facility Reservation"
          className="rounded-lg shadow-xl mx-auto w-full max-w-4xl"
        />
      </div>
    </div>
  );
};

export default FacilityReservation;
