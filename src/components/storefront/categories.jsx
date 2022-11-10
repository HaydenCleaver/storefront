import { useEffect } from 'react';
import {connect, useDispatch} from 'react-redux';
import { Box, Button, ButtonGroup, selectClasses, Toolbar, Typography } from '@mui/material';
import { getCategories, setActiveCategory } from '../../store/categories';

const Categories = (props) => {

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  // const {activeCategory, categories, setActiveCategory} = props;

  return(
    <Box mt='7%'>
      <Typography variant='h5'>Browse our Categories</Typography>
        <ButtonGroup variant='text'>
      {
        props.categories.map((category, index) => (
            <Button key={`category-${index}`} onClick={()=> props.setActiveCategory(category.name)}>{category.displayName}</Button>
        ))
      }
      </ButtonGroup>
      <br/>
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