/** @format */

import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'
import { useLoaderData, useParams } from 'react-router-dom'

const PRODUCT_URL = 'https://fakestoreapi.com/products/'

export default function ProductInfo() {
  const product = useLoaderData()
  const { id } = useParams()

  return (
    <Card sx={{ maxWidth: 600 }}>
      <CardActionArea>
        <CardMedia
          component='img'
          height='500'
          image={product.image}
          alt={product.title}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant='h5'
            component='div'
          >
            {product.title}
          </Typography>
          <Typography
            variant='h6'
            color='text.secondary'
          >
            {product.category}
          </Typography>
          <Typography
            variant='body1'
            color='text.secondary'
          >
            {product.description}
          </Typography>
          <Typography
            variant='h5'
            color='text.secondary'
          >
            ${product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size='large'
          color='primary'
          variant='contained'
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  )
}

export const productsInfoLoader = async ({ params }) => {
  const { id } = params
  const response = await fetch(`${PRODUCT_URL}${id}`)
  if (!response.ok) {
    throw Error('Could not fetch data!')
  }
  return response.json()
}
