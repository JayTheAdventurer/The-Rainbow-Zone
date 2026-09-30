let enlarged=0;
        let width = window.innerWidth;
        var WIDTH_LIMIT = 701;
        

        show(document.querySelectorAll('#hiddentxt'));

        function show (elements, specifiedDisplay) {
        var computedDisplay, element, index;

        elements = elements.length ? elements : [elements];
        for (index = 0; index < elements.length; index++) {
            element = elements[index];

            // Remove the element's inline display styling
            element.style.display = '';
            computedDisplay = window.getComputedStyle(element, null).getPropertyValue('display');

            if (computedDisplay === 'none' && width <= WIDTH_LIMIT) {
                element.style.display = specifiedDisplay || 'block';
            }
        }
        }

        addEventListener('resize', function () {
            toggle(document.querySelectorAll('#hiddentxt'));
        });

        function toggle (elements, specifiedDisplay) {
            var element, index;

            elements = elements.length ? elements : [elements];
            for (index = 0; index < elements.length; index++) {
                element = elements[index];

                if (isElementHidden(element) && width <= WIDTH_LIMIT) {
                element.style.display = '';

                // If the element is still hidden after removing the inline display
                if (isElementHidden(element) && width <= WIDTH_LIMIT) {
                    element.style.display = specifiedDisplay || 'block';
                }
                } else {
                element.style.display = 'none';
                }
            }
            function isElementHidden (element) {
                return window.getComputedStyle(element, null).getPropertyValue('display') === 'none';
            }
        }

        function enlargeImg(img) {
            if (enlarged===0 && width <= WIDTH_LIMIT){
                
                img.style.transition =
                "transform 0.25s ease, position 0.25s ease, zIndex 0.25s ease";
                img.style.position = 'absolute';
                img.style.transform = 'scaleX(1)';
                img.style.zIndex = "10";
                enlarged = 1;
            }
            else{
                
                img.style.transition =
                "transform 0.25s ease, position 0.25s ease, zIndex 0.25s ease";
                img.style.transform = "inherit";
                img.style.position = 'relative';
                img.style.zIndex = "0";
                enlarged = 0;
            }
            return enlarged;
        }