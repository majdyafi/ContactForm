function showWeather () {
    $.ajax({
        url: 'http://www.ncdc.noaa.gov/cdo-web/api/v2/data?datasetid=GHCND&locationid=ZIP:28801&startdate=2010-05-01&enddate=2010-05-01',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            $('#myWeather').html('Climate service returned <b>'+data.results[6].value+'c </b> On 2010-05-01 for this location: ZIP:2880');
            console.log(data.results[6].value);
        },
        error: function () { alert('Climate Information is not available'); },
        beforeSend: setHeader
    });
};

function setHeader(xhr) {
    xhr.setRequestHeader('Token', 'BNbQnLgZyFCJQkOpTxxRpGVoLnvxGqUY');

}