import React,{useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ReduxData_Header from './ReduxData_Header_Add_CartIcon';
import { useDispatch,useSelector } from 'react-redux';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});
export default function ReduxData_AddCart() {
    const classes = useStyles();
   const[cartData, setCartData]=useState([]);
    useEffect(()=>{
        const handleData=()=>{
            fetch("https://fakestoreapi.com/products").then((result)=>{
                result.json().then((response)=>{
                    setCartData(response);
                    console.log("showdata",cartData)
                })
            })
        }
        handleData();
    },[])
    
    let disptch = useDispatch();

   const handleCart=(item)=>{
    disptch({type:'Add_Cart',payload:[item.id, item]})
   }
   
  

  return (
    <div>
     <div className='div_header_cart'>
      <ReduxData_Header/> 
     </div>
     <br/><br/>
      <div>
          {
            cartData.map((item, i)=>{
                return(
                    <div className='div_cart_container'>
                       <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                               
                                className={classes.media}
                                image={item.image}
                                
                                />
                                <CardContent>

                                <Typography gutterBottom variant="h5" component="h5">
                                 {"Title:"+" "+item.title}
                                </Typography>
                                <Typography gutterBottom variant="h5" component="h2">
                               
                                 {"Price:"+" "+item.price}
                                </Typography>
                                <Typography variant="h6" color="textSecondary" component="h6">
                                   {"Category:"+" "+item.category}
                                  
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                               
                            </CardActions>
                            </Card>
                            <Button className='btn_cart' size="small" color="primary" onClick={()=>handleCart(item)}>
                                Add To Cart
                            </Button>
                              
                    </div>
                )
            })
          }
      </div>  
    </div>
  )
}
