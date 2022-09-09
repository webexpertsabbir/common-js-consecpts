
function greeting(greetingHandelar, name){
    greetingHandelar(name);
}

function goodEvening(name){
    console.log('Good Evening', name);
}
function greetingHandelar(name){
    console.log('Good Morning', name);
}
function greetingNight(name){
    console.log('Good Night', name);
}
greeting(greetingHandelar, 'Sabbir Hossen')
greeting(greetingHandelar, 'Mohammad Nasir')

greeting(goodEvening, 'Sakib vai')
greeting(goodEvening, 'Musfiq vai')

greeting(greetingNight, 'Masrafi')



function clickEvent(){
    console.log('click Button')
}


document.getElementById('id').addEventListener('click', clickEvent)
