window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});


const localApi = 'http://localhost:7071/api/GetResumeCounter';
const functionApi = 'https://fa-getresumecounter.azurewebsites.net/api/GetResumeCounter?code=L4LXpB1ILPoUOz_aKZ83OxI7zPNXa2VFc6PaQD8NRuZKAzFu_E4dGQ=='; 

const getVisitCount = () => {
    let count = 30;
    fetch(functionApi)
    .then(response => {
        return response.json()
    })
    .then(response => {
        console.log("Website called function API.");
        count = response.count;
        document.getElementById('counter').innerText = count;
    }).catch(function(error) {
        console.log(error);
      });
    return count;
}
