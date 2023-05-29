import React,{useState} from 'react'
export default function Validationpage(e) {
 const [name, setUserName] = useState('')
 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')

 const [errors, setError] = useState({name:"", email:"", password:""})
 const isValidPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{12,}$/;

 const handleSubmit=(e)=>{
   let errorCount = 0;
   if(name == ''){
    errorCount++;
    setError((prevState)=>{
       return {...prevState,name:'user name is required'}
    })
   }else{
    setError((prevState)=>{
      return {...prevState,name:''}
   })
   }
   
   if(email == ''){
    errorCount++;
    setError((prevState)=>{
       return {...prevState,email:'user email is required'}
    })
   } else if(!isValidPasswordRegex==(email)){
    errorCount++;
    setError((prevState)=>{
       return {...prevState,email:'email is invalide please check'}
    })
   }
   else{
    setError((prevState)=>{
      return {...prevState,email:''}
   })
   }

   if(password == ''){
    errorCount++;
    setError((prevState)=>{
       return {...prevState,password:'user password is required'}
    })
   }else if(password.length<6){
    errorCount++;
    setError((prevState)=>{
      return {...prevState,password:'password is too short'}
   })
   }
    else {
    setError((prevState)=>{
      return {...prevState,password:''}
   })
   }

   if(errorCount == 0){
    console.log(name,email,password)
    setUserName("");
    setEmail("")
    setPassword(""); 
   }
 }

  return (
    <div>
      <h2 style={{textAlign:'center'}}>Validation Page</h2> 
      <form>
        <div>
          <div id='name'>
          Name:<input type="text" value={name} onChange={(e)=>setUserName(e.target.value)}  name="name" placeholder='enter the name' />
          <span className='formerror'>{errors.name && <p>{errors.name}</p>}</span>
          </div>
          
          <div id='email'>
              Email:<input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} name="email" placeholder='enter the email' />
              <span className='formerror'>{errors.email && <p>{errors.email}</p>}</span>
          </div>

          <div id='password'>
              Email:<input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} name="password" placeholder='enter the password' />
              <span className='formerror'>{errors.password && <p>{errors.password}</p>}</span>
          </div>

          <div id='submit'>
            <input onClick={handleSubmit} type="button"  value='submit' name="sumit"/>
          </div>
        </div>
      </form>  
    </div>
  )
}
