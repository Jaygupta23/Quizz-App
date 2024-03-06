import React from "react";
import { Grid, Box, Card, CardMedia,CardContent,Typography,CardActions,Button, Hidden} from "@mui/material";
import Counter from "./Counter";

function Home({ data }) {
  function onCartHandler(item){
   const getAllCartData = JSON.parse(localStorage.getItem('Cart'))
   const existing = getAllCartData?.find((product)=> product.id === item.id)
   if(existing){
    alert("product is already present")
    return
   }
   const newCartData = getAllCartData?[...getAllCartData, item]: [item]

  //  console.log(newCartData);
   localStorage.setItem("Cart",JSON.stringify(newCartData))
  }

  return (
    <>
      <Box sx={{ flexGrow: 3 }}>
        <Grid container spacing={2}  mt={3} className="d-flex justify-content-center align-items-center">
          {data.map((item) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} key={item.id} mt={3} mb={3} className="d-flex justify-content-center align-items-center">
                <Card sx={{ maxWidth: 355, maxHeight: 420}} >
                  <CardMedia mt={3} 
                  className="img-fluid mx-auto py-4"
                    // sx={{ minHeight: 340}}
                    style={{height: "200px", width: "250px",backgroundSize: "contain" }} 
                    image={item.image}
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.category}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description.slice(0,100)}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" variant="contained" className="mb-2" onClick={()=>{onCartHandler(item)}}>Add to Cart</Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <Counter />
    </>
  );
}

export default Home;
