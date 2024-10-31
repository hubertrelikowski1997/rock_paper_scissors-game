const gameContainer = document.querySelector('.container'),
    userResult = document.querySelector('.user_result img'),
    cpuResult = document.querySelector('.cpu_result img'),
    result = document.querySelector('.result'),
    optionImages = document.querySelectorAll('.option_image');


console.log(optionImages)

optionImages.forEach((image, index) => {
    image.addEventListener('click', (event) => {
        image.classList.add('active')

        optionImages.forEach((image2, index2) => {
            index !== index2 && image2.classList.remove('active')
        })

        let imageSrc = event.target.src;
        userResult.src = imageSrc;

        let randomNumber = Math.floor(Math.random() * 3);

        let cpuImages = ['images/rock.png', 'images/paper.png', 'images/scissors.png']

        cpuResult.src = cpuImages[randomNumber];

        let userValue = ['R', 'P', 'S'][index]
        let cpuValue = ['R', 'P', 'S'][randomNumber]

        if (userValue === cpuValue) {
            result.textContent = 'Draw'
        } else if (userValue === 'R' && cpuValue === 'P') {
            result.textContent = 'CPU Win'
        } else if (userValue === 'R' && cpuValue === 'S') {
            result.textContent = 'USER Win'
        } else if (userValue === 'P' && cpuValue === 'R') {
            result.textContent = 'USER Win'
        } else if (userValue === 'P' && cpuValue === 'S') {
            result.textContent = 'CPU Win'
        } else if (userValue === 'S' && cpuValue === 'R') {
            result.textContent = 'CPU Win'
        } else if (userValue === 'S' && cpuValue === 'P') {
            result.textContent = 'USER Win'
        }
    })
})