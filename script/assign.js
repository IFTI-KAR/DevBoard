const clickedButtons = new Set(); 
document.querySelectorAll('#comp').forEach(button => {
    button.addEventListener('click', function(event){
        event.preventDefault();

        
        if (clickedButtons.has(button)) return;

        
        const assignedElement=document.getElementById("Assigned");
        let assignedCount=parseInt(assignedElement.innerText);
        const done=document.getElementById("done-tasks");
        let tasksDoneCount=parseInt(done.innerText);

        if (assignedCount>0) {
            assignedCount-=1;
            tasksDoneCount+=1;
            assignedElement.innerText=assignedCount;
            done.innerText=tasksDoneCount;

            //history
            const currentTime = getCurrentTime();
            const taskName = button.closest('.border').querySelector('#task').innerText;

            const p = document.createElement("p");
            p.innerText = `You have completed the task: ${taskName}  at ${currentTime}`;

            
            const historyCon = document.getElementById("history-container");
            historyCon.appendChild(p);
        }

        clickedButtons.add(button);

        button.classList.remove("bg-[#3752FD]", "hover:bg-[#000000]", "text-white");
        button.classList.add("bg-white", "text-gray-500", "border", "border-gray-400");
        
    });
});

function getCurrentTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm;

    
    if (hours >= 12) {
        ampm = 'pm';
    } else {
        ampm = 'am';
    }

    
    if (hours === 0) {
        hours = 12; 
    } else {
        hours = hours % 12;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    return `${hours}:${minutes}:${seconds} ${ampm}`;
}


const clearHistoryButton = document.getElementById("clear");
const historyCon = document.getElementById("history-container");

if (clearHistoryButton) {
    clearHistoryButton.addEventListener('click', function() {
        historyCon.innerHTML='';
    });
}