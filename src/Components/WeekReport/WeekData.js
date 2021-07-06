import { useEffect, useState } from "react"
import DisplayData from "../DisplayDataTable/DisplayData"

export default function WeekData(){
    const [weekData,setWeekData]=useState([])
    useEffect(()=>{
        getWeekData()
    },[])
    async function getWeekData(){
        // const rawData=fetch("http://localhost:5080/weekReport",{METHOD:"GET"})
        // const jsonData=await rawData.json()
        // .then(res=>setWeekData(jsonData))
        fetch("https://money-manager-backend-server.herokuapp.com/weekReport", {
          method: "GET",
        })
        .then((res) => res.json())
        .then((res) => {
            setWeekData(res);
        });
    }
    return(
        <>
        <DisplayData inputData={weekData}/>
        {console.log(weekData)}
        </>
    )
}