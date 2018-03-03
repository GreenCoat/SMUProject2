//Wait for form to be submitted
$("#add-gift").on("submit", function(evt){
	evt.preventDefault();

	//Grab data from inputs and creatings a new object
	var gift = {
		gift: $("#gift").val().trim(),
		age: $("#age").val().trim(),
		gender: $("#gender").val().trim(),
		hobbies: $("#hobby").val().trim().split(','),
		likes: $("#like").val().trim().split(',')
	};

	//TODO: Validation

	console.log(gift);

	requestGift(gift);
});

//Function for handling creating request
function requestGift(gift){
	$.post("/api/gift", gift, function(){
		console.log("Gift added");
	});
}