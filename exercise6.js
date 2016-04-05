
//$('.formText').value = "";
$('#submit').click(function(e) {
    e.preventDefault();
    var submitStr = $('input[type=text], select').val();
    console.log(submitStr);
    if (submitStr.length === 6)
    {
      var submitStrArr = submitStr.split('');
      var C = submitStrArr[0].toLowerCase();
      var S = submitStrArr[1].toLowerCase();
      var X = submitStrArr[2];
      var YYY = submitStrArr[3]+submitStrArr[4]+submitStrArr[5];
      if(C === 'c')
      {
        if(S === 's')
        {
          if(X.search(/^[0-3]$/) !== -1)
          {
            if(YYY.search(/^[0-9]*$/) !== -1)
            {
              $('.classForm').submit();
            }else
            {
              alert("The last three characters have to be numbers!")
            }
          }else
          {
            alert("The first number has to be a 0, 1, 2 or 3!")
          }
        }else
        {
          alert("A course has to have the second letter be an 's' or an 'S'!");
        }
      }else
      {
        alert("A course has to start with a 'C' or a 'c'!");
      }
    }else
    {
      alert("A course has to be 6 characters long!");
    }
  });

function submit()
{
  console.log("The form has been accepted.");
}