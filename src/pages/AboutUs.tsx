import React from 'react';
import { aboutUsContent, externalLinks } from '@/lib/data'; // Import externalLinks

const AboutUs: React.FC = () => {
  const { mission, history, team, contact, organizationDetails } = aboutUsContent;

  return (
    <div className="container mx-auto py-16 px-4 md:px-8">
      <h1 className="text-5xl font-bold text-primary mb-6 text-center">동대문의류봉제협회 소개</h1>
      <p className="text-lg text-textSecondary max-w-3xl mx-auto text-center mb-12">
        동대문의류봉제협회는 동대문 패션 및 제조 산업의 소상공인들을 지원하고 육성하기 위해 설립되었습니다.
        우리는 회원들에게 다양한 지원 프로그램, 교육 기회, 시설 예약 서비스 및 활발한 커뮤니티를 제공하여
        지속 가능한 성장을 돕고 있습니다.
      </p>

      {/* Organization Details */}
      {organizationDetails && (
        <section className="mb-16 bg-surface p-8 rounded-xl shadow-lg border border-border">
          <h2 className="text-3xl font-semibold text-text mb-6 text-center">조직 정보</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="text-xl font-medium text-primary mb-2">등록기관명</h3>
              <p className="text-textSecondary text-lg">{organizationDetails.registrationName}</p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-primary mb-2">회사명</h3>
              <p className="text-textSecondary text-lg">{organizationDetails.companyName}</p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-primary mb-2">대표자</h3>
              <p className="text-textSecondary text-lg">{organizationDetails.representative}</p>
            </div>
          </div>
        </section>
      )}

      {/* Mission & Vision */}
      <section className="mb-16">
        <div className="flex flex-col md:flex-row items-center gap-8 bg-surface p-8 rounded-xl shadow-lg border border-border">
          <div className="md:w-1/2">
            <img
              src={mission.image}
              alt="Our Mission"
              className="rounded-lg shadow-md w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-semibold text-text mb-4">{mission.title}</h2>
            <p className="text-textSecondary leading-relaxed">{mission.text}</p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-text mb-8 text-center">핵심 가치</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-surface p-6 rounded-lg shadow-lg border border-border">
            <h3 className="text-2xl font-semibold text-text mb-3">혁신</h3>
            <p className="text-textSecondary">
              끊임없는 변화와 도전을 통해 새로운 가치를 창출합니다.
            </p>
          </div>
          <div className="bg-surface p-6 rounded-lg shadow-lg border border-border">
            <h3 className="text-2xl font-semibold text-text mb-3">협력</h3>
            <p className="text-textSecondary">
              상호 존중과 신뢰를 바탕으로 함께 성장합니다.
            </p>
          </div>
          <div className="bg-surface p-6 rounded-lg shadow-lg border border-border">
            <h3 className="text-2xl font-semibold text-text mb-3">전문성</h3>
            <p className="text-textSecondary">
              최고 수준의 전문 지식과 서비스를 제공합니다.
            </p>
          </div>
          <div className="bg-surface p-6 rounded-lg shadow-lg border border-border">
            <h3 className="text-2xl font-semibold text-text mb-3">사회적 책임</h3>
            <p className="text-textSecondary">
              지역 사회와 산업 발전에 기여합니다.
            </p>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-text mb-8 text-center">연혁</h2>
        <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-0.5 before:bg-border">
          {history.map((item, index) => (
            <div key={index} className="mb-8 relative">
              <div className="absolute -left-2.5 top-0 h-5 w-5 rounded-full bg-primary border-2 border-background"></div>
              <h3 className="text-xl font-semibold text-text mb-1">{item.year} - {item.event}</h3>
              <p className="text-textSecondary">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-text mb-8 text-center">우리 팀</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-surface p-6 rounded-lg shadow-lg border border-border text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-primary"
              />
              <h3 className="text-xl font-semibold text-text">{member.name}</h3>
              <p className="text-primary text-sm">{member.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* External Links: Related Business & Other Content */}
      <section className="mb-16" id="external-links">
        <h2 className="text-3xl font-semibold text-text mb-8 text-center">관련 정보 및 외부 링크</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <a
            href={externalLinks.relatedBusiness.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-surface p-6 rounded-lg shadow-lg border border-border hover:border-primary transition-all duration-300 group"
          >
            <h3 className="text-2xl font-semibold text-text mb-3 group-hover:text-primary transition-colors">
              {externalLinks.relatedBusiness.label}
            </h3>
            <p className="text-textSecondary">
              협회와 연관된 다양한 사업 및 파트너십 정보를 외부 사이트에서 확인하세요.
            </p>
            <span className="text-sm text-primary mt-4 block group-hover:underline">
              바로가기 &rarr;
            </span>
          </a>
          <a
            href={externalLinks.otherContent.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-surface p-6 rounded-lg shadow-lg border border-border hover:border-primary transition-all duration-300 group"
          >
            <h3 className="text-2xl font-semibold text-text mb-3 group-hover:text-primary transition-colors">
              {externalLinks.otherContent.label}
            </h3>
            <p className="text-textSecondary">
              협회와 관련된 기타 유용한 정보 및 자료를 외부 사이트에서 찾아보세요.
            </p>
            <span className="text-sm text-primary mt-4 block group-hover:underline">
              바로가기 &rarr;
            </span>
          </a>
        </div>
      </section>

      {/* Contact Us */}
      <section id="contact" className="mb-16">
        <h2 className="text-3xl font-semibold text-text mb-8 text-center">문의하기</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-surface p-8 rounded-xl shadow-lg border border-border">
          <div>
            <h3 className="text-2xl font-semibold text-text mb-4">연락처 정보</h3>
            <address className="not-italic text-textSecondary space-y-3">
              <p className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                {contact.address}
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                Phone: <a href={`tel:${contact.phone}`} className="hover:text-primary transition-colors">{contact.phone}</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                Email: <a href={`mailto:${contact.email}`} className="hover:text-primary transition-colors">{contact.email}</a>
              </p>
            </address>
            <div className="mt-6 space-y-3 text-textSecondary">
              <h4 className="text-xl font-semibold text-text mb-2">오시는 길</h4>
              <p className="flex items-start gap-2">
                <Bus className="h-5 w-5 text-primary mt-1" />
                <span className="flex-1">대중교통: {contact.transportation.public}</span>
              </p>
              <p className="flex items-start gap-2">
                <Car className="h-5 w-5 text-primary mt-1" />
                <span className="flex-1">주차: {contact.transportation.parking}</span>
              </p>
            </div>
          </div>
          <div className="aspect-video w-full rounded-xl overflow-hidden border border-border">
            <iframe
              src={contact.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Our Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
