const electron = require('electron');
const payload = require('../../assets/emotion_recognition');
const { ipcRenderer } = electron;
const dataSet = { 'data': payload.data.sort(() => Math.random() - 0.5) };
const csvHelper = require('../../utils/csvHelper');
const remote = require('electron').remote
const app = remote.app;
const {
  HANDLE_LANGUAGE_CHANGE,
  PUT_EMOTION_RECOGNITION_DATA,
  PUT_TASK_STATE,
} = require('../../utils/constants');

$(document).ready(() => {

  let idx = 0;
  let outputPayload = { "data": [] };
  let startTime = new Date();
  let endTime = new Date();

  try {
    string = JSON.parse(window.localStorage.getItem('lang'));
    console.log(string);
    $('#JOY').text(string.strings.game1.joy);
    $('#SADNESS').text(string.strings.game1.sadness);
    $('#ANGER').text(string.strings.game1.anger);
    $('#NEUTRAL').text(string.strings.game1.neutral);
    $('#DISGUST').text(string.strings.game1.disgust);
    $('#FEAR').text(string.strings.game1.fear);
    $('#SURPRISE').text(string.strings.game1.surprise);
    $('#close-modal-btn').text(string.strings.game1.modalCloseBtn);
    $('.final-modal-content-tex').text(string.strings.game1.modalContent);
    $('#exit-btn').text(string.strings.game1.modalexitbtn);
    $('#export-btn').text(string.strings.game1.exportBtn);
    $('#end-game-btn').text(string.strings.game1.modalexitbtn);


  } catch (err) { console.log(err) };

  $('.image-box').css('background-image', 'url(../../assets/faces/' + dataSet.data[idx].faceID + '.jpg)');

  $('.emotion-button').click(function () {
    $('.image-box').css('background-image', 'none');
    $('.emotion-button').prop('disabled', true);
    endTime = new Date();
    let data = { "faceId": dataSet.data[idx].faceID };
    let reactionTime = (endTime.getTime() - startTime.getTime()) / 1000;
    data = {
      ...data,
      "reactionTime": reactionTime,
    }
    if (this.id == dataSet.data[idx].response) {
      data = {
        ...data,
        "answer": "correct",
      }
    } else {
      data = {
        ...data,
        "answer": "incorrect",
      }
    }
    outputPayload.data.push(data)
    if (++idx > 69) {
      $('.final-modal-container').show();
    } else {
      setTimeout(() => {
        $('.image-box').css('background-image', 'url(../../assets/faces/' + dataSet.data[idx].faceID + '.jpg)');
        $('.emotion-button').prop('disabled', false);
        startTime = new Date();
      }, 500);
    }
  });

  $('#end-game-btn').on('click', () => {
    $('#close-modal-btn').show();
    $('.final-modal-container').show();
  })

  $('#close-modal-btn').on('click', () => {
    $('.final-modal-container').hide();
    $('#close-modal-btn').hide();
  })

  $('#export-btn').on('click', async () => {
    let id = window.localStorage.getItem('patientId');
    csvHelper.write(outputPayload.data, id, 'emotion_recognition').then((res) => {
      if (res == "success") {
        $('#export-btn').addClass('btn-success').removeClass('btn-primary').prop('disabled', true).text('Exported');
        $('#close-modal-btn').hide();
      }
    })
  });

  $('#exit-btn').on('click', () => {
    ipcRenderer.send(PUT_EMOTION_RECOGNITION_DATA, outputPayload);
    if (outputPayload.data.length > 0) {
      ipcRenderer.send(PUT_TASK_STATE, { data: [1, 2] });
    }
    window.location = '../gameMenu/gameMenu.html';
  });

});

$(window).on('resize', () => {
  $('.game-item').css({ 'height': $('.game-item').width() + 'px' });
});

ipcRenderer.on(HANDLE_LANGUAGE_CHANGE, (e, string) => {
  window.localStorage.setItem('lang', JSON.stringify(string));
  $('#JOY').text(string.strings.game1.joy);
  $('#SADNESS').text(string.strings.game1.sadness);
  $('#ANGER').text(string.strings.game1.anger);
  $('#NEUTRAL').text(string.strings.game1.neutral);
  $('#DISGUST').text(string.strings.game1.disgust);
  $('#FEAR').text(string.strings.game1.fear);
  $('#SURPRISE').text(string.strings.game1.surprise);
  $('#close-modal-btn').text(string.strings.game1.modalCloseBtn);
  $('.modal-content-text').text(string.strings.game1.modalContent);
  $('#exit-btn').text(string.strings.game1.modalexitbtn);
  $('#export-btn').text(string.strings.game1.exportBtn);
  $('#end-game-btn').text(string.strings.game1.modalexitbtn);
});