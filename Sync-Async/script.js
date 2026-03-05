// koi pan Code JS ma line by line run thase
// Ane te Netural Pattern hoy chhe ke code line by line chale

// pan code ma kyare aevi pan line aave ke je wait kare and tene pashi no code run  thy jaay

setTimeout(() => {
  console.log("good Evening");
}, 2000);

console.log("hi");
console.log("Hello"); //async

// SYNC -- aevo code jo line by line chalse

// ASYNC -- aevo code ke je ready thai pacchi chale

// callback pattern and Callback hell
function abc(val) {
  setTimeout(
    () => {
      console.log("function value",val);
    },
    Math.floor(Math.random() * 10) * 1000,
  );
}
abc(12);

function abc1(fnc) {
  setTimeout(
    () => {
      return fnc();
    },
    Math.floor(Math.random() * 10) * 1000,
  );
}
abc1(function (){
    console.log(" Hey.How Are You ");//this is callback function

});

// ek function ne tame ek bijo function na parameter mo mokli aapo chho, to te paremeter walu fnc ne kevai chhe callback function

// callback hell 
// JavaScript ni library (react/Angular/vue) function hoy teno use karvo  --> callback hell
 function ShowProfile(username, cb){
    console.log("fetching all profiles .............");
    setTimeout(() => {
        cb({
            id : 1,
            username: username,
        });
    },2000)
 }

 function ShowAllPost(id, cb){
    console.log("Fetching All Post...........");
    setTimeout(() => {
        cb({id : id,post: ["post1","post2", "post3"]
        });
    },3000)
 }

 function ShowAllStory(id,cb){
     console.log("Fetching All storys...........");
    setTimeout(() => {
        cb({id : id,post: ["story1","story2", "story3"]
        });
    },4000)
 }
 function ShowsavedPost(id,cb){
    console.log("fetching All Saved Postes...........");
    setTimeout(() =>{
        cb({
            savedposteid : 1,
            savedpostetitle : "saved post title",
        });
    },5000)
 } 
function ShowsReels(id,cb){
    console.log("fetching All reels...........");
    setTimeout(() =>{
        cb({
            reelsid : 1,
            reelstitle : "saved post title",
        });
    },6000)
 } 



 ShowProfile("test",function(data){
    console.log(data);
    ShowAllPost("test",function(data){
        console.log(data);
        ShowAllStory("test",function(data){
            console.log(data)
            ShowsavedPost("test",function(data){
                console.log(data);
                ShowAllStory("test",function(data){
                    console.log(data);
                })
            })
        })
    })
 }) //callback hell

//  Promises: resolve and rejected with then and catch
// jyare tame ek promiss banavo chho, tyare te promise be (two) stastes mathi koi ek states ma jase.
// one state: resolve 
// second states :rejected
// and we have to write a code for both states
let pr = new Promise(function (res ,rej){
    setTimeout(() =>{
        let rnum = Math.floor(Math.random() * 10);
        if (rnum < 5){
            res(rnum);
        }else {
            rej(rnum);
        }
    },3000);
});

pr.then(function(val){
    console.log("Resolve", val);
}).catch(function(val){
    console.log("Reject",val);
});

// Async await
let pr1 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        let rnum = Math.floor(Math.random() * 10);
        if (rnum < 5){
            resolve(rnum);
        }else{
            reject(rnum);
        }
    },2000);
});

async function abcd() {
    try{
        let val = await pr1;//wite for 2 swecond to resolve 
        console.log("async await",val);
    }catch(err){
        console.log("rejected",err);
    }
}
console.log(abcd());

setTimeout(() =>{
    console.log(pr1);
},2000);