// Handling the form submission and storing the data
document.getElementById("budgetEntryForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const category = document.getElementById("category").value;
    const subcategory = document.getElementById("subcategory").value;
    const cost = parseFloat(document.getElementById("cost").value);
    const comments = document.getElementById("comments").value;
    const lastYearBudget = parseFloat(document.getElementById("lastYearBudget").value);
  
    const entry = {
      category: category,
      subcategory: subcategory,
      cost: cost,
      comments: comments,
      lastYearBudget: lastYearBudget,
    };
  
    saveData(entry);
    displayData();
  });
  
  // Function to save data in the local storage (simulating the JSON file)
  function saveData(entry) {
    let budgetData = JSON.parse(localStorage.getItem("budgetData")) || [];
    budgetData.push(entry);
    localStorage.setItem("budgetData", JSON.stringify(budgetData));
  }
  
  // Function to display the saved entries
  function displayData() {
    const budgetData = JSON.parse(localStorage.getItem("budgetData")) || [];
    const entriesList = document.getElementById("entries");
    entriesList.innerHTML = "";
    
    budgetData.forEach(entry => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
        <strong>Category:</strong> ${entry.category}<br>
        <strong>Sub Category:</strong> ${entry.subcategory}<br>
        <strong>Cost Amount:</strong> ₹${entry.cost}<br>
        <strong>Comments:</strong> ${entry.comments}<br>
        <strong>Last Year Budget Evaluation:</strong> ₹${entry.lastYearBudget}
      `;
      entriesList.appendChild(listItem);
    });
  }
  
  // Display data on load
  document.addEventListener("DOMContentLoaded", displayData);
  