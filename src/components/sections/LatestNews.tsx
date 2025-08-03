import React from 'react';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { announcements, newPrograms } from '@/lib/data';

const LatestNews: React.FC = () => {
  return (
    <section className="py-16 bg-background mt-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
      <div className="container max-w-screen-xl px-4 md:px-8">
        <h2 className="text-4xl font-bold text-center text-foreground mb-12">
          Latest Updates
        </h2>
        <Tabs defaultValue="announcements" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8 bg-surface border border-border rounded-xl p-1">
            <TabsTrigger value="announcements" className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md transition-all duration-300">
              Announcements
            </TabsTrigger>
            <TabsTrigger value="new-programs" className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md transition-all duration-300">
              New Programs
            </TabsTrigger>
          </TabsList>

          <TabsContent value="announcements">
            <Card className="bg-surface rounded-xl shadow-lg border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Official Announcements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {announcements.slice(0, 5).map((post) => (
                  <div key={post.id} className="flex justify-between items-center border-b border-border/50 pb-3 last:border-b-0 last:pb-0">
                    <Link to={`/community/announcements/${post.id}`} className="text-foreground hover:text-primary transition-colors text-lg font-medium">
                      {post.title}
                    </Link>
                    <span className="text-sm text-muted-foreground">{post.date}</span>
                  </div>
                ))}
                <div className="text-right mt-6">
                  <Button asChild variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
                    <Link to="/community?tab=announcements">View More Announcements</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="new-programs">
            <Card className="bg-surface rounded-xl shadow-lg border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Latest Program Launches</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {newPrograms.slice(0, 5).map((program) => (
                  <div key={program.id} className="flex justify-between items-center border-b border-border/50 pb-3 last:border-b-0 last:pb-0">
                    <Link to={`/support-programs/${program.id}`} className="text-foreground hover:text-primary transition-colors text-lg font-medium">
                      {program.title}
                    </Link>
                    <span className="text-sm text-muted-foreground">{program.date}</span>
                  </div>
                ))}
                <div className="text-right mt-6">
                  <Button asChild variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
                    <Link to="/support-programs">View All Programs</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default LatestNews;
