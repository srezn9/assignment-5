


// button and activity log

document.getElementById("buttonContainer").addEventListener("click", function (event) {
  if (event.target.tagName.toLowerCase() === "button") {
      alert("Board updated successfully.");

      event.target.disabled = true;
      event.target.classList.remove("bg-blue-500");
      event.target.classList.add("bg-gray-400");

      
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


// Clear History
document.getElementById("clear")
.addEventListener("click", function() {
  document.getElementById("activityLog")
  .innerHTML = "";
});


// discover new page

document.getElementById("discoverBtn")
.addEventListener("click", function() {
  window.location.href = "back.html";
});
