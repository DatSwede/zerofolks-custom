document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded and parsed');

    // Wait for Webflow's scripts to finish loading as well
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
                console.error('Element not found to simulate click:', element);
            }
        }

        // Select the slider element
        const slider = document.querySelector('[zf-slider="slider"]');
        if (!slider) {
            console.error('Slider element with attribute zf-slider="slider" not found');
            return;
        }
        console.log('Slider element found:', slider);

        // Add event listener for back button
        const backButton = document.querySelector('[zf-slider="click-back"]');
        if (backButton) {
            backButton.addEventListener('click', function () {
                const nativeBackButton = slider.querySelector('.w-slider-arrow-left');
                console.log('Back button clicked, simulating click on native back button:', nativeBackButton);
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
                console.log('Next button clicked, simulating click on native next button:', nativeNextButton);
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
        console.log('Slider navigation element found:', sliderNav);

        // Function to go to a specific slide using Webflow API
        function goToSlide(slideIndex) {
            const slideNavButtons = sliderNav.children;
            console.log('Slide navigation buttons:', slideNavButtons);
            if (slideNavButtons[slideIndex]) {
                console.log(`Navigating to slide ${slideIndex + 1}`);
                simulateClick(slideNavButtons[slideIndex]);
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
            const button = document.querySelector(`[zf-slider="${attr}"]`);
            console.log(`Button for ${attr}:`, button);
            if (button) {
                button.addEventListener('click', function () {
                    console.log(`Button ${attr} clicked, navigating to slide index ${index}`);
                    goToSlide(index);
                });
            } else {
                console.error(`Button with attribute zf-slider="${attr}" not found`);
            }
        }
    }
});
