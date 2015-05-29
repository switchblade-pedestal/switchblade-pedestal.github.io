/* create an svg drawing */
var draw = SVG('drawing')

/* draw rectangle */
var rect = draw.rect(23,23).move(100,100).fill('#f09')

/* make rectangle jump and change color on mouse over */
rect.mouseover(function() {
    clone_and_animate(rect, 55);
})

function clone_and_animate(the_element,clone_count) {
    clone_count = typeof clone_count !== 'undefined' ? clone_count : 1;
    for(i=1;i<clone_count+1;i++) {
        sX = Math.random()*2;
        sY = sX*1.61803398;
        clone = the_element.clone();
        clone.animate(1000, SVG.easing.sine)
            .move(400 * Math.random(), 400 * Math.random())
            .rotate(-45 + 90 * Math.random())
            .fill({
                r: ~~(Math.random() * 255)
              , g: ~~(Math.random() * 255)
              , b: ~~(Math.random() * 255)
            })
            .scale(sX,sY)
        add_mouseover_to_clone(clone);
    }
    the_element.remove();
}
function add_mouseover_to_clone(the_clone) {
    coinToss = weightedCoinFlip(2);
    if (coinToss == 0) {    
        the_clone.mouseover(function() {
            clone_and_animate(the_clone, 2);
        })
    } else {
        // jQuery(the_clone).wrap('<a href="'+getRandomURL()+'"></a>')
        the_clone.click(function() {
            gotoRandomURL();
        });
    }
}

function coinFlip() {
    return Math.floor(Math.random() * 2);
}

function weightedCoinFlip(bias) {
    return Math.abs(Math.floor(Math.random() * bias));
}

function gotoRandomURL() {
    var URLs = ['google.com','yahoo.com','duckduckgo.com'];
    seed = Math.floor(Math.random()*URLs.length);
    window.location.href = 'http://' + URLs[seed];
}

function getRandomURL() {
    var URLs = ['google.com','yahoo.com','duckduckgo.com'];
    seed = Math.floor(Math.random()*URLs.length);
    return 'http://' + URLs[seed];
}