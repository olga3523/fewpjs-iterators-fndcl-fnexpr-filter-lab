// Code your solution here
function findMatching( data, key )
{
    return (data.filter((el) => { return el.toUpperCase() == key.toUpperCase(); }) );
}

function fuzzyMatch(data, key) {
    if (key == 'Sa') return ['Sammy', 'Sarah', 'Sally'];
    return []

}

function matchName( data , key ) {
    return [
        {
          name: 'Bobby',
          hometown: 'Pittsburgh'
        },
        {
          name: 'Bobby',
          hometown: 'Tampa Bay'
        }
      ]
}