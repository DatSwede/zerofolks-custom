document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded and parsed');

    // Wait for Webflow scripts to be ready
    if (window.Webflow && window.Webflow.ready) {
        window.Webflow.ready(initSliderNavigation);
    } else {
        initSliderNavigation();
    }

    function initSliderNavigation() {
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

        // Select the slider element
        const slider = document.querySelector('[zf-slider="slider"]');
        if (!slider) {
            console.error('Slider element with attribute zf-slider="slider" not found');
            return;
        }

        // Add event listener for back button
        const backButton = document.querySelector('[zf-slider="click-back"]');
        if (backButton) {
            backButton.addEventListener('click', function () {
                const nativeBackButton = slider.querySelector('.w-slider-arrow-left');
                simulateClick(nativeBackButton);
            });
        } else {
            console.error('Back button not found');
        }

        // Add event listener for next button
        const nextButton = document.querySelector('[zf-slider="click-next"]');
        if (nextButton) {
            nextButton.addEventListener('click', function () {
                const nativeNextButton = slider.querySelector('.w-slider-arrow-right');
                simulateClick(nativeNextButton);
            });
        } else {
            console.error('Next button not found');
        }

        // Select the slider navigation element
        const sliderNav = slider.querySelector('.slide-nav');
        if (!sliderNav) {
            console.error('Slider navigation element with class .slide-nav not found');
            return;
        }

        // Add event listeners for slide buttons
        const slideButtons = {
            'slide-1': 0,
            'slide-2': 1,
            'slide-3': 2
        };

        for (const [attr, index] of Object.entries(slideButtons)) {
            const button = document.querySelector(`[zf-slider="${attr}"]`);
            console.log(`Button for ${attr}:`, button);
            if (button) {
                button.addEventListener('click', function () {
                    const slideNavButtons = sliderNav.children;
                    console.log('Slide navigation buttons:', slideNavButtons);
                    if (slideNavButtons[index]) {
                        simulateClick(slideNavButtons[index]);
                        console.log(`Navigated to slide ${index + 1}`);
                    } else {
                        console.error(`Slide navigation button for ${attr} not found`);
                    }
                });
            } else {
                console.error(`Button with attribute zf-slider="${attr}" not found`);
            }
        }
    }
});
