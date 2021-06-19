$(document).ready(function() {
    function generateRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    for (var i = 1; i <= 9; i++) {
        $('.content-' + i).hover(function() {
            var randomColor = generateRandomColor();
            // over
            gsap.to(this, {
                duration: .5,
                opacity: 1,
                rotate: 90,
                'background-color': randomColor
            });
        }, function() {
            var randomColor = generateRandomColor();
            // out
            gsap.to(this, {
                duration: .5,
                rotate: 0,
                opacity: 1,
                'background-color': randomColor
            });

        });
        $('.content-' + i).click(function(e) {
            var randomColor = generateRandomColor();
            gsap.to(this, {
                duration: 1,
                opacity: 1,
            });

        });

        $('.content-' + i).mousedown(function() {
            var randomColor = generateRandomColor();
            gsap.to(this, {
                duration: 2,

                'rotateY': '-180deg'
            });
        });

        $('.content-' + i).mouseup(function() {
            var randomColor = generateRandomColor();
            gsap.to(this, {
                duration: 2,

                'rotateY': '0deg'
            });

        });

    }
});