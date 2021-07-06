import { useEffect, useState } from "react"
import DisplayData from "../DisplayDataTable/DisplayData"

export default function WeekData(){
    const [monthData,setMonthData]=useState([])
    useEffect(()=>{
        getMonthData()
    },[])
    async function getMonthData(){
        fetch("https://money-manager-backend-server.herokuapp.com/monthReport", {
          method: "GET",
        })
        .then((res) => res.json())
        .then((res) => {
            setMonthData(res);
        });
    }
    return(
        <>
        <DisplayData inputData={monthData}/>
        {console.log(monthData)}
        </>
    )
}
