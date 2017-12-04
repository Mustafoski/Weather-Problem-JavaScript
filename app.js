function loadLanguages(){
    
    const langs = ["eng","pol","fra","deu","es","mk","ara","tr","pt","it"];
    var options = null;
    var from = document.getElementById('from');
    var to   = document.getElementById('to');
    
    langs.forEach(l => {
    options+= '<option>' + l + '</option>';
});
    
    from.innerHTML = options;
    to.innerHTML   = options;
    
}

function translatePhrase(){
    
    
    var from = document.getElementById('from').value;
    var to   = document.getElementById('to').value;
    var phrase = document.getElementById('fromPhrase').value;
    
    var url = "https://glosbe.com/gapi/translate?from=" + from + "&dest=" + to + "&format=json&phrase=" + phrase  + "&pretty=true";
    console.log(url);
    console.log(phrase);
    
    fetch(url)
        .then(response => {
        if(response.status !== 200){
            console.error("API failed , Status code: " + response.status);
            return;
        }
        
        response.json().then(data => {
            document.getElementById("toPhrase").value = data.tuc[0].phrase ? data.tuc[0].phrase.text : "" ;
            console.log(phrase);
        });
        
    }).catch(err => {
        console.error("Fetch error "+ err);
    });
}

        
       