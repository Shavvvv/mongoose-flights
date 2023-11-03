const flightsModel = require("../models/flight");

module.exports={
new:newFlight,
index,
create


}


async function create(req, res, next) {
    // console.log(req.body, " <--- contents of the form");
 console.log(req.body,'<----flight content')
    try {
		
	 
		const flightDoc= await flightsModel.create(req.body)
		console.log('<----flight to DB')




	res.redirect('/flights')

	}  catch(err){
		res.send(err)
	}
}




async function index(req, res){

	// find all the movies and render an movies/index.ejs page
	try {
		const flightsDocuments = await flightsModel.find({}); // <- empty object says find all the movies!
		console.log('flightData', flightsDocuments)
		res.render('flights/index', {flightsDocs: flightsDocuments})

	} catch(err){
		res.send(err)
	}
}


 function newFlight(req,res){
res.render('flights/new')

}

