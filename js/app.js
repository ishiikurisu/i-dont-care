function pickForThem() {
    var options = [
        'Bomba',
        'Sushi',
        'Macarrão',
        'Cozinhe você!',
        'Coreano',
        'Chinês',
        'Donut',
        'Self service',
        'Tente novamente!'
    ];
    var element = document.getElementById('choice');
    var index = Math.round((Math.random() * 100) % options.length);
    var selected = options[index];

    while (selected === undefined) {
        selected = options[index];
    }

    choice.innerHTML = '<p>' + selected + '</p>';
}
