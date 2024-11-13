import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import axios from 'axios';

import Seo from '../components/Seo';

const baseUrl = import.meta.env.VITE_WP_API_BASEURL;

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const endpoint = `${baseUrl}/posts?_embed`;

  useEffect(() => {
    axios.get(endpoint)
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  const renderPost = (post) => (
    <div className='text-and-content'>
      <h1 className='title'>{post.title.rendered}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
      <button>
        <a href={`#/donate/`}>Donate Now</a>
      </button>
    </div>
  );

  function getFeaturedImage(post) {
    if (
      post && 
      post._embedded && 
      post._embedded['wp:featuredmedia'] && 
      post._embedded['wp:featuredmedia'][0].source_url
    ) {
      return post._embedded['wp:featuredmedia'][0].source_url;
    } else {
      return 'https://via.placeholder.com/150'; // Placeholder image if no featured image
    }
  }

  return (
    <>
      <Seo
        title='Home - Big Buddy Formative'
        description='Browse the formative I did for creating a custom theme using Wordpress for Big Buddy.'
        url={window.location.href}
      />
      <div id='pageContent'>
        <div id='home' className="home">
          {loading ? <p>Loading...</p> : (
            <>
              {/* Section 1 */}
              <section>
                {posts.length > 0 && (
                  <div id='section1'>
                    {renderPost(posts[1])}
                    <div id='heroImage' style={{ backgroundImage: `url(${getFeaturedImage(posts[1])})` }}></div>
                  </div>
                )}
              </section>

              {/* Section 2 */}
              {posts.length > 1 && (
                <section>
                    <div id='section2'>
                        <div id='heroImage' style={{ backgroundImage: `url(${getFeaturedImage(posts[0])})` }}></div>
                        <div className='text-and-content'>
                            <h2>{posts[0].title.rendered}</h2>
                            <div dangerouslySetInnerHTML={{ __html: posts[0].excerpt.rendered }} />
                            <h3>Follow us for the latest news</h3>
                            <div className='social-icons'>
                                <div className='icon'>
                                    <FaFacebookF />
                                </div>
                                <div className='icon'>
                                    <FaInstagram />
                                </div>
                                <div className='icon'>
                                    <FaLinkedinIn />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
