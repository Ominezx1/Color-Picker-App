// quick select

function quickSel(value){
    return document.querySelector(value);
}

//fetching colors

///---- This sucked in local dev... 
// fetch('https://colornames.org/fresh/json/', {mode: 'no-cors'})
// .then(function (response){
//     if(response.ok){
//         return response.json();
//     }else{
//         return Promise.reject(response);
//     }
// })
// .then(function(data){
//     console.log(data);
// })
// .catch(function(err){
//     console.warn("something went wrong", err);

// })

//Goooouuu jouub
///---But then dumpster fire
// fetch('https://colornames.org/fresh/json/', {mode: 'no-cors'}).then
// (function(response){
//     //Denote call being successful
//     console.log('success', response);
// }).then(function(data){
//     console.log(data);
// }).catch(function(err){
//     //Denote error
//     console.warn('something went wrong', err);
// })


// function fetchData(){
//     fetch("https://colornames.org/fresh/json/", {mode: 'no-cors'})
//     .then((response) => response.json())
//     .then((json) => takeData(json));

// }

// function takeData(val){
//     console.log(data);
// }

// fetchData();

//I just running into errors
// trying again

// const baselink = "https://colornames.org/fresh/json/";

// var request = new XMLHttpRequest();
// const API_URL = baselink;
// request.open('GET', API_URL);
// request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
// request.responseType = 'json';

// request.onload = function () {
//     // the response status tells us the HTTP status code, if it is 200, it means the response status is "OK"
//     if (this.status === 200) {
//       // we save the response into a variable
//       var data = this.response;
//       console.log(data);
//     }else{
//         console.log("something happened");
//     }
// }
// request.send();


// fetch('json/colors.json', {mode: 'no-cors'})
//switched to the link #url...
// ... remove cors mode
// ... added cors mode ... 
// ... chnage this response or request redir/
fetch('https://colornames.org/fresh/json/', {mode: 'no-cors'})
    .then((response) => response.json())
    .then((json) => list(json))
    .catch(function(err){
        //Denote error
        console.warn('something went wrong', err);
    })

let listBracket = []; 

var selectBtn = document.querySelector("[name = 'yosel']");
var emptyList;
var oppList;


function listColorReal(arrOpt){
    for(var i = 0; i <= arrOpt.length-1;){
        emptyList += arrOpt[i];
        i++;
    }
    selectBtn.innerHTML = emptyList;
    oppList = document.querySelectorAll("option");
    

}


function list(val){
    val.forEach(value => {
        let listCon = '<option class="color" id ="'+ value.hexCode + '">' + value.name + '</option>';
        // console.log(value);
        listBracket.push(listCon);
        return listBracket;

    });
    listColorReal(listBracket);
    quickSel("body").style.backgroundColor = "#" + val[0].hexCode;
}

selectBtn.addEventListener("change", function(){
    console.log(this.value);
        oppList.forEach(opp => {
            if(this.value == opp.innerHTML){
                quickSel("body").style.backgroundColor = "#" + opp.id;
            }
        })
    
})
    
