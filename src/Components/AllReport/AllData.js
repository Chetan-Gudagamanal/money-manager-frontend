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

    const [allData,setAllData]=useState([])
    const [loading,setLoading]=useState(true)
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
        <br/>
        {allData.length?
        <DisplayData inputData={allData}/>:
        <p style={{display:'flex',justifyContent:'center'}}>Nothing to display</p>}
        
        </>
    )
}
