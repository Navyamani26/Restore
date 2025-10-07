import { Box, Button, Container, Divider, Paper, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import type { Order } from "../../app/models/order";
import { currencyFormart, formatAddressString, formatPaymentString } from "../../lib/util";

export default function CheckoutSuccess() {
  const {state} = useLocation();
  const order = state.data as Order;

  if (!order) return <Typography>Problem accessint the order</Typography>
  console.log(order);

  
  return (
    <Container maxWidth='md'>
      <>
      <Typography variant="h4" gutterBottom fontWeight='bold'>
        thanks for your fake order
      </Typography>
      <Typography variant="body1" color="textSecondary" gutterBottom>
        your order <strong>#{order.id}</strong> will never be processcced as this is a fake shop
      </Typography>

      <Paper elevation={1} sx={{p:2, mb:2, display:'flex', flexDirection:'column', gap:1.5 }}>
        <Box display='flex' justifyContent='space-between'>
          <Typography variant="body2" color="textSecondary">
            order date
          </Typography>
          <Typography variant="body2" color="bold">
            {order.orderDate}
          </Typography>
        </Box>
        <Divider/>
        <Box display='flex' justifyContent='space-between'>
          <Typography variant="body2" color="textSecondary">
            Payment method
          </Typography>
          <Typography variant="body2" color="bold">
            {formatPaymentString(order.paymentSummary)}
          </Typography>
        </Box>
        <Divider/>
        <Box display='flex' justifyContent='space-between'>
          <Typography variant="body2" color="textSecondary">
            oshipping address
          </Typography>
          <Typography variant="body2" color="bold">
            {formatAddressString(order.shippingAddress)}
          </Typography>
        </Box>
        <Divider/>
        <Box display='flex' justifyContent='space-between'>
          <Typography variant="body2" color="textSecondary">
            Amount
          </Typography>
          <Typography variant="body2" color="bold">
            {currencyFormart(order.total)}
          </Typography>
        </Box>
      </Paper>
      <Box display='flex' justifyContent='flex-start' gap={2}>
          <Button variant="contained" color="primary" component={Link} to={`orders/${order.id}`}>
           view your order
          </Button>
          <Button component={Link} to='/catalog' variant="outlined" color="primary">
            continue shopping
          </Button>
      </Box>
      </>


    </Container>
  )
}