// Code your solution in this file!
function totalRevenue(arr){
    return arr.reduce(function(total,ele){let rev=ele.revenue;return total+=rev},0)
}


function averageRevenue(arr){
    let sumRev= arr.reduce(function(total,ele){let rev=ele.revenue;return total+=rev},0)
    return sumRev/arr.length
}

function logDriverNames(arr){
    arr.forEach(function(ele){
        console.log(ele.name)
    })
}

function logDriversByHometown(arr,location){
    arr.forEach(function(ele){
        if(ele.hometown==location)console.log(ele.name)
    })
}

/*function driversByRevenue(array){ ​
       let newArray =[]
        newArray.push(array.sort((a, b)=>{
          a.revenue - b.revenue
        }))
        return newArray
        return array.slice().sort((a,b)=>a.revenue - b.revenue)
}*/

function driversByRevenue(drivers) {
    return drivers.slice().sort(function (a, b) {
      return a.revenue - b.revenue;
    })
}

function driversByName(arr){
    return arr.slice().sort((a,b)=>a.name.localeCompare(b.name))
}    
    