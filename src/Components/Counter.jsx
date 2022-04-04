import React, { useState } from 'react'
import { Paper, Button, Typography, Box, Grid } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux' // useDispatch is for dispatching the action from the store and useSelector is for getting state data from store
import { incrementAction, decrementAction, incrementByFiveAction } from '../Redux/features/counterFeature'
import { DisplaySettings } from '@mui/icons-material'
import { display } from '@mui/system'

function Counter() {

    const [count, setCount] = useState(0)
    const dispatch = useDispatch()

    let counterState = useSelector((state) => {
        return state["reduxCounter"]
    })

    let { reduxCount } = counterState

    return (
        <React.Fragment >

            <Grid container spacing={2}>
                <Grid item sx={12} md={6}>

                    <Paper style={{ maxWidth: '50em', minHeight: '10em', margin: '5%', padding: '1em' }}>
                        <Typography style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', }}>
                            <h3>normal counter example</h3>
                            <h1>{count}</h1>
                        </Typography>
                        <Box style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <Button variant='contained' color='success' onClick={() => setCount(count + 1)}>increase 1</Button>
                            <Button variant='contained' color='error' onClick={() => setCount(count - 1)}>decrease 1</Button>
                            <Button variant='contained' color='secondary' onClick={() => setCount(count + 5)}>increase 5</Button>
                        </Box>
                    </Paper>

                </Grid>

                <Grid item sx={12} md={6}>

                    <Paper style={{ maxWidth: '50em', minHeight: '10em', margin: '5%', padding: '1em' }}>
                        <Typography style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', }}>
                            <h3>redux counter example</h3>
                            <h1>{reduxCount}</h1>
                        </Typography>
                        <Box style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <Button variant='contained' color='success' onClick={() => dispatch(incrementAction())} >increase 1</Button>
                            <Button variant='contained' color='error' onClick={() => dispatch(decrementAction())}>decrease 1</Button>
                            <Button variant='contained' color='secondary' onClick={() => dispatch(incrementByFiveAction(3))} >increase 5</Button>
                        </Box>
                    </Paper>

                </Grid>

            </Grid>


        </React.Fragment>
    )
}

export default Counter