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
  
    // Function to get featured image
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
  
    const AboutPost = ({ about }) => {
      if (!about) return null;
  
      return (
        <div className="post-container">
          <h4 className="title">{about.title.rendered}</h4>
          <img src={getFeaturedImage(about)} alt={`${about.title.rendered} Image`} />
          <div dangerouslySetInnerHTML={{ __html: about.content.rendered }} />
        </div>
      );
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
            {loading ? <p>Loading...</p> : <AboutPost about={abouts[3]} />}
          </div>
        </div>
      </>
    );
  };
  
  export default About;
  