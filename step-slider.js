document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded and parsed');
    
    // Let's ensure we wait for Webflow's scripts to finish loading as well
    window.Webflow && window.Webflow.ready && window.Webflow.ready();

    var sliderNav = document.querySelector('[step-slider="slider-nav"]');
    if (!sliderNav) {
        console.error('Slider navigation element with attribute step-slider="slider-nav" not found');
        return;
    }

    var sliderDots = sliderNav.children;
    console.log('Slider dots found:', sliderDots.length);

    if (sliderDots.length === 0) {
        console.error('No slider dots found. Check if the class name is correct and the elements exist on the page.');
        return;
    }

    const slideButtons = {
        'slide-1': 0,
        'slide-2': 1,
        'slide-3': 2
    };

    for (const [attr, index] of Object.entries(slideButtons)) {
        const button = document.querySelector(`[step-slider-btn="${attr}"]`);
        console.log(`Checking button with attribute step-slider-btn="${attr}":`, button);

        if (button) {
            button.addEventListener('click', function () {
                console.log(`Button ${attr} clicked, triggering dot:`, index);
                if (sliderDots[index]) {
                    sliderDots[index].click();
                } else {
                    console.error(`Slide navigation button for ${attr} not found`);
                }
            });
        } else {
            console.error(`Button with attribute step-slider-btn="${attr}" not found`);
        }
    }
});
