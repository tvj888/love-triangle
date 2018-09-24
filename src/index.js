/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var hon = 0;
  for (var x = 0, lenght = preferences.length; x < lenght;  x++) {
    var hon1 = preferences[preferences[preferences[x]-1]-1]=== x+1;
    var hon2 = x+1 !==preferences[x];
  if (hon1 && hon2){
        hon++;
    }
    }
    return hon/3;
  };



