import mapboxgl from 'mapbox-gl';
import React, { useState, useEffect, useRef } from "react";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN ?? ''

export default function BackdropMap() {
  const mapContainer = useRef(null)
    const map = useRef<mapboxgl.Map | null>(null)
    const [lng, setLng] = useState(-70.9)
    const [lat, setLat] = useState(42.35)
    const [zoom, setZoom] = useState(9)

  useEffect(() => {
    if (map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current, // throws error due to mapContainer's default null value
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom
    })
  })

  useEffect(() => {
    if (!map.current) return;

    map.current.on('move', () => {
      setLng(Number(map.current?.getCenter().lng.toFixed(4)));
      setLat(Number(map.current?.getCenter().lat.toFixed(4)));
      setZoom(Number(map.current?.getZoom().toFixed(2)));
    });
  });

  return (
    <div id="1"></div>
  )
}