import {connect} from 'react-redux';
import { Box, Button, ButtonGroup, selectClasses, Toolbar, Typography } from '@mui/material';
import { setActiveCategory } from '../../store/categories';

const Categories = (props) => {

  const {activeCategory, categories, setActiveCategory} = props;

  return(
    <Box mt='7%'>
      <Typography variant='h5'>Browse our Categories</Typography>
        <ButtonGroup variant='text'>
      {
        categories.map((category, index) => (
            <Button key={category.name} onClick={()=> setActiveCategory(category.name)}>{category.displayName}</Button>
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