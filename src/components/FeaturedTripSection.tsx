import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Tent, Fish, Mountain, ChevronLeft, ChevronRight } from 'lucide-react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const trips = [
  {
    id: "barot",
    title: "Himalayan Hidden Gem",
    highlight: "Barot Valley",
    price: "₹6,499",
    date: "02 April 2026 - 05 April 2026",
    description: "A slow, peaceful valley stay combined with the vibrant mountain town vibe.",
    center: [32.04, 76.86],
    markers: [
      { lat: 32.0366, lng: 76.8398, label: 'Barot Valley', color: '#FF6B35', image: "/images/barot-valley.png" },
      { lat: 32.0600, lng: 76.8800, label: 'Rajgundha', color: '#9B59B6', image: "/images/rajgunda.png" },
      { lat: 32.0505, lng: 76.8200, label: 'Uhl River', color: '#00CED1', image: "/images/barot-valley.png" },
    ],
    itinerary: [
      {
        icon: Mountain,
        iconClass: 'trekking',
        iconColor: '#FF6B35',
        title: 'DAY 1: Barot Local Exploration',
        description: 'Arrive in Barot Valley, check-in. Explore Barot Reservoir, Dam, Trout Fish Farm, Fountain, and Temple. Bonfire night.',
      },
      {
        icon: Tent,
        iconClass: 'camping',
        iconColor: '#00CED1',
        title: 'DAY 2: Rajgundha Valley Trek',
        description: 'Scenic drive to Rajgundha, explore valley views, bridge, and Hanumangarh Temple. Relax by the riverside.',
      },
      {
        icon: Fish,
        iconClass: 'fishing',
        iconColor: '#9B59B6',
        title: 'DAY 3: Hidden Treks & Departure',
        description: 'Trek to Col. Battey\'s House & Lapas Waterfall. Checkout and departure for Delhi.',
      },
    ],
    tripImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Barot_Valley_%2CMandi%2CHimachal_Pardesh.jpg/960px-Barot_Valley_%2CMandi%2CHimachal_Pardesh.jpg",
    downloadLink: "https://drive.google.com/file/d/1AjP2KSAoDX_zkSItWO1ayreM3gVECEGV/view?usp=sharing",
  },
  {
    id: "dharamshala",
    title: "Spiritual & Scenic",
    highlight: "McLeod Ganj",
    price: "₹5,999",
    date: "30 April 2026 - 03 May 2026",
    description: "A perfect blend of Himalayan adventure & Tibetan culture. Explores treks, waterfalls, and peaceful monasteries.",
    center: [32.2396, 76.3230],
    markers: [
      { lat: 32.2190, lng: 76.3234, label: 'Dharamshala', color: '#FF6B35', image: "/images/dharamshala.png" },
      { lat: 32.2396, lng: 76.3230, label: 'Mcleodganj', color: '#9B59B6', image: "/images/mcleodganj.png" },
      { lat: 32.2612, lng: 76.3456, label: 'Triund Trek', color: '#00CED1', image: "/images/triund-trek.png" },
    ],
    itinerary: [
      {
        icon: Mountain,
        iconClass: 'trekking',
        iconColor: '#FF6B35',
        title: 'DAY 1: Arrival & Café Vibes',
        description: 'Arrive in McLeodganj. Visit Dalai Lama Temple, Bhagsu Waterfall, and Temple. Café hopping and sunset at Naddi.',
      },
      {
        icon: MapPin,
        iconClass: 'exploring',
        iconColor: '#00CED1',
        title: 'DAY 2: Triund Trek',
        description: 'Trek to Triund. Scenic views of Dhauladhar Range. Evening free exploration and overnight stay in camp.',
      },
      {
        icon: Tent,
        iconClass: 'camping',
        iconColor: '#9B59B6',
        title: 'DAY 3: Dharamshala Sightseeing',
        description: 'Trek back to McLeodganj. Visit HPCA Stadium and St. John in the Wilderness. Evening departure for Delhi.',
      },
    ],
    tripImage: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Ajay_Tallam_Dalai_Lama_Temple%2C_McLeod_Ganj.jpg",
    downloadLink: "https://drive.google.com/file/d/11mGqX12Xd6p3aCTfH_bExTTy3HzDXK9x/view?usp=drive_link",
  },
  {
    id: "lansdowne",
    title: "Quiet Retreat",
    highlight: "Lansdowne",
    price: "₹4,499",
    date: "08 May 2026 - 10 May 2026",
    description: "A peaceful hill escape to the quiet cantonment town of Lansdowne. Perfect for pine forests and mountain sunsets.",
    center: [29.8377, 78.6871],
    markers: [
      { lat: 29.8377, lng: 78.6871, label: 'Lansdowne', color: '#FF6B35', image: "/images/lansdowne.png" },
      { lat: 29.8660, lng: 78.6750, label: 'Bhulla Lake', color: '#9B59B6', image: "/images/lansdowne.png" },
      { lat: 29.8250, lng: 78.6900, label: 'Tip N Top', color: '#00CED1', image: "/images/tip-top.png" },
    ],
    itinerary: [
      {
        icon: Mountain,
        iconClass: 'trekking',
        iconColor: '#FF6B35',
        title: 'DAY 1: Arrival & Sunset Vibes',
        description: 'Explore Bhulla Tal Lake, Tip-In-Top Viewpoint, St. Mary\'s Church. Bonfire night and group games.',
      },
      {
        icon: MapPin,
        iconClass: 'exploring',
        iconColor: '#00CED1',
        title: 'DAY 2: Nature Walk & Departure',
        description: 'Visit Tarkeshwar Mahadev Temple. Pine forest nature walk. Departure for Delhi.',
      },
    ],
    tripImage: "https://images.unsplash.com/photo-1602711283416-0c83a6b328df?auto=format&fit=crop&q=80&w=1000",
    downloadLink: "https://drive.google.com/file/d/10NALv8_uKflJRxdbUeFDfiZeRBW0Om4c/view?usp=drive_link",
  }
];

