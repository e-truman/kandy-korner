import React, { useState } from "react"
import { useHistory } from "react-router-dom"

export const EmployeeForm = () => {
    const [employee, setEmployee] = useState({
        name: "",
        locationId: "",
        manager: false,
        fullTime: false,
        hourlyRate: 1
    });

    // can give use state initial values to capture more than one thing. 

    const history = useHistory() // hook that allows you to push to browser history


// save ticket uses the state variables to create an object to post to api

    const hireEmployee = (event) => { // invoked when you push submit button
        event.preventDefault() // prevents form from being submitted without being able to see your fetch
        const newTicket ={
            name: employee.name, // got this from state
            specialty: employee.specialty,
            
        }
       const fetchOption = {
           method: "POST", //have to write options for fetch before writign fetch call
           headers: { // needs headers or json won't work. only need content type
               "Content-Type": "application/json"
           },
           body: JSON.stringify(newTicket) // sends body of reqest. hast to be sent as string. cant be javascript objects
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
                    <label htmlFor="name">Specialty:</label>
                    <input 
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Specialty"
                        onChange={
                            (evt) => {
                                const copy = {...employee}
                                copy.specialty = evt.target.value
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