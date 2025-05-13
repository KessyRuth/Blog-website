
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  imageUrl: string;
  readingTime: string;
  slug: string;
}

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

const BlogCard = ({ post, featured = false }: BlogCardProps) => {
  return (
    <Card className={`overflow-hidden transition-all duration-200 hover:shadow-md ${featured ? 'md:grid md:grid-cols-2 gap-4' : ''}`}>
      <Link to={`/blog/${post.slug}`} className="block overflow-hidden">
        <div className={`relative ${featured ? 'h-full min-h-[250px]' : 'h-48'}`}>
          <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </Link>
      <div>
        <CardContent className={`p-4 ${featured ? 'p-6' : ''}`}>
          <div className="flex items-center mb-2">
            <span className="text-xs font-medium text-blog-purple px-2 py-1 bg-blog-light-purple bg-opacity-30 rounded-full">
              {post.category}
            </span>
            <span className="text-xs text-muted-foreground ml-2">{post.date}</span>
          </div>
          <Link to={`/blog/${post.slug}`}>
            <h3 className={`font-serif font-medium hover:text-blog-purple ${featured ? 'text-2xl mb-3' : 'text-lg mb-2'}`}>
              {post.title}
            </h3>
          </Link>
          <p className="text-muted-foreground line-clamp-2">{post.excerpt}</p>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex items-center text-xs text-muted-foreground">
          <span>{post.readingTime} read</span>
        </CardFooter>
      </div>
    </Card>
  );
};

export default BlogCard;
