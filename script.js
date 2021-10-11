var modal;

const loadModal = (message) => {
  //https://www.w3schools.com/jsref/dom_obj_body.asp
  var body = document.getElementsByTagName('body')[0];

  //Create the modal parent tag
  modal = document.createElement('div');
  modal.setAttribute('id', 'myModal');
  modal.setAttribute('class', 'modal');
  body.appendChild(modal);

  //create and append the content wrapper of the modal
  var modalContent = document.createElement('div'); // Create a text node
  modalContent.setAttribute('class', 'modal-content');
  modal.appendChild(modalContent);

  // Create a text dialogue within the modal. Use class for styling the text.
  var confirmationText = document.createElement('p');
  confirmationText.innerText = message;
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
  yesBtn.addEventListener('click', yesListener);
  noBtn.addEventListener('click', noListener);
};

function yesListener (e) {
  // if (!e.target.matches('.yes')) return;
  // e.preventDefault();
  //Remove event listeners 
  //https://stackoverflow.com/questions/4402287/javascript-remove-event-listener#comment12343620_4402287
  // document.removeEventListener('click',yesListener)
  // document.removeEventListener('click',noListener)
  dismiss('You just clicked "Yes"');
};

function noListener (e) {
  // if (!e.target.matches('.no')) return;
  // e.preventDefault();
  // document.removeEventListener('click',noListener)
  // document.removeEventListener('click',yesListener)

  dismiss('You just clicked "No"');
};

//gomakethings.com/listening-for-click-events-with-vanilla-javascript
// Action on clicking function on button on main page (not modal)
// Adjusted to avoid anonymous function
// https://ultimatecourses.com/blog/avoiding-anonymous-javascript-functions
function btnClick(e) {
  // Bail if the correct class isn't found on the clicked element
  if (!e.target.matches('.confirmation')) return;
  e.preventDefault();

  //Remove any previous return messages
  const returnMessage = document.querySelector('.return');
  if (returnMessage != null) {
    returnMessage.remove();
  }

  //https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
  //How to pass arbitrary data with component
  loadModal(e.target.dataset.message);
}

document.addEventListener('click', btnClick);

const dismiss = (message) => {
  let modal = document.getElementById('myModal');
  var body = document.getElementsByTagName('body')[0];
  modal.remove();
  var returnMessage = document.createElement('p');
  returnMessage.setAttribute('class', 'return');
  returnMessage.innerText = message;
  body.appendChild(returnMessage);
};
