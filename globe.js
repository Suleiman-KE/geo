// Comprehensive country and airport data
const countryAirports = {
  'Kenya': [
    { name: 'Jomo Kenyatta International', city: 'Nairobi' },
    { name: 'Moi International', city: 'Mombasa' },
    { name: 'Kisumu International', city: 'Kisumu' },
    { name: 'Wilson', city: 'Nairobi' }
  ],
  'Egypt': [
    { name: 'Cairo International', city: 'Cairo' },
    { name: 'Hurghada International', city: 'Hurghada' },
    { name: 'Sharm El-Sheikh International', city: 'Sharm El-Sheikh' },
    { name: 'Aswan International', city: 'Aswan' }
  ],
  'South Africa': [
    { name: 'O.R. Tambo International', city: 'Johannesburg' },
    { name: 'Cape Town International', city: 'Cape Town' },
    { name: 'Durban International', city: 'Durban' }
  ],
  'Nigeria': [
    { name: 'Murtala Muhammed International', city: 'Lagos' },
    { name: 'Nnamdi Azikiwe International', city: 'Abuja' },
    { name: 'Mallam Aminu Kano International', city: 'Kano' }
  ],
  'Ethiopia': [
    { name: 'Addis Ababa Bole International', city: 'Addis Ababa' },
    { name: 'Mekele International', city: 'Mekele' }
  ],
  'United States': [
    { name: 'Hartsfield-Jackson', city: 'Atlanta' },
    { name: 'Los Angeles International', city: 'Los Angeles' },
    { name: 'Chicago O\'Hare', city: 'Chicago' },
    { name: 'Dallas/Fort Worth', city: 'Dallas' },
    { name: 'Denver International', city: 'Denver' }
  ],
  'China': [
    { name: 'Beijing Capital International', city: 'Beijing' },
    { name: 'Shanghai Pudong', city: 'Shanghai' },
    { name: 'Guangzhou Baiyun', city: 'Guangzhou' },
    { name: 'Chengdu Shuangliu', city: 'Chengdu' }
  ],
  'India': [
    { name: 'Indira Gandhi International', city: 'New Delhi' },
    { name: 'Bombay International', city: 'Mumbai' },
    { name: 'Kempegowda International', city: 'Bangalore' },
    { name: 'Cochin International', city: 'Kochi' }
  ],
  'Japan': [
    { name: 'Narita International', city: 'Tokyo' },
    { name: 'Haneda', city: 'Tokyo' },
    { name: 'Kansai International', city: 'Osaka' },
    { name: 'New Chitose', city: 'Sapporo' }
  ],
  'United Kingdom': [
    { name: 'London Heathrow', city: 'London' },
    { name: 'London Gatwick', city: 'London' },
    { name: 'Manchester', city: 'Manchester' },
    { name: 'Stansted', city: 'London' }
  ],
  'France': [
    { name: 'Charles de Gaulle', city: 'Paris' },
    { name: 'Orly', city: 'Paris' },
    { name: 'Nice Côte d\'Azur', city: 'Nice' },
    { name: 'Lyon-Saint Exupéry', city: 'Lyon' }
  ],
  'Germany': [
    { name: 'Frankfurt am Main', city: 'Frankfurt' },
    { name: 'Munich', city: 'Munich' },
    { name: 'Berlin', city: 'Berlin' },
    { name: 'Düsseldorf', city: 'Düsseldorf' }
  ],
  'Brazil': [
    { name: 'São Paulo/Guarulhos', city: 'São Paulo' },
    { name: 'Rio de Janeiro/Galeão', city: 'Rio de Janeiro' },
    { name: 'Brasília/Presidente Juscelino', city: 'Brasília' },
    { name: 'Salvador', city: 'Salvador' }
  ],
  'Mexico': [
    { name: 'Mexico City International', city: 'Mexico City' },
    { name: 'Cancún', city: 'Cancún' },
    { name: 'Monterrey', city: 'Monterrey' }
  ],
  'Australia': [
    { name: 'Sydney Kingsford Smith', city: 'Sydney' },
    { name: 'Melbourne', city: 'Melbourne' },
    { name: 'Brisbane', city: 'Brisbane' },
    { name: 'Perth', city: 'Perth' }
  ],
  'Canada': [
    { name: 'Toronto Pearson', city: 'Toronto' },
    { name: 'Vancouver', city: 'Vancouver' },
    { name: 'Calgary', city: 'Calgary' },
    { name: 'Montreal', city: 'Montreal' }
  ],
  'Thailand': [
    { name: 'Suvarnabhumi', city: 'Bangkok' },
    { name: 'Phuket International', city: 'Phuket' },
    { name: 'Chiang Mai International', city: 'Chiang Mai' }
  ],
  'Spain': [
    { name: 'Adolfo Suárez Madrid-Barajas', city: 'Madrid' },
    { name: 'Barcelona-El Prat', city: 'Barcelona' },
    { name: 'Malaga', city: 'Malaga' }
  ],
  'Indonesia': [
    { name: 'Soekarno-Hatta', city: 'Jakarta' },
    { name: 'Ngurah Rai', city: 'Bali' },
    { name: 'Tan Son Nhat', city: 'Ho Chi Minh City' }
  ],
  'Russia': [
    { name: 'Sheremetyevo', city: 'Moscow' },
    { name: 'Domodedovo', city: 'Moscow' },
    { name: 'Pulkovo', city: 'St. Petersburg' }
  ],
  'South Korea': [
    { name: 'Incheon International', city: 'Seoul' },
    { name: 'Gimhae International', city: 'Busan' }
  ],
  'Singapore': [
    { name: 'Singapore Changi', city: 'Singapore' }
  ],
  'United Arab Emirates': [
    { name: 'Dubai International', city: 'Dubai' },
    { name: 'Abu Dhabi International', city: 'Abu Dhabi' }
  ],
  'Saudi Arabia': [
    { name: 'King Fahd', city: 'Riyadh' },
    { name: 'King Abdulaziz', city: 'Jeddah' }
  ],
  'Italy': [
    { name: 'Leonardo da Vinci-Fiumicino', city: 'Rome' },
    { name: 'Malpensa', city: 'Milan' },
    { name: 'Venice Marco Polo', city: 'Venice' }
  ],
  'Netherlands': [
    { name: 'Amsterdam Airport Schiphol', city: 'Amsterdam' },
    { name: 'Rotterdam', city: 'Rotterdam' }
  ],
  'Poland': [
    { name: 'Warsaw Chopin', city: 'Warsaw' },
    { name: 'Krakow John Paul II', city: 'Krakow' }
  ],
  'Greece': [
    { name: 'Athens Eleftherios Venizelos', city: 'Athens' },
    { name: 'Heraklion Nikos Kazantzakis', city: 'Heraklion' }
  ],
  'Turkey': [
    { name: 'Istanbul Airport', city: 'Istanbul' },
    { name: 'Ankara Esenboğa', city: 'Ankara' }
  ],
  'Argentina': [
    { name: 'Ministro Pistarini', city: 'Buenos Aires' },
    { name: 'Córdoba International', city: 'Córdoba' }
  ],
  'Chile': [
    { name: 'Arturo Merino Benítez', city: 'Santiago' }
  ],
  'New Zealand': [
    { name: 'Auckland', city: 'Auckland' },
    { name: 'Christchurch', city: 'Christchurch' }
  ],
  'Malaysia': [
    { name: 'Kuala Lumpur International', city: 'Kuala Lumpur' }
  ],
  'Philippines': [
    { name: 'Ninoy Aquino International', city: 'Manila' }
  ],
  'Vietnam': [
    { name: 'Tan Son Nhat International', city: 'Ho Chi Minh City' },
    { name: 'Noi Bai International', city: 'Hanoi' }
  ],
  'Pakistan': [
    { name: 'Benazir Bhutto International', city: 'Islamabad' },
    { name: 'Jinnah International', city: 'Karachi' }
  ],
  'Bangladesh': [
    { name: 'Hazrat Shahjalal International', city: 'Dhaka' }
  ],
  'Sri Lanka': [
    { name: 'Bandaranaike International', city: 'Colombo' }
  ],
  'Israel': [
    { name: 'Ben Gurion', city: 'Tel Aviv' }
  ],
  'South Sudan': [
    { name: 'Juba International', city: 'Juba' }
  ],
  'Uganda': [
    { name: 'Entebbe International', city: 'Entebbe' }
  ],
  'Tanzania': [
    { name: 'Julius Nyerere International', city: 'Dar es Salaam' }
  ],
  'Cameroon': [
    { name: 'Douala International', city: 'Douala' }
  ],
  'Ghana': [
    { name: 'Kotoka International', city: 'Accra' }
  ],
  'Ivory Coast': [
    { name: 'Félix Houphouët-Boigny', city: 'Abidjan' }
  ],
  'Morocco': [
    { name: 'Marrakesh Menara', city: 'Marrakesh' },
    { name: 'Casablanca', city: 'Casablanca' }
  ],
  'Algeria': [
    { name: 'Algiers Houari Boumedienne', city: 'Algiers' }
  ],
  'Tunisia': [
    { name: 'Tunis-Carthage', city: 'Tunis' }
  ]
};

