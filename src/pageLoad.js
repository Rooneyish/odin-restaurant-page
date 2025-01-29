import createRestaurantHomePage from "./restaurantHome";
import createMenuPage from "./menu";

function initialLoad() {
    createRestaurantHomePage();
}

function menuLoad() {
    createMenuPage();
}

function buttonActions() {
    // Ensure the DOM is fully loaded before adding event listeners
    document.addEventListener("DOMContentLoaded", () => {
        // Use [0] to access the first element with the class "home"
        document.getElementsByClassName("home")[0].addEventListener("click", initialLoad);
        document.getElementsByClassName("menu")[0].addEventListener("click", menuLoad);
    });
}

initialLoad();
export { initialLoad, menuLoad, buttonActions };