class Modal {
  constructor(message, onClick){
    this.message = message;
    this.onClick = onClick;
  }
  loadModal(){
    var body = document.getElementsByTagName('body')[0];

    //Create the modal parent tag
    const modal = document.createElement('div');
    modal.setAttribute('id', 'myModal');
    modal.setAttribute('class', 'modal');
    body.appendChild(modal);

    //create and append the content wrapper of the modal
    var modalContent = document.createElement('div'); // Create a text node
    modalContent.setAttribute('class', 'modal-content');
    modal.appendChild(modalContent);

    // Create a text dialogue within the modal. Use class for styling the text.
    var confirmationText = document.createElement('p');
    confirmationText.innerText = this.message;
    modalContent.appendChild(confirmationText);

    //Create Yes  buttons inside the dialogue
    var yesBtn = document.createElement('button');
    yesBtn.setAttribute('class', 'yes');
    yesBtn.innerText = 'Yes';
    modalContent.appendChild(yesBtn);

    //Create No buttons inside the dialogue
    var noBtn = document.createElement('button');
    noBtn.setAttribute('class', 'no');
    noBtn.innerText = 'No';
    modalContent.appendChild(noBtn);


    //Add event listeners on the buttons with class "yes" and "no"
    yesBtn.addEventListener('click', () => {
      this.onClick("you just clicked Yes");
      this.remove();
    });
    noBtn.addEventListener('click', () => {
      this.onClick("you just clicked No");
      this.remove();
    });

    this.modalElement = modal;
  }

  remove(){
    this.modalElement.remove();
  }

}

// Which DOM node receives the return message 
const returnMessageEl = document.querySelector('#return');

// What to do when modal is dismissed
const setReturnMsg = (message) => {
  returnMessageEl.innerText = message;
};

// What to do when user clicks a button
function btnClick(modal) {
  return ()=>{
  modal.loadModal();
  }
}

// Attach modal event to each button
const modal1 = new Modal('Do you want to confirm, yes or no?', setReturnMsg);
const button1 = document.getElementById('confirmation1');
button1.addEventListener('click', btnClick(modal1));

const modal2 = new Modal('Do you want to confirm, Ja or Nein?', setReturnMsg);
const button2 = document.getElementById('confirmation2');
button2.addEventListener('click', btnClick(modal2));




