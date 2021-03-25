import {useState, useEffect} from 'react'
import PokemonList from './components/PokemonList'
import axios from 'axios'
import Pagination from './components/Pagination'

function App() {

const [pokemon, setPokemon] = useState(["pokemon1", "pokemon2"])
const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
const [nextPageUrl, setNextPageUrl] = useState()
const [prevPageUrl, setPrevPageUrl] = useState()
const [loading, setLoading] =  useState(true)

useEffect(()=>{
  setLoading(true)
  let cancel;
  axios.get(currentPageUrl,{cancelToken: new axios.CancelToken(c => cancel = c)}).then((res)=> 
  { 
    setLoading(false)
    setNextPageUrl(res.data.next)
    setPrevPageUrl(res.data.previous)
    setPokemon(res.data.results.map((p)=>p.name)) })
  
return()=>{
 cancel() //makes sure to never load old data and to cancel the last request 
}

}, [currentPageUrl])



function gotoNextPage(){ 
  setCurrentPageUrl(nextPageUrl)
}


function gotoPrevPage(){ 
  setCurrentPageUrl(prevPageUrl)
}

  return (
    <div>
      {loading? 'Loading...': ""}
      <PokemonList pokemon={pokemon}></PokemonList>
      <Pagination 
      gotoNextPage={nextPageUrl ? gotoNextPage: null} 
      gotoPrevPage={prevPageUrl ? gotoPrevPage: null}>

      </Pagination>

    </div>
    
  );
}

export default App;
