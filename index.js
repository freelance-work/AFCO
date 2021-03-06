const electron =  require('electron');
const { ipcRenderer } = electron;

const {
    CLEAR_STORAGE,
    HANDLE_CLEAR_STORAGE,
    GET_STRINGS,
    HANDLE_LANGUAGE_CHANGE,
} = require('./utils/constants');

$(document).ready(() => {
  $('#patient-id').focus();

  $(document).keypress(function (e) {
    if(e.which == 13)
     {
       $('#start-btn').click();
       return false;  
     }
   });   

  try {
    ipcRenderer.send(CLEAR_STORAGE);
    window.localStorage.setItem('lang', JSON.stringify(ipcRenderer.sendSync(GET_STRINGS)));
    let string =  JSON.parse(window.localStorage.getItem('lang'));
    $('#patient-title').html(string.strings.landingPage.title);
    $('#patient-id').attr("placeholder", string.strings.landingPage.placeholder);
    $('#start-btn').text(string.strings.landingPage.buttonText);
  } catch(err) {};
});

$('#start-btn').on('click', () => {
  let patientID = $('#patient-id').val().trim();
  if (patientID == '') {
    alert("Please enter patient ID")
  } else {
    window.localStorage.setItem('patientId', patientID);
    window.location = "views/gameMenu/gameMenu.html";
  }
});

ipcRenderer.on(HANDLE_LANGUAGE_CHANGE, (e, string) => {
  window.localStorage.setItem('lang', JSON.stringify(string));
  $('#patient-title').html(string.strings.landingPage.title);
  $('#patient-id').attr("placeholder", string.strings.landingPage.placeholder);
  $('#start-btn').text(string.strings.landingPage.buttonText);
});