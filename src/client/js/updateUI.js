function updateUI(res) {

    console.log(res);
    
    document.getElementById('score').innerHTML = 'Score: ' + res.score_tag;
    document.getElementById('confidence').innerHTML =  'Confidence: ' + res.confidence;
    document.getElementById('irony').innerHTML = 'Irony: ' +  res.irony;  
}  

export { updateUI }
