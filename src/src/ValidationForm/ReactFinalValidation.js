import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom'
// import { postDataAndImage, postData, getData } from './FetchNodeServices'
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Avatar from '@material-ui/core/Avatar';
// import Swal from 'sweetalert2';
// import loginBg from '../NewCompoment/Images/signbg.png'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();

  const [getid, setId] = useState('');
  const [getName, setName] = useState('');
  const [getLname, setLname] = useState('');
  const [getContact, setContact] = useState('');
  const [getAddress, setAddress] = useState('');
  const [getEmail, setEmail] = useState('');
  const [getPassword, setPassword] = useState('');
  const [getImg, setImg] = useState({ icon: '', file: '' });
  const [getSetmessage, setMessage] = useState('');

  const [ErrName, setErrName] = useState('');
  const [ErrLName, setErrLName] = useState('');
  const [ErrContact, setErrContact] = useState('');
  const [ErrAddress, setErrAddress] = useState('');
  const [ErrEmail, setErrEmail] = useState('');
  const [ErrPassword, setErrPassword] = useState('');
  const [ErrImg, setErrImg] = useState("");




  // /* handle in icon*/
  // const handleIcon=(e)=>{
  //   // setImg({icon: URL.createObjectURL(e.target.files[0]),file:e.target.files[0]})
  //   setImg({icon: URL.createObjectURL(e.target.files[0])})

  //  }

  /* handle in image*/
  const handleIcon = (e) => {
    setImg({ icon: URL.createObjectURL(e.target.files[0]), file: e.target.files[0] })
  }


  const hadleSubmit = async (e) => {

    var err = false;

    var fname = /^[A-Za-z ]+$/;/*regular expration in only character name*/
    var lname = /^[A-Za-z ]+$/;/*regular expration in only character name*/

    var contact = /^[6789]\d{9}$/;/*regular expration in only number  /^[0-9]+$/ */
    // indian number start digit /^[6789]\d{9}$/

    var address = /^[A-Za-z ]+$/;/*regular expration in only character name*/


    var mailformat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; /*regular expration in email*/

    var pass = /(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%&^*])/;/*regular expration in only*/

    var dateformat = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;

    var imgpattern = ("[^\\s]+(.*?)\\.(jpg|jpeg|png|gif|JPG|JPEG|PNG|GIF)$");


    //  name validation 
    if (getName == "") {
      
      setErrName(<p style={{ color: 'red' }}>Name field required</p>);

    }
    else if (!fname.test(getName)) {
      
      setErrName(<p style={{ color: 'red' }}>Only Character</p>);
    }
    else {
      setErrName(true)
    }

    //  lname validation 
    if (getLname == "") {
     
      setErrLName(<p style={{ color: 'red' }}>Name field required</p>);

    }
    else if (!lname.test(getLname)) {
      
      setErrLName(<p style={{ color: 'red' }}>Only Character</p>);
    }
    else {
      setErrLName(true)
    }

    // number validation
    if (getContact == "") {
      setErrContact(<p style={{ color: 'red' }}>Number field required</p>);

    }
    else if (!contact.test(getContact)) {
      setErrContact(<p style={{ color: 'red' }}>Please enter a valid only phone number</p>);
    }
    else {
      setErrContact(true)
    }

    //  lname validation 
    if (getAddress == "") {
      
      setErrAddress(<p style={{ color: 'red' }}>Name field required</p>);
    }

    else if (!address.test(getAddress)) {
     
      setErrAddress(<p style={{ color: 'red' }}>Only Character</p>);
    }
    else {
      setErrAddress(true)
    }

    // email validation
    if (getEmail == "") {
      setErrEmail(<p style={{ color: 'red' }}>Email field required</p>);

    }
    else if (!mailformat.test(getEmail)) {
      setErrEmail(<p style={{ color: 'red' }}>Email invalied</p>);
    }

    else {
      setErrEmail(true)
    }


    // password validation 
    if (getPassword == "") {
      setErrPassword(<p style={{ color: 'red' }}>Password field required</p>);

    }
    else if (!pass.test(getPassword)) {
      setErrPassword(<p style={{ color: 'red' }}>Uppercase later, number and special char only.</p>);
    }
    else {
      setErrPassword(true)
    }

    var inputElement = document.getElementById('contained-button-file'); 
    var files = inputElement.files; 	

    if(files.length==0){ 			
      setErrImg(<p style={{ color: 'red' }}>"Please choose a file first..."</p>); 		
        return false;
    }else{
      var filename = files[0].name;
      var extension = filename.substr(filename.lastIndexOf("."));
      // var allowedExtensionsRegx = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
      var allowedExtensionsRegx = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
      console.log(extension)
      var isAllowed = allowedExtensionsRegx.test(extension);

      if(!isAllowed){ 				
        setErrImg(<p style={{ color: 'red' }}>"File type is valid for the upload"</p>); 				
        /* file upload logic goes here... */ 			
    }else{ 			
      setErrImg(false); 		
              // return false; 
        } 
    }
     

    if (!err) {

    //   var formData = new FormData()
    //   formData.append('name', getName)
    //   formData.append('lname', getLname)
    //   formData.append('contact', getContact)
    //   formData.append('address', getAddress)
    //   formData.append('email', getEmail)
    //   formData.append('password', getPassword)
    //   formData.append('img', getImg.file)
    //   var config = { header: { 'content-type': 'multipart/form-data' } }
    //   var result = await postDataAndImage('insertData/signupData', formData, config);
    //   console.log("show-data...>", result);
    //   if (result) {
    //     setMessage("Record Submitted");
    //     // Swal.fire({
    //     //   icon: 'success',
    //     //   title: 'Registration Success',
    //     //   // text: 'Something went wrong!',
    //     //   // footer: '<a href="">Why do I have this issue?</a>'
    //     // })

    //   } else {
    //     // setMessage("Fail to Submit Record")
    //     // Swal.fire({
    //     //   icon: 'error',
    //     //   title: 'Oops...',
    //     //   text: 'Something went wrong!',
    //     //   footer: '<a href="">Why do I have this issue?</a>'
    //     // })
    //   }
    }
  }

  return (
    <>
      {/* <img className='reg-bg' src={loginBg} /> */}
      <div className='div-reg-container'>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            {getSetmessage}
            <Typography component="h1" variant="h5">
              Sign up
            </Typography><br />
            <div>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>

                  <TextField
                    autoComplete="fname"
                    name="name"
                    variant="outlined"
                    placeholder='Enter you name'
                    required
                    fullWidth
                    autoFocus
                    onChange={(e) => setName(e.target.value)}
                  />
                  <h6 style={{ textAlign: 'center' }} >{ErrName}</h6>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    placeholder='Enter you last name'
                    variant="outlined"
                    required
                    fullWidth
                    name="lname"
                    autoComplete="lname"
                    onChange={(e) => setLname(e.target.value)}
                  />
                  <h6 style={{ textAlign: 'center' }} >{ErrLName}</h6>
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    placeholder='Enter you contact'
                    variant="outlined"
                    required
                    fullWidth
                    name="contact"
                    autoComplete="contact"
                    onChange={(e) => setContact(e.target.value)}
                  />
                  <h6 style={{ textAlign: 'center' }} >{ErrContact}</h6>
                </Grid>


                <Grid item xs={12}>
                  <TextField
                    placeholder='Enter you address'
                    variant="outlined"
                    required
                    fullWidth
                    name="address"
                    autoComplete="address"
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <h6 style={{ textAlign: 'center' }} >{ErrAddress}</h6>
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    placeholder='Enter you email'
                    variant="outlined"
                    required
                    fullWidth
                    name="email"
                    autoComplete="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <h6 style={{ textAlign: 'center' }} >{ErrEmail}</h6>
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    placeholder='Enter you password'
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <h6 style={{ textAlign: 'center' }} >{ErrPassword}</h6>
                </Grid>


                <Grid item xs={6} sm={6} md={6} lg={6}>
                  <img src="" width='12' height='12' className={classes.valImgicon} />
                  <input
                    // id="file-upload"
                    accept="image/*"
                    className={classes.input}
                    id="contained-button-file"
                    multiple
                    type="file"
                    onChange={(e) => handleIcon(e)}
                    style={{ display: 'none' }}
                  />
                  <label htmlFor="contained-button-file">
                    <Button variant="contained" color="primary" component="span" className={classes.uploadbtn1} startIcon={<CloudUploadIcon />}>
                      Upload Icon
                    </Button>
                  </label>
                  <Grid item xs={6} className={classes.container}>
                    <Avatar id="user-icon" alt="Remy Sharp" variant='rounded'
                      style={{ width: 70, height: 50 }} src={getImg.icon} />
                  </Grid>
                </Grid>
              
              </Grid>
              <h6 style={{textLign:"center"}} >{ErrImg}</h6>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={(e) => hadleSubmit(e)}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  {/* <Link href='/Signin' variant="body2">
                        111Already have an account? Sign in
                      </Link> */}
                  <Link to="/Signin">
                    <a >Sign In Here</a>
                  </Link>
                </Grid>
              </Grid>
            </div>
          </div>
          <Box mt={5}>
            <Copyright />
          </Box>
        </Container>
      </div>
    </>
  );
}


