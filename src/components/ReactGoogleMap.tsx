import React from 'react'
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api'

interface Location {
  latitude: string
  longitude: string
}

interface Address {
  street: {
    number: number
    name: string
  }
  city: string
  state: string
  country: string
  postcode: number
  coordinates: Location
}

interface Props {
  address: Address
}

const UserProfileMap: React.FC<Props> = ({ address }) => {
  const mapContainerStyle = {
    width: '100%',
    height: '400px',
  }

  const center = {
    lat: parseFloat(address.coordinates.latitude),
    lng: parseFloat(address.coordinates.longitude),
  }

  return (
    <LoadScript googleMapsApiKey="AIzaSyAITUcqYs7-Fs_6j0X2eZvKAzaQLpdzGLQ">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={10}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  )
}

export default UserProfileMap
