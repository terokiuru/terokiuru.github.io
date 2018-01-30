var number_of_questions = 0;
var question_strings = [];
var slider_id_json = [];
var $top = $('.container-fluid');
// var string_1 = '<div class="row"> <div class="col-md-3"> </div> <div class="col-md-6" > <p>%data%</p><input type="text" id="%id%"> % </div><div class="col-md-3"></div></div>';
var string_1 = '<div class="row"> <div class="col-md-3"> </div> <div class="col-md-6" > <p>%data%</p><input type="range" min="0" max="100" value="50" class="slider" id="%id%"><p>Todennäköisyys: <span id="demo%id2%"></span> %</p> </div><div class="col-md-3"></div></div>';
var string_2 = '<div class="row"> <div class="col-md-3"> </div> <div class="col-md-6"> <hr> </div><div class="col-md-3"></div></div>';
var string_3 = '<div class="row"> <div class="col-md-3"> </div> <div class="col-md-6"> <br> </div><div class="col-md-3"></div></div>';
var submit_string = '<div class="row"> <div class="col-md-3"> </div> <div class="col-md-6"> <form onclick="collect_data()"> <input type="button" value="Lähetä vastaukset"></form> </div><div class="col-md-3"></div></div>';
var json_answers = '{"email": "%email_string%", "user_name": "test_name", "answer_time": "%time_string%", "extra_info_1": "test_info_1", "questions_and_answers": %json_array%}'
var thank_you_string = '<div class="row"> <div class="col-md-3"> </div> <div class="col-md-6 text-center"> <br> <h1>Kiitos vastauksista!</h1> </div><div class="col-md-3"></div></div>';

function collect_data() {
	var jsonArr = [];
	guid = (S4() + S4() + "-" + S4() + "-4" + S4().substr(0,3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();
	time_string = $.now()
	for (var i = 0; i<number_of_questions; i++) {
		jsonArr.push({
			id: i+1,
			question: question_strings[i],
			answer: document.getElementById(i+1).value,
		});
	}
	json_text = JSON.stringify(jsonArr);
	json_answers = json_answers.replace("%json_array%", json_text);
	json_answers = json_answers.replace("%email_string%", guid);
	json_answers = json_answers.replace("%time_string%", time_string);
	console.log(json_answers);
	$.post( "https://gb5nzln27b.execute-api.eu-west-1.amazonaws.com/test/survey/1/answers", json_answers);

	$( ".container-fluid" ).empty();
	$( ".container-fluid" ).append(thank_you_string);

	setTimeout(function () {
		window.location.href = "./index.html";
	}, 4000); //will call the function after 4 secs.
}

function up_date() {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "https://gb5nzln27b.execute-api.eu-west-1.amazonaws.com/test/survey/1/questions", false);
	xhr.send();
	var response = JSON.parse(xhr.responseText);
	response = JSON.parse(response);
	var questions = response.questions;
	number_of_questions = questions.length;
	var append_string;
	for (var i = 0; i<number_of_questions; i++) {
		append_string = string_1  + string_2
		id =questions[i].id;
		text = questions[i].text_fi;
		question_strings[i] = text;
		append_string = append_string.replace("%data%", text);
		append_string = append_string.replace("%id%", id)
		append_string = append_string.replace("%id2%", id)
		$top.append(append_string);
		slider = document.getElementById(i+1);
		output = document.getElementById("demo"+ (i+1));
		output.innerHTML = slider.value;
		slider.oninput = function() {
			output.innerHTML = this.value;
		}
	}
	// console.log(slider_id_json);
	$top.append(submit_string + string_3);

}

// function launch_questions() {
// 	location.href = "./questions.html";
// }

function S4() {
	return (((1+Math.random())*0x10000)|0).toString(16).substring(1); 
}

var slider;
var output;

// document.addEventListener("mousedown", function(){
// 	for (var i = 0; i<number_of_questions+1; i++) {
// 		slider = document.getElementById(i+1);
// 		output = document.getElementById("demo"+ (i+1));
// 		if (slider.value) {
// 			output.innerHTML = slider.value; 
// 		}
// 		slider.oninput = function() {
// 			output.innerHTML = this.value;
// 		}
// 	}
// });

// document.addEventListener("mouseup", function(){
// 	for (var i = 0; i<number_of_questions+1; i++) {
// 		slider = document.getElementById(i+1);
// 		output = document.getElementById("demo"+ (i+1));
// 		output.innerHTML = slider.value;
// 		slider.oninput = function() {
// 			output.innerHTML = this.value;
// 		}
// 	}
// });

document.addEventListener("mousemove", function(){
	for (var i = 0; i<number_of_questions+1; i++) {
		slider = document.getElementById(i+1);
		output = document.getElementById("demo"+ (i+1));
		if (slider != null) {
			output.innerHTML = slider.value;
			slider.oninput = function() {
				if (output != null) {
					output.innerHTML = this.value;
				}
			}
		}
	}
});

// var inp = document.getElementById('rangevalue');
// inp.addEventListener("mousemove", function () {
//     document.getElementById('text').innerHTML = this.value;
// });
