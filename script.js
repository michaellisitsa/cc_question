const loadModal = (message) => {
  //https://www.w3schools.com/jsref/dom_obj_body.asp
  var body = document.getElementsByTagName('body')[0];

  //Create the modal parent tag
  var modal = document.createElement('div');
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

  console.log(body);

  //Add event listeners on the buttons with class "yes" and "no"
  document.addEventListener('click', function (e) {
    if (!e.target.matches('.yes')) return;
    e.preventDefault();
    dismiss('You just clicked "Yes"');
  });

  document.addEventListener('click', function (e) {
    if (!e.target.matches('.no')) return;
    e.preventDefault();
    dismiss('You just clicked "No"');
  });
};

//gomakethings.com/listening-for-click-events-with-vanilla-javascript
document.addEventListener('click', function (e) {
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
});

const dismiss = (message) => {
  var modal = document.getElementById('myModal');
  var body = document.getElementsByTagName('body')[0];
  modal.remove();
  var returnMessage = document.createElement('p');
  returnMessage.setAttribute('class', 'return');
  returnMessage.innerText = message;
  body.appendChild(returnMessage);
};
