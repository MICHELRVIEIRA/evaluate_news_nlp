function handleSubmit(event) {
    
    event.preventDefault()

    let url = document.getElementById('name').value

    postData({url: url})
    
    .then(function(newData){

      console.log()

      updateUI(newData);
  
    });

    //console.log("::: Form Submitted :::")
    //fetch('http://localhost:8080/test')
    //.then(res => res.json())
    //.then(function(res) {
    //    document.getElementById('results').innerHTML = res.message
    //})
}

// Código ajustado conforme instruções contidas na questão 517022, do fórum do curso.

// Link: https://knowledge.udacity.com/questions/517022

const postData = async (data = {})=>{

    const response = await fetch('http://localhost:8081/meaningcloud-api', {
    method: 'POST', 
    credentials: 'same-origin', 
    headers: {
        'Content-Type': 'application/json',
    },
    
    body: JSON.stringify({data})  

  })
  
  .then(res => res.json())
  .then((data) => updateUI(data))
  .catch((error) => {
      console.log('error', error);
  });
      function updateUI(data) {
          console.log(data);
          //just console.log data for now
  }
}

const updateUI  = async () => {
  
    const request = await fetch ('/')
  
    try {
  
      const allData = await request.json();
      
      console.log(allData);
  
      document.getElementById('score').innerHTML = allData[0].score;
      document.getElementById('confidence').innerHTML = allData[0].confidence;
      document.getElementById('irony').innerHTML = allData[0].irony;
  
    }
  
    catch (error){
  
      console.log("error", error);
  
    }
  
}

export { handleSubmit }
