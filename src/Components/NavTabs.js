import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Link, useHistory} from "react-router-dom"

import AddDataModel from "./AddDataModel/AddDataModel"

export default function NavTabs() {
  const [value, setValue] = React.useState(2);

  const history=useHistory()

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper square>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        {/* <Link to="/week"><Tab label="Week Report" /></Link>
        <Link to="/month"><Tab label="Month Report" /></Link>
        <Link to="/year"><Tab label="Year Report" /></Link>
        <Link to="/last12hours"><Tab label="Last 12 Hours" /></Link>
        <Link to="/allhistory"><Tab label="All History" /></Link> */}

        <Tab label="Week Report" onClick={()=>{history.push("/week")}}/>
        <Tab label="Month Report" onClick={()=>{history.push("/month")}}/>
        <Tab label="Year Report" onClick={()=>{history.push("/year")}}/>
        <Tab label="Last 12 Hours" onClick={()=>{history.push("/last12hours")}}/>
        <Tab label="All History" onClick={()=>{history.push("/allhistory")}}/>
        
        <span style={{marginLeft:"auto"}}>
        <AddDataModel/>
        </span>
      </Tabs>
    </Paper>
  );
}