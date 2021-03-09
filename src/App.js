import './App.css';
import News from './components/News/News';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const url = 'http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b093438169e44148aa7051053a7a930e'
    // fetch(url)
    //   .then(response => response.json())
    //   .then(data => setArticles(data.articles))
    axios(url)
    .then(data => setArticles(data.data.articles))
  },[])
  return (
    <div >
      <h1>Total Articles: {articles.length}</h1>
      {
        articles.map(article => <News article={article}></News>)
      }
    </div>
  );
}

export default App;
