import { useEffect, useState } from "react"
import DisplayData from "../DisplayDataTable/DisplayData"

export default function Last12HoursData(){
    const [last12HoursData,setLast12HoursData]=useState([])
    useEffect(()=>{
        getLast12HoursData()
    },[])
    async function getLast12HoursData(){
        fetch("https://money-manager-backend-server.herokuapp.com/last12HoursReport", {
          method: "GET",
        })
        .then((res) => res.json())
        .then((res) => {
            setLast12HoursData(res);
        });
    }
    return(
        <>
        <DisplayData inputData={last12HoursData}/>
        {console.log(last12HoursData)}
        </>
    )
}
