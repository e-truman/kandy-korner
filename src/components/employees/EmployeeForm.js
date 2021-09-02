import React, { useState } from "react"
import { useHistory } from "react-router-dom"

export const EmployeeForm = () => {
    const [employee, setEmployee] = useState({
        name: "",
        manager: false,
        fullTime: false,
        hourlyRate: ""
    });

    // can give use state initial values to capture more than one thing. 

    const history = useHistory() // hook that allows you to push to browser history


// save ticket uses the state variables to create an object to post to api

    const hireEmployee = (event) => { // invoked when you push submit button
        event.preventDefault() // prevents form from being submitted without being able to see your fetch
        const newHire ={
            name: employee.name, // got this from state
            manager: employee.manager,
            locationId: 1,
            fullTime: employee.fullTime,
            hourlyRate: employee.hourlyRate
            
        }
       const fetchOption = {
           method: "POST", //have to write options for fetch before writign fetch call
           headers: { // needs headers or json won't work. only need content type
               "Content-Type": "application/json"
           },
           body: JSON.stringify(newHire) // sends body of reqest. hast to be sent as string. cant be javascript objects
       }
    
    return fetch("http://localhost:8088/employees", fetchOption)
       .then(() => {
            history.push("/employees") // after you post a ticket, you are redirected to service tickets
       })
    }
    return (
        <form className="ticketForm">
            <h2 className="ticketForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="First and last name"
                        onChange={
                            (evt) => {
                                const copy = {...employee}
                                copy.name = evt.target.value
                                setEmployee(copy)
                            }
                        } />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Manager?</label>
                    <input type="checkbox"
                        onChange={
                            (evt) => {
                                const copy = {...employee}
                                copy.manager = evt.target.checked
                                setEmployee(copy)
                            }
                        } 
                        type="checkbox"/>
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Full-time worker?:</label>
                    <input type="checkbox"
                        onChange={
                            (evt) => {
                                const copy = {...employee}
                                copy.fullTime = evt.target.checked
                                setEmployee(copy)
                            }
                        } 
                        type="checkbox"/>
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Hourly Rate:</label>
                    <input 
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Hourly Rate"
                        onChange={
                            (evt) => {
                                const copy = {...employee}
                                copy.hourlyRate = evt.target.value
                                setEmployee(copy)
                            }
                        } 
                       />
                </div>
            </fieldset>

            <button className="btn btn-primary" onClick={hireEmployee}> 
               Hire Employee
            </button>
        </form>
    )
}