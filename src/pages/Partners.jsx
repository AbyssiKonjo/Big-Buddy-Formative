import { useState, useEffect } from 'react';
import axios from 'axios';

// Import Component
import PageHeader from '../components/PageHeader';

import Seo from '../components/Seo';

const baseUrl = import.meta.env.VITE_WP_API_BASEURL;

const Partners = () => {
  const [loading, setLoading] = useState(true);
  const [partners, setPartners] = useState([]);
  const [partnerTypes, setPartnerTypes] = useState({});

  const endpoint = `${baseUrl}/partners?_embed`;
  const partnerTypeEndpoint = `${baseUrl}/partner-type`;

  useEffect(() => {
    // Partners
    axios.get(endpoint)
      .then((response) => {
        setPartners(response.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));

    // Partner types
    axios.get(partnerTypeEndpoint)
      .then((response) => {
        const types = {};
        response.data.forEach((type) => {
          types[type.id] = type.name;
        });
        setPartnerTypes(types);
      })
      .catch((error) => console.log(error));
  }, []);

  const PartnersList = ({ partners, partnerTypes }) => {
    function getFeaturedImage(partner) {
      if (
        partner &&
        partner._embedded &&
        partner._embedded['wp:featuredmedia'] &&
        partner._embedded['wp:featuredmedia'][0].source_url
      ) {
        return partner._embedded['wp:featuredmedia'][0].source_url;
      } else {
        return 'https://via.placeholder.com/150'; // Default image
      }
    }

    if (!partners || partners.length === 0) {
      return <p>No partners available.</p>;
    }

    // Partners by type
    const groupedPartners = {};
      partners.forEach(partner => {
      const typeIds = partner['partner-type'];
      typeIds.forEach(typeId => {
        const typeName = partnerTypes[typeId];
        if (typeName) {
          if (!groupedPartners[typeName]) {
            groupedPartners[typeName] = [];
          }
          groupedPartners[typeName].push(partner);
        }
      });
    });

    const categoryOrder = ["Foundation Partner", "Major Partners", "Supporting Partners"];

    // Grouped partners
    return (
      <>
        {categoryOrder.map((typeName) => (
          <div key={typeName} className="partner-category">
            <h3>{typeName}</h3>
            {groupedPartners[typeName] && groupedPartners[typeName].length > 0 ? (
              groupedPartners[typeName].map((partner, index) => (
                <div key={`${partner.slug}-${index}`} className="post-container">
                  <h4 className="title">{partner.title.rendered}</h4>
                  <img src={getFeaturedImage(partner)} alt={partner.title.rendered + ' image'} />
                  <div dangerouslySetInnerHTML={{ __html: partner.content.rendered }} />
                  <a href={`#/partner/${partner.id}`}>Read More...</a>
                </div>
              ))
            ) : (
              <p>No partners available in this category.</p>
            )}
          </div>
        ))}
      </>
    );
  };

  return (
    <>
      {/* <Seo
        title={partners.yoast_head_json?.title || `${partners.title.rendered} - Big Buddy Formative`}
        description={partners.yoast_head_json?.description}
        image={partners.yoast_head_json?.og_image?.[0]?.url}
        url={window.location.href}
      /> */}
      <Seo
        title='Partners - Big Buddy Formative'
        description='Browse my amazing wordpress Post for my custom site.'
        url={window.location.href}
      />
      <div id="pageContent">
        <PageHeader title="Our Partners" />
        <div id="contentInfo">
          <div id='foundationPartner'></div>
          <div id='majorPartners'></div>
          <div id='supportingPartners'></div>
          {loading ? <p>Loading...</p> : <PartnersList partners={partners} partnerTypes={partnerTypes} />}
        </div>
      </div>
    </>
  );
};

export default Partners;
