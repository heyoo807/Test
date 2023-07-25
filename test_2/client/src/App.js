
import './App.css';
import Customer from './components/Customer';
import CustomerAdd from './components/CustomerAdd';
import React, {Component} from 'react';
import { Paper } from '@mui/material';
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import CircularProgress from '@mui/material/CircularProgress';
import withStyles from '@mui/material';

// const styles = theme => ({
//   root:{
//     width: '100%',
//     marginTop : theme.spacing.unit * 3,
//     overfloxX: "auto"
//   },
  
//   table:{
//     minWidth: 1080
//   },
//   progress:{
//     margin: theme.spacing.unit * 2
//   }
// })


class App extends Component {


  state = {
    customers: "",
    // completed : 0
  }

  componentDidMount() {
    // this.timer = setInterval(this.progress, 20) // 0.02초마다 progress함수 실행 
    this.callApi()
      .then(res=> this.setState({customers: res}))
      .catch(err =>console.log(err))
  }

  callApi =  async () => {
    const response = await fetch('/api/customers')
    const body = await response.json()
  
  return body  }

  // progress = () =>{
  //   const {completed} = this.state;
  //   this.setState({completed: completed >= 100 ? 0 : completed + 1})
  // }
  render(){
    // const {classes} = this.state
    return (
      <div >
        <Paper> 
        <Table>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        { this.state.customers ? this.state.customers.map(c=>{ // map을 이용할때는 key라는 props를 사용해주어야 함. 
            return (
              <Customer
                key={c.id}
                id={c.id}
                image = {c.image}
                name = {c.name}
                birthday = {c.birthday}
                gender = {c.gender}
                job = {c.job}/>
            ) 
          }) : ""
          // <TableRow>
          //   <TableCell colSpan = "6" align="center"><CircularProgress className = {classes.progress} variant = "determinante" value={this.state.completed}/></TableCell>
          // </TableRow>
  }
        </TableBody>
        </Table>
        </Paper>
        <CustomerAdd/>

      </div>
      
);
  }
  
}

export default App;
