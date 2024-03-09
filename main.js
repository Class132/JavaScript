

//Create button class 
const button = document.querySelector('.press-button'); 

const getRandomColor = () => { 
    let letters = '0123456789ABCDEF'
    let color ='#'; 
    for ( let i=0; i< 6; i++) { 
        console.log(Math.floor(Math.random() *  16 )); 

        color += letters[Math.floor(Math.random() *  16 )]; 
    }
    return color;  // ВОЗВРАЩАЕТ СЛУЧАЙНЫЙ ЦВЕТ 
}


const getRandomGradient = () => { 
    let colorStart = getRandomColor(); 
    let colorEnd = getRandomColor(); 
    let gradient = `linear-gradient(to right, ${colorStart}, ${colorEnd} )`;
    console.log(gradient); 
    return gradient; 
}

button.addEventListener('click', () => { 
    let gradient = getRandomGradient(); 
    button.style.backgroundImage = gradient; 
});

