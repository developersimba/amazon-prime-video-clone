import React,{useEffect,useState} from 'react'
import Navbar from './Navbar'
import Menubar from './Menubar'
import Home from './Home'
import moment from 'moment'

const Main = () => {

  const [hotels,setHotels] = useState([])
  const [currency,setCurrency] = useState("")
  const [place,setPlace] = useState("")
  const [date,setDate] = useState("")
  const [guest,setGuest] = useState("")
  const [menu,setMenu] = useState("")

  const today = new Date()
  let tommorrow = new Date()

  tommorrow.setDate(today.getDate() + 1)

  const getHotels = async() =>{
     const url = `https://airbnb13.p.rapidapi.com/search-location?location=${place ? place : "Paris"}&checkin=${date ? date : moment(tommorrow).format("YYYY-MM-DD")}&checkout=${date ? date : moment(tommorrow).format("YYYY-MM-DD")}&adults=${guest ? guest : "1"}&children=0&infants=0&pets=0&page=1&${currency ?? "USD"}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '40d87b8d55mshc65b81b675d4b70p1058b0jsn5ccfc5889937',
		'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
		const data = await response.json();
 	setHotels(data.results);
} catch (error) {
	console.error(error);
}
  }

  useEffect(()=>{
    getHotels()
  },[currency,place,date,guest])
  

 
  
  return (
    <div>
      <Navbar  setCurrency={setCurrency} setGuest={setGuest} setPlace={setPlace} setDate={setDate}/>
      <Menubar setMenu={setMenu}/>
      <Home menu={menu} hotels={hotels} currency={currency}/>
    </div>
  )
}

export default Main
