
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import BlogCard from '@/components/BlogCard';
import NewsletterSignup from '@/components/NewsletterSignup';
import { blogPosts } from '@/data/blogPosts';
import NotFound from './NotFound';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState(blogPosts.find((post) => post.slug === slug));
  const [relatedPosts, setRelatedPosts] = useState<typeof blogPosts>([]);
  
  useEffect(() => {
    // Set post based on slug
    const currentPost = blogPosts.find((post) => post.slug === slug);
    setPost(currentPost);
    
    if (currentPost) {
      document.title = `${currentPost.title} - Mindful Blog`;
      
      // Find related posts (same category, excluding current)
      const related = blogPosts
        .filter(p => p.category === currentPost.category && p.id !== currentPost.id)
        .slice(0, 3);
      setRelatedPosts(related);
    }
  }, [slug]);
  
  if (!post) {
    return <NotFound />;
  }
  
  return (
    <Layout>
      <article className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center mb-4 text-sm">
              <Link to="/blog" className="text-muted-foreground hover:text-blog-purple">
                ← Back to all posts
              </Link>
              <span className="mx-2 text-muted-foreground">·</span>
              <span className="text-blog-purple px-2 py-0.5 bg-blog-light-purple bg-opacity-30 rounded-full">
                {post.category}
              </span>
              <span className="mx-2 text-muted-foreground">·</span>
              <span className="text-muted-foreground">{post.date}</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-6">
              {post.title}
            </h1>
            
            <div className="text-muted-foreground mb-8">
              <span>{post.readingTime} read</span>
            </div>
            
            <div className="mb-10 rounded-lg overflow-hidden">
              <img 
                src={post.imageUrl} 
                alt={post.title} 
                className="w-full h-auto object-cover" 
              />
            </div>
            
            {/* Blog content - this would normally come from a CMS or markdown */}
            <div className="blog-content prose prose-slate max-w-none">
              <p>
                {post.excerpt}
              </p>
              
              <h2>The Importance of Mindfulness</h2>
              <p>
                In our fast-paced world, mindfulness offers a refuge—a way to slow down and reconnect with ourselves. 
                Practicing mindfulness means being fully present in the moment, aware of where we are and what we're 
                doing without being overly reactive to what's happening around us.
              </p>
              
              <p>
                Research has shown that mindfulness can help reduce stress, improve focus and concentration, 
                and even enhance our relationships. By taking the time to be fully present, we open ourselves 
                up to a richer, more fulfilling experience of life.
              </p>
              
              <blockquote>
                "The present moment is the only time where life exists. The past is memory, the future is imagination."
              </blockquote>
              
              <h2>Practical Steps to Incorporate Mindfulness</h2>
              
              <p>
                Adding mindfulness to your daily routine doesn't have to be complicated. Here are some simple practices:
              </p>
              
              <ul>
                <li>Start your day with a five-minute meditation</li>
                <li>Practice mindful eating by savoring each bite</li>
                <li>Take short breathing breaks throughout your workday</li>
                <li>Go for a walk without your phone</li>
                <li>Listen fully when others are speaking</li>
              </ul>
              
              <p>
                By making these small changes, you can begin to experience the benefits of a more mindful approach 
                to life. The journey of mindfulness is ongoing—there's always more to discover about ourselves and 
                the world around us.
              </p>
            </div>
            
            {/* Share buttons */}
            <div className="border-t border-b border-border py-6 my-8">
              <div className="flex justify-center space-x-4">
                <button className="flex items-center text-muted-foreground hover:text-blog-purple transition-colors">
                  <span>Share on Twitter</span>
                </button>
                <button className="flex items-center text-muted-foreground hover:text-blog-purple transition-colors">
                  <span>Share on Facebook</span>
                </button>
                <button className="flex items-center text-muted-foreground hover:text-blog-purple transition-colors">
                  <span>Share on LinkedIn</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>
      
      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-serif font-semibold mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}
      
      <NewsletterSignup />
    </Layout>
  );
};

export default BlogPost;
