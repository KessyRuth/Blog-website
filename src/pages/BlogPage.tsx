
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '@/components/Layout';
import BlogCard from '@/components/BlogCard';
import NewsletterSignup from '@/components/NewsletterSignup';
import { blogPosts } from '@/data/blogPosts';

const BlogPage = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search')?.toLowerCase() || '';
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  // Get unique categories from posts
  const categories = ['all', ...Array.from(new Set(blogPosts.map(post => post.category)))];

  useEffect(() => {
    document.title = searchQuery 
      ? `Search results for "${searchQuery}" - Mindful Blog` 
      : "Blog - Mindful Blog";
      
    // Filter posts based on search query and active category
    const filtered = blogPosts.filter(post => {
      const matchesSearch = searchQuery
        ? post.title.toLowerCase().includes(searchQuery) || 
          post.excerpt.toLowerCase().includes(searchQuery)
        : true;
        
      const matchesCategory = activeCategory !== 'all' 
        ? post.category === activeCategory 
        : true;
        
      return matchesSearch && matchesCategory;
    });
    
    setFilteredPosts(filtered);
  }, [searchQuery, activeCategory]);

  return (
    <Layout>
      <section className="py-12">
        <div className="container mx-auto px-4">
          {searchQuery ? (
            <div className="mb-12">
              <h1 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
                Search Results for "{searchQuery}"
              </h1>
              <p className="text-muted-foreground">
                {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'} found
              </p>
            </div>
          ) : (
            <div className="mb-12">
              <h1 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
                Our Blog
              </h1>
              <p className="text-muted-foreground">
                Explore our collection of articles on mindfulness, productivity, and personal growth.
              </p>
            </div>
          )}
          
          {/* Categories filter */}
          <div className="mb-10 overflow-x-auto">
            <div className="flex space-x-2 min-w-max pb-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? 'bg-blog-purple text-white'
                      : 'bg-muted hover:bg-muted/80 text-foreground'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
          
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No articles found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or category filters to find what you're looking for.
              </p>
            </div>
          )}
        </div>
      </section>
      
      <NewsletterSignup />
    </Layout>
  );
};

export default BlogPage;
