
import './App.css';
import Customer from './components/Customer';
import CustomerAdd from './components/CustomerAdd';
import React, {Component} from 'react';
import { Paper } from '@mui/material';
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableHead from '@mui/material/TableHead'
import InputBase from '@mui/material/InputBase';
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


  constructor(props){
    super(props)
    this.state = {
      customers: ''
    }

  }

  stateRefresh = () => {
    this.setState({
      customers: "",
      searchKeyword:""
    })
    this.callApi()
      .then(res=> this.setState({customers: res}))
      .catch(err =>console.log(err))
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

  handleValueChange = (e) => {
    let nextState = {}
    nextState[e.target.name] = e.target.value
    this.setState(nextState)
  }
  render(){
    const filteredComponents = (data) => {
      data = data.filter((c) => {
        return c.name.indexOf(this.state.searchKeyword) > -1
      })

      return data.map((c)=>{
        return <Customer stateRefresh={this.stateRefresh}
          key={c.id} id={c.id} image={c.image} name={c.name} birthday = {c.birthday} gender = {c.gender} job = {c.job}/>
      })
    }
    // const {classes} = this.state
    return (
      <div >
        <Paper> 
        <InputBase placeholder='검색하기'
        name='searchKeyword'
        value={this.state.searchKeyword}
        onChange={this.handleValueChange}/>
        <Table>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
            <TableCell>설정</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        { this.state.customers ? filteredComponents(this.state.customers)
           : ""}
          {/* // <TableRow>
          //   <TableCell colSpan = "6" align="center"><CircularProgress className = {classes.progress} variant = "determinante" value={this.state.completed}/></TableCell>
          // </TableRow>
   */}
        </TableBody>
        </Table>
        </Paper>
        <CustomerAdd stateRefresh={this.stateRefresh}/>
        

      </div>
      
);
  }
  
}

export default App;
