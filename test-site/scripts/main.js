var myImage = document.querySelector('img');

myImage.onclick = () => {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/mosa.png') {
        myImage.setAttribute('src','images/metso.png');
    } else {
        myImage.setAttribute('src','images/mosa.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    const myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = `Augmented Reality Experience, ${myName}`;
    }
}
if (!localStorage.getItem('name')) {
    setUserName();
  } else {
    const storedName = localStorage.getItem('name');
    myHeading.textContent = `Augmented Reality Experience, ${storedName}`;
  }
  myButton.onclick = () => {
    setUserName();
  }
  