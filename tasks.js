const containerTasks = document.querySelector('#sect-tasks');
const containerTasks2 = document.querySelector('#sect-tasks2');
const containerTasks3 = document.querySelector('#sect-tasks3');
const frmTask = document.getElementById('frm-task');

const title = document.getElementById('title-task')

const textTask = document.getElementById('ta-task')

frmTask.addEventListener('submit', createcard)


function createcard(event) {
    event.preventDefault()


    console.log(event);



    const card = document.createElement('article')
    card.classList.add('card')
    card.setAttribute('id', 'card')

    const headerCard = document.createElement('div')
    headerCard.classList.add('header-card')

    const titleCard = document.createElement('h2')
    titleCard.textContent = title.value

    const closeCard = document.createElement('button')
    closeCard.textContent = 'x'
    closeCard.classList.add('close')

    const nextCard = document.createElement('button')
    nextCard.textContent = '>'
    nextCard.classList.add('next')


    const containerCard = document.createElement('div')
    containerCard.classList.add('container-card')
    const textcard = document.createElement('p')
    textcard.textContent = textTask.value

    const footerCard = document.createElement('div')
    footerCard.classList.add('footer-card')
    const reference = document.createElement('a')
    reference.setAttribute('href', 'https://www.youtube.com/watch?v=AlzUbOMD3sw&t=202s&ab_channel=edwindev')
    reference.textContent = '@Edwin Dev<'

    headerCard.appendChild(titleCard)
    headerCard.appendChild(closeCard)
    headerCard.appendChild(nextCard)

    containerCard.appendChild(textcard)

    footerCard.appendChild(reference)

    card.appendChild(headerCard)
    card.appendChild(containerCard)
    card.appendChild(footerCard)

    containerTasks.appendChild(card)


    closeCard.addEventListener('click', () => {
        card.remove();
        if (!esta) {
            esta = true;
        }
    })


    let esta = true; 

    nextCard.addEventListener('click', () => {
        const esxistecard = containerTasks2.querySelector('.card');

        if (esta && esxistecard) {
            alert('Solo se permite una tarea a la vez en esta sección.');
        } else {
            if (esta) {
                
                containerTasks2.appendChild(card);
                esta = false; 
            } else {
               
                containerTasks3.appendChild(card);
            }
        }
    });


}








// <!-- <article class="card" id="card">
//         <div class="header-card">
//           <h2>Tarea 1</h2>
//           <button id="close" class="close">x</button>
//         </div>
//         <div class="container-card">
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus veritatis, voluptatem sapiente rerum voluptatibus rem quam est aliquid hic. Voluptatum deserunt sunt facere. Nemo quae sint laudantium laboriosam quibusdam placeat
//           </p>
//         </div>
//         <div class="footer-card">
//           <a href="">@Edwin Dev</a>
//         </div>
//       </article>       -->