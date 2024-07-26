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
        function goToSlide(slideIndex) {
            const slider = document.querySelector('[step-slider="slider"]');
            if (slider) {
                const slideNavButtons = slider.querySelectorAll('.w-slider-dot');
                if (slideNavButtons.length === 0) {
                    console.error('No slide navigation buttons found.');
                    return;
                }
                if (slideNavButtons[slideIndex]) {
                    simulateClick(slideNavButtons[slideIndex]);
                    console.log(`Navigated to slide ${slideIndex}`);
                } else {
                    console.error(`Slide navigation button for index ${slideIndex} not found`);
                }
            } else {
                console.error('Slider element with attribute step-slider="slider" not found');
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
