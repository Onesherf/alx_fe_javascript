// script.js  
  
// Quote array  
let quotes = [  
     { text: "Believe you can and you're halfway there.", category: "Inspirational" },  
     { text: "The only way to do great work is to love what you do.", category: "Motivational" },  
     {text: "The only thing we have to fear is fear itself"} 
     {text: "Courage is being scared to death, but saddling up anyway." }
     {text: "If you cannot do great things, do small things in a great way" }
     {text: "Keep calm and carry on." }
     {text: "The way to get started is to quit talking and begin doing." }
   ];  
     
   // Function to display a random quote  
   function showRandomQuote() {  
     const randomIndex = Math.floor(Math.random() * quotes.length);  
     const randomQuote = quotes[randomIndex];  
     document.getElementById("quoteDisplay").innerHTML = `"${randomQuote.text}" - ${randomQuote.category}`;  
   }  
     
   // Function to create the add quote form  
   function createAddQuoteForm() {  
  const addQuoteForm = document.getElementById("addQuoteForm");  
    addQuoteForm.style.display = "block";  
   }  
     
   // Event listeners  
   document.getElementById("newQuote").addEventListener("click", showRandomQuote);  
   document.getElementById("addQuote").addEventListener("click", addNewQuote);  
     
   // Function to add a new quote  
   function addNewQuote() {  
     const newQuoteText = document.getElementById("newQuoteText").value;  
    const newQuoteCategory = document.getElementById("newQuoteCategory").value;  
     if (newQuoteText && newQuoteCategory) {  
       const newQuote = { text: newQuoteText, category: newQuoteCategory };  
       quotes.push(newQuote);  
       document.getElementById("newQuoteText").value = "";  
       document.getElementById("newQuoteCategory").value = "";  
       showRandomQuote();  
     }  
   }  
     
   // Initializing the application  
   showRandomQuote();

   // script.js  
  
// Quote array  
let quotes = [];  
  
// Load quotes from local storage  
function loadQuotes() {  
  const storedQuotes = localStorage.getItem('quotes');  
  if (storedQuotes) {  
   quotes = JSON.parse(storedQuotes);  
  }  
}  
  
// Save quotes to local storage  
function saveQuotes() {  
  localStorage.setItem('quotes', JSON.stringify(quotes));  
}  
  
// Load quotes from local storage on initialization  
loadQuotes();  
  
// Function to display a random quote  
function showRandomQuote() {  
  const randomIndex = Math.floor(Math.random() * quotes.length);  
  const randomQuote = quotes[randomIndex];  
  document.getElementById("quoteDisplay").innerHTML = `"${randomQuote.text}" - ${randomQuote.category}`;  
}  
  
// Function to add a new quote  
function addNewQuote(event) {  
  event.preventDefault();  
  const newQuoteText = document.getElementById("newQuoteText").value;  
  const newQuoteCategory = document.getElementById("newQuoteCategory").value;  
  if (newQuoteText && newQuoteCategory) {  
   const newQuote = { text: newQuoteText, category: newQuoteCategory };  
   quotes.push(newQuote);  
   saveQuotes(); // Save quotes to local storage  
   document.getElementById("newQuoteText").value = "";  
   document.getElementById("newQuoteCategory").value = "";  
   showRandomQuote();  
  }  
}  
  
// Function to export quotes to JSON file  
function exportToJsonFile() {  
  const jsonQuotes = JSON.stringify(quotes);  
  const blob = new Blob([jsonQuotes], { type: 'application/json' });  
  const url = URL.createObjectURL(blob);  
  const a = document.createElement('a');  
  a.href = url;  
  a.download = 'quotes.json';  
  a.click();  
}  
  
// Function to import quotes from JSON file  
function importFromJsonFile(event) {  
  const fileReader = new FileReader();  
  fileReader.onload = function(event) {  
   const importedQuotes = JSON.parse(event.target.result);  
   quotes.push(...importedQuotes);  
   saveQuotes(); // Save quotes to local storage  
   alert('Quotes imported successfully!');  
  };  
  fileReader.readAsText(event.target.files);  
}  
  
// Event listeners  
document.getElementById("newQuote").addEventListener("click", showRandomQuote);  
document.getElementById("quoteForm").addEventListener("submit", addNewQuote);  
document.getElementById("exportButton").addEventListener("click", exportToJsonFile);  
document.getElementById("importFile").addEventListener("change", importFromJsonFile);  
  
// Initialize the application  
showRandomQuote();

