const Array = [9,4,131,35,5,3,7]

  function minmaxvalue(x)
  {
    let minval = x[0]
    let maxval = x[0]
    for(let i = 0;i < x.length;i++){
        
     
        if(x[i] < minval) {
             minval=x[i]
        }
        else if(x[i] > maxval){
            maxval = x[i]
        }
    } return [minval,maxval]
  }
  console.log(minmaxvalue(Array));
  console.log(Array);