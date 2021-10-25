function botondeexcusa() {
    let excuse = document.getElementById('excuse');
    excuse.innerHTML = excuseGenerator();
}

let excuseGenerator = () => {
    let who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
    let what = ['my homework', 'the keys', 'the car'];
    let when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];

    let numeroramdomwho = (Math.floor(Math.random() * 4));
    let numeroramdonwhat = (Math.floor(Math.random() * 3));
    let numeroramdonwhen = (Math.floor(Math.random() * 5));

    return who[numeroramdomwho] + ' ' + what[numeroramdonwhat] + ' ' + when[numeroramdonwhen];
}