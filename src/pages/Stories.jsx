import { useState, useEffect } from 'react';
import axios from 'axios';

// Import Component
import PageHeader from '../components/PageHeader';

import Seo from '../components/Seo';

const baseUrl = import.meta.env.VITE_WP_API_BASEURL;

const About = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  const endpoint = `${baseUrl}/stories?_embed`;

  useEffect(() => {
    axios.get(endpoint)
      .then((response) => {
        setStories(response.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  const Story = ({ stories }) => {
    const mappedStories = stories.map((story, index) => {
      // Featured Image check
      function getFeaturedImage(about) {
        if (
          story && 
          story._embedded && 
          story._embedded['wp:featuredmedia'] && 
          story._embedded['wp:featuredmedia'][0].source_url
        ) {
          return story._embedded['wp:featuredmedia'][0].source_url;
        } else {
          return 'https://via.placeholder.com/150';
        }
      }

      return (
        <div key={`${story.slug}-${index}`} className="story-container">
          <img src={getFeaturedImage(story)} alt={`${story.title.rendered} Image`} />
          <h4 className="title">{story.title.rendered}</h4>
          <div dangerouslySetInnerHTML={{ __html: story.content.rendered }} />
          {/* <div>Key: {story.slug + "-" + index}</div> */}
          <a href={`#/story/${stories.id}`}>Read More...</a>
        </div>
      );
    });

    return (
      <>
        {mappedStories}
      </>
    )
  };

  const headerTitle = !loading && stories.length > 0 ? stories[0].title.rendered : 'About Us';

  return (
    <>
      <Seo
        title='Success Stories - Big Buddy Formative'
        description='Browse the formative I did for creating a custom theme using Wordpress for Big Buddy.'
        url={window.location.href}
      />
      <div id='pageContent'>
        <PageHeader title='success stories'/>
        <div id='contentInfo'>
          {loading ? <p>Loading...</p> : <Story stories={stories} />}
        </div>
      </div>
    </>
  );
};

export default About;
