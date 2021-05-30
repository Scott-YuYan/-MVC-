import '../css/app3.css'
import $ from 'jquery'

const $squire = $('.app3 > .squire');

$squire.on('click', () => {
    $squire.toggleClass('active');
})
