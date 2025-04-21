export default {
  name: "Desert World",
  background: 0xd6b06c,
  gridColor: 0xaa7733,
  fog: {
    color: 0xffcc88,
    near: 10,
    far: 200
  },
  ambient: {
    skyColor: 0xffdd99,
    groundColor: 0xaa7733
  },
  portalPositions: [
    { x: 0, z: 0, destination: "default" },
    { x: 50, z: -50, destination: "forest" },
    { x: -50, z: -50, destination: "snow" }
  ],
  // Desert specific elements
  cacti: {
    count: 30,
    minDistance: 50,
    maxDistance: 400,
    height: { min: 20, max: 40 },
    color: 0x66aa66
  },
  // Add some desert obstacles
  obstacles: [
    { type: "cylinder", position: { x: 60, y: 15, z: 60 }, radius: 5, height: 30, color: 0x66aa66 }, // Cactus
    { type: "cylinder", position: { x: 60, y: 15, z: 60 }, radius: 2, height: 10, color: 0x66aa66, rotation: { x: 0, y: 0, z: Math.PI/2 }, offset: { x: 0, y: 20, z: 8 } }, // Cactus arm
    { type: "cylinder", position: { x: -60, y: 15, z: -60 }, radius: 8, height: 40, color: 0x66aa66 }, // Large cactus
    { type: "box", position: { x: -100, y: 5, z: 100 }, size: { x: 40, y: 10, z: 40 }, color: 0xddbb77 } // Sand dune
  ],
  // Desert landscape features
  dunes: {
    count: 20,
    minDistance: 80,
    maxDistance: 500,
    size: { min: 30, max: 100 },
    height: { min: 5, max: 15 },
    color: 0xddbb77
  }
}; 