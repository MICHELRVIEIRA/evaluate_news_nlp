function handleSubmit(event) {
    
    event.preventDefault()

    let texto = document.getElementById('name').value

    fetch('http://localhost:8081/meaningcloud-api', {
      method: 'POST', 
      credentials: 'same-origin', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({texto: texto})  
    })

      .then(res => res.json())  
      .then(res=>{Client.updateUI(res)})

    //console.log("::: Form Submitted :::")
    //fetch('http://localhost:8080/test')
    //.then(res => res.json())
    //.then(function(res) {
    //    document.getElementById('results').innerHTML = res.message
    //})
}

// Código ajustado conforme instruções contidas na questão 517022, do fórum do curso.

// Link: https://knowledge.udacity.com/questions/517022

/* const updateUI  = async () => {
  
    const request = await fetch ('/')
  
    try {
  
      const allData = await request.json();
      
      console.log(allData);
  
      document.getElementById('score').innerHTML = allData.score;
      document.getElementById('confidence').innerHTML = allData.confidence;
      document.getElementById('irony').innerHTML = allData.irony;
  
    }
  
    catch (error){
  
      console.log("error", error);
  
    }
  
}*/

export { handleSubmit }
