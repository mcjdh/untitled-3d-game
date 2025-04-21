export default {
  name: "Snow World",
  background: 0xf0f0ff,
  gridColor: 0xccccff,
  fog: {
    color: 0xf0f0ff,
    near: 5,
    far: 100
  },
  ambient: {
    skyColor: 0xccccff,
    groundColor: 0xaaaacc
  },
  portalPositions: [
    { x: 0, z: 0, destination: "default" },
    { x: 50, z: 0, destination: "forest" },
    { x: -50, z: 0, destination: "desert" }
  ],
  // Snow world specific elements
  snowfall: {
    enabled: true,
    particleCount: 1000,
    size: 0.3,
    color: 0xffffff,
    speedFactor: 0.2
  },
  // Add some snow world obstacles
  obstacles: [
    // Snowman
    { type: "sphere", position: { x: 70, y: 15, z: 70 }, radius: 15, color: 0xffffff }, // Bottom
    { type: "sphere", position: { x: 70, y: 40, z: 70 }, radius: 10, color: 0xffffff }, // Middle
    { type: "sphere", position: { x: 70, y: 57, z: 70 }, radius: 7, color: 0xffffff },  // Head
    // Coal eyes
    { type: "sphere", position: { x: 68, y: 59, z: 64 }, radius: 1, color: 0x111111 },
    { type: "sphere", position: { x: 72, y: 59, z: 64 }, radius: 1, color: 0x111111 },
    // Carrot nose
    { type: "cone", position: { x: 70, y: 57, z: 64 }, radius: 1, height: 5, color: 0xff6600 },
    
    // Ice crystal formation
    { type: "box", position: { x: -70, y: 20, z: -70 }, size: { x: 5, y: 40, z: 5 }, color: 0xaaddff },
    { type: "box", position: { x: -60, y: 15, z: -70 }, size: { x: 5, y: 30, z: 5 }, color: 0xaaddff },
    { type: "box", position: { x: -80, y: 17, z: -70 }, size: { x: 5, y: 35, z: 5 }, color: 0xaaddff },
    { type: "box", position: { x: -70, y: 25, z: -60 }, size: { x: 5, y: 50, z: 5 }, color: 0xaaddff }
  ],
  // Frozen lake
  lake: {
    position: { x: 0, y: 9.5, z: -150 },
    size: { x: 100, y: 0.5, z: 100 },
    color: 0x88ccff,
    opacity: 0.7
  }
}; 