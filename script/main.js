


// button and activity log

document.getElementById("buttonContainer").addEventListener("click", function (event) {
  if (event.target.tagName.toLowerCase() === "button") {
      alert("Board updated successfully.");

      
      let taskCount = document.getElementById("taskCount"); 

      let currentTaskCount = parseInt(taskCount.textContent);

      
     
      if (currentTaskCount > 0) {
        taskCount.textContent = currentTaskCount - 1;
    }

      
      let completedCount = document.getElementById("completedCount");
      completedCount.textContent = parseInt(completedCount.textContent) + 1;

      
      let log = document.getElementById("activityLog");
      
      let entry = document.createElement("div");
      entry.textContent = `You have Complete The Task at ${new Date().toLocaleTimeString()}`;
      log.appendChild(entry);
  }
});

