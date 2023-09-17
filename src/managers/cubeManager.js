const cubes = [
    {
    id: '5c39f1851ab3b24f5c03e183',
    name:'Eco-Dark',
    difficultyLevel:'6',
    imageUrl:'https://thingsidesire.com/wp-content/uploads/2018/06/Eco-Dark-Rubik%E2%80%99s-Cube2.jpg',
description: 'High level cube',
    }
,
{
id: '5c39f1851ab3b24f5c03e182',
name:'Gan356 Air SM',
difficultyLevel:'3',
imageUrl:"https://ae01.alicdn.com/kf/HTB1CSddXRxRMKJjy0Fdq6yifFXa6/Gan-356-Air-SM-3x3-Black-Magic-cube-GAN-Air-SM-Magnetic-3x3x3-Speed-cube-gans.jpg",
description: 'some cube',
}
];
const uniqid = require('uniqid')

exports.getAll = () => cubes.slice();

exports.create = (cubeData ) => {

    const newCube = {
     id: uniqid(),
    ...cubeData,
 };
cubes.push(newCube);

return newCube;
}