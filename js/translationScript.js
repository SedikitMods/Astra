const select = document.querySelector('select');
const allLang = ['eng', 'ru', 'indo'];

select.addEventListener('change', changeURLLanguage);

function changeURLLanguage(){
    let lang = select.value;
    location.href = window.location.pathname + '#'+lang;
    location.reload();
}

function changeLanguage(){
    let hash = window.location.hash;
    hash = hash.substring(1);
    if(!allLang.includes(hash)){
        location.href = window.location.pathname + '#eng';
        location.reload();
    }
    select.value = hash;

    for (let key in translationArray){
        let elem = document.querySelector('.lng-'+key);
        if(elem) {
            elem.innerHTML = translationArray[key][hash];
        }
    }
}

changeLanguage();