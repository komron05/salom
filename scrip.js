let rang = document.querySelector('.rang')
let button = document.querySelector('#bosing')
let isRounded = rang.classList.contains('rounded')

function changeColor(color){
 rang.id=color
}

rang.addEventListener('mouseenter',()=>{
changeColor('yellows')
})

rang.addEventListener('mouseleave',()=>{
changeColor('reds')
setTimeout(function(){
rang.id=''
},2000)
});

button.addEventListener('click',()=>{
    if(isRounded){
        rang.classList.remove('rounded')
        isRounded=!isRounded
    }else{
        rang.classList.add('rounded')
        isRounded=!isRounded
    }
})
