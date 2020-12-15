import React,  {useState, useEffect} from 'react';
import Header from './components/Header';
import News from './components/News';

const App = () => {

  const [ category, setCategory] = useState('general')
  const [ news, setNews ] = useState([])
  const [ page , setPage ] = useState(10)
  const [ noMoreNews, setNoMoreNews] = useState(false)

  const getNews = async(category, page) => {
    const url = `&category=${category}`
    try {
      const response = await fetch(`https://newsapi.org/v2/top-headlines?country=ar${url}&pageSize=${page}&apiKey=0b61c10bfc1b46a0bedd5667a4bca0df`)
      const data = await response.json()     
      setNews(data.articles)
      setPage( page )
      if(data.totalResults < page ) setNoMoreNews( true )
    } catch (error) {
      console.log(error)
    }
  }

  const getMoreNews = () =>{
      getNews(category, page + 10)
  }


  
  useEffect(() => {
     
    getNews( category, 10)
      .then( news =>{
        setPage(10)
        setNoMoreNews( false )
      })
    
  }, [category])

  return (
    <>
      <Header setCategory={setCategory}/>
      <News news={news}/>
      <div className="d-flex justify-content-center">
        <button style={{display: noMoreNews && 'none'}} onClick={() =>getMoreNews()} className=" btn-dark m-4" >VER MAS</button>
      </div>
    </>
  );
}

export default App;
