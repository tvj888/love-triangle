/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
    var col = 0;
  for (var x = 0 , lenght = preferences.length; x < lenght;  x++) {
    var col1 = preferences[preferences[preferences[x]-1]-1]=== x+1;
    var col2 =x+1 !==preferences[x];

    if (col1 && col2){
     
        col++;
    }
    }
    return col / 3;
  };
};
