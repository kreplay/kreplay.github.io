// =============================================== //

// - Remove any active classes (yellow boxes)

// - Add active class to the clicked example box

// - Destroy any pervious Kast

// - On example box click, call Kast

// =============================================== //





// Handle: All Example boxes

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

		played: true,

		minimizeMaximize: true,

		startTemplate: 'minimized',

		betaProxies: true,
	       
	        mobileCare: ['ultra','900px'],
	    
		direct: true,
	          defaultArtwork: ['http://i.imgur.com/Bi9sD9n.jpg'],



    })

//})


