const stars = document.querySelectorAll(`.star`);
const output = document.querySelector(`.output`);

for(x=0; x<stars.length; x++){

    stars[x].starvalue =(x+1);
    // stars[x].addEventListener(`click`,function(){
    //     console.log("im clicked");
    // })
    ["click","mouseover","mouseout"].forEach(function(e){
        stars[x].addEventListener(e,showRating)
    })
}

function showRating(e){
    let type = e.type;
    //console.log(type);
    let starvalue = this.starvalue;
   // console.log(starvalue);

   if(type ==='click'){
       output.innerHTML ="you rated thic pic " + starvalue +"stars.";
   }

   stars.forEach(function(elem,ind){
       if(type === 'click'){
           if(ind < starvalue){
               elem.classList.add("orange")
           }else{
               elem.classList.remove("orange");
           }
       }

       if(type === 'mouseover'){
        if(ind < starvalue){
            elem.classList.add("yellow")
        }else{
            elem.classList.remove("yellow");
        }

        if(type === 'mouseout'){
        
            
                elem.classList.remove("yellow");
            }
        
    }
   })
}


function nextpage(){
    window.location.reload();
}

