// const tinderUser = new Object() //it's singleton obeject
 const tinderUser = {} //non-singletone object

 tinderUser.id = "123abx"
tinderUser.name = "samy"
tinderUser.isLoggedIn = false
// console.log(tinderUser);


const regularUser = {
    email: "same@123.com",
    fullname: {
        userfullname: {
    firstname: "shreeram",
    lastname: "singh"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a",4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)
const obj3 ={...obj1, ...obj2} //spread operator ...
// console.log(obj3);


const users =[
   
    {
    id: 1,
    email: "hiram@gmail.com"
    },
    {
        id: 1,
        email: "hiram@gmail.com"
        }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))


const course = {
    coursename: "Js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor:instructor}=course
// console.log(courseInstructor);
 console.log(instructor);


// {
//     "name": "shreeram",
//     "coursename": "js in hindi",
//     "price": "free"
// } api isi format me milta hai 

// [
//     {},
//     {},
//     {}
// ] api aapko ye dono format me milti hai


