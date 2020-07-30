// import React from 'react';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import axios from 'axios'
// import TextField from '@material-ui/core/TextField';
// import { makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import Select from '@material-ui/core/Select';
// import FormControl from '@material-ui/core/FormControl'
// export default class Events extends React.Component {

//   constructor(props) {
//     super(props)
//     this.state = {
//       events: [],
//       email: '',
//       status:''
//     }
//     this.rows = [{
//       id: 'djnjs',
//       name: 'nvnv',
//       rollno: 'ddbs',
//       status: 'dncsjd'
//     }
//     ]
//     this.search = this.search.bind(this)
//     this.setStatus = this.setStatus.bind(this)
//   }
// setStatus(row) {
//   row.status = this.state.status
//   row.respone = this.state.res
//   console.log(row)
//   axios.post('http://localhost:9996/helpline/response',row)
//       .then(function (response) {
//         this.setState({
//           events: response.data
//         })
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
// }
//   search() {
//     axios.post('http://localhost:9996/get/helpline', this.state.email)
//       .then(function (response) {
//         this.setState({
//           events: response.data
//         })
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   }
//   render() {

//     return <div>
//       <form noValidate autoComplete="off">
//         <TextField id="standard-basic" label="Search" placeholder="search" style={{ textAlign: 'center' }} onChange={(e) => this.setState({ email: e.target.value })} />
//       </form>
//       <Button onClick={this.search} style={{ textAlign: 'center' }}>Search</Button>
//        <TableContainer component={Paper}>
//         <Table aria-label="simple table">
//           <TableHead>
//             <TableRow>
//               <TableCell>Id</TableCell>
//               <TableCell align="right">Name</TableCell>
//               <TableCell align="right">Email Id</TableCell>
//               <TableCell align="right">College Name</TableCell>
//               <TableCell align="right">Roll NUmber</TableCell>
//               <TableCell align="right">Pass Out Year</TableCell>
//               <TableCell align="right">HelpLine Subject</TableCell>
//               <TableCell align="right">HelpLine Description</TableCell>
//               <TableCell align="right">Status</TableCell>
//               <TableCell align="right">reponse</TableCell>
//               <TableCell align="right">Filepath</TableCell>
//               <TableCell align="right">Save</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {this.state.events.map((row) => (
//               <TableRow key={row.id}>
//                 <TableCell component="th" scope="row">
//                   {row.id}
//                 </TableCell>
//                 <TableCell align="right">{row.name}</TableCell>
//                 <TableCell align="right">{row.emailid}</TableCell>
//                 <TableCell align="right">{row.collegename}</TableCell>
//                 <TableCell align="right">{row.rollno}</TableCell>
//                 <TableCell align="right">{row.passoutyear}</TableCell>
//                 <TableCell align="right">{row.helplinesubject}</TableCell>
//                 <TableCell align="right">{row.helplinedescription}</TableCell>
//                 <TableCell align="right"> <FormControl fullWidth>
//                   <InputLabel id="demo-simple-select-label">status</InputLabel>
//                   <Select
//                     labelId="demo-simple-select-label"
//                     id="demo-simple-select"
//                     value={this.state.status}
//                     onChange={e => this.setState({status:e.target.value})}
//                     fullWidth
//                   >
//                     <MenuItem value="open" name="open">open</MenuItem>
//                     <MenuItem value="close" name="close">close</MenuItem>

//                   </Select>
//                 </FormControl></TableCell>
//                 <TableCell align="right"> <TextField onChange={(e) =>this.setState({res:e.target.value})}>{row.response}</TextField></TableCell>
//                 <TableCell align="right">{row.filepath}</TableCell>
//                 <TableCell align="right"><Button onClick={() => this.setStatus(row)}>Save</Button></TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>

//   }
// }
import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from "axios";
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import history from './history'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
// function usersubmit() {

// }
export default function RegisterEvents() {
  const classes = useStyles();
  const [events, setEvent] = useState({ id: '', eventtype: '', summary: '', eventlocation: '', eventdescription: '', eventdatetime: '', amount: '' })
  const [eventstype, setEventsType] = useState()


  function Register(e) {
    e.preventDefault();
    let postData = {
      ...events
    }
    console.log(events)
    axios.post('http://localhost:9993/register/events', postData)
      .then(function (response) {
        if (response.success)
          sessionStorage.setItem('isLoggedIn', true)
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Register for Events
        </Typography>
        <form className={classes.form} noValidate onSubmit={Register}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="id"
            label="id"
            name="id"
            autoComplete="id"
            autoFocus
            onChange={e => setEvent({ ...events, id: e.target.value })}
          />
          <FormControl className={classes.formControl} fullWidth>
            <InputLabel id="demo-simple-select-label">Event Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={events.eventtype}
              onChange={e => setEvent({ ...events, eventtype: e.target.value }, { eventstype: e.target.name })}
              fullWidth
            >
              <MenuItem value="Crowd Funding" name="Crowd Funding">Crowd Funding</MenuItem>
              <MenuItem value="Recruitment" name="Recruitment">Recruitment</MenuItem>
              <MenuItem value="Others" name="Others">Others</MenuItem>
            </Select>
          </FormControl>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="summary"
            label="summary"
            name="summary"
            autoComplete="summary"
            autoFocus
            onChange={e => setEvent({ ...events, summary: e.target.value })}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="eventlocation"
            label="eventlocation"
            name="EventLocation"
            autoComplete="eventlocation"
            autoFocus
            onChange={e => setEvent({ ...events, eventlocation: e.target.value })}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="eventdescription"
            label="eventdescription"
            name="EventDescription"
            autoComplete="eventdescription"
            autoFocus
            onChange={e => setEvent({ ...events, eventdescription: e.target.value })}
          />
          <TextField
            id="dob"
            label="Birthday"
            type="date"
            fullWidth
            required
            name="EventDateTime"
            onChange={e => setEvent({ ...events, eventdatetime: e.target.value })}
            defaultValue="2017-05-24"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="amount"
            label="amount"
            name="amount"
            type="number"
            autoComplete="amount"
            autoFocus
            onChange={e => setEvent({ ...events, amount: parseInt(e.target.value) })}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}

          >
            Register
          </Button>
        </form>
      </div>
      <Box mt={8}>

      </Box>
    </Container>
  );
}