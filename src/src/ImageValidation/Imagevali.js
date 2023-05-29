import React,{useState} from 'react'
import Avatar from '@material-ui/core/Avatar';
export default function Imagevali() {
    const [getImg, setImg] = useState("")
    const [getErrImg, setErrImg] = useState("")
    
    function ValidationFileType(){
        var inputElement = document.getElementById('file-upload'); 		
var files = inputElement.files; 		
   if(files.length==0){ 			
    setErrImg("Please choose a file first..."); 		
    	return false;
    }else{ 			
        var filename = files[0].name;
/* getting file extenstion eg- .jpg,.png, etc */ 			
       var extension = filename.substr(filename.lastIndexOf("."));
/* define allowed file types */ 			
       var allowedExtensionsRegx = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
/* testing extension with regular expression */ 			
     var isAllowed = allowedExtensionsRegx.test(extension);
if(isAllowed){ 				
    setErrImg("File type is valid for the upload"); 				
    /* file upload logic goes here... */ 			
}else{ 			
    setErrImg("Invalid File Type."); 		
        	return false; 
       } 		
    } 	
    }

    const handleClick=()=>{

    }

  return (
    <div>
        <h6>{getErrImg}</h6>
        <input type="file" id="file-upload" onChange={(e)=>setImg(e.target.value)} /> 	<br/>
        <br/>
        <button>upload Image</button>
        <Avatar id="user-icon" alt="Remy Sharp" variant='rounded'
                      style={{ width: 70, height: 50 }} src={getImg.icon} />
    </div>
  )
}

