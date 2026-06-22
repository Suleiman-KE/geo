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

  // Country data with airports
  const countries = [
    { 
      name: 'Kenya', lat: -0.23, lon: 36.86, color: 0x4CAF50,
      airports: [
        { name: 'Jomo Kenyatta International', city: 'Nairobi' },
        { name: 'Moi International', city: 'Mombasa' },
        { name: 'Kisumu International', city: 'Kisumu' },
        { name: 'Wilson', city: 'Nairobi' }
      ]
    },
    { 
      name: 'Egypt', lat: 26.82, lon: 30.80, color: 0x8BC34A,
      airports: [
        { name: 'Cairo International', city: 'Cairo' },
        { name: 'Hurghada International', city: 'Hurghada' },
        { name: 'Sharm El-Sheikh International', city: 'Sharm El-Sheikh' },
        { name: 'Aswan International', city: 'Aswan' }
      ]
    },
    { 
      name: 'South Africa', lat: -30.56, lon: 22.94, color: 0x2E7D32,
      airports: [
        { name: 'O.R. Tambo International', city: 'Johannesburg' },
        { name: 'Cape Town International', city: 'Cape Town' },
        { name: 'Durban International', city: 'Durban' }
      ]
    },
    { 
      name: 'Nigeria', lat: 9.08, lon: 8.68, color: 0x558B2F,
      airports: [
        { name: 'Murtala Muhammed International', city: 'Lagos' },
        { name: 'Nnamdi Azikiwe International', city: 'Abuja' },
        { name: 'Mallam Aminu Kano International', city: 'Kano' }
      ]
    },
    { 
      name: 'Ethiopia', lat: 9.15, lon: 40.49, color: 0x33691E,
      airports: [
        { name: 'Addis Ababa Bole International', city: 'Addis Ababa' },
        { name: 'Mekele International', city: 'Mekele' }
      ]
    },
    { 
      name: 'United States', lat: 37.09, lon: -95.71, color: 0x1976D2,
      airports: [
        { name: 'Hartsfield-Jackson', city: 'Atlanta' },
        { name: 'Los Angeles International', city: 'Los Angeles' },
        { name: 'Chicago O\'Hare', city: 'Chicago' },
        { name: 'Dallas/Fort Worth', city: 'Dallas' },
        { name: 'Denver International', city: 'Denver' }
      ]
    },
    { 
      name: 'China', lat: 35.86, lon: 104.20, color: 0xF57C00,
      airports: [
        { name: 'Beijing Capital International', city: 'Beijing' },
        { name: 'Shanghai Pudong', city: 'Shanghai' },
        { name: 'Guangzhou Baiyun', city: 'Guangzhou' },
        { name: 'Chengdu Shuangliu', city: 'Chengdu' }
      ]
    },
    { 
      name: 'India', lat: 20.59, lon: 78.96, color: 0xFF8F00,
      airports: [
        { name: 'Indira Gandhi International', city: 'New Delhi' },
        { name: 'Bombay International', city: 'Mumbai' },
        { name: 'Kempegowda International', city: 'Bangalore' },
        { name: 'Cochin International', city: 'Kochi' }
      ]
    },
    { 
      name: 'Japan', lat: 36.20, lon: 138.25, color: 0xFBC02D,
      airports: [
        { name: 'Narita International', city: 'Tokyo' },
        { name: 'Haneda', city: 'Tokyo' },
        { name: 'Kansai International', city: 'Osaka' },
        { name: 'New Chitose', city: 'Sapporo' }
      ]
    },
    { 
      name: 'United Kingdom', lat: 55.38, lon: -3.44, color: 0x0277BD,
      airports: [
        { name: 'London Heathrow', city: 'London' },
        { name: 'London Gatwick', city: 'London' },
        { name: 'Manchester', city: 'Manchester' },
        { name: 'Stansted', city: 'London' }
      ]
    },
    { 
      name: 'France', lat: 46.23, lon: 2.21, color: 0x512DA8,
      airports: [
        { name: 'Charles de Gaulle', city: 'Paris' },
        { name: 'Orly', city: 'Paris' },
        { name: 'Nice Côte d\'Azur', city: 'Nice' },
        { name: 'Lyon-Saint Exupéry', city: 'Lyon' }
      ]
    },
    { 
      name: 'Germany', lat: 51.17, lon: 10.45, color: 0x303F9F,
      airports: [
        { name: 'Frankfurt am Main', city: 'Frankfurt' },
        { name: 'Munich', city: 'Munich' },
        { name: 'Berlin', city: 'Berlin' },
        { name: 'Düsseldorf', city: 'Düsseldorf' }
      ]
    },
    { 
      name: 'Brazil', lat: -14.24, lon: -51.93, color: 0x388E3C,
      airports: [
        { name: 'São Paulo/Guarulhos', city: 'São Paulo' },
        { name: 'Rio de Janeiro/Galeão', city: 'Rio de Janeiro' },
        { name: 'Brasília/Presidente Juscelino', city: 'Brasília' },
        { name: 'Salvador', city: 'Salvador' }
      ]
    },
    { 
      name: 'Mexico', lat: 23.63, lon: -102.55, color: 0x43A047,
      airports: [
        { name: 'Mexico City International', city: 'Mexico City' },
        { name: 'Cancún', city: 'Cancún' },
        { name: 'Monterrey', city: 'Monterrey' }
      ]
    },
    { 
      name: 'Australia', lat: -25.27, lon: 133.78, color: 0xFF6F00,
      airports: [
        { name: 'Sydney Kingsford Smith', city: 'Sydney' },
        { name: 'Melbourne', city: 'Melbourne' },
        { name: 'Brisbane', city: 'Brisbane' },
        { name: 'Perth', city: 'Perth' }
      ]
    },
    { 
      name: 'Canada', lat: 56.13, lon: -106.35, color: 0x1565C0,
      airports: [
        { name: 'Toronto Pearson', city: 'Toronto' },
        { name: 'Vancouver', city: 'Vancouver' },
        { name: 'Calgary', city: 'Calgary' },
        { name: 'Montreal', city: 'Montreal' }
      ]
    },
    { 
      name: 'Thailand', lat: 15.87, lon: 100.99, color: 0xFFD54F,
      airports: [
        { name: 'Suvarnabhumi', city: 'Bangkok' },
        { name: 'Phuket International', city: 'Phuket' },
        { name: 'Chiang Mai International', city: 'Chiang Mai' }
      ]
    },
    { 
      name: 'Spain', lat: 40.46, lon: -3.75, color: 0x0097A7,
      airports: [
        { name: 'Adolfo Suárez Madrid-Barajas', city: 'Madrid' },
        { name: 'Barcelona-El Prat', city: 'Barcelona' },
        { name: 'Malaga', city: 'Malaga' }
      ]
    }
  ];

  // Countries group
  const countriesGroup = new THREE.Group();
  scene.add(countriesGroup);

  function latLonToVector3(lat, lon, radius = R) {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);
    const x = -radius * Math.sin(phi) * Math.cos(theta);
    const z = radius * Math.sin(phi) * Math.sin(theta);
    const y = radius * Math.cos(phi);
    return new THREE.Vector3(x, y, z);
  }

  // Create countries as icosahedrons
  countries.forEach((country, idx) => {
    const pos = latLonToVector3(country.lat, country.lon, R + 0.02);
    
    const sizes = [0.04, 0.05, 0.06, 0.035, 0.045];
    const size = sizes[idx % sizes.length];
    
    const geoContinent = new THREE.IcosahedronGeometry(size, 3);
    const matContinent = new THREE.MeshStandardMaterial({ 
      color: country.color, 
      emissive: country.color, 
      emissiveIntensity: 0.2,
      metalness: 0,
      roughness: 0.8
    });
    const mesh = new THREE.Mesh(geoContinent, matContinent);
    mesh.position.copy(pos);
    mesh.lookAt(new THREE.Vector3(0, 0, 0));
    mesh.userData = { country: country.name, airports: country.airports };
    countriesGroup.add(mesh);
  });

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
    let html = '<h3>' + country + '</h3><ul>';
    airports.forEach(airport => {
      html += '<li><strong>' + airport.name + '</strong><br>' + airport.city + '</li>';
    });
    html += '</ul>';
    airportPanel.innerHTML = html;
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
      showTooltip(e.clientX, e.clientY, 'Click for ' + obj.userData.country + ' airports');
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
      showAirports(obj.userData.country, obj.userData.airports);
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