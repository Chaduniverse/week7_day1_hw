let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(dog_string,dog_names){ 
    // This function will loop through list and check if name in string
    for(i=0; i < dog_names.length; i++){
        let current_name = dog_names[i]
        // declared current name as a variable 
        // beginning of if statement
        if(dog_string.toLowerCase().includes(current_name.toLowerCase())){
            console.log(`Matched ${current_name}`)
        }else{
            console.log("No Match")
        }
    }

}    
// called func here
findWords(dog_string,dog_names)   



let arr =["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
// define function here
function replaceEvens(arr){ 
    // looping through the even indices in array
    for(let i =0; i < arr.length; i+=2){
        // this will replace every even index with 
        arr.splice(i,1,"even index")
    }
    return arr
}  
console.log(replaceEvens(arr))