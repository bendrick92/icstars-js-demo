import {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
  const [catGifId, setCatGifId] = useState(null);
  const [loadingCat, setLoadingCat] = useState(false);

  useEffect(() => {
    randomizeCat();
  }, [])

  const randomizeCat = () => {
    setLoadingCat(true);

    axios.get('https://cataas.com/cat/gif?json=true')
      .then((response) => {
        const cat = response.data;

        setCatGifId(cat.id);

        setLoadingCat(false);
      });
  };

  let catMarkup =
    catGifId && !loadingCat ? (
      <img src={`https://cataas.com/cat/${catGifId}`} className='cat-image'/>
    ) : (
      <div className='loading-placeholder'>Loading...</div>
    );

  return (
    <div className='wrapper'>
      <div className='cat-wrapper'>
        {catMarkup}
      </div>
      <button onClick={() => randomizeCat()}>
        Moar Cats
      </button>
    </div>
  );
}

export default App;
