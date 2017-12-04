function pickForThem() {
    var options = [
        'bomba',
        'sushi',
        'macarrão',
        'o que você cozinhar',
        'coreano',
        'chinês',
        'donut',
        'self service',
        'nada'
    ];
    var element = document.getElementById('choice');
    var index = Math.round((Math.random() * 100) % options.length);
    var selected = options[index];

    while (selected === undefined) {
        selected = options[index];
    }

    choice.innerHTML = 'Você vai comer ' + selected + '!';
}
