import { useState } from 'react';
import './Blog.css';
import blogPostsData from '../data/blogPosts.json';

const Blog = () => {
    const [selectedPost, setSelectedPost] = useState(null);

    const openPost = (post) => {
        setSelectedPost(post);
        document.body.style.overflow = 'hidden';
    };

    const closePost = () => {
        setSelectedPost(null);
        document.body.style.overflow = 'unset';
    };

    return (
        <section id="blog" className="section blog-section">
            <div className="container">
                <div className="section-title">
                    <h2 className="text-gradient">Blog</h2>
                    <p className="blog-subtitle">
                        Insights, updates, and trends from the Wizverse universe
                    </p>
                </div>

                <div className="blog-scroll-container">
                    <div className="blog-grid">
                        {blogPostsData.map((post) => (
                            <article
                                key={post.id}
                                className="blog-post-card card"
                                onClick={() => openPost(post)}
                            >
                                <div className="blog-card-content">
                                    <div className="blog-card-header">
                                        <div className="blog-author-info">
                                            <span className="blog-author-name">{post.author}</span>
                                            <span className="blog-date">{post.date}</span>
                                        </div>
                                    </div>
                                    <h3 className="blog-card-title">{post.title}</h3>
                                    <p className="blog-card-excerpt">{post.excerpt}</p>
                                    <div className="blog-card-footer">
                                        <span className="read-more">Read more</span>
                                    </div>
                                </div>
                                {post.image && (
                                    <div className="blog-card-image-wrapper">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="blog-card-image"
                                        />
                                    </div>
                                )}
                            </article>
                        ))}
                    </div>
                </div>
            </div>

            {selectedPost && (
                <div className="blog-modal-overlay" onClick={closePost}>
                    <div className="blog-modal" onClick={(e) => e.stopPropagation()}>
                        <button className="blog-modal-close" onClick={closePost}>&times;</button>

                        <div className="blog-modal-content">
                            {selectedPost.image && (
                                <img
                                    src={selectedPost.image}
                                    alt={selectedPost.title}
                                    className="blog-modal-image"
                                />
                            )}

                            <div className="blog-modal-header">
                                <h1>{selectedPost.title}</h1>
                                <div className="blog-post-meta">
                                    <span className="blog-post-date">{selectedPost.date}</span>
                                    <span className="blog-post-author">by {selectedPost.author}</span>
                                </div>
                            </div>

                            <div
                                className="blog-post-body"
                                dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                            />
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Blog;
