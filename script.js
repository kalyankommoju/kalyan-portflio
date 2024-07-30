function SendMail() {
    var params = {
        from_name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
    };

    emailjs.send('service_64dhyd4', 'template_05bqdvr', params)
        .then(function(res) {
            alert('Success: ' + res.status);
        }, function(error) {
            alert('Failed: ' + error.text);
        });
}