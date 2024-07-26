document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded and parsed');

    // Ensure the Webflow slider is initialized before running the code
    Webflow.ready(function () {
        console.log('Webflow initialized');

        // Function to go to a specific slide
        function goToSlide(slider, slideIndex) {
            const slides = slider.querySelectorAll('.w-slide');
            if (slides[slideIndex]) {
                const sliderInstance = Webflow.require('slider');
                const sliderData = sliderInstance.sliders.filter(function(sliderObj) {
                    return sliderObj.el === slider;
                })[0];
                if (sliderData) {
                    sliderData.goto(slideIndex);
                    console.log(`Navigated to slide ${slideIndex}`);
                } else {
                    console.error('Slider data not found');
                }
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
