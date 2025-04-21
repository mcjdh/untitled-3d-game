export default {
  name: "Forest World",
  background: 0x2d572c,
  gridColor: 0x1a3a1a,
  fog: {
    color: 0x2d572c,
    near: 50,
    far: 300
  },
  ambient: {
    skyColor: 0x88aa88,
    groundColor: 0x224422
  },
  portalPositions: [
    { x: 0, z: 0, destination: "default" },
    { x: 50, z: 50, destination: "desert" },
    { x: -50, z: 50, destination: "snow" }
  ],
  // Forest specific elements
  trees: {
    count: 50,
    minDistance: 30,
    maxDistance: 300,
    height: { min: 30, max: 60 },
    trunkColor: 0x663311,
    leavesColor: 0x336633
  },
  // Add some forest obstacles
  obstacles: [
    { type: "box", position: { x: 50, y: 15, z: 50 }, size: { x: 10, y: 60, z: 10 }, color: 0x663311 }, // Tree trunk
    { type: "sphere", position: { x: 50, y: 45, z: 50 }, radius: 20, color: 0x336633 },  // Tree leaves
    { type: "box", position: { x: -50, y: 15, z: -50 }, size: { x: 10, y: 60, z: 10 }, color: 0x663311 }, // Tree trunk
    { type: "sphere", position: { x: -50, y: 45, z: -50 }, radius: 20, color: 0x336633 }  // Tree leaves
  ]
}; 