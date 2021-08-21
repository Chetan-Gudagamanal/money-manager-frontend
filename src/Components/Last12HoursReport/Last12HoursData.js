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

export default function Last12HoursData(){
    const [last12HoursData,setLast12HoursData]=useState([])
    const [loading,setLoading]=useState(true)

    
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
        <DisplayData inputData={last12HoursData}/>
        
        </>
    )
}
