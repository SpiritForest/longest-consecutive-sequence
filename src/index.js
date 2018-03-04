module.exports = function longestConsecutiveLength(array) {
  var mass = [], massCounter = [];
  var counter = 1; maxSequence = 1;
  mass = array.sort(function(a, b){return a - b});

  if (mass.length == 0) return maxSequence = 0;
  if (mass.length == 1) return maxSequence = 1;

  for (var i = 0; i < mass.length; i++){
  	if (i == mass.length - 1) break;
  	if (mass[i] == mass[i+1]) continue;
  	if (mass[i] + 1 == mass[i+1]) {counter++;}
  	if (mass[i] + 1 != mass[i+1]) {
  		if (counter > maxSequence) maxSequence = counter;
  		counter = 1;
  	}
  }
  return maxSequence;
}
