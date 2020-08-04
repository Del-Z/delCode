function Del() {

	this.cry = function (input, one) {
		var answer = "";
		var last = letters.indexOf(input[input.length-1]);

		if (input == "help" && one == "vv") {
			return "v2"
		} else if (input == "help" && one == "commands") {
			return "help: vv:the version; how: how to use del.cry;";
		} else if (input == "help" && one == "how") {
			return "del.cry(what you wont ot encode)";
		} else {

			for (let i = 0; i<input.length-1; i++) {
				for (let j = 0; j<letters.length-1; j++) {
					if (input[i] == letters[j]) {
						answer += list4k[i+j+last+letters.indexOf(input[input.length-2])];
						last = letters.indexOf(answer[answer.length-1]);
					}
				}
			}
			answer = answer.replace(/undefined/gi, "");
			if (input.length > 1) {
				return "#DelCry/" + answer + "/v2";
			} else {
				return "you need at lest 2 letters";
			}	
		}
	}
	//

	this.cal = function(num1, opp, num2) {
		num1 = parseInt(num1);
		num2 = parseInt(num2);
		var answer;
		if (Number.isInteger(num1) && Number.isInteger(num2)) {
			switch (opp) {
				case "+":
				case "add":
					answer = num1 + num2;
					break;
				case "-":
				case "sub":
					answer = num1 - num2;
					break;
				case "/":
				case "div":
					answer = num1 / num2;
					break;
				case "*":
				case "mult":
					answer = num1 * num2;
					break;
				case "**":
				case "pow":
					answer = Math.pow(num1, num2);
					break;
				default:
					answer = "error: opporator is not in this site";
					break;
			}

		} else if (num1 == "help" || opp == "help" || num2 == help) {
 			answer = "del.cal(number1, operator, number2)";
		} else {
			answer = "error: please only use numbers";
		}
		return answer;
	}
}