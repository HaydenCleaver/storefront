import { connect } from 'react-redux';
import { AppBar, Button, Grid, Toolbar, Typography } from '@mui/material';

const Header = (props) => {

  const {cart} = props;
  
  return(
    <>
    <AppBar color="inherit">
      <Toolbar>
        <Grid container spacing={2}>
          <Grid item xs={8} variant='h4'>
            <Button>OUR STORE</Button>
          </Grid>
          <Grid item xs={4}>
            <Button align='right'>{`Cart (${cart.count})`}</Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
    </>
  )
}

const mapState = ({ cart }) =>{
  return {
    cart,
  }
}

export default connect(mapState)(Header);