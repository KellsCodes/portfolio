// project files for adding dynamically to the html
const projectsLib = [
    {
        name: "Tribute Page",
        imgUrl: 'project_imgs/trbut_pg1.jpg',
        alt: "tribute page",
        src: "https://codepen.io/KellsCodes/pen/dyPwXqb"
    },
    {
        name: "Random Quote Machine",
        imgUrl: 'project_imgs/random_q_mcn1.jpg',
        alt: "Random Quote machine",
        src: "https://codepen.io/KellsCodes/pen/jOqVgWo"
    },
    {
        name: "Tech Doc Page",
        imgUrl: 'project_imgs/tech_doc1.jpg',
        alt: "tech doc page",
        src: "https://codepen.io/KellsCodes/pen/LYVZozK"
    },
    {
        name: "Survey Form",
        imgUrl: 'project_imgs/survey_form1.jpg',
        alt: "survey form",
        src: "https://codepen.io/KellsCodes/pen/WNvQYQV"
    },
    {
        name: "Pomodoro Clock",
        imgUrl: 'project_imgs/pomodoro_clock1.jpg',
        alt: "pomodoro clock",
        src: "https://codepen.io/KellsCodes/pen/VwamJKe"
    },
    {
        name: "JavaScript Calculator",
        imgUrl: 'project_imgs/calc1.jpg',
        alt: "javascript calculator",
        src: 'https://codepen.io/KellsCodes/pen/dyMOEyg'
    },
    {
        name: "Drum Machine",
        imgUrl: 'project_imgs/Drum_machine1.jpg',
        alt: "drum machine",
        src: "https://codepen.io/KellsCodes/pen/mdPOZQB"
    },
    {
        name: "Product Landing Page",
        imgUrl: 'project_imgs/prd_lndng_pg1.jpg',
        alt: "product landing page",
        src: "https://codepen.io/KellsCodes/pen/qBdZdqB"
    },
    {
        name: "Mark Down Previewer",
        imgUrl: 'project_imgs/mark_down_prev1.jpg',
        alt: "mark down previewer",
        src: "https://codepen.io/KellsCodes/pen/xxVRoeV"
    }

]

/*
create the first div and give it a class
create the image tag and add the src and the alt text
create a button, create anchor tag and append it to the button tag
add the link href on the anchor tag
append the created div to the project-tile id
*/
// create two variables that will hold the starting and ending positions of objects created and displayed
let startPosition = 4, endPosition = 6;
let stateContainer = projectsLib.slice(startPosition, endPosition) //hold the projects displaying on the screen;
let maxNum = projectsLib.length;

// create the object class for the elements to create
function CreateElements(id, name, src, alt, imgUrl){
    let img = document.createElement('img');
    let anchor = document.createElement('a');
    anchor.innerHTML = "view project";
    
    anchor.href = stateContainer[id].src;
    img.alt = stateContainer[id].alt;
    img.src = stateContainer[id].imgUrl;
    
    this.appendChild = () => {
       return (document.getElementsByClassName('mystyle')[id].appendChild(img),
            document.getElementsByClassName('mystyle')[id].appendChild(anchor));
    }
}

// create the parent class object for the elements object instances to be created
function CreateParentElement(){
    let divContainer = document.createElement('div');
    let className = divContainer.classList.add('mystyle');
    this.createParentClass = () => {
        return document.getElementById('project-tile').appendChild(divContainer);
    }
}

// create both parent and child object instances of the elements for the number to be dispalyed;
let myParent, myChild;
function elements(array){
    for(let i = 0; i < array.length; ++i){ 
        myParent = new CreateParentElement();
        myParent.createParentClass();
        myChild = new CreateElements(i, stateContainer[i].name, stateContainer[i].src, stateContainer[i].alt, stateContainer[i].imgUrl);
        myChild.appendChild();
    }
}

// create a next and previous buttons class that will control slide view of projects
function CreateButton(id, text){
    let button = document.createElement('button');
    button.id = id;
    button.innerHTML = text;
    this.createButton = () => {
        return document.getElementById('buttons').appendChild(button);
    };
}

//control button object instances from button class
const controlBtnApperance = () => {
    let prevBtn = new CreateButton('previous', `<i class="fas fa-chevron-circle-left"></i> Prev`);
    prevBtn.createButton();
    let nextBtn = new CreateButton('next', `<i class="fas fa-chevron-circle-right"></i> Next`);
    nextBtn.createButton();
    return;
}

controlBtnApperance();  // activate the buttons here by calling the function

document.getElementById('previous').addEventListener("click", function(){
        document.getElementById('project-tile').innerHTML = ''; //resets inner html to create room for new html object instances to be created
        if(startPosition !== 0){
            if(endPosition !== 2){
                startPosition -= 1;
                endPosition -= 1;
                stateContainer = projectsLib.slice(startPosition, endPosition);
            }
        }

        if(startPosition === 0){
            document.getElementById('previous').style.display = 'none';
        }else if(startPosition !== 0){
            document.getElementById('previous').style.display = 'block'
        }

        if(endPosition === maxNum){
            document.getElementById('next').style.display = 'none';
        }else if(endPosition !== maxNum){
            document.getElementById('next').style.display = 'block'
        }

        // console.log(stateContainer) // creates a new object instances to be placed on the project tile when the previous button is clicked
        elements(stateContainer);
        return;
});

// handler for the next view button
document.getElementById('next').addEventListener("click", function(){
    document.getElementById('project-tile').innerHTML = ''; //resets inner html to create room for new html object instances to be created
    if(endPosition !== projectsLib.length){
        if(startPosition !== projectsLib.length - 2){
            startPosition += 1;
            endPosition += 1;
            stateContainer = projectsLib.slice(startPosition, endPosition);
        }
    }
    // toggles the previous button on and off display on the screen
    if(startPosition === 0){
        document.getElementById('previous').style.display = 'none';
    }else if(startPosition !== 0){
        document.getElementById('previous').style.display = 'block'
    }
    // toggles the next button on and off display on the screen
    if(endPosition === maxNum){
        document.getElementById('next').style.display = 'none';
    }else if(maxNum !== endPosition){
        document.getElementById('next').style.display = 'block'
    }
    elements(stateContainer) // creates an object instance to display on the project tile when the next button is clicked
    return;
})

// window.addEventListener("load", elements(stateContainer));

//load the first project items on window load
const loadProjectContents = () => {
    elements(stateContainer);
};
loadProjectContents(); //load the projects and display when the browser loads
