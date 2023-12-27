let r= document.querySelector('form');
let arr=[]
// console.log(r)
r.addEventListener('Submit',put);

function put(event){
    event.preventDefault();
    
    let name=document.getElementById('x1').value
    let empID=document.getElementById('x2').value
    let dept=document.getElementById('Department').value
    let exp=document.getElementById('x3').value
    let email=document.getElementById('x4').value
    let mobile=document.getElementById('x5').value
    
    let object={
        Dname:name,
        DempID:empID,
        Ddept:dept,
        Dexp:exp,
        Demail:email,
        Dmobile:mobile,
    }
    arr.push(object)
    console.log(object)
    display(arr)
}
// function display(object){
//     document.querySelector("tbody").innerHTML=""
//     arr.forEach(function(object)
//     {
//         let row=document.createElement("tr")

//         let fname=document.createElement("td")
//         fname.innerText=object.Dname;

//         let id=document.createElement("td")
//         id.innerText=object.DempID

//         let Depart=document.createElement("td")
//         Depart.innerText=object.Ddept

//         let expr=document.createElement("td")
//         expr.innerText=object.Dexp

//         let Email=document.createElement("td")
//         Email.innerText=object.Demail

//         let mob=document.createElement("td")
//         mob.innerText=object.Dmobile

//         row.append(fname,id,Depart,expr,Email,mob)
//         document.querySelector("tbody").append(row)
//     })
    
// }





//         let role=document.createElement("td");
//         let roleText=giveRole(object.Dexp);
//         role.innerText=roleText;

//         let deleteElement=document.createElement("td");
//         deleteElement.innerText="delete"
    

        // deleteElement.addEventListener("click",function(event){
        //     event.target.parentNode.remove()
        // })
        // deleteElement.style.backgroundColor="red"
        
        
        //     document.querySelector("tbody").append(tr);
    // });
// }

// function giveRole(Dexp)
// {
//     if(Dexp>5){
//         return"Senior";
//     }
//     else if(Dexp>=2 && Dexp<=5){
//         return"Junior"
//     }
//     else if(Dexp<=1){
//         return"Fresher"
//     }
// }



