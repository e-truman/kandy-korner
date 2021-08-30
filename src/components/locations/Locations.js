import React, { useEffect, useState } from "react"

export const LocationList = () => {
    const [locations, setLocation] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/locations")
                .then(res => res.json())
                .then((locationData) => {
                    setLocation(locationData)
                })
        },
        []
    )

   
    return (
        <>
            <h2>Locations</h2>
           
            {
                locations.map(
                    (location) => {
                        return <p key={`location--${location.id}`}>{location.city}</p> // every element needs a unique key. serves same purpose as an id attributeused for the rendering of the dom so it knows which element is which
                    }
                )
            }
        </>
    )
}