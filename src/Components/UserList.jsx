import { Grid, Paper } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function UserList() {

    const [state, setState] = useState({
        loading: false,
        users: [],
        error: '',
    })

    useEffect(async () => {

        let getData = async () => {

            setState({ ...state, loading: true })
            const response = await axios.get('https://jsonplaceholder.typicode.com/users#')
            setState({
                ...state,
                users: response.data,
                loading: false
            })
            getData()
        }

    }, [])


    let { loading, message, users } = state

    console.log(users)


    return (
        <React.Fragment>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Paper>
                        <h3>local state</h3>

                        {!loading && users.length > 0 &&
                            <Box>
                                {users.map(user => {
                                    <p>{user.name}</p>
                                })}
                            </Box>}
                    </Paper>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Paper>
                        <h3>redux state</h3>
                    </Paper>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default UserList