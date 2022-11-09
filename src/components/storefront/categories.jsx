import {connect} from 'react-redux';
import { Box, Button, selectClasses, Typography } from '@mui/material';
import { setActiveCategory } from '../../store/categories';

const Categories = (props) => {

  const {categories, setActiveCategory} = props;
  
  const handleClick = (e) => {

  }

  return(
    <Box mt='15%'>
      <Typography variant='h5'>Browse our Categories</Typography>
      {
        categories.map((category, index) => (
            <Button variant='text' key={category.name} onClick={''}>{category.displayName}</Button>
        ))
      }
      <br/>
      {
        <span>Active Category: {categories.activeCategory}</span>
      }
    </Box>
  )
}

const mapState = ({categories}) => {
  return {
    categories: categories.categories,
    activeCategory: categories.activeCategory,
  }
}

const mapDispatchActions = {
  setActiveCategory,
}

export default connect(mapState, mapDispatchActions)(Categories);