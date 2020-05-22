function testWebP(calback) {
    var webP = new Image();
    webP.onload = webP.onerror = function() {
        calback(webP.height == 2);
    };
    webP.scr = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
}

testWebP(function(support) {
    if(support == true) {
        document.querySelector('body').classList.add('webp');
    };
});