'use strict';

var taskList = document.getElementById('task-list');
var boxInput = document.getElementById('box-input');
var txtTask = document.getElementById('txt-task');
var txtDetail = document.getElementById('txt-detail');
var btnCancel = document.getElementById('btn-cancel');
var btnDetail = document.getElementById('btn-detail');
var btnAdd = document.getElementById('btn-add');

// INIT
boxInput.style.display = 'none';
txtDetail.style.display = 'none';



btnDetail.onclick = function() {
    txtDetail.style.display = 'block';
}

btnCancel.onclick = function() {
    boxInput.style.display = 'none';
    btnAdd.style.display = 'block';

    txtTask.value = '';
    txtDetail.value = '';
}

btnAdd.onclick = function() {
    boxInput.style.display = 'block';
    btnAdd.style.display = 'none';
};
