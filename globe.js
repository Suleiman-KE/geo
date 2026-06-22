function initGlobe() {
  if (!window.THREE) {
    setTimeout(initGlobe, 100);
    return;
  }

  const container = document.getElementById('container');
  const tooltip = document.getElementById('tooltip');
  
  // Scene, camera, renderer
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 1000);
  camera.position.set(0, 0, 2.5);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);

  // Lights
  const ambient = new THREE.AmbientLight(0x999999);
  scene.add(ambient);
  const dir = new THREE.DirectionalLight(0xffffff, 0.8);
  dir.position.set(5, 3, 5);
  scene.add(dir);

  // Earth
  const R = 1;
  const sphereGeo = new THREE.SphereGeometry(R, 64, 64);
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

  // Country data with capitals
  const countries = [
    { name: 'Kenya', lat: -0.23, lon: 36.86, capital: 'Nairobi', color: 0x4CAF50 },
    { name: 'Egypt', lat: 26.82, lon: 30.80, capital: 'Cairo', color: 0x8BC34A },
    { name: 'South Africa', lat: -30.56, lon: 22.94, capital: 'Pretoria', color: 0x2E7D32 },
    { name: 'Nigeria', lat: 9.08, lon: 8.68, capital: 'Abuja', color: 0x558B2F },
    { name: 'Ethiopia', lat: 9.15, lon: 40.49, capital: 'Addis Ababa', color: 0x33691E },
    { name: 'United States', lat: 37.09, lon: -95.71, capital: 'Washington D.C.', color: 0x1976D2 },
    { name: 'Brazil', lat: -14.24, lon: -51.93, capital: 'Brasília', color: 0x388E3C },
    { name: 'India', lat: 20.59, lon: 78.96, capital: 'New Delhi', color: 0x7CB342 },
    { name: 'China', lat: 35.86, lon: 104.20, capital: 'Beijing', color: 0xF57C00 },
    { name: 'Russia', lat: 61.52, lon: 105.32, capital: 'Moscow', color: 0xD32F2F },
    { name: 'Australia', lat: -25.27, lon: 133.78, capital: 'Canberra', color: 0xFF6F00 },
    { name: 'Japan', lat: 36.20, lon: 138.25, capital: 'Tokyo', color: 0xFBC02D },
    { name: 'France', lat: 46.23, lon: 2.21, capital: 'Paris', color: 0x512DA8 },
    { name: 'Germany', lat: 51.17, lon: 10.45, capital: 'Berlin', color: 0x303F9F },
    { name: 'United Kingdom', lat: 55.38, lon: -3.44, capital: 'London', color: 0x0277BD },
    { name: 'Canada', lat: 56.13, lon: -106.35, capital: 'Ottawa', color: 0x00838F },
    { name: 'Mexico', lat: 23.63, lon: -102.55, capital: 'Mexico City', color: 0x006064 },
    { name: 'Argentina', lat: -38.42, lon: -63.62, capital: 'Buenos Aires', color: 0x455A64 }
  ];

  // Countries group (continents)
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

  // Add country boxes
  countries.forEach(country => {
    const pos = latLonToVector3(country.lat, country.lon, R + 0.05);
    const boxGeo = new THREE.BoxGeometry(0.08, 0.08, 0.08);
    const boxMat = new THREE.MeshStandardMaterial({ 
      color: country.color, 
      emissive: country.color, 
      emissiveIntensity: 0.3,
      metalness: 0.2
    });
    const box = new THREE.Mesh(boxGeo, boxMat);
    box.position.copy(pos);
    box.lookAt(new THREE.Vector3(0, 0, 0));
    box.userData = { country: country.name, capital: country.capital };
    countriesGroup.add(box);
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

  renderer.domElement.addEventListener('pointermove', function(e) {
    const rect = renderer.domElement.getBoundingClientRect();
    pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

    raycaster.setFromCamera(pointer, camera);
    const intersects = raycaster.intersectObjects(countriesGroup.children, true);
    if (intersects.length > 0) {
      const obj = intersects[0].object;
      const html = '<b>' + obj.userData.country + '</b><br>Capital: ' + obj.userData.capital;
      showTooltip(e.clientX, e.clientY, html);
      renderer.domElement.style.cursor = 'pointer';
    } else {
      hideTooltip();
      renderer.domElement.style.cursor = 'default';
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