// Quote array  
let quotes = [  
    { text: "Believe you can and you're halfway there.", category: "Inspirational" },  
    { text: "The only way to do great work is to love what you do.", category: "Motivational" },  
    // Add more quotes here  
  ];  
    
  // Load quotes from local storage  
  function loadQuotes() {  
    const storedQuotes = localStorage.getItem('quotes');  
    if (storedQuotes) {  
     quotes = JSON.parse(storedQuotes);  
    }  
  }  
    
  // Save quotes to local storage  
  function saveQuotes() {  
    localStorage.setItem('quotes', JSON.stringify(quotes));  
  }  
    
  // Load quotes from local storage on initialization  
  loadQuotes();  
    
  // Populate categories dynamically  
  function populateCategories() {  
    const categories = [...new Set(quotes.map(quote => quote.category))];  
    const categoryFilter = document.getElementById('categoryFilter');  
    categories.forEach(category => {  
     const option = document.createElement('option');  
     option.value = category;  
     option.text = category;  
     categoryFilter.appendChild(option);  
    });  
  }  
    
  // Filter quotes based on selected category  
  function filterQuotes() {  
    const selectedCategory = document.getElementById('categoryFilter').value;  
    const filteredQuotes = quotes.filter(quote => quote.category === selectedCategory || selectedCategory === 'all');  
    const quoteDisplay = document.getElementById('quoteDisplay');  
    quoteDisplay.innerHTML = '';  
    filteredQuotes.forEach(quote => {  
     const quoteElement = document.createElement('p');  
     quoteElement.textContent = `"${quote.text}" - ${quote.category}`;  
     quoteDisplay.appendChild(quoteElement);  
    });  
  }  
    
  // Remember the last selected filter  
  function rememberFilter() {  
    const selectedCategory = document.getElementById('categoryFilter').value;  
    localStorage.setItem('lastFilter', selectedCategory);  
  }  
    
  // Restore last selected filter on page load  
  function restoreFilter() {  
    const lastFilter = localStorage.getItem('lastFilter');  
    if (lastFilter) {  
     document.getElementById('categoryFilter').value = lastFilter;  
     filterQuotes();  
    }  
  }  
    
  // Update web storage with category data  
  function updateStorage() {  
    saveQuotes();  
    populateCategories();  
  }  
    
  // Event listeners  
  document.getElementById('categoryFilter').addEventListener('change', filterQuotes);  
  document.getElementById('categoryFilter').addEventListener('change', rememberFilter);  
  document.addEventListener('DOMContentLoaded', restoreFilter);  
  document.addEventListener('DOMContentLoaded', populateCategories);  
    
  // Initialize the application  
  filterQuotes();

  // Simulate server interaction using JSONPlaceholder API  
const apiUrl = 'https://jsonplaceholder.typicode.com/quotes';  
  
// Local quote data  
let quotes = [];  
  
// Simulate periodic data fetching from server  
setInterval(fetchDataFromServer, 10000); // fetch data every 10 seconds  
  
// Fetch data from server  
function fetchDataFromServer() {  
  fetch(apiUrl)  
  .then(response => response.json())  
  .then(data => {  
    // Update local data and resolve conflicts  
    updateLocalData(data);  
   })  
  .catch(error => console.error('Error fetching data:', error));  
}  
  
// Update local data and resolve conflicts  
function updateLocalData(serverData) {  
  // Check for new quotes from server  
  const newQuotes = serverData.filter(quote =>!quotes.find(localQuote => localQuote.id === quote.id));  
  quotes = [...quotes,...newQuotes];  
  
  // Check for conflicts (e.g., quote text or category changes)  
  const conflicts = quotes.filter(localQuote => {  
   const serverQuote = serverData.find(quote => quote.id === localQuote.id);  
   return serverQuote && (serverQuote.text!== localQuote.text || serverQuote.category!== localQuote.category);  
  });  
  
  // Resolve conflicts (server data takes precedence)  
  conflicts.forEach(conflict => {  
   const serverQuote = serverData.find(quote => quote.id === conflict.id);  
   conflict.text = serverQuote.text;  
   conflict.category = serverQuote.category;  
  });  
  
  // Update local storage  
  saveQuotes();  
  
  // Notify user of updates or conflicts  
  notifyUserOfUpdates(conflicts);  
}  
  
// Notify user of updates or conflicts  
function notifyUserOfUpdates(conflicts) {  
  if (conflicts.length > 0) {  
   alert(`Conflicts resolved: ${conflicts.map(conflict => conflict.text).join(', ')}`);  
  } else {  
   alert('Data updated from server!');  
  }  
}  
  
// Save quotes to local storage  
function saveQuotes() {  
  localStorage.setItem('quotes', JSON.stringify(quotes));  
}  
  
// Load quotes from local storage  
function loadQuotes() {  
  const storedQuotes = localStorage.getItem('quotes');  
  if (storedQuotes) {  
   quotes = JSON.parse(storedQuotes);  
  }  
}  
  
// Initialize application  
loadQuotes();

   