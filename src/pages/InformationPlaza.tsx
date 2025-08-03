import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { communityPosts } from '@/lib/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { FileText, Download, ExternalLink } from 'lucide-react';

const InformationPlaza: React.FC = () => {
  return (
    <div className="container max-w-screen-xl py-12 px-4 md:px-8">
      <h1 className="text-4xl font-extrabold text-foreground mb-8 text-center">정보마당</h1>
      <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
        협회의 최신 소식, 보도 자료, 유용한 자료 및 자주 묻는 질문을 확인하세요.
      </p>

      <Tabs defaultValue="announcements" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto p-1 mb-8">
          <TabsTrigger value="announcements" className="py-2 px-4 text-base">공지사항</TabsTrigger>
          <TabsTrigger value="pressReleases" className="py-2 px-4 text-base">보도자료</TabsTrigger>
          <TabsTrigger value="resources" className="py-2 px-4 text-base">자료실</TabsTrigger>
          <TabsTrigger value="faq" className="py-2 px-4 text-base">FAQ</TabsTrigger>
        </TabsList>

        {/* Announcements Tab */}
        <TabsContent value="announcements">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {communityPosts.announcements.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-primary">{post.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    {post.author} | {post.date} | 조회수: {post.views}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground line-clamp-3 mb-4">{post.content}</p>
                  <Link to={`/information-plaza/announcements/${post.id}`} className="text-primary hover:underline flex items-center text-sm">
                    자세히 보기 <ExternalLink className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          {communityPosts.announcements.length === 0 && (
            <p className="text-center text-muted-foreground py-8">아직 공지사항이 없습니다.</p>
          )}
        </TabsContent>

        {/* Press Releases Tab */}
        <TabsContent value="pressReleases">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {communityPosts.pressReleases.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-primary">{post.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    {post.author} | {post.date} | 조회수: {post.views}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground line-clamp-3 mb-4">{post.content}</p>
                  <Link to={`/information-plaza/press-releases/${post.id}`} className="text-primary hover:underline flex items-center text-sm">
                    자세히 보기 <ExternalLink className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          {communityPosts.pressReleases.length === 0 && (
            <p className="text-center text-muted-foreground py-8">아직 보도자료가 없습니다.</p>
          )}
        </TabsContent>

        {/* Resources Tab */}
        <TabsContent value="resources">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {communityPosts.resources.map((resource) => (
              <Card key={resource.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-primary">{resource.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    {resource.author} | {resource.date} | 조회수: {resource.views}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground line-clamp-3 mb-4">{resource.content}</p>
                  {resource.attachments && resource.attachments.length > 0 && (
                    <div className="mt-4">
                      {resource.attachments.map((attachment, index) => (
                        <a
                          key={index}
                          href={`#`} // Placeholder for actual download link
                          className="text-accent hover:underline flex items-center text-sm mb-2"
                          download
                        >
                          <Download className="mr-1 h-4 w-4" /> {attachment}
                        </a>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
          {communityPosts.resources.length === 0 && (
            <p className="text-center text-muted-foreground py-8">아직 자료가 없습니다.</p>
          )}
        </TabsContent>

        {/* FAQ Tab */}
        <TabsContent value="faq">
          <div className="grid gap-6">
            {communityPosts.faq.map((item) => (
              <Card key={item.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-primary">{item.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    {item.author} | {item.date} | 조회수: {item.views}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground">{item.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          {communityPosts.faq.length === 0 && (
            <p className="text-center text-muted-foreground py-8">아직 FAQ가 없습니다.</p>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default InformationPlaza;
