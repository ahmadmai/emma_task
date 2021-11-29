const example1 = [
    "hello world",
    "this is a test",
    "this is an example"
];


function getCommonChars(arr) {
   
    var startTime = window.performance.now();
  var mainString='';
for (var key in arr) {
    var value = arr[key];
      mainString = mainString.concat(value);
 
}
 
    const charsArr = Array.from(mainString);
    
    let uniqueChars = [];
        charsArr.forEach((c) => {
       if (!uniqueChars.includes(c)) {
        uniqueChars.push(c);
              }
                    });

     return uniqueChars;
}

const result = getCommonChars(example1);

console.log(result);
