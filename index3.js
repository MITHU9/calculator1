var resultField =  $("#result");

function addNumber(number){
    var existing = resultField .val();

    resultField .val(existing + number);
}

function clearResult(){
    resultField .val('');
}

function calculate(){
    var result = eval(resultField.val() );
    resultField .val(result);
}

function deleteNumber(){
   var presentValue = resultField .val();
   if( presentValue!=''){
    resultField .val( presentValue.slice(0,-1)); 
   }
}

// $(".btn").keypress(function(value){
//     var text =value.key;
//     addNumber(text);
//     deleteNumber(text);

// }) 
    
