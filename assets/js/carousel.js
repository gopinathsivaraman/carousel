$(document).ready(function () {
    $iteration = 1;
    progress();
    setInterval(function () {
        // console.log($iteration);
        if ($iteration == 4) {
            $('.wrapper__indicator-progress').animate({
                width: '0%'
            }, 0, 'swing');

            $('.text-slider:not(:nth-child(1))').hide();
            $('.text-slider:nth-child(1)').show();

            $('.image-slider:nth-child(1)').fadeIn(1000);
            $('.image-slider:not(:nth-child(1)').fadeOut(500);
            // $('.text-slider').animate({
            //     right: 0
            // }, 300, 'swing')

            $iteration = 1;
            progress(false);
        } else {
            $('.text-slider:nth-child(' + $iteration + ')').show();
            $('.text-slider:not(:nth-child(' + $iteration + ')').hide();

            $('.image-slider:nth-child(' + $iteration + ')').fadeIn(1000);
            $('.image-slider:not(:nth-child(' + $iteration + ')').fadeOut(500);
            progress();
            console.log($iteration);
        }
    }, 10000);
})

function progress(flag = true) {
    $timer = flag ? 10000 : 9900;
    $elt = $('.wrapper__indicator:nth-child(' + $iteration + ')');
    $elt = $elt.find('.wrapper__indicator-progress');
    console.log($elt);
    $($($elt)).animate({
        width: '100%'
    }, 10000, 'linear');
    $iteration++;
}