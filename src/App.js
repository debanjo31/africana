import React, {useState} from 'react'
import Navbar from './component/Navbar';
import Homepage from './component/Homepage';
import Footer from './component/Footer';
import Loading from "./component/img/Loading_icon.gif"

function App() {
  const [loading,setLoading] = useState(true)
  const onLoad = () => {
    setTimeout(() => setLoading(false), 1000);
  }
  const Page = () => {
     return(
        <div>
          <Navbar />
          <Homepage />  
          <Footer />
         </div>
        )
  }
  
  return (
    <div className="App bg-[#f6f6f6]">
          {
              loading ? <img src={Loading} alt="loading" className=" mt-16  w-full h-full lg:h-96 lg:w-full" onLoad={onLoad}/> : <Page  />
          }        
   </div>
  );
}

export default App;
