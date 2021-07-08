import { useEffect, useState } from "react"
import DisplayData from "../DisplayDataTable/DisplayData"

export default function WeekData(){
    const [allData,setAllData]=useState([])
    useEffect(()=>{
        getAllData()
    },[])
    async function getAllData(){
        fetch("https://money-manager-backend-server.herokuapp.com/allReport", {
          method: "GET",
        })
        .then((res) => res.json())
        .then((res) => {
            setAllData(res);
        });
    }
    return(
        <>
        <DisplayData inputData={allData}/>
        
        </>
    )
}
