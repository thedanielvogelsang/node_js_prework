function bubbleSort(array){
  for(let i = 0; i < array.length; i++){
    array.forEach(function(num) {
      let current_index = array.indexOf(num);
      let next_index = current_index + 1;
      let next_value = array[next_index];
      if(num != null && num > next_value){
        array[current_index] = next_value;
        array[next_index] = num;
      }
      return array;
    });
  };
  return array;
};

module.exports = bubbleSort
