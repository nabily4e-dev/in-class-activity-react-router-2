/** @format */

import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material'
import { Link, useLoaderData } from 'react-router-dom'

const ALL_PRODUCTS_URL = 'https://fakestoreapi.com/products'

export default function ProductsList() {
  const products = useLoaderData()

  return (
    <Grid
      container
      spacing={3}
    >
      {products.map((product) => (
        <Grid
          item
          key={product.id}
          xs={12}
          sm={6}
          md={4}
          lg={3}
        >
          <Link
            to={product.id.toString()}
            key={product.id}
          >
            <Card sx={{ height: '100%' }}>
              <CardActionArea>
                <CardMedia
                  component='img'
                  height=''
                  image={product.image}
                  alt={product.title}
                />
                <CardContent sx={{ height: '150px' }}>
                  <Typography
                    gutterBottom
                    variant='h6'
                    component='div'
                    sx={{ fontWeight: 600 }}
                  >
                    {product.title}
                  </Typography>
                  <Typography
                    variant='body2'
                    color='text.secondary'
                  >
                    {product.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size='small'
                  color='primary'
                >
                  Share
                </Button>
              </CardActions>
            </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  )
}

export async function productsLoader() {
  const response = await fetch(ALL_PRODUCTS_URL)
  if (!response.ok) {
    throw Error("Couldn't fetch the products.")
  }
  return response.json()
}
