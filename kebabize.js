//Modify the kebabize function so that it converts a camel case string into a kebab case.

//kebabize('camelsHaveThreeHumps') // camels-have-three-humps kebabize('camelsHave3Humps') // camels-have-humps Notes:

//the returned string should only contain lowercase letters

//best solution:

function kebabize(str) { 
  return str.replace(/0-9/g, "").split(/(?=[A-Z])/).join("-").toLowerCase() 
}

//my working solution:

function kebabize(str) { 
  let letters = str.replace(/[^a-zA-Z]/g, '') 
  let arr = letters.split(''); 
  for(let i = 0; i < arr.length; i++) { 
    if(arr[i] === arr[i].toUpperCase()){ 
    arr[i] = `-${arr[i].toLowerCase()}` 
  } 
}

return arr.join(''); }
