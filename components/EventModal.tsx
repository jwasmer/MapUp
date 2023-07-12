import { useState } from "react"

export default function EventModal(lat, lng) {
  const [attendees, setAttendees] = useState(null)
  const [attendeeCount, setAttendeeCount] = useState(null)
  const [placeName, setPlaceName] = useState(null)

  return (
    <div>
      <p>{placeName} is within range of {attendeeCount} attendees!</p>
    </div>
  )
}