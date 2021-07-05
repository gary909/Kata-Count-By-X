function countBy(x, n) {
    var z = [];
    //result = x * n; //10
    // var output = 1;
    for (let i = 1; i <= n; i++){
        
            // console.log("return the result x times" + "\n")
            // z.push(i[i]);
            z.push(x * i);
            // return output[i] + "<br>";
        }  

    return z;
  };
  
//     while (z.length < n) {
//         z.push(x * output);;
//         output++;
//         // console.log("length: " + z.length);
//     }
//     return z;
//   }



console.log(countBy(1,10));