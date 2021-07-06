import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../Charts/Title';
import {Container} from "@material-ui/core"

// Generate Order Data
// function createData(id, date, name, shipTo, paymentMethod, amount) {
//   return { id, date, name, shipTo, paymentMethod, amount };
// }
// const rows = [
//   createData(0, '16 Mar, 2019', '0:00', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44),
//   createData(1, '16 Mar, 2019', '0:00', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99),
//   createData(2, '16 Mar, 2019', '0:00', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
//   createData(3, '16 Mar, 2019', '0:00', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39),
//   createData(4, '15 Mar, 2019', '0:00', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79),
// ];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function DisplayData({inputData}) {

  function createData(id,type, date, time, description, Category, division, amount) {
    return { id,type, date, time, description, Category, division, amount };
}


console.log(inputData)
let rows=[];
const getCustomDate=(isoString)=>{
  let date=new Date(isoString).getDate()
  let month=new Date(isoString).getMonth()
  let year=new Date(isoString).getFullYear()
  return `${date}/${month}/${year}`
}
const getCustomTime=(isoString)=>{
  let hours=new Date(isoString).getHours()
  let minutes=new Date(isoString).getMinutes()
  let seconds=new Date(isoString).getSeconds()
  return `${hours}:${minutes}:${seconds}`
}
inputData.forEach((ele)=>{
  rows.push(createData
    (
      ele._id,
      ele.type,
      getCustomDate(ele.date),
      getCustomTime(ele.date),
      ele.description,
      ele.category,
      ele.division,
      ele.amount
    ))
})
  
  console.log(rows)

  const classes = useStyles();
  return (
      <Container>
    <React.Fragment>
      <Title>Income/Expense</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Type</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Division</TableCell>
            <TableCell align="right">Amount(In Rupees)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row._id}>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.time}</TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell>{row.Category}</TableCell>
              <TableCell>{row.division}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div>
    </React.Fragment>
    </Container>
  );
}
