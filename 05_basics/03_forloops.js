// for of loop

const num = [1,2,3,4,5];
for (const sum of num) {
    // console.log(sum);
    
}

const country = "India";
for (const cName of country) {
    // console.log(cName);
    
}

// Maps

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('RS', "Russia")

// console.log(map);

// for (const [key, value] of map) {
//     console.log(key, ':-', value);
    
// }

const myObj = {
    'game1': 'NFS',
    'game2': 'PUBG'
}

// for (const [Obj, gamenname] of myObj) {
//     console.log(Obj, ':-', gamenname);
    
// }

const val1 = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'Ruby',
    py: 'Python'
}

for (const key in val1) {
    // console.log(val1[key]);
    // console.log(`${key} shortcut is for ${val1[key]}`);
       
}

const Arr = ["Rohit", "Sunita", "Pratap", "Rahul", "Daksh"];
for (const key in Arr) {
    // console.log(Arr[key]);
    
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('RS', "Russia")

// for (const key in map) {
//     console.log(key);
    
// }

//  for each loop

const Country = ["India", "Africa", "Russia", "Dubai"];
// Country.forEach(function (Name){
//     console.log(Name);
// })

// Country.forEach((val) => {
//     console.log(val);
    
// })

// function printMe(item){
//     console.log(item);
    
// }
// Country.forEach(printMe)

const mySubject = [
    {
        sName: "JavaScript",
        type: "js"
    },
    {
        sName: "Python",
        type: "py"
    },
    {
        sName: "C++",
        type: "cpp"
    },
]

mySubject.forEach((item) => {
    console.log(item.sName);
    
})