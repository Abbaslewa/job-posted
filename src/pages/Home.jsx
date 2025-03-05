import { useEffect, useState } from "react";
import Banenr from "../components/Banenr";
const Home = () => {

    const[query, setQuery] = useState("");
    const [selecttedCategory, setSelecttedCategory]= useState(null);
    const [jobs, setJobs]= useState([]);
    
    useEffect(()=>{
      fetch("jobs.json").then(res => res.join()).then(data => {
    //  console.log(data)
     setJobs(data)
      })
    },[])

    const handleInputChange = (event)=>{
      setQuery(event.target.value)
    }

    const filteredItems = jobs.filter((job) => job.jobTitle.tolowerCase().indexOf(query.tolowerCase()))
  return (
    <div className="text-blue">
    <Banenr query={query} handleInputChange={handleInputChange}/>
    </div>
  );
}

export default Home;
