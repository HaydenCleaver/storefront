import {connect} from 'react-redux';

import { showProducts } from '../../store/products';

const Products = (props) => {

  const {categories, products, showProducts } = props;

  return (
    <>
      Products
    </>
  )
}

const mapState = ({products}) =>{
  return {
    products: products.products,
  }
}

// const mapCategoriesState = ({categories}) => {
//   return {
//     activeCategory: categories.activeCategory,
//   }
// }

const mapDispatchActions = {
  showProducts,
}

export default 
connect(mapState, mapDispatchActions)(Products);