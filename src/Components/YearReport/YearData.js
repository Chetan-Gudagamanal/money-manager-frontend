import { useEffect, useState } from "react"
import DisplayData from "../DisplayDataTable/DisplayData"

export default function YearData(){
    const [yearData,setYearData]=useState([])
    useEffect(()=>{
        getYearData()
    },[])
    async function getYearData(){
        fetch("https://money-manager-backend-server.herokuapp.com/yearReport", {
          method: "GET",
        })
        .then((res) => res.json())
        .then((res) => {
            setYearData(res);
        });
    }
    return(
        <>
        <DisplayData inputData={yearData}/>
        {console.log(yearData)}
        </>
    )
}
