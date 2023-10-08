// Write your solution here!
let cats=["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    
    cats.push(name)
    return cats
}


function destructivelyPrependCat(name){
    cats.unshift(name)
    return cats
}

function destructivelyRemoveLastCat(){
    cats.pop()
    return cats
}
 
function destructivelyRemoveFirstCat(){
    cats.shift()
    return cats
}

function appendCat(name){
    let addedCat1=[...cats,name]
    return addedCat1
}
function prependCat(name){
    let addedCat1=[name, ...cats];
    return addedCat1
  }
  
  function removeLastCat(){
    let removedKitten2= cats.slice(0,cats.length-1);
    return removedKitten2
  }
  
  function removeFirstCat(){
    let removedKitten2= cats.slice(1)
    return removedKitten2
  }