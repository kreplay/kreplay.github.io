

$('.card-content').click(function () {

    $('.card-content').removeClass('active');

    $(this).addClass('active');

    

    // Destroy any pervious Kast

    // before we call a new Kast

    $.kast('destroy')    

})



// Handle: Example 3 click function

//$('#demo-3').click(function () {

    $.kast({

        host: 'rosetta.shoutca.st',

        port: 8325,
        
        version: 2,

        colors: 'dynamic',

        theme: 'dynamic',
		
		autoPlay: true,

        continuous: false,

		played: false,

		minimizeMaximize: true,

		startTemplate: 'minimized',

		betaProxies: true,
	       
	        mobileCare: ['ultra','900px'],
	    
		direct: true,
	          artwork: false,
	        defaultArtwork: false,



    })

//})


