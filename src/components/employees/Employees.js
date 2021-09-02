import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"

export const EmployeeList = () => {
    const [employees, changeEmployee] = useState([])
    const history = useHistory()

    useEffect(
        () => {
            fetch("http://localhost:8088/employees?_expand=location")
                .then(res => res.json())
                .then((employeesFromAPI) => {
                    changeEmployee(employeesFromAPI)
                })
        },
        []
    )

    return (
        <>
            <button onClick={() => history.push("/hiring")}>Hire Employee</button>
            <h2>Employees</h2>
            
            {
                employees.map(
                    (employee) => {
                        return <p key={`employee--${employee.id}`}>{employee.name} works in {employee.location?.city}. {employee.manager ? " They are a manager." : ""}</p> // every element needs a unique key. serves same purpose as an id attributeused for the rendering of the dom so it knows which element is which
                    }
                )
            }
        </>
    )
}