import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

function App() {
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Peta Gorontalo</h2>

      <MapContainer
        center={[0.6, 123.0]}
        zoom={8}
        style={{ height: '80vh', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  )
}

export default App
