import mapboxgl from 'mapbox-gl';
import React, { useState, useEffect, useRef } from "react";
import styles from '../styles/BackdropMap.module.css'

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN ?? ''

export default function BackdropMap() {
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
  }, [])

  return (
    <div ref={mapContainer} className={styles.mapContainer}></div>
  )
}