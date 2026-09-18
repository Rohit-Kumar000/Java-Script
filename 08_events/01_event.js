// document.getElementById('berserk').onclick = function(){
//     alert("Picture Selected")
// }

// document.getElementById('berserk').addEventListener('click', function(){
//     alert("Picture Selected")
// })(

// attachEvent()
// jQuery - on
// type, timestamp, defaultPrevented
// target, toElement, srcElement, currentTarget, 
// clientX, clientY, screenX, screenY
// altkey, ctrlkey, shiftkey, keyCode

// document.getElementById('berserk').addEventListener('click', function(e){
//     console.log(e);
    
// },false)

// document.getElementById('image').addEventListener('click', function(e){
//     console.log('clicked inside the ul');
    
// }, true);

// document.getElementById('sasuke').addEventListener('click', function(e) {
//     console.log('sasuke clicked');
//     e.stopPropagation();
// }, true);

// document.getElementById('google').addEventListener('click', function(e){
//     e.preventDefault()
//     e.stopPropagation()
//     console.log('Google clicked');

// }, false)

document.querySelector('#image').addEventListener('click', function(e){
    e.target.tagName
    if(e.target.tagName === 'IMG'){
        let removeImage = e.target.parentNode
        removeImage.remove()
    }
    
})