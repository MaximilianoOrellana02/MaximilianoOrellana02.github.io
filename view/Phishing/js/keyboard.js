var Keyboard = window.SimpleKeyboard.default;
var selectedInput;
var validate = $.validator;
var regEx = regEx_numbers;
var myInput = "";
var KeyBoardValidator = $("#form1").validate({ 
    onkeyup: function (element, event) {
        var idElemento = $(element).attr('id');

        if (idElemento == "UserName") {
            if ($(element).val().length > 1) {
                $(element).valid();
            }
        }
        else if (idElemento == "Password") {
            if ($(element).val().length > 3) {
                $(element).valid();
            }
        }
        else if (idElemento == "DocumentNumber") {
            if ($(element).val().length > 3) {
                $(element).valid();
            }
        }
        validateForm(KeyBoardValidator);
    },
    onfocusout: function (element) {
        $(element).valid();
        validateForm(KeyBoardValidator);
    },
    submitHandler: function (form) {

        $('.login-form').addClass('loading-form');

        $('#submitButton').prop("disabled", "true");

        //en IE el back luego del login genera un comportamiento raro sin esto
        $("#DocumentNumber").first().focus();

        form.submit();
                
    },
    invalidHandler: function () {
        validateForm(KeyBoardValidator);
    },
    highlight: function (element) {
        $(element).closest('.inputArea').addClass('invalid');
    },
    unhighlight: function (element) {
        $(element).closest('.inputArea').removeClass('invalid');
    },
    messageTarget: 'data-original-title',
    errorElement: 'div',
    errorClass: 'errorMsg',
    errorPlacement: function (error, element) {
        //Solo se fireaba una vez
        error.attr('data-toggle', 'tooltip');
        error.attr('data-placement', 'top');
        error.insertAfter(element);

        error.tooltip();
    }
});

var keyboard = new Keyboard({
    onChange: function (input) { return onChange(input) },
    onKeyPress: function (button) { return onKeyPress(button) },
    
    
    layout: {
        default: [
            shuffle(["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]).join(" ") + " {bksp}",
            "{tab} " + shuffle(["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "z", "x", "c", "v"]).join(" "),
            "{enter} " + shuffle(["a", "s", "d", "f", "g", "h", "j", "k", "l", "ñ", "b", "n", "m"]).join(" ") + " {enter}",
        ]
    },
    display: {
        "{bksp}": "Borrar",
        "{enter}": "Intro",
        "{tab}": "Tab",
        "{space}": "Espacio"
    },
    tabCharOnTab: false,
    maxLength: {
        'DocumentNumber': 11,
        'UserName': 20,
        'Password': 4
    },
    inputPattern: {
        'DocumentNumber': regEx_numbers,
        'UserName': regEx_alphanumeric,
        'Password': regEx_numbers
    }
});

//Hacemos un Random del array (teclado) y luego con el join lo separamos con espacios
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

document.querySelectorAll(".keyboard").forEach(function (input) {
    input.addEventListener("focus", onInputFocus);
    input.addEventListener("change", onInputChange);

});

function onInputChange(event) {
    keyboard.setInput(event.target.value, event.target.id);
}

function onInputFocus(event) {
    // selectedInput = `#${event.target.id}`;  "#"+lavariableACA;
    selectedInput = "#" + event.target.id;
    $(selectedInput).parent().parent().addClass("focus");
    keyboard.setOptions({
        inputName: event.target.id
    });
    
}



function onChange(input) {   
    regEx = checkSelectedInput();   

    if (regEx.test(input) || input === "") {
        myInput = input;
    }else if (document.querySelector(selectedInput).value == "") {
        myInput = "";
        $(selectedInput).closest('.inputArea').addClass('invalid');
    }

    keyboard.setInput(myInput);
    document.querySelector(selectedInput || ".keyboard").value = myInput;
    $(selectedInput).closest(".inputArea").toggleClass("typed", document.querySelector(selectedInput).value !== "");  
    
    if($(selectedInput).valid()){

        validateForm(KeyBoardValidator);
    }
    validateForm(KeyBoardValidator);
}

function onKeyPress(button) {
        
    if (button === "{enter}")
        SubmitLoginForm();

    if (button === "{tab}") {
        $(selectedInput).valid();
        handleTab();
    }
   
}



function handleTab() {
    var DocumentNumber = document.getElementById('DocumentNumber');
    var UserName = document.getElementById('UserName');
    var Password = document.getElementById('Password');
    if (!remember) {
        if (selectedInput === '#DocumentNumber') {
            UserName.focus();
        }
        else if (selectedInput === '#UserName') {
            Password.focus();
        }
        else if (selectedInput === '#Password') {
            DocumentNumber.focus();
        }


    }
    return;
}

function checkSelectedInput() {
    if (selectedInput === '#DocumentNumber' || selectedInput === '#Password') {
        return regEx_numbers;   
    }
    else if (selectedInput === '#UserName') {
        return regEx_alphanumeric;  
    }
}


var keyboardIcon = document.getElementById("keyboardIcon");

var keyboardElem = document.getElementById("simpleKeyboard");

$('.keyboard-trigger').click(function (e) {
    showKeyboard = !showKeyboard;
    if (!showKeyboard) {
        keyboardIcon.style.color = "#666666";
        keyboardElem.style.display = "none";
    }
    if (showKeyboard) {
        keyboardIcon.style.color = "#FA8F2C";
        keyboardElem.style.display = "block";
    }
});
