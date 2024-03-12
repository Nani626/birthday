// Add this to the existing JavaScript
document.getElementById("giftButton").addEventListener("click", function() {
    document.getElementById("wishText").innerText = "Happy Birthday Cherry always be happy and smiling";
  });
  
  document.getElementById("wishesButton").addEventListener("click", function() {
    document.getElementById("wishText").innerText = "Happy Birthday Cherry always be happy and smiling";
  });
  
  document.getElementById("giftButton").addEventListener("mouseover", function() {
    document.getElementById("giftButton").innerText = "Wishes";
    document.getElementById("wishesButton").innerText = "Gift";
  });
  
  document.getElementById("giftButton").addEventListener("mouseout", function() {
    document.getElementById("giftButton").innerText = "Gift";
    document.getElementById("wishesButton").innerText = "Wishes";
  });
  
  document.getElementById("wishesButton").addEventListener("mouseover", function() {
    document.getElementById("giftButton").innerText = "Gift";
    document.getElementById("wishesButton").innerText = "Wishes";
  });
  
  document.getElementById("wishesButton").addEventListener("mouseout", function() {
    document.getElementById("giftButton").innerText = "Gift";
    document.getElementById("wishesButton").innerText = "Wishes";
  });
  