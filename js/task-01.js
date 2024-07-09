// Select the 'ul' element with the id of 'categories'
const categoriesList = document.getElementById("categories");

// Get all 'li' elements with the class of 'item' within the 'categories' list
const categoryItems = categoriesList.querySelectorAll(".item");

// Display the number of categories
console.log(`Number of categories: ${categoryItems.length}`);

// Iterate over each category item
categoryItems.forEach((item) => {
  // Get the 'h2' element text within the current category item
  const categoryName = item.querySelector("h2").textContent;

  // Get all 'li' elements within the current category item
  const elementsCount = item.querySelectorAll("li").length;

  // Display the category name and the number of elements
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${elementsCount}`);
});
