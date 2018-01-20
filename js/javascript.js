
var persons = [

				{
					id: 1,
					name: 'Maximilian',
					surname: 'Gruber',
					age: 27,
					gender: "male",
					img: "img/boy1.800x1000.jpg",
					inrelation: false,
					likes: 0
				},

				{
					id: 2,
					name: 'Hannah',
					surname: 'Wagner',
					age: 23,
					gender: "female",
					img: "img/girl1.800x1000.jpg",
					inrelation: true,
					likes: 0
				},

				{
					id: 3,
					name: 'Emma',
					surname:'Rosemaier',
					age: 22,
					gender: "female",
					img: "img/girl2.800x1000.jpg",
					inrelation: false,
					likes: 0
				},

				{
					id: 4,
					name: "Michael",
					surname: "Lee",
					age:28,
					gender: "male",
					img: "img/m1.jpg",
					inrelation: true,
					likes: 0
				},

				{
					id: 5,
					name: "Fabio",
					surname: "Geschweidl",
					age: 12,
					gender: "male",
					img: "img/WIN_20171221_09_35_39_Pro.jpg",
					inrelation: false,
					likes: 0
				},

				{
					id: 6,
					name: "Zoe",
					surname: "Taylor",
					age:25,
					gender: "female",
					img: "img/w3.jpg",
					inrelation: true,
					likes: 0
				},

				{
					id: 7,
					name: "Jason",
					surname: "Wilson",
					age:24,
					gender: "male",
					img: "img/m2.jpg",
					inrelation: false,
					likes: 0
				},

				{
					id: 8,
					name: "	Scott",
					surname: "Adkins",
					age:25,
					gender: "male",
					img: "img/boy2.800x1000.jpg",
					inrelation: true,
					likes: 0
				},				

				{
					id: 9,
					name: 'Sara',
					surname:'Smith',
					age: 22,
					gender: "female",
					img: "img/w2.jpg",
					inrelation: false,
					likes: 0
				},

				{
					id: 10,
					name: 'Lisa',
					surname:'Conor',
					age: 21,
					gender: "female",
					img: "img/w1.jpg",
					inrelation: false,
					likes: 0
				},

				{
					id: 11,
					name: 'Sophia',
					surname:'Jones',
					age: 29,
					gender: "female",
					img: "img/w4.jpg",
					inrelation: false,
					likes: 0
				},

				{
					id: 12,
					name: 'Yazan',
					surname:'Al Kassir',
					age: 21,
					gender: "male",
					img: "img/Yaz.jpg",
					inrelation: false,
					likes: 0
				}								

]

$(document).ready(function(){

  	var html = "";               // outpoting persons with ID's

	for (var i = 0; i < persons.length; i++) {
		html += '<div class="'+persons[i].gender+' col-lg-3 col-md-6 col-12">';
			html += '<div id="'+persons[i].id+'" class="person row">';
				html += '<div class="col-lg-5 col-md-5 col-5">';
					html += '<img src="'+persons[i].img+'" alt="name">';
				html += '</div>';
				html += '<div class="col-lg-7 col-md-7 col-7">';
					html += '<p>Name: '+persons[i].name+'</p>';
					html += '<p>Surname: '+persons[i].surname+'</p>';
					html += '<p>Age: '+persons[i].age+'</p>';
				html += '</div>';
			html += '</div>';
			html += '<div class="row">';
				html += '<div class="like col-lg-12 col-md-12 col-12">';
					html += '<i class="fa fa-heart fa-2x" aria-hidden="true"></i>';
					html += '<p class="'+persons[i].name+'">'+persons[i].likes+'</p>';
					html += '<input id="'+persons[i].name+'" class="likes" type="submit" name="like" value="Like">';
				html += '</div>';
			html += '</div>';
		html += '</div>';

		$(".result").html(html);
	}




	$('.likes').click(function(){      // selcting person by giving an id and giveing him likes on click

		like = $(this).attr("id"); // person
		var countLike = $("."+like).html(); // $(".person").html(); = 0
		countLike++ //  + 1
		$("."+like).html(countLike); // $(".person").html(); = 1

	})





	$('.all').click(function(){ // Sorting people by gender 
 
		$('.welcoming').removeAttr('id');
		var div = "<h1>Welcome to coders<br>dating</h1>";
		$(".welcoming").html(div)
		$(".male , .female").css("display","block");

	})

	$('.only_female').click(function(){

		$('.welcoming').removeAttr('id'); 
		var div = "<h1>Welcome to coders<br>dating</h1>";
		$(".welcoming").html(div)
		$(".male").css("display","none");
		$(".female").css("display","block");

	})

	$('.only_male').click(function(){

		$('.welcoming').removeAttr('id');
		var div = "<h1>Welcome to coders<br>dating</h1>";
		$(".welcoming").html(div)
		$(".female").css("display","none");
		$(".male").css("display","block");

	})





	$('.person').click(function(){

		var div = " "; // to print out the selected person in the welcoming class

		id = $(this).attr("id"); // capture the id

		$(".male , .female").css("display","block"); // display everything incase there is something hidden

		$("#"+id).parent().css("display","none"); //hide the whole div

		$('.welcoming').attr('id', 'welcoming'); //add id with value of welcoming for styling

		for (var i = 0; i < persons.length; i++) {

			if (persons[i].id == id) { //we use the id that we captured above 
				
				div += '<div class="col-lg-12 col-md-12 col-12">';
					div += '<div id="'+persons[i].id+'" class="person row">';
						div += '<div class="col-lg-5 col-md-5 col-5">';
							div += '<img class="perimg" src="'+persons[i].img+'" alt="name">';
						div += '</div>';
						div += '<div class="col-lg-7 col-md-7 col-7">';
							div += '<p>Name: '+persons[i].name+'</p>';
							div += '<p>Surname: '+persons[i].surname+'</p>';
							div += '<p>Age: '+persons[i].age+'</p>';
							if (persons[i].inrelation === false) {  // Person Status 
								div += '<p>Status: Single</p>';
							} else {
								div += '<p>Status: in Relationship</p>';
							}
						div += '</div>';
					div += '</div>';
				div += '</div>';
				$(".welcoming").html(div);
			}
		}

		$(".like").css("display","none");

	})
	
})
