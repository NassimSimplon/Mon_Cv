// For

var q = []
function nass(arr) {

for (let i = 0; i < arr.length; i++) { 
 q.push(arr[i] * 2) 
}
return q
}

console.log(nass([1, 2, 3, 4, 5, 6]),'boucle For');

// for
var u = [1, 2, 3, 4, 5, 6];
var b = u.map(el=>el*2)
console.log(b,'Map Function')

//sum
 
    var faf= [1, 2, 3, 4, 5, 6]
    var i= 0 
    var h = faf.map(el=> i+=el);
    
    console.log(h,"ne7sbou sum mta3 les element mta array")

    //If
    var k = [1,2,3,4,5,6,7]
    var j = [];
    function kaza(){
        for (let i = 0;i<k.length;i++){
            if(k[i] < 4){
              
                j.push(k[i]);
               
            } 
        } 
        return j;
    }
console.log(kaza(), 'If condition')

//if
var y = [1, 2, 3, 4, 5, 6];
var t = []
var result = y.filter(x=>x<4).map(el=> t.push(el))
console.log(result,'condition with Map and filter Function')

//if else

var con = 2;
var son = 5;
function ko(){
    if(con<son){
        return 'yes  '
    }else{
    return 'no'
    }
}
console.log(ko(),'(If , else Condition)')


//-----------------------------------les fonction prédéfinie


// Array methods

//Push()

var hotelna = [1,2,3,4,5]
hotelna.push(6)
console.log(hotelna,'7otelna Noumrou 6 fi ekher  lArray | l push() t7ot l element fi ekher l array')

//unshift()

var hotelnaFlowel = [1,2,3,4,5]
hotelnaFlowel.unshift(9)
console.log(hotelnaFlowel,'7otelna Noumrou 9 fi awel  lArray | l unshift() t7ot l element fi awel l array')

//Shift()

var na7ilna = [1,2,3,4,5]
na7ilna.shift()
console.log(na7ilna,'na7ilna awel element fl array |  shift() tna7i awl element fl array')

//Pop()

var na7ilnaLekhreni =  [1,2,3,4,5]
na7ilnaLekhreni.pop()
console.log(na7ilnaLekhreni ,'na7ilna element element fl array |  pop() tna7i ekher element fl array')


//Map()

var u = [1, 2, 3, 4, 5, 6];
var b = u.map(el=>el*2)
console.log(b,'Map Function')


//Filter()


var j = [1, 2, 3, 4, 5, 6];
var result = j.filter(x=>x<4)
console.log(result,' filter tkharjelna  des element b condition')



var g = [1, 2, 3, 4, 5, 6];
var resultk = j.forEach(x=>{
x * 4
})
console.log(resultk,' filter tkharjelna  des element b condition')