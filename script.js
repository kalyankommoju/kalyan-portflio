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

document.addEventListener("DOMContentLoaded", function() {
    // Simulate loading time (e.g., 3 seconds)
    setTimeout(function() {
        document.getElementById('loading-screen').style.opacity = '0';
        document.getElementById('loading-screen').style.display = 'none';
    }, 2000); // Adjust this timeout value based on your needs
});
