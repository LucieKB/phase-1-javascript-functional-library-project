const arrayOrObjectItsOk = function(collection){
    let x = Array.isArray(collection);
    if (x === true){
        return collection
    }
    else {
        return Object.values(collection)
    }
}


function myEach(collection, callback){
    let collection2 = arrayOrObjectItsOk(collection);
    for (let i=0; i<collection2.length; i++){
    callback(collection2[i])}

    return collection   
}

function myMap(collection, callback){
    let collection2 = arrayOrObjectItsOk(collection);
    let returnedCollection = [];
    for (let i=0; i<collection2.length; i++){
    returnedCollection.push(callback(collection2[i]))
    console.log(returnedCollection)
}

    return returnedCollection
}

function myReduce(collection, callback, acc){
    let collection2 = arrayOrObjectItsOk(collection);
   

    if (!acc){
        acc = collection2[0];
        collection2 = collection2.slice(1)
    }

    for (let i=0; i<(collection2.length);i++){    
    acc = callback(acc, collection2[i], collection2)
    }
    return acc
}

function myFind(collection, predicate){
    let collection2 = arrayOrObjectItsOk(collection);

    for (let i=0; i<collection2.length;i++){  
        // console.log(collection2[i])
        // console.log(predicate(collection2[i]))
        if (predicate(collection2[i]) === true){
           const result = collection2[i]
            i = collection2.length;
            console.log(result)
            return result
        } 
    }  
      return undefined  
}

function myFilter(collection,predicate){
    let collection2 = arrayOrObjectItsOk(collection);
    let result = [];

    for (let i=0; i<collection2.length;i++){  

        console.log(collection2[i])
        console.log(predicate(collection2[i]))

        if (predicate(collection2[i]) === true){
        result.push(collection2[i])} 
        }  
      return result
}

function mySize(collection){
    let collection2 = arrayOrObjectItsOk(collection);
    return collection2.length
}

function myFirst(array,n){
    let result;
    console.log(array)

    if (!n){
        result = parseInt(array.slice(0,1))
        
    }
    else {
        result = array.slice(0,n)
    }
    console.log(result)
    return result
}

function myLast(array,n) {
    let result;
    console.log(array)

    if (!n){
        result = parseInt(array.slice(-1))
    }
    else {
        result = array.slice(-n)
    }
    console.log(result)
    return result
}

function myKeys(object){
    return Object.keys(object)
}

function myValues(object){
    return Object.values(object)
}





