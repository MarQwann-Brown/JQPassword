//Problem: Hints are shown even when form is valid
//Solution: Hide and show them at appropriate times

//Hide hints
$("#password").siblings("span").attr("id", "passwordHint");
$("#confirm_password").siblings("span").attr("id", "confimHint");

function passwordEvent() {
	//Find out if password is valid
	if ($(this).val().length > 8) {
		$("#passwordHint").hide();
	} else {
		$("#passwordHint").show();
	}
		//hide hint if valid
		//else show hint
}

//when password is input
$("#password").focus(passwordEvent).keyup(passwordEvent);
//When event happens on confirmation input

	//find out if the password and confirmation match
		//hide hint if matched
		//else show hint