export function FeaturedTripSection() {
  const [activeTripIndex, setActiveTripIndex] = useState(0);
  const activeTrip = trips[activeTripIndex];

  const nextTrip = () => setActiveTripIndex((prev) => (prev + 1) % trips.length);
  const prevTrip = () => setActiveTripIndex((prev) => (prev - 1 + trips.length) % trips.length);
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersGroupRef = useRef<L.LayerGroup | null>(null);

  // Preload images to ensure instant hover previews
  useEffect(() => {
    const imageUrls = trips.flatMap(trip => [
      trip.tripImage,
      ...trip.markers.map(marker => (marker as any).image).filter(Boolean)
    ]);

    imageUrls.forEach(url => {
      const img = new Image();
      img.src = url;
    });
  }, []);

  useEffect(() => {
    if (mapRef.current) {
      if (!mapInstanceRef.current) {
        mapInstanceRef.current = L.map(mapRef.current).setView(activeTrip.center as L.LatLngExpression, 11, { animate: false });
        L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
          attribution: '©OpenStreetMap, ©CartoDB',
          maxZoom: 19
        }).addTo(mapInstanceRef.current);

        markersGroupRef.current = L.layerGroup().addTo(mapInstanceRef.current);
      } else {
        markersGroupRef.current?.clearLayers();
        mapInstanceRef.current.setView(activeTrip.center as L.LatLngExpression, 11, { animate: false });

        // Force Leaflet to recalculate container size to fix gray/missing tiles after display changes
        setTimeout(() => {
          mapInstanceRef.current?.invalidateSize();
        }, 100);
      }

      activeTrip.markers.forEach((marker) => {
        const markerIcon = L.divIcon({
          className: 'custom-marker',
          html: `
            <div class="marker-pulse" style="--accent: ${marker.color}"></div>
            <div class="marker-icon-wrapper" style="--accent: ${marker.color}">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="m8 3 4 8 5-5 5 15H2L8 3z"/>
              </svg>
            </div>
          `,
          iconSize: [32, 32],
          iconAnchor: [16, 16],
          popupAnchor: [0, -16]
        });

        const popupContent = `
          <div class="popup-card">
            <div class="popup-image" style="background-image: url('${(marker as any).image || activeTrip.tripImage}')"></div>
            <div class="popup-info">
              <h5>${marker.label}</h5>
              <p>Explore the beauty of ${activeTrip.highlight}</p>
            </div>
          </div>
        `;

        const leafletMarker = L.marker([marker.lat, marker.lng], { icon: markerIcon })
          .addTo(markersGroupRef.current!)
          .bindPopup(popupContent, { closeButton: false });

        // Hover functionality
        leafletMarker.on('mouseover', () => {
          leafletMarker.openPopup();
        });
      });

      // Add route line
      const routeCoords = activeTrip.markers.map(m => [m.lat, m.lng] as L.LatLngExpression);
      L.polyline(routeCoords, {
        color: '#FF6B35',
        weight: 3,
        opacity: 0.6,
        dashArray: '10, 10',
        lineCap: 'round'
      }).addTo(markersGroupRef.current!);
    }

    // Automatically fix Leaflet container dimensions if the parent div happens to resize
    const resizeObserver = new ResizeObserver(() => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.invalidateSize();
      }
    });

    if (mapRef.current) {
      resizeObserver.observe(mapRef.current);
    }

    // Cleanup when component unmounts
    return () => {
      resizeObserver.disconnect();
    };
  }, [activeTripIndex]); // Re-run when activeTripIndex changes

  // Destroy map instance correctly on unmount
  useEffect(() => {
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
        markersGroupRef.current = null;
      }
    };
  }, []);
  return (
    <section className="section featured-trip-section" id="featured">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', marginBottom: '2rem', position: 'relative' }}>
        <button
          onClick={prevTrip}
          style={{
            background: 'var(--feature-icon-bg)',
            border: '1px solid var(--card-border)',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            color: 'var(--text-primary)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'var(--card-bg)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'var(--feature-icon-bg)'}
        >
          <ChevronLeft size={24} />
        </button>

        <div style={{ textAlign: 'center' }}>
          <motion.p
            className="featured-label"
            key={`label-${activeTrip.id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            CURRENT FEATURED TRIPS
          </motion.p>
          <motion.h2
            className="featured-title"
            key={`title-${activeTrip.id}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ marginBottom: 0 }}
          >
            {activeTrip.title}: <span className="highlight">{activeTrip.highlight}</span>
          </motion.h2>
          <motion.div
            key={`info-${activeTrip.id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ marginTop: '8px', display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <span style={{ background: 'rgba(255,107,53,0.1)', color: '#FF6B35', padding: '4px 12px', borderRadius: '16px', fontSize: '14px', fontWeight: 600 }}>
              {activeTrip.date}
            </span>
            <span style={{ background: 'rgba(0,206,209,0.1)', color: '#00CED1', padding: '4px 12px', borderRadius: '16px', fontSize: '14px', fontWeight: 600 }}>
              {activeTrip.price}
            </span>
          </motion.div>
        </div>

        <button
          onClick={nextTrip}
          style={{
            background: 'var(--feature-icon-bg)',
            border: '1px solid var(--card-border)',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            color: 'var(--text-primary)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'var(--card-bg)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'var(--feature-icon-bg)'}
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '3rem' }}>
        {trips.map((_, idx) => (
          <div
            key={idx}
            onClick={() => setActiveTripIndex(idx)}
            style={{
              width: idx === activeTripIndex ? '24px' : '8px',
              height: '8px',
              borderRadius: '4px',
              background: idx === activeTripIndex ? '#FF6B35' : 'var(--card-border)',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          />
        ))}
      </div>

      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="featured-content">
          <div className="map-container relative">
            <div ref={mapRef} style={{ width: '100%', height: '100%' }} />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTrip.id}
              className="itinerary"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <p className="itinerary-description font-handwritten">
                {activeTrip.description}
              </p>

              <div className="itinerary-list">
                {activeTrip.itinerary.map((item, index) => (
                  <motion.div
                    key={item.title}
                    className="itinerary-item"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
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
          </AnimatePresence>
        </div>
      </div>

      <motion.div
        className="download-container"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        style={{ textAlign: 'center', marginTop: '3rem' }}
      >
        <motion.a
          href={activeTrip.downloadLink !== "#" ? activeTrip.downloadLink : undefined}
          target="_blank"
          rel="noopener noreferrer"
          className="download-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '1rem 2rem',
            backgroundColor: '#FF6B35',
            color: 'white',
            borderRadius: '50px',
            textDecoration: 'none',
            fontWeight: '600',
            boxShadow: '0 4px 15px rgba(255, 107, 53, 0.3)',
            opacity: activeTrip.downloadLink !== "#" ? 1 : 0.5,
            pointerEvents: activeTrip.downloadLink !== "#" ? 'auto' : 'none',
            cursor: activeTrip.downloadLink !== "#" ? 'pointer' : 'not-allowed'
          }}
        >
          {activeTrip.downloadLink !== "#" ? 'Download Extended Itinerary' : 'Itinerary Coming Soon'}
        </motion.a>
      </motion.div>
    </section >
  );
}
