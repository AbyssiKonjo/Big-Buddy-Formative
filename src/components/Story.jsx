import {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import PageHeader from './PageHeader';

const baseUrl = import.meta.env.VITE_WP_API_BASEURL;

const Story = () => {
    const [story, SetStory] = useState(null);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();
  
    const endpoint = `${baseUrl}/story/${id}?_embed`;
  
    useEffect(() => {
      axios.get(`${endpoint}`)
        .then((response) => {
          SetStory(response.data);
          setLoading(false);
        })
        .catch((err) => console.log(err))
    }, []);
  
    // Featured image check
    function getFeaturedImage(story) {
      if (story && story._embedded && story._embedded['wp:featuredmedia'] && story._embedded['wp:featuredmedia'][0].source_url) {
          return story._embedded['wp:featuredmedia'][0].source_url;
      } else {
          return 'https://via.placeholder.com/150';
      }
    }
  
    if (loading) {
      return <>Loading...</>
    }
  
    return (
      <>
        <PageHeader title={story.title.rendered} image_url={getFeaturedImage(story)}/>
        <div key={story.slug} id='postContainer' className='post-container'>
          <h4>{story.title.rendered}</h4>
          <img src={getFeaturedImage(story)} alt={story.title.rendered + ' image'}/>
          <div dangerouslySetInnerHTML={{__html: story.content.rendered}}/>
        </div>
      </>
    )
}

export default Story
