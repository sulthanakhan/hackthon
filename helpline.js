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
import { TextareaAutosize } from '@material-ui/core';
import axios from "axios"
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

export default function HelpLine() {
    const classes = useStyles();
    const [helpline,setHelpline] = useState({email:'',name:'',collegename:'',rollnumber:'',helplinesubject:'',helplinedescription:'',passoutyear:''})

    function helplinesubmit(e) {
        e.preventDefault();
        let postData = {
            ...helpline
        }
        console.log(postData)
        axios.post('URL', postData)
             .then(function (response) {
               history.push("/help")
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
           Helpline form
          </Typography>
          <form className={classes.form} noValidate onSubmit={helplinesubmit} >
          <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="name"
              label="Student Name"
              type="text"
              id="name"
              autoComplete="name"
              autoFocus
              onChange = { e =>  setHelpline({...helpline, name:e.target.value})}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              
              onChange = { e =>  setHelpline({...helpline, email:e.target.value})}
            />
            
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="collegename"
              label="College Name"
              type="text"
              id="collegename"
              autoComplete="collegename"
              onChange = { e =>  setHelpline({...helpline, collegename:e.target.value})}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="rollnumber"
              label="Roll Number"
              type="text"
              id="rollnumber"
              autoComplete="rollnumber"
              onChange = { e =>  setHelpline({...helpline, rollnumber:e.target.value})}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="passoutyear"
              label="Pass Out Year"
              type="text"
              id="passoutyear"
              autoComplete="passoutyear"
              onChange = { e =>  setHelpline({...helpline, passoutyear:e.target.value})}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="helplinesubject"
              label="HelpLine Subject"
              type="text"
              id="helplinesubject"
              autoComplete="helplinesubject"
              onChange = { e =>  setHelpline({...helpline, helplinesubject:e.target.value})}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="helplinedescription"
              label="HelpLine Description"
              type="text"
              id="helplinedescription"
              autoComplete="helplinedescription"
              onChange = { e =>  setHelpline({...helpline, helplinedescription:e.target.value})}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              
            >
              Helpline Submit
            </Button>
          </form>
        </div>
        <Box mt={8}>
          
        </Box>
      </Container>
    );
}