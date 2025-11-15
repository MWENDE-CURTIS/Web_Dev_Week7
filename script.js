// Set up elements and initial state when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {

    // ==============================================
    // PART 2: JavaScript Functions & Scope
    // ==============================================

    /* --- Global Scope Variable --- */
    // This variable is accessible and modifiable by any function defined here.
    let globalScore = 0;
    const globalScoreEl = document.getElementById('global-score');

    /**
     * Function 1: Demonstrates parameters and return values (Local Scope).
     * @param {number} width - The width of the rectangle.
     * @param {number} height - The height of the rectangle.
     * @returns {number} The calculated area.
     */
    function calculateArea(width, height) {
        // 'area' is a local variable; it only exists within this function's scope.
        const area = width * height;
        return area;
    }

    // Call the function and update the DOM element with the returned value
    const areaResult = calculateArea(10, 5);
    document.getElementById('area-result').textContent = areaResult;


    /**
     * Function 2: Demonstrates modifying a Global Scope variable.
     * It increments the score defined in the outer scope.
     */
    function updateGlobalScore() {
        // Modifying the outer (global) variable 'globalScore'
        globalScore += 10;
        globalScoreEl.textContent = globalScore;

        // Example of a local variable not affecting the outside scope
        let localMessage = "Score updated!";
        console.log("Scope check:", localMessage);
    }

    // Attach event listener for the scope button
    document.getElementById('update-scope-btn').addEventListener('click', updateGlobalScore);


    // ==============================================
    // PART 3: Combining CSS Animations with JavaScript
    // ==============================================

    const animatedBox = document.getElementById('animated-box');
    const triggerBtn = document.getElementById('trigger-animation-btn');
    const hideBtn = document.getElementById('hide-box-btn');

    /**
     * Function 3: Toggles a CSS animation by adding/removing a class.
     * This makes the function reusable for both showing and hiding the element.
     * @param {HTMLElement} element - The DOM element to animate.
     */
    function toggleBoxAnimation(element) {
        const isVisible = element.classList.toggle('box-slide-in');

        if (isVisible) {
            triggerBtn.textContent = "Hide Animated Box";
        } else {
            triggerBtn.textContent = "Reveal Animated Box";
        }
    }

    /**
     * Function 4: Helper to explicitly hide the box.
     * @param {HTMLElement} element - The DOM element to hide.
     */
    function hideBox(element) {
         element.classList.remove('box-slide-in');
         triggerBtn.textContent = "Reveal Animated Box";
    }

    // Attach listeners to trigger the functions dynamically
    triggerBtn.addEventListener('click', () => toggleBoxAnimation(animatedBox));
    hideBtn.addEventListener('click', () => hideBox(animatedBox));
});