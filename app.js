const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allsections = document.querySelector('.main-content');

function pageTransition(){
    //Button click active class
    for(let i = 0; i <sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }

    //sections Active class
    allsections.addEventListener('click', (e)=>{
        const id= e.target.dataset.id; //select the dataid of whatever is clicked
        if(id){
            //remove selected from the button
            sectBtns.forEach((btn)=>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            //hide other sections
            sections.forEach((section)=>{
                section.classList.remove('active')
            })

            const element= document.getElementById(id);
            element.classList.add('active');
        }
    })
}

pageTransition();

