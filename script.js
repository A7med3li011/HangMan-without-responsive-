let letters = "abcdefghijklmnopqrstuvwxyz"
let lettersArray = Array.from(letters);


lettersArray.forEach(letter=>{
    let span = document.createElement("span")
    span.className = "letter-box"
    let lspan = document.createTextNode(letter)
    span.appendChild(lspan)
    document.querySelector(".letters").appendChild(span)

})


let word = {
    programing:["javascript","html","css","java","python"],
    country:["egypt","england","france","unitedstate","cuba","qatar","china","japan"],
    players:["messi","ronaldo","foden","benzema","kaka","giggs","evra"],
    movies:["shutteriland","inception","darknight","spiderman"]
}

let arr =[]



//we want get random value from object keys 

let allKeys = Object.keys(word)
// range[0,3]
let ranNumber = Math.floor(Math.random() * allKeys.length) 

let ranNameOfKey = allKeys[ranNumber];


document.querySelector("body > div > div.game-info > div.category > span").innerHTML=ranNameOfKey;
let valuesOfKey = word[ranNameOfKey];

 
//range depend on random key (length of key)
let ranNumofInnerKey = Math.floor(Math.random() * valuesOfKey.length);

let fuzzyGame = valuesOfKey[ranNumofInnerKey]



let letterOfFuzzyGame = Array.from(fuzzyGame)


letterOfFuzzyGame.forEach(letter =>{
    let span = document.createElement("span");
    span.className = "emspan"
    document.querySelector(".letter-guess").appendChild(span)
})


let tries = 0;

document.addEventListener("click",function(e){
let mood = false
    if(e.target.classList == "letter-box" ){
        let choosenLetter = e.target.innerHTML  
        e.target.classList.add("clicked")

        
    
        letterOfFuzzyGame.forEach((letter,index)=>{
            if(choosenLetter === letter ){
                mood = true
                
                if(mood == true){
                    arr.push(choosenLetter)
                }
               

                if(arr.length == letterOfFuzzyGame.length ){
                    let overlay = document.createElement("div")
                    overlay.className = "overlay"
                     let boxOverlay = document.createElement("div")
                     boxOverlay.className = "box-over"
                     
                     let innerDiv = document.createElement("div")
                     innerDiv.className = "inner-div"
                     innerDiv.innerHTML = "congratulations"

                     let divX = document.createElement("div")
                     divX.className = "x" 
                     divX.innerHTML = "Play "
                     boxOverlay.appendChild(divX)
                     boxOverlay.appendChild(innerDiv)

                    overlay.appendChild(boxOverlay)
                    this.body.appendChild(overlay);


                    let chance = document.querySelector(".overlay .box-over  .x")

                    chance.onclick = function(){
                     location.reload()
                }
            }
                
                let spans = document.querySelectorAll(".letter-guess span")
                spans.forEach((span,index2)=>{
                    if(index == index2){
                        span.innerHTML = letter
                          
                    }

                   
                })

                      
            }

                    
            
        })


        if (mood == false) {
            tries++;
                              if(tries === 1){
                                    let a =  document.querySelector(".hangman-draw .the-draw .stand");
                                    a.style.display="block"
                            }else if(tries === 2){
                                let b = document.querySelector(".hangman-draw .the-draw .hang");
                                b.style.display="block"
                    
                            }else if(tries === 3){
                                let c = document.querySelector(".hangman-draw .the-draw .rope");
                                c.style.display="block"
                            }else if(tries === 4){
                                let d = document.querySelector(".hangman-draw .the-draw .head");
                                d.style.display="block"
                
                            }else if(tries===5){
                                let k = document.querySelector(".hangman-draw .the-draw .body");
                                k.style.display="block"
                
                            }else if(tries===6){
                                let h = document.querySelector(".hangman-draw .the-draw .hands");
                                h.style.display="block"
                            }else if(tries === 7){
                                let l = document.querySelector(".hangman-draw .the-draw .legs");
                                l.style.display="block"

                            }
            if(tries === 7){
                  let spans= document.querySelectorAll("body > div > div.row > div.letters span")
                    spans.forEach(span => {
                        span.classList.add("clicked");
                    })


                    let overlay = document.createElement("div")
                    overlay.className = "overlay"
                     let boxOverlay = document.createElement("div")
                     boxOverlay.className = "box-over"
                     
                     let innerDiv = document.createElement("div")
                     innerDiv.className = "inner-div"
                     innerDiv.innerHTML = "Game Over"

                     let divX = document.createElement("div")
                     divX.className = "x" 
                     divX.innerHTML = "Try Again"
                     boxOverlay.appendChild(divX)
                     boxOverlay.appendChild(innerDiv)

                    overlay.appendChild(boxOverlay)
                    this.body.appendChild(overlay);


                    let chance = document.querySelector(".overlay .box-over  .x")

                    chance.onclick = function(){
                     location.reload()
                        }
                }
          

        }   
        

         
       
    }

})





































































































































































































