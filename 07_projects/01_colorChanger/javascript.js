const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach(function (button){
    button.addEventListener('click', function(event){
        console.log(event.target);
        // if(event.target.id === "skyblue"){
        //     body.style.backgroundColor = event.target.id;
        // }
        // if(event.target.id === "green"){
        //     body.style.backgroundColor = event.target.id;
        // }
        // if(event.target.id === "purple"){
        //     body.style.backgroundColor = event.target.id;
        // }
        // if(event.target.id === "pink"){
        //     body.style.backgroundColor = event.target.id;
        // }
        // if(event.target.id === "grey"){
        //     body.style.backgroundColor = event.target.id;
        // }
        switch (event.target.id) {
            case "skyblue":
                body.style.backgroundColor = event.target.id;
                break;
            case "green":
                body.style.backgroundColor = event.target.id;
                break;
            case "purple":
                body.style.backgroundColor = event.target.id;
                break;
            case "pink":
                body.style.backgroundColor = event.target.id;
                break;
            case "grey":
                body.style.backgroundColor = event.target.id;
                break;
            default:
                break;
        }
    })
})

// const buttons = document.querySelectorAll(".button");

// buttons.forEach(function (button) {
//     button.addEventListener("click", function (e) {
//         document.body.style.backgroundColor = e.target.id;
//     });
// });