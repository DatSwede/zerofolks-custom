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

        // Add event listener for back button
        const backButton = document.querySelector('[step-slider-btn="click-back"]');
        if (backButton) {
            backButton.addEventListener('click', function () {
                const nativeBackButton = document.querySelector('[step-slider-btn="back"]');
                simulateClick(nativeBackButton);
            });
        } else {
            console.error('Back button not found');
        }

        // Add event listener for next button
        const nextButton = document.querySelector('[step-slider-btn="click-next"]');
        if (nextButton) {
            nextButton.addEventListener('click', function () {
                const nativeNextButton = document.querySelector('[step-slider-btn="next"]');
                simulateClick(nativeNextButton);
            });
        } else {
            console.error('Next button not found');
        }

        // Function to go to a specific slide
        function goToSlide(slider, slideIndex) {
            const slides = slider.querySelectorAll('.w-slide');
            if (slides[slideIndex]) {
                const sliderInstance = Webflow.require('slider');
                sliderInstance.show(slideIndex);
                console.log(`Navigated to slide ${slideIndex}`);
            } else {
                console.error(`Slide index ${slideIndex} not found`);
            }
        }

        // Get the slider element
        const slider = document.querySelector('[step-slider="slider"]');
        if (!slider) {
            console.error('Slider element with attribute step-slider="slider" not found');
            return;
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
                    goToSlide(slider, index);
                });
            } else {
                console.error(`Button with attribute step-slider-btn="${attr}" not found`);
            }
        }
    });
});
