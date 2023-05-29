import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

export default function SimplePopover() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const cart = useSelector(state=>state.cart);
  const length = Object.keys(cart).length;
  console.log("cartLength", length);
  const cartItem = Object.values(cart)
  console.log("cartItem",cartItem)

  return (
    <div>
      <Button aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
      <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={length} color="secondary">
                <AddShoppingCartIcon />
              </Badge>
            </IconButton>
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography className={classes.typography}>
        <div className={classes.paper}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <b>ORDER SUMMARY</b>
          </Grid>
          <Grid
            style={{ display: "flex", justityContent: "flex-end" }}
            item
            xs={12}
            sm={6}
          >
            <div
              className={{
                width: 200,
                display: "flex",
                justifyContent: "right",
                backgroundColor: "#e74c3c",
              }}
            >
              {length} item(s)
            </div>
          </Grid>

          {cartItem.map((item) => (
            <>
              <Grid item xs={12} sm={6}>
                <caption>
                  {/* <img
                    src={`${ServerURL}/images/${item.picture}`}
                    style={{ width: "30px", height: "35px" }}
                  ></img> */}
                  <figcaption>{item.category}</figcaption>
                </caption>
              </Grid>
              <Grid item xs={12} sm={6}>
                <span>&#8377;</span>&nbsp;
                {item.price == 0 ? item.price : item.price}x{" "}
                {item.qtydemand}
              </Grid>
            </>
          ))}

          <Grid
            style={{ display: "flex", flexDirection: "column" }}
            item
            xs={12}
            sm={6}
          >
            <b>
              <span>&#8377;&nbsp;
              {/* {total} */}
              </span>
            </b>
            <small style={{ color: "#008000" }}>
              You save<span>&#8377;</span>&nbsp;
              {/* {totalSaving} */}
            </small>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Button variant="contained" color="primary">
              PROCEED TO CART
            </Button>
          </Grid>
        </Grid>
      </div>
        {/* {
            cartItem.map((item)=>{
                return(
                    <div>
                        Title : &nbsp;{item.title}<br/>
                        Category: &nbsp;{item.category}<br/>
                        Price: &nbsp;{item.price}<br/>
                        <hr/>

                            
                    </div>
                )
            })
        } */}
        </Typography>
      </Popover>
    </div>
  );
}
