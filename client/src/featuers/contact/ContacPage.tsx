import { Button, ButtonGroup, Typography } from "@mui/material"
import { decrement, increment } from "./CouterReducer"
import { useAppDispatch, useAppSelector } from "../../app/store/Store";

export default function ContacPage() {
    const data = useAppSelector(state => state.counter.data);
    const dispatch = useAppDispatch()
  return (
    <>
    <Typography variant="h2">
        Contact page
    </Typography>
    <Typography variant="body1">
        The data is: {data}
    </Typography>
    <ButtonGroup>
        <Button onClick={() => dispatch(decrement(1))} color="error">
            Decrement
        </Button>
         <Button onClick={() => dispatch(increment(1))} color="secondary">
            Increment
        </Button>
         <Button onClick={() => dispatch(increment(5))} color="secondary">
            Increment by 5
        </Button>
    </ButtonGroup>
    </>
  )
}