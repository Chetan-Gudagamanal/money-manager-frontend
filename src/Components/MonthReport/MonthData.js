import { useEffect, useState } from "react"
import DisplayData from "../DisplayDataTable/DisplayData"

import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

export default function WeekData(){
    const [monthData,setMonthData]=useState([])
    const [loading,setLoading]=useState(true)
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
            setLoading(false)
        });
    }
    const classes = useStyles();
    if(loading){
        return (
            <div className={classes.root} style={{display:'flex',justifyContent:'center'}}>
              <CircularProgress />
            </div>
        );
    }
    return(
        <>
        <DisplayData inputData={monthData}/>
        
        </>
    )
}
