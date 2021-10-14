var mainNav = document.querySelectorAll("nav a");
      document.addEventListener("click", showActive);

      function showActive(event) {
        event.preventDefault();
        if (event.target.matches("nav a")) {
          for (let navItem of mainNav) {
            navItem.classList.remove("active");
          }
          event.target.classList.add("active");
        }
      }

//content//  
var contentPara = document.querySelector(".content");
document.querySelector("nav a").classList.add("active");

contentPara.innerHTML = data.recipes;
document.addEventListener("click", makeActive);

function makeActive(event) {
    if(!event.target.macthes('a')) return;

    makeInactive()
    event.target.classList.add('active');

    var type = window.location.hash.substring(1);
    contentPara.innerHTML = data [type];
}

function makeInactive() {
    tabs.forEach((tab) => tab.classList.remove('active'));
}

var buttonContent = `
<h2>Delivery</h2>
  <p>Blend 1 cup of spinach (or another leafy greens of your choice) in a blender. Adding leafy greens to your smoothie boosts the phytonutrients and fiber, which then slows down the absorption of sugars into your body. Next, add 1 cup of liquid and blend well (until all leafy chunks are gone). Toss in fruit, such as frozen mango, pineapple and bananas in the blender. Next, blend again until smooth and creamy. Serve smoothie immediately for maximum nourishment.
  Looking to turn your smoothie into a meal replacement? Adding clean protein + healthy fat does the trick. I realized that none of the protein powders on the market were what I wanted when it came to pure protein with no weird gums or fillers. So I made my own! The result is my Protein Smoothie Boost -with only organic hemp + chia + flax seeds, in a perfectly smooth, smoothie worthy powder. Give it a blend and see what you think!</p>
  <a class="closer" href="#0">x</a>
`