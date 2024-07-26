document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded and parsed');

    // Ensure the Webflow slider is initialized before running the code
    Webflow.ready(function () {
        console.log('Webflow initialized');

        // Function to go to a specific slide
        function goToSlide(slideIndex) {
            const slider = document.querySelector('[step-slider="slider"]');
            if (!slider) {
                console.error('Slider element with attribute step-slider="slider" not found');
                return;
            }

            const slideNavContainer = slider.querySelector('.slide-nav.w-slider-nav');
            if (!slideNavContainer) {
                console.error('Slider navigation container with class slide-nav w-slider-nav not found');
                return;
            }

            const slideNavButtons = slideNavContainer.querySelectorAll('.w-slider-dot');
            if (slideNavButtons.length === 0) {
                console.error('No slide navigation buttons found.');
                return;
            }

            console.log(`Attempting to navigate to slide ${slideIndex}`);
            if (slideNavButtons[slideIndex]) {
                slideNavButtons[slideIndex].click();
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
