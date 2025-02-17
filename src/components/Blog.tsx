import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

export default function Blog() {
  const navigate = useNavigate();

  return (
    <section id="blog" className="py-20 bg-cyber-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold gradient-text mb-4">Blog</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explora las últimas tendencias y conocimientos sobre IA, desarrollo y tecnología
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-cyber-700 rounded-lg overflow-hidden card-hover neon-border"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{post.date}</span>
                  <Clock className="h-4 w-4 ml-4 mr-2" />
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{post.title}</h3>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <button 
                  onClick={() => navigate(`/blog/${post.id}`)}
                  className="text-neon-blue hover:text-neon-purple font-medium transition-colors duration-300 group flex items-center"
                >
                  Leer más
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}