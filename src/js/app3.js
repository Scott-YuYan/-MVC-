import '../css/app3.css'
import $ from 'jquery'

const html = `
    <section class="app3">
        <div class="squire"></div>
    </section>`;

const $app3 = $(html).appendTo($('body > .global'));

const $squire = $('.app3 > .squire');

$squire.on('click', () => {
    $squire.toggleClass('active');
});
