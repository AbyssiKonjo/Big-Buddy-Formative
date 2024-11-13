import { useState, useEffect } from 'react';
import axios from 'axios';

// Import Component
import PageHeader from '../../components/PageHeader';

import Seo from '../../components/Seo';

const baseUrl = import.meta.env.VITE_WP_API_BASEURL;

const About = () => {
  const [abouts, setAbouts] = useState([]);
  const [loading, setLoading] = useState(true);

  const endpoint = `${baseUrl}/abouts?_embed`;

  useEffect(() => {
    axios.get(endpoint)
      .then((response) => {
        setAbouts(response.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  const AboutPost = ({ abouts }) => {
    const mappedAbouts = abouts.map((about, index) => {
      // Featured Image check
      function getFeaturedImage(about) {
        if (
          about && 
          about._embedded && 
          about._embedded['wp:featuredmedia'] && 
          about._embedded['wp:featuredmedia'][0].source_url
        ) {
          return about._embedded['wp:featuredmedia'][0].source_url;
        } else {
          return 'https://via.placeholder.com/150';
        }
      }

      return (
        <div key={`${about.slug}-${index}`} className="post-container">
          <h4 className="title">{about.title.rendered}</h4>
          <img src={getFeaturedImage(about)} alt={`${about.title.rendered} Image`} />
          <div dangerouslySetInnerHTML={{ __html: about.content.rendered }} />
          <div>Key: {about.slug + "-" + index}</div>
        </div>
      );
    });

    return <>{mappedAbouts}</>;
  };

  const headerTitle = !loading && abouts.length > 0 ? abouts[0].title.rendered : 'About Us';

  return (
    <>
      <Seo
        title='About - Big Buddy Formative'
        description='Browse my amazing wordpress Post for my custom site.'
        url={window.location.href}
      />
      <div id='pageContent'>
        <PageHeader title={headerTitle} />
        <div id='secondNav'>
          <ul>
            <li>One-2-One</li>
            <li>Group</li>
          </ul>
        </div>
        <div id='contentInfo'>
          {/* {loading ? <p>Loading...</p> : <AboutPost abouts={abouts} />} */}
          {loading ? <p>Loading...</p> : (
            <>
              {/* Section 1 */}
              <section>
                {abouts.length > 0 && (
                  <div id='section1'>
                    {renderPost(abouts[1])}
                    <div id='heroImage' style={{ backgroundImage: `url(${getFeaturedImage(abouts[1])})` }}></div>
                  </div>
                )}
              </section>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default About;
