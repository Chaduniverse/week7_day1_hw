let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(dog_string,dog_names){ 
    for(i=0; i < dog_names.length; i++){
        if(dog_names[i] == dog_string){
            `Matched ${dog_name}`
        }else{
            console.log("No Match")
        }
    }

}    
findWords(dog_string,dog_names)