import { ConstructionOutlined } from '@mui/icons-material'
import { Grid, Paper } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../Redux/features/getDataFromApi'

function UserList() {

    const dispatch = useDispatch()

    let userDataApi = useSelector((state) => {
        return state['reduxUserList']
    })

    let { loading: reduxLoading, users: reduxUsers, error } = userDataApi

    const [state, setState] = useState({
        loading: false,
        users: [],
        error: '',
    })

    const getDataFrom = async () => {
        try {
            setState({ ...state, loading: true })
            const response = await axios.get('https://jsonplaceholder.typicode.com/users#')
            setState({
                ...state,
                users: response.data,
                loading: false
            })
        } catch (error) {
            console.log(error)
        }


    }

    useEffect(async () => {

        getDataFrom()
        dispatch(getUsers())


    }, [dispatch])


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
                                    return (

                                        <p>{user.name}</p>
                                    )
                                })}
                            </Box>}
                    </Paper>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Paper>
                        <h3>redux state</h3>
                        {reduxUsers.map(user => {
                            return (

                                <p>{user.address.city}</p>
                            )
                        })}
                    </Paper>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default UserList