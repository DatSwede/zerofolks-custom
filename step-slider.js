document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded and parsed');

    // Function to simulate a click event
    function simulateClick(element) {
        if (element) {
            element.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
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
                const slideNavButtons = document.querySelectorAll('.slide-nav-2 .w-slider-dot');
                if (slideNavButtons.length === 0) {
                    console.error('No slide navigation buttons found.');
                    return;
                }
                if (slideNavButtons[index]) {
                    simulateClick(slideNavButtons[index]);
                } else {
                    console.error(`Slide navigation button for ${attr} at index ${index} not found`);
                }
            });
        } else {
            console.error(`Button with attribute step-slider-btn="${attr}" not found`);
        }
    }
});
