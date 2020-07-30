import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl'
export default class Events extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      events: [],
      email: '',
      status:''
    }
    this.rows = [{
      id: 'djnjs',
      name: 'nvnv',
      rollno: 'ddbs',
      status: 'dncsjd'
    }
    ]
    this.search = this.search.bind(this)
    this.setStatus = this.setStatus.bind(this)
  }
setStatus(row) {
  row.status = this.state.status
  row.respone = this.state.res
  console.log(row)
  axios.post('http://localhost:9996/helpline/response',row)
      .then(function (response) {
        this.setState({
          events: response.data
        })
      })
      .catch(function (error) {
        console.log(error);
      });
}
  search() {
    axios.post('http://localhost:9996/get/helpline', this.state.email)
      .then(function (response) {
        this.setState({
          events: response.data
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {

    return <div>
      <form noValidate autoComplete="off">
        <TextField id="standard-basic" label="Search" placeholder="search" style={{ textAlign: 'center' }} onChange={(e) => this.setState({ email: e.target.value })} />
      </form>
      <Button onClick={this.search} style={{ textAlign: 'center' }}>Search</Button>
       <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Email Id</TableCell>
              <TableCell align="right">College Name</TableCell>
              <TableCell align="right">Roll NUmber</TableCell>
              <TableCell align="right">Pass Out Year</TableCell>
              <TableCell align="right">HelpLine Subject</TableCell>
              <TableCell align="right">HelpLine Description</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">reponse</TableCell>
              <TableCell align="right">Filepath</TableCell>
              <TableCell align="right">Save</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.events.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.emailid}</TableCell>
                <TableCell align="right">{row.collegename}</TableCell>
                <TableCell align="right">{row.rollno}</TableCell>
                <TableCell align="right">{row.passoutyear}</TableCell>
                <TableCell align="right">{row.helplinesubject}</TableCell>
                <TableCell align="right">{row.helplinedescription}</TableCell>
                <TableCell align="right"> <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">status</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={this.state.status}
                    onChange={e => this.setState({status:e.target.value})}
                    fullWidth
                  >
                    <MenuItem value="open" name="open">open</MenuItem>
                    <MenuItem value="close" name="close">close</MenuItem>
                    
                  </Select>
                </FormControl></TableCell>
                <TableCell align="right"> <TextField onChange={(e) =>this.setState({res:e.target.value})}>{row.response}</TextField></TableCell>
                <TableCell align="right">{row.filepath}</TableCell>
                <TableCell align="right"><Button onClick={() => this.setStatus(row)}>Save</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>

  }
}
