const uniqid = require('uniqid')

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

exports.getAll = (search, from, to ) => {
    let result = cubes.slice();

    if (search) {
        result = result.filter(cube => cube.name.toLowerCase().includes(search.toLowerCase()));
    }

    if (from){
        result = result.filter(cube=> cube.difficultyLevel>=Number(from));
    }
    
    if (to) {
        result = result.filter(cube=> cube.difficultyLevel<=Number(to));
    }
    return result;

}

exports.create = (cubeData ) => {

    const newCube = {
     id: uniqid(),
    ...cubeData,
 };
cubes.push(newCube);

return newCube;
}