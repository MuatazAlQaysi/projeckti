function f1()
	{
		var user = document.getElementById("email").value;
		var pwd = document.getElementById("password").value;
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if(user =='')
		{
			alert("please enter user name.");
		}
		else if(pwd=='')
		{
        	alert("enter the password");
		}
		else if(!filter.test(user))
		{
			alert("Enter valid email.");
		}
		else if(pwd.length < 6)
		{
			alert("Password min length is 6.");
		}
		else
		{
	alert("Logging in succeed");

		}
	}

function f2() {

var one = document.getElementById('one')
var two = document.getElementById('two')
var three = document.getElementById('three')

if (one.checked==true)
		alert("choice is: "+one.value);
 else if (two.checked==true)
 		alert("choice is: "+two.value);
else if (three.checked==true)
		alert("choice is: "+three.value);
else
		alert("Millainen konen käyttäjä olet?");



}









function f3() {

	  var first = document.getElementById("check1");
		var second = document.getElementById("check2");
		var third = document.getElementById("check3");
	  var text = document.getElementById("text");
	  if (first.checked == true)
				alert("Todella hienot");
		else if (second.checked == true)
					alert("Ammattimaisesti tehty");
		else if (third.checked == true)
				alert("Ostan sinulta");


}













function f4(){
var select = document.getElementById("selecbox");
			alert(select.options[select.selectedIndex].value)

}









function f5() {

	var v = document.getElementById("five").value;
				alert(" kehittaiset sivujni: " +v);
}

function main() {
f1();
f2();
f3();
f4();
}
