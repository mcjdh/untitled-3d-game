export default {
  name: "Default World",
  background: 0xa0a0a0,
  gridColor: 0x000000,
  fog: {
    color: 0xa0a0a0,
    near: 100,
    far: 1000
  },
  ambient: {
    skyColor: 0xffffff,
    groundColor: 0x444444
  },
  portalPositions: [
    { x: 100, z: 0, destination: "forest" },
    { x: -100, z: 0, destination: "desert" },
    { x: 0, z: 100, destination: "snow" }
  ],
  // Add some simple obstacles
  obstacles: [
    { type: "box", position: { x: 50, y: 15, z: 50 }, size: { x: 20, y: 30, z: 20 }, color: 0x888888 },
    { type: "box", position: { x: -50, y: 15, z: -50 }, size: { x: 20, y: 30, z: 20 }, color: 0x888888 }
  ]
}; 