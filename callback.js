//countDOWN Timer 




//ascync concept : setTimeInterval settimeout, 



//fetch user, // get posts  // get comments
 /*
console.log("start");
const getUser= (callback) =>{
setTimeout(() => {
console.log("user fetched");
console.log({
    _id:1,
    name:"Hari Bahadur",
    email:"hari@gmail.com",
    password: "1343434",

});
callback();    
}, 3000);    
};


const getPosts = (userID) =>{
 setTimeout(() =>{
    console.log("posts fetched");
    console.log([
        {
            userID: userID,
            _id:1,
            title: "post 1",
        },
        {
             userID: userID,
            _id:1,
            title: "post 12",
        },
        {
            userID: userID,
            _id:1,
            title: "post 45",
        },
        {
            userID: userID,
            _id:1,
            title: "post 19",
        },
    ]);
 }, 2000);
};
 getUser((user) => {
    console.log("call back", user);
    
    getPosts(user._id);

 });
 console.log("end" );  */




console.log("start");

const getUser = (callback) => {
  setTimeout(() => {
    console.log("Post fetched");
    const user = {
      _id: 1,
      name: "Hari Bahadur",
      email: "hari@gmail.com",
      password: "1343434",
    };
    console.log(user);
    callback(user);
  }, 3000);
};

const getComments = (postID) => {
  setTimeout(() => {
    console.log("comments fetched");
    console.log([
      {
        _id: 1,
        postID,
        text: "comment 1",
      },
      {
        _id: 2,
        postID,
        text: "comment 2",
      },
      {
        _id: 3,
        postID,
        text: "comment 3",
      },         
    ]);
  }, 1000);
};

getUser((user) => {
  console.log("callback", user);
  getPosts(user._id, (posts) =>{
    console.log("callback", posts);

    getComments(posts[1]._id,(error, comments)=> {
        console.log(comments);
    });
  });       
});
 
console.log("end");


//callback hell --------------> solution is Promise 

//pyramid of doom async await 


