const planets =
 [{id:1, name:'Mercury'},
{id:2, name:'Venus'},
{id:3, name:'Earth'},
{id:4, name:'Mars'}];
function getPlanetIdByName(planetName) 
{
    const planet = planets.find(planet => planet.name === planetName);
    return planet ? planet.id : 'not found';
}
const Find_planet = 'Earth';
const planetId = getPlanetIdByName(Find_planet);
console.log(`The ID of ${Find_planet} is ${planetId}`);
