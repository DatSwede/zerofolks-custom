document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded and parsed');

    // Ensure the Webflow slider is initialized before running the code
    Webflow.ready(function () {
        console.log('Webflow initialized');

        // Function to simulate a click event
        function simulateClick(element) {
            if (element) {
                element.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
                console.log('Simulated click on:', element);
            } else {
                console.error('Element not found:', element);
            }
        }

        // Function to go to a specific slide
        function goToSlide(slideIndex) {
            const sliderNav = document.querySelector('[step-slider="slider-nav"]');
            console.log('Slider navigation element:', sliderNav);
            if (!sliderNav) {
                console.error('Slider navigation element with attribute step-slider="slider-nav" not found');
                return;
            }

            const slideNavButtons = sliderNav.children;
            console.log('Slide navigation buttons:', slideNavButtons);
            if (slideNavButtons.length === 0) {
                console.error('No slide navigation buttons found.');
                return;
            }

            console.log(`Attempting to navigate to slide ${slideIndex}`);
            if (slideNavButtons[slideIndex]) {
                simulateClick(slideNavButtons[slideIndex]);
                console.log(`Navigated to slide ${slideIndex}`);
            } else {
                console.error(`Slide navigation button for index ${slideIndex} not found`);
            }
        }

        // Add event listeners for slide buttons
        const slideButtons = {
            'slide-1': 0,
            'slide-2': 1,
            'slide-3': 2
        };

        for (const [attr, index] of Object.entries(slideButtons)) {
            const button = document.querySelector(`[step-slider-btn="${attr}"]`);
            console.log(`Button for ${attr}:`, button);
            if (button) {
                button.addEventListener('click', function () {
                    console.log(`Button ${attr} clicked, navigating to slide index ${index}`);
                    goToSlide(index);
                });
            } else {
                console.error(`Button with attribute step-slider-btn="${attr}" not found`);
            }
        }
    });
});
