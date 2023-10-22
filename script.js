$('document').ready(function(){

    $('#btn').on('click', function(){
        var key = config.KEY;
        var cityName = $('#location').val();
        var baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${key}`
       

        $.ajax({
            url: baseURL,
            method: "GET",
            success: function(data){
                console.log(data); 
                $('#temp').html('<h1>' + parseInt(data.main.temp) +  '°F</h1>'), 
                $('#name').html('<p>' + data.name + '</p>'),
                $('#humidity').html('<p><strong>' + parseInt(data.main.humidity)  + '</strong>%</p>' +
                                '<p> Humidity' + '</p>'),
                $('#wind').html('<p><strong>' + parseInt(data.wind.speed) + '</strong> MPH</p>' +
                                '<p> Wind' + '</p>'),
                $('#weather').html('<p>' + data.weather[0].main + '</p>'),
                $('#humidity-wind').show(),
                $('#homepage-weather-info').hide();    
            },
            error: function(xhr, status, error) {
                console.error('AJAX error:', status, error);
            }
        });
    })

})


