import { useEffect, useState } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/home/')
      .then(response => setMessage(response.data.message))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="text-center text-lg">
      {/* Helmet section for meta tags */}
      {/* <Helmet>
        <title>React + Django Integration</title>
        <meta name="description" content="This is my React-Django integration project." />

        {/* Open Graph for social sharing */}
        {/* <meta property="og:title" content="React + Django Integration" />
        <meta property="og:description" content="This is my React-Django integration project." />
        <meta property="og:image" content="https://chjashore.online/thumbnail.png" />
        <meta property="og:url" content="https://chjashore.online/" />
        <meta property="og:type" content="website" /> */}

        {/* Twitter Card */}
        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="React + Django Integration" />
        <meta name="twitter:description" content="This is my React-Django integration project." />
        <meta name="twitter:image" content="https://chjashore.online/thumbnail.png" />
      </Helmet> */} */}



      <h1>React + Django Integration</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
