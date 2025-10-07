import { Container, Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import { useFetchOrdersQuery } from "./orderApi"
import { useNavigate } from "react-router-dom";
import { currencyFormart } from "../../lib/util";
import {format} from "date-fns"
export default function OrdersPage() {

    const {data: orders,isLoading} = useFetchOrdersQuery();
    const navigate = useNavigate();

    if (isLoading) return <Typography variant="h5"> Loading...</Typography>

    if (!orders) return <Typography variant="h5">No orders avaiable</Typography>
  return (
    <Container maxWidth='md'>
        <Typography variant="h5" align="center" gutterBottom>
            My orders
        </Typography>
        <Paper sx={{borderRadius: 3}}>
            <Table>
                <TableHead>
                    <TableCell align="center">Order</TableCell>
                    <TableCell> Date</TableCell>
                    <TableCell>Total</TableCell>
                    <TableCell>Status</TableCell>
                </TableHead>
                <TableBody>
                    {orders.map(order => (
                        <TableRow
                             key= {order.id}
                             hover
                             onClick={() => navigate(`/orders/${order.id}`)
                            }
                            style={{cursor: 'pointer'}}
                        >

                            <TableCell align="center">#{order.id}</TableCell>
                            <TableCell>{format(order.orderDate,'dd MMM yyyy')}</TableCell>
                            <TableCell>{currencyFormart(order.total)}</TableCell>
                            <TableCell>{order.orderStatus}</TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    </Container>
  )
}