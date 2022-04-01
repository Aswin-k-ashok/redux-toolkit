import { Grid, List, ListItem, Paper } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { EmployeeData } from '../EmployeeData'
import { useSelector, useDispatch } from 'react-redux'
import { reduxUpdateSelected } from '../Redux/features/employeeFeature'


function Employee() {
    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    //local state mangement

    let [state, setState] = useState(
        { emps: EmployeeData.getAllEmployees() }
    )
    let { emps } = state


    function updateSelected(id) {
        let selectedEmpl = emps.map(emp => {
            if (emp.id === id) {
                return {
                    ...emp,
                    isSelected: !emp.isSelected
                }

            }
            else return emp;
        })
        setState({
            ...state, emps: selectedEmpl
        })
    }
    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    // ***********************************************
    // Global state Redux state management

    let reduxEmployeeState = useSelector((state) => {
        return state["employeeList"]  // this is from redux global state open redux dev tools for referrence
    })

    let { reduxEmpl } = reduxEmployeeState // this is used intstead emps which is local component state

    let dispatch = useDispatch()
    // ************************************************

    return (
        <React.Fragment>
            {/* <pre>{JSON.stringify(emps)}</pre> */}
            <Grid container spacing={3}>

                <Grid item sx={12} md={6}>


                    <Paper>
                        <h3>local state</h3>
                        <List>
                            {
                                emps.length > 0 && emps.map(emp => {
                                    return (
                                        <Box>

                                            <ListItem>
                                                <input type='checkbox' onChange={() => updateSelected(emp.id)}></input>
                                                {emp.name}

                                            </ListItem>

                                        </Box>

                                    )
                                })
                            }
                        </List>

                        <List>
                            {
                                emps.length > 0 && emps.map(emp => {
                                    return (
                                        <ListItem key={emp.id}>

                                            {
                                                emp.isSelected && <p> {emp.name}</p>
                                            }

                                            {/* {emp.isSelected > !emp.isSelected ? (<p>now change the component</p>) : <p></p>} */}
                                        </ListItem>
                                    )
                                })
                            }

                        </List>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Paper>
                        <h3>redux state</h3>
                        <List>
                            {
                                reduxEmpl.length > 0 && reduxEmpl.map(rEmp => {
                                    return (

                                        <ListItem>
                                            <input type='checkbox' checked={rEmp.isSelected} onChange={() => dispatch(reduxUpdateSelected(rEmp.id))}></input>
                                            {rEmp.name}

                                        </ListItem>

                                    )
                                })
                            }
                        </List>

                        <List>
                            {
                                reduxEmpl.length > 0 && reduxEmpl.map(rEmp => {
                                    return (
                                        <ListItem key={rEmp.id}>

                                            {
                                                rEmp.isSelected && <p> {rEmp.name}</p>
                                            }

                                        </ListItem>
                                    )
                                })
                            }

                        </List>
                    </Paper>

                </Grid>
            </Grid>
        </React.Fragment >
    )
}

export default Employee