function initGlobe() {
  if (!window.THREE) {
    setTimeout(initGlobe, 100);
    return;
  }

  const container = document.getElementById('container');
  const tooltip = document.getElementById('tooltip');
  const airportPanel = document.getElementById('airportPanel');
  
  // Scene, camera, renderer
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 1000);
  camera.position.set(0, 0, 2.5);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);

  // Lights
  const ambient = new THREE.AmbientLight(0xaaaaaa);
  scene.add(ambient);
  const dir = new THREE.DirectionalLight(0xffffff, 0.9);
  dir.position.set(5, 3, 5);
  scene.add(dir);

  // Earth - Ocean
  const R = 1;
  const sphereGeo = new THREE.SphereGeometry(R, 128, 128);
  const earthMat = new THREE.MeshStandardMaterial({
    color: 0x1a5490,
    roughness: 0.7,
    metalness: 0
  });
  const earth = new THREE.Mesh(sphereGeo, earthMat);
  scene.add(earth);

  // Starfield
  const starsGeo = new THREE.SphereGeometry(90, 64, 64);
  const starsMat = new THREE.MeshBasicMaterial({
    color: 0x001122,
    side: THREE.BackSide
  });
  const starMesh = new THREE.Mesh(starsGeo, starsMat);
  scene.add(starMesh);

  // Star particles
  const starsParticles = new THREE.BufferGeometry();
  const starCount = 1000;
  const starPositions = new Float32Array(starCount * 3);
  for (let i = 0; i < starCount * 3; i += 3) {
    starPositions[i] = (Math.random() - 0.5) * 180;
    starPositions[i + 1] = (Math.random() - 0.5) * 180;
    starPositions[i + 2] = (Math.random() - 0.5) * 180;
  }
  starsParticles.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
  const starPoints = new THREE.Points(
    starsParticles,
    new THREE.PointsMaterial({ color: 0xffffff, size: 0.5 })
  );
  scene.add(starPoints);

  // Countries group
  const countriesGroup = new THREE.Group();
  scene.add(countriesGroup);

  // Color palette for countries
  const colors = [
    0x4CAF50, 0x8BC34A, 0x2E7D32, 0x558B2F, 0x33691E, 0x7CB342, 0x9CCC65,
    0x1976D2, 0x0277BD, 0x00838F, 0x006064, 0x0097A7, 0x00ACC1, 0x0288D1,
    0xF57C00, 0xFF8F00, 0xFBC02D, 0xFFD54F, 0xFFE082, 0xFFF59D, 0xFFA000,
    0x512DA8, 0x303F9F, 0x7E57C2, 0x9575CD, 0xB39DDB, 0xD1C4E9, 0xEDE7F6
  ];

  function latLonToVector3(lat, lon, radius = R) {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);
    const x = -radius * Math.sin(phi) * Math.cos(theta);
    const z = radius * Math.sin(phi) * Math.sin(theta);
    const y = radius * Math.cos(phi);
    return new THREE.Vector3(x, y, z);
  }

  // Fetch world GeoJSON data
  fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
    .then(response => response.json())
    .then(data => {
      const countries = data.objects.countries.geometries;
      const transform = data.transform;
      
      countries.forEach((geometry, idx) => {
        const color = colors[idx % colors.length];
        const group = new THREE.Group();
        
        if (geometry.type === 'MultiPolygon') {
          geometry.arcs.forEach(polygon => {
            drawPolygon(polygon, group, R, latLonToVector3, transform);
          });
        } else if (geometry.type === 'Polygon') {
          geometry.arcs.forEach(ring => {
            drawPolygon(ring, group, R, latLonToVector3, transform);
          });
        }
        
        // Apply material to all meshes in group
        group.traverse(child => {
          if (child.isMesh) {
            child.material = new THREE.MeshStandardMaterial({
              color: color,
              emissive: color,
              emissiveIntensity: 0.1,
              metalness: 0,
              roughness: 0.8,
              side: THREE.DoubleSide
            });
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });
        
        countriesGroup.add(group);
      });
    })
    .catch(err => {
      console.log('Using simplified country data');
      // Fallback: create simple representations
      createSimplifiedCountries(countriesGroup, latLonToVector3, R, colors);
    });

  function drawPolygon(rings, group, radius, latLonToVector3, transform) {
    if (!rings || rings.length === 0) return;
    
    const points = [];
    let x = 0, y = 0;
    
    rings.forEach(arcIdx => {
      // Simple approximation - this would need full TopoJSON decoder
      // For now, create a simple box at country center
    });
  }

  function createSimplifiedCountries(group, latLonToVector3, R, colors) {
    const countryData = [
      { name: 'Kenya', lat: -0.23, lon: 36.86 },
      { name: 'Egypt', lat: 26.82, lon: 30.80 },
      { name: 'South Africa', lat: -30.56, lon: 22.94 },
      { name: 'Nigeria', lat: 9.08, lon: 8.68 },
      { name: 'Ethiopia', lat: 9.15, lon: 40.49 },
      { name: 'United States', lat: 37.09, lon: -95.71 },
      { name: 'China', lat: 35.86, lon: 104.20 },
      { name: 'India', lat: 20.59, lon: 78.96 },
      { name: 'Japan', lat: 36.20, lon: 138.25 },
      { name: 'United Kingdom', lat: 55.38, lon: -3.44 },
      { name: 'France', lat: 46.23, lon: 2.21 },
      { name: 'Germany', lat: 51.17, lon: 10.45 },
      { name: 'Brazil', lat: -14.24, lon: -51.93 },
      { name: 'Mexico', lat: 23.63, lon: -102.55 },
      { name: 'Australia', lat: -25.27, lon: 133.78 },
      { name: 'Canada', lat: 56.13, lon: -106.35 },
      { name: 'Thailand', lat: 15.87, lon: 100.99 },
      { name: 'Spain', lat: 40.46, lon: -3.75 },
      { name: 'Indonesia', lat: -0.79, lon: 113.92 },
      { name: 'Russia', lat: 61.52, lon: 105.32 },
      { name: 'South Korea', lat: 35.91, lon: 127.77 },
      { name: 'Singapore', lat: 1.35, lon: 103.82 },
      { name: 'United Arab Emirates', lat: 23.42, lon: 53.85 },
      { name: 'Saudi Arabia', lat: 23.89, lon: 45.08 },
      { name: 'Italy', lat: 41.87, lon: 12.57 },
      { name: 'Netherlands', lat: 52.13, lon: 5.29 },
      { name: 'Poland', lat: 51.92, lon: 19.15 },
      { name: 'Greece', lat: 39.07, lon: 21.82 },
      { name: 'Turkey', lat: 38.96, lon: 35.24 },
      { name: 'Argentina', lat: -38.42, lon: -63.62 },
      { name: 'Chile', lat: -35.68, lon: -71.54 },
      { name: 'New Zealand', lat: -40.90, lon: 174.89 },
      { name: 'Malaysia', lat: 4.21, lon: 101.69 },
      { name: 'Philippines', lat: 12.88, lon: 121.77 },
      { name: 'Vietnam', lat: 14.06, lon: 108.28 },
      { name: 'Pakistan', lat: 30.82, lon: 69.18 },
      { name: 'Bangladesh', lat: 23.68, lon: 90.36 },
      { name: 'Sri Lanka', lat: 7.87, lon: 80.77 },
      { name: 'Israel', lat: 31.05, lon: 34.85 },
      { name: 'South Sudan', lat: 6.88, lon: 31.31 },
      { name: 'Uganda', lat: 1.37, lon: 32.29 },
      { name: 'Tanzania', lat: -6.37, lon: 34.89 },
      { name: 'Cameroon', lat: 3.85, lon: 11.50 },
      { name: 'Ghana', lat: 5.60, lon: -0.80 },
      { name: 'Ivory Coast', lat: 7.54, lon: -5.55 },
      { name: 'Morocco', lat: 31.79, lon: -7.09 },
      { name: 'Algeria', lat: 28.03, lon: 1.66 },
      { name: 'Tunisia', lat: 33.89, lon: 9.54 }
    ];

    countryData.forEach((country, idx) => {
      const pos = latLonToVector3(country.lat, country.lon, R + 0.015);
      const size = 0.08;
      const boxGeo = new THREE.BoxGeometry(size, size, size);
      const boxMat = new THREE.MeshStandardMaterial({
        color: colors[idx % colors.length],
        emissive: colors[idx % colors.length],
        emissiveIntensity: 0.2
      });
      const box = new THREE.Mesh(boxGeo, boxMat);
      box.position.copy(pos);
      box.lookAt(new THREE.Vector3(0, 0, 0));
      box.userData = { country: country.name, airports: countryAirports[country.name] || [] };
      group.add(box);
    });
  }

  // Raycaster
  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();

  function showTooltip(x, y, html) {
    tooltip.style.left = x + 'px';
    tooltip.style.top = y + 'px';
    tooltip.innerHTML = html;
    tooltip.style.display = 'block';
  }
  function hideTooltip() {
    tooltip.style.display = 'none';
  }

  function showAirports(country, airports) {
    if (!airports || airports.length === 0) {
      airportPanel.innerHTML = '<h3>' + country + '</h3><p style="opacity:0.7;">No airports data</p>';
    } else {
      let html = '<h3>' + country + '</h3><ul>';
      airports.forEach(airport => {
        html += '<li><strong>' + airport.name + '</strong><br>' + airport.city + '</li>';
      });
      html += '</ul>';
      airportPanel.innerHTML = html;
    }
    airportPanel.style.display = 'block';
  }

  renderer.domElement.addEventListener('pointermove', function(e) {
    const rect = renderer.domElement.getBoundingClientRect();
    pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

    raycaster.setFromCamera(pointer, camera);
    const intersects = raycaster.intersectObjects(countriesGroup.children, true);
    if (intersects.length > 0) {
      const obj = intersects[0].object;
      let countryName = obj.userData.country || 'Country';
      showTooltip(e.clientX, e.clientY, 'Click for ' + countryName + ' airports');
      renderer.domElement.style.cursor = 'pointer';
    } else {
      hideTooltip();
      renderer.domElement.style.cursor = 'default';
    }
  });

  renderer.domElement.addEventListener('click', function(e) {
    raycaster.setFromCamera(pointer, camera);
    const intersects = raycaster.intersectObjects(countriesGroup.children, true);
    if (intersects.length > 0) {
      const obj = intersects[0].object;
      const countryName = obj.userData.country || 'Country';
      const airports = obj.userData.airports || [];
      showAirports(countryName, airports);
    }
  });

  // Mouse controls - Drag to rotate
  let isDragging = false;
  let previousMousePosition = { x: 0, y: 0 };

  renderer.domElement.addEventListener('mousedown', function(e) {
    isDragging = true;
    previousMousePosition = { x: e.clientX, y: e.clientY };
  });

  renderer.domElement.addEventListener('mousemove', function(e) {
    if (isDragging) {
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      earth.rotation.y += deltaX * 0.005;
      earth.rotation.x += deltaY * 0.005;

      countriesGroup.rotation.y = earth.rotation.y;
      countriesGroup.rotation.x = earth.rotation.x;

      previousMousePosition = { x: e.clientX, y: e.clientY };
    }
  });

  renderer.domElement.addEventListener('mouseup', function() {
    isDragging = false;
  });

  renderer.domElement.addEventListener('mouseleave', function() {
    isDragging = false;
  });

  // Zoom with scroll
  renderer.domElement.addEventListener('wheel', function(e) {
    e.preventDefault();
    const zoomSpeed = 0.1;
    if (e.deltaY > 0) {
      camera.position.z += zoomSpeed;
    } else {
      camera.position.z -= zoomSpeed;
    }
    camera.position.z = Math.max(1.2, Math.min(5, camera.position.z));
  }, false);

  // Resize
  window.addEventListener('resize', function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  // Animation loop
  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }
  animate();
}

initGlobe();