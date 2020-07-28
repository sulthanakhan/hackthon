import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios'
import { makeStyles, fade } from '@material-ui/core/styles';
import { ActionSearch } from 'material-ui/svg-icons';
const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function Select() {
    const classes = useStyles();
    const [s,sets]= React.useState()
    var data
    function searchtext() {
        var e = {
            email:s
        }
        axios.post('http://localhost:9996/post/helpline',e )
             .then(function (response) {
               data = response
             })
             .catch(function (error) {
                 console.log(error);
         }); 
    }
    const Table = ({ list }) => (
        <table className="table table-striped" style={{Align: 'center'}}>
          <thead>
            <tr>
              <th>Student Name</th>&nbsp;&nbsp;
              <th>Email</th>&nbsp;&nbsp;
              <th>Roll Number</th>&nbsp;&nbsp;
             <th>Pass Out Year</th>&nbsp;&nbsp;
            <th>College Name</th>&nbsp;&nbsp;
            <th>HelpLine Subject</th>&nbsp;&nbsp;
            <th>HelpLine Description</th>&nbsp;&nbsp;
            <th>Status</th>
            <th>Response</th>
            <th>file</th>
            </tr>
            <br/>
          </thead>
          <tbody>
            {list.map(item => (
              <tr key={item.name}>
                <td>
                  <span>{item.email}</span>
                </td>&nbsp;&nbsp;
                <td>
                  <span>{item.rollnumber}</span>
                </td>&nbsp;&nbsp;

                <td>
                  <span>{item.passoutyear}</span>
                </td>&nbsp;&nbsp;
                <td>
                  <span>{item.collegename}</span>
                </td>&nbsp;&nbsp;
                <td>
                  <span>{item.helplinesubject}</span>
                </td>&nbsp;&nbsp;
                <td>
                  <span>{item.helplinedescription}</span>
                </td>&nbsp;&nbsp;
                <td>
                  <span>{item.status}</span>
                </td>&nbsp;&nbsp;
                <td>
                  <span>{item.response}</span>
                </td>&nbsp;&nbsp;
                <td>
                  <span>{item.file}</span>
                </td>&nbsp;&nbsp;
        
        
              </tr>
            ))}
          </tbody>
        </table>
      );
    return (
        <div>
            <form  className={classes.root} noValidate autoComplete="off">
                <TextField id="standard-basic" label="email" placeholder="email" style={{textAlign: 'center'}} onChange={(e)=> sets({s:e.target.value})}/>
            </form>
            <Button onClick={searchtext} style={{textAlign: 'center'}}>Search</Button>
            {data ? <Table list={data} /> : null}
        </div>
    );
}