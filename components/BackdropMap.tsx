import mapboxgl from 'mapbox-gl';
import React, { useState, useEffect, useRef } from "react";
import styles from '../styles/BackdropMap.module.css'

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN ?? ''

export default function BackdropMap() {
  const [userIso, setUserIso] = useState(null)

  const mapContainer = useRef(null)
    const map = useRef<mapboxgl.Map | null>(null)
    const [lng, setLng] = useState(-70.9)
    const [lat, setLat] = useState(42.35)
    const [zoom, setZoom] = useState(9)

  useEffect(() => {
    map.current = new mapboxgl.Map({
      container: mapContainer.current!,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom
    })

    map.current.on('move', () => {
      setLng(Number(map.current?.getCenter().lng.toFixed(4)));
      setLat(Number(map.current?.getCenter().lat.toFixed(4)));
      setZoom(Number(map.current?.getZoom().toFixed(2)));
    });
    
    // map.current.on('click', (e) => {
    //   console.log(e.lngLat)
    // })

    
  }, [])

  return (
    <div ref={mapContainer} className={styles.mapContainer} data-cy="map"></div>
  )
}

// When a user logs in, their isochrone centerpoint should be fetched. The map should then center to their isochrone and default to displaying all local events.

// When a user clicks on the map it should create an events card. The events card will display information on what was clicked on, how many attendees are within range, and the average travel time per attendee (?

// Users should have a toolkit to sort/filter their map view.
//   - Events only
//   - User isochrones within their organization
//   - User isochrones belonging to a suborg (Physics majors at UVM, medic platoon in 3-172, etc)

// The BackdropMap component should contain the map container.