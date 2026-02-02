import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Ship, Utensils } from 'lucide-react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const itineraryItems = [
  {
    icon: MapPin,
    iconClass: 'location',
    iconColor: '#FF6B35',
    title: 'Positano & Ravello',
    description: 'Day 1-3: Sunset terrace drinks.',
  },
  {
    icon: Ship,
    iconClass: 'cruise',
    iconColor: '#FF69B4',
    title: 'Capri Day Cruise',
    description: 'Day 4: Private yacht to the Blue Grotto.',
  },
  {
    icon: Utensils,
    iconClass: 'food',
    iconColor: '#00CED1',
    title: 'Sorrento Food Tour',
    description: 'Day 5-7: Farm-to-table feast.',
  },
];

const mapMarkers = [
  { lat: 40.6280, lng: 14.4849, label: 'Positano' },
  { lat: 40.5507, lng: 14.2228, label: 'Capri' },
  { lat: 40.6263, lng: 14.3758, label: 'Sorrento' },
];

export function FeaturedTripSection() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (mapRef.current && !mapInstanceRef.current) {
      mapInstanceRef.current = L.map(mapRef.current).setView([40.6, 14.3], 9);
      
      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '©OpenStreetMap, ©CartoDB',
      }).addTo(mapInstanceRef.current);

      mapMarkers.forEach((marker) => {
        const markerIcon = L.divIcon({
          className: 'custom-marker',
          html: `<div style="width: 16px; height: 16px; background: ${marker.label === 'Positano' ? '#FF6B35' : marker.label === 'Capri' ? '#FF69B4' : '#00CED1'}; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.3);"></div>`,
          iconSize: [16, 16],
        });
        L.marker([marker.lat, marker.lng], { icon: markerIcon })
          .addTo(mapInstanceRef.current!)
          .bindPopup(marker.label);
      });
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <section className="section featured-trip-section" id="featured">
      <motion.p 
        className="featured-label"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        CURRENT FEATURED TRIP
      </motion.p>
      
      <motion.h2 
        className="featured-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Mediterranean Dream: <span className="highlight">Amalfi Coast</span>
      </motion.h2>

      <div className="featured-content">
        <motion.div 
          className="map-container"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div ref={mapRef} style={{ width: '100%', height: '100%' }} />
        </motion.div>

        <motion.div 
          className="itinerary"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="itinerary-description font-handwritten">
            7 days of sun-drenched coastal roads and pasta-making classes with local Nonnas.
          </p>

          <div className="itinerary-list">
            {itineraryItems.map((item, index) => (
              <motion.div
                key={item.title}
                className="itinerary-item"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <div className={`icon ${item.iconClass}`}>
                  <item.icon style={{ color: item.iconColor }} />
                </div>
                <div className="content">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
