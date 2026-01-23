import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, Share2, Tag } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import { Button } from "@/components/ui/button";
import ReactMarkdown from "react-markdown";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  useEffect(() => {
    if (post) {
      // Update meta tags for SEO
      document.title = post.metaTitle;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', post.metaDescription);
      }

      // Add structured data for SEO
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.metaDescription,
        "image": `https://datafronteira.com${post.image}`,
        "datePublished": post.date,
        "dateModified": post.date,
        "author": {
          "@type": "Organization",
          "name": "DataFronteira Ltd"
        },
        "publisher": {
          "@type": "Organization",
          "name": "DataFronteira Ltd",
          "logo": {
            "@type": "ImageObject",
            "url": "https://datafronteira.com/favicon.png"
          }
        },
        "keywords": post.keywords.join(", "),
        "articleSection": post.category,
        "wordCount": post.content.split(' ').length
      };

      let script = document.querySelector('script[type="application/ld+json"][data-blog-post]');
      if (script) {
        script.textContent = JSON.stringify(structuredData);
      } else {
        script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-blog-post', 'true');
        script.textContent = JSON.stringify(structuredData);
        document.head.appendChild(script);
      }
    }

    return () => {
      const script = document.querySelector('script[type="application/ld+json"][data-blog-post]');
      if (script) {
        script.remove();
      }
    };
  }, [post]);

  if (!post) {
    return (
      <Layout>
        <div className="pt-32 pb-20 min-h-screen">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
            <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
            <Link to="/blog">
              <Button>Back to Blog</Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Helmet>
        <title>{post.metaTitle}</title>
        <meta name="description" content={post.metaDescription} />
        <meta name="keywords" content={post.keywords.join(", ")} />
        <meta property="og:title" content={post.metaTitle} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:image" content={`https://datafronteira.com${post.image}`} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://datafronteira.com/blog/${post.slug}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.metaTitle} />
        <meta name="twitter:description" content={post.metaDescription} />
        <meta name="twitter:image" content={`https://datafronteira.com${post.image}`} />
        <meta name="article:published_time" content={post.date} />
        <meta name="article:author" content={post.author} />
        <meta name="article:section" content={post.category} />
        {post.tags.map((tag, index) => (
          <meta key={index} name="article:tag" content={tag} />
        ))}
      </Helmet>
      <article className="pt-32 pb-20 min-h-screen">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link to="/blog">
              <Button variant="ghost" className="gap-2">
                <ArrowLeft size={18} />
                Back to Blog
              </Button>
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="flex items-center gap-1">
                <Calendar size={14} />
                {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={14} />
                {post.readTime} min read
              </span>
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                {post.category}
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              {post.title}
            </h1>

            <p className="text-xl text-muted-foreground mb-6">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="flex items-center gap-1 text-sm px-3 py-1 rounded-full bg-secondary text-foreground"
                >
                  <Tag size={12} />
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>By {post.author}</span>
              <Button
                variant="outline"
                size="sm"
                className="gap-2"
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: post.title,
                      text: post.excerpt,
                      url: window.location.href,
                    });
                  }
                }}
              >
                <Share2 size={14} />
                Share
              </Button>
            </div>
          </motion.div>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-12"
          >
            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5">
              <img
                src={post.image}
                alt={post.imageAlt}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to gradient if image doesn't exist
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = `
                      <div class="absolute inset-0 flex items-center justify-center">
                        <span class="text-6xl font-bold text-primary/20">${post.category.charAt(0)}</span>
                      </div>
                    `;
                  }
                }}
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-lg dark:prose-invert max-w-none mb-12"
          >
            <ReactMarkdown
              components={{
                a: ({ node, ...props }) => (
                  <a {...props} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer" />
                ),
                h2: ({ node, ...props }) => (
                  <h2 {...props} className="text-2xl font-semibold mt-8 mb-4" />
                ),
                h3: ({ node, ...props }) => (
                  <h3 {...props} className="text-xl font-semibold mt-6 mb-3" />
                ),
                ul: ({ node, ...props }) => (
                  <ul {...props} className="list-disc list-inside space-y-2 my-4" />
                ),
                ol: ({ node, ...props }) => (
                  <ol {...props} className="list-decimal list-inside space-y-2 my-4" />
                ),
                p: ({ node, ...props }) => (
                  <p {...props} className="mb-4 leading-relaxed" />
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </motion.div>

          {/* Internal Links */}
          {post.internalLinks.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-12 p-6 rounded-2xl bg-card border border-border"
            >
              <h3 className="font-display text-xl font-semibold mb-4">Related Services</h3>
              <div className="flex flex-wrap gap-3">
                {post.internalLinks.map((link, index) => (
                  <Link key={index} to={link.url}>
                    <Button variant="outline" className="gap-2">
                      {link.text}
                      <ArrowLeft className="rotate-180" size={14} />
                    </Button>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}

          {/* External Links */}
          {post.externalLinks.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-12 p-6 rounded-2xl bg-card border border-border"
            >
              <h3 className="font-display text-xl font-semibold mb-4">Additional Resources</h3>
              <ul className="space-y-2">
                {post.externalLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline flex items-center gap-2"
                    >
                      {link.text}
                      <ArrowLeft className="rotate-180" size={14} />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Related Posts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16 pt-12 border-t border-border"
          >
            <h3 className="font-display text-2xl font-semibold mb-8">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {blogPosts
                .filter(p => p.id !== post.id && (p.category === post.category || p.tags.some(tag => post.tags.includes(tag))))
                .slice(0, 2)
                .map((relatedPost) => (
                  <Link key={relatedPost.id} to={`/blog/${relatedPost.slug}`}>
                    <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
                      <h4 className="font-semibold mb-2 hover:text-primary transition-colors">
                        {relatedPost.title}
                      </h4>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          </motion.div>
        </div>
      </article>
    </Layout>
  );
}
