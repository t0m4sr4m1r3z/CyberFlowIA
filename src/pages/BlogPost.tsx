import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

export default function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find((post) => post.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-cyber-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Artículo no encontrado</h1>
          <button
            onClick={() => navigate('/blog')}
            className="text-neon-blue hover:text-neon-purple transition-colors duration-300"
          >
            Volver al blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <article className="pt-20 bg-cyber-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-neon-blue hover:text-neon-purple transition-colors duration-300 mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Volver
        </button>

        <div className="bg-cyber-800 rounded-lg overflow-hidden neon-border">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-72 object-cover"
          />
          <div className="p-8">
            <div className="flex items-center text-sm text-gray-400 mb-4">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{post.date}</span>
              <Clock className="h-4 w-4 ml-4 mr-2" />
              <span>{post.readTime}</span>
            </div>
            <h1 className="text-3xl font-bold text-white mb-6">{post.title}</h1>
            <div
              className="prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.fullContent }}
            />
          </div>
        </div>
      </div>
    </article>
  );
}