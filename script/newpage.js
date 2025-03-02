document.getElementById('notun-page').addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = "second.html";
});


document.getElementById('comp').addEventListener('click', function (event) {
    event.preventDefault();
    const assigned = document.getElementById("Assigned").innerText;
    const covertedAssigned=parseFloat(assigned);
    const sum=covertedAssigned- 1;

    document.getElementById("Assigned").innerText=sum;
    
})