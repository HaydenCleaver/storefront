import {connect, useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { showProducts, getProducts } from '../../store/products';
import { addToCart } from '../../store/cart';
import { When } from 'react-if';

const Products = (props) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const { categories, products, addToCart } = props;
  console.log(products);
  return (
    <When condition={categories.activeCategory !== ''}>
      
        <Container maxWidth='sm' align='center' mt='5%'>
          <Typography variant='h2'>{categories.activeCategory.toUpperCase()}</Typography>
          <Typography variant='h6'>Category Description Goes Here</Typography>
        </Container>
        <Container maxWidth='md' mt='5%'>
        <Grid container spacing={4}>
          {
            products.map((product, index) => (
              <Grid item xs={12} sm={6} md={4}>
                <Card key={`product-${index}`}>
                  <CardMedia>

                  </CardMedia>
                  <CardContent>
                    <Typography>{product.name}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button onClick={()=> addToCart(product)}>
                     ADD TO CART
                    </Button>
                    <Button>
                     VIEW DETAILS
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))
          }
        </Grid>
        </Container>
      
    </When>
  )
}

const mapState = ({products, categories, cart}) =>{
  return {
    products,
    categories,
    cart,
  }
}

// const mapCategoriesState = ({categories}) => {
//   return {
//     activeCategory: categories.activeCategory,
//   }
// }

const mapDispatchActions = {
  showProducts,
  addToCart,
}

export default 
connect(mapState, mapDispatchActions)(Products);