
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import BlogCard from '@/components/BlogCard';
import NewsletterSignup from '@/components/NewsletterSignup';
import { Button } from '@/components/ui/button';
import { blogPosts } from '@/data/blogPosts';

const Index = () => {
  useEffect(() => {
    document.title = "Mindful Blog - Home";
  }, []);

  const featuredPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1, 4);

  return (
    <Layout>
      <section className="pt-12 pb-16 md:pt-16 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
              Navigating Life with Mindfulness & Purpose
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Explore thought-provoking articles on mindfulness, productivity, and personal growth to help you live more intentionally.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/blog">Read Our Articles</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/about">Learn About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-semibold mb-8">Featured Article</h2>
          <BlogCard post={featuredPost} featured />
        </div>
      </section>
      
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-3xl font-serif font-semibold">Recent Articles</h2>
            <Link to="/blog" className="text-blog-purple hover:underline">
              View all articles →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
      
      <NewsletterSignup />
    </Layout>
  );
};

export default Index;
