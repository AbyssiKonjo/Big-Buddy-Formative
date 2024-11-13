import {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import PageHeader from './PageHeader';

import Seo from './Seo';

// Bring in the baseurl for the api
const baseUrl = import.meta.env.VITE_WP_API_BASEURL;

const Partner = () => {
  const [partner, setPartner] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

//   const endpoint = `${baseUrl}/partner/${id}?_embed`;
  const endpoint = `${baseUrl}/partners/${id}?_embed`;

  useEffect(() => {
    axios.get(`${endpoint}`)
    .then((response) => {
      console.log(response.data);
      setPartner(response.data);
      setLoading(false);
    })
    .catch((error) => console.log(error))
  }, [id]);

  // Featured image check
  function getFeaturedImage(partner) {
    if (partner && partner._embedded && partner._embedded['wp:featuredmedia'] && partner._embedded['wp:featuredmedia'][0].source_url) {
      return partner._embedded['wp:featuredmedia'][0].source_url;
    } else {
      return 'https://via.placeholder.com/150';
    }
  }

  if (loading) {
    return <>Loading...</>
  }

  return (
    <>
      <Seo
        title={partner.yoast_head_json?.title || `${partner.title.rendered} - MyFirstWp`}
        description={partner.yoast_head_json?.description}
        image={partner.yoast_head_json?.og_image?.[0]?.url}
        url={window.location.href}
      />
      <PageHeader title='single partner'/>
      <div className='container'>
      <div className='post-container'>
        <h4 className='title'>{partner.title.rendered}</h4>
        <img src={getFeaturedImage(partner)} alt={partner.title.rendered + ' profile picture'}/>
        <div dangerouslySetInnerHTML={{__html: partner.content.rendered}}/>
      </div>
    </div>
    </>
  )
}

export default Partner
