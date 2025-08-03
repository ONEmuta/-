import React from 'react';

const Community: React.FC = () => {
  return (
    <div className="container mx-auto py-16 px-4 text-center">
      <h1 className="text-5xl font-bold text-primary mb-6">커뮤니티</h1>
      <p className="text-lg text-textSecondary max-w-3xl mx-auto">
        동대문의류봉제협회 커뮤니티는 회원 여러분이 서로 소통하고 정보를 공유하며
        함께 성장할 수 있는 활발한 공간입니다.
      </p>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-surface p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-text mb-3">자유 게시판</h2>
          <p className="text-textSecondary">
            자유롭게 의견을 나누고 정보를 공유하는 공간입니다.
          </p>
        </div>
        <div className="bg-surface p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-text mb-3">질의응답</h2>
          <p className="text-textSecondary">
            궁금한 점을 질문하고 전문가 및 다른 회원들의 답변을 얻을 수 있습니다.
          </p>
        </div>
        <div className="bg-surface p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-text mb-3">구인/구직</h2>
          <p className="text-textSecondary">
            인력 채용 및 취업 정보를 공유하는 게시판입니다.
          </p>
        </div>
        <div className="bg-surface p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-text mb-3">사업 제휴</h2>
          <p className="text-textSecondary">
            협력할 파트너를 찾거나 새로운 사업 기회를 모색하는 공간입니다.
          </p>
        </div>
        <div className="bg-surface p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-text mb-3">공지사항</h2>
          <p className="text-textSecondary">
            협회의 중요 공지 및 소식을 확인할 수 있습니다.
          </p>
        </div>
        <div className="bg-surface p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-text mb-3">성공 사례</h2>
          <p className="text-textSecondary">
            다른 회원들의 성공 스토리를 공유하고 영감을 얻는 공간입니다.
          </p>
        </div>
      </div>
      <div className="mt-12">
        <img
          src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Community"
          className="rounded-lg shadow-xl mx-auto w-full max-w-4xl"
        />
      </div>
    </div>
  );
};

export default Community;
