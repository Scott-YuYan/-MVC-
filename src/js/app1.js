import '../css/app1.css'
import $ from 'jquery'

const $num = $('#num');
const $button1 = $('#add1');
const $button2 = $('#minus1');
const $button3 = $('#multipy2');
const $button4 = $('#divide2');

const num = localStorage.getItem('num');
$num.text(num || 100);

function add() {
    let num = parseInt($num.text());
    num += 1;
    localStorage.setItem('num', num);
    $num.text(num);
}

function minus() {
    let num = parseInt($num.text());
    num -= 1;
    localStorage.setItem('num', num);
    $num.text(num);
}

function multipy() {
    let num = parseInt($num.text());
    num *= 2;
    localStorage.setItem('num', num);
    $num.text(num);
}

function divide() {
    let num = parseInt($num.text());
    console.log(num);
    num /= 2;
    localStorage.setItem('num', num);
    $num.text(num);
}

$button1.on('click', () => {
    add();
});

$button2.on('click', () => {
    minus();
});

$button3.on('click', () => {
    multipy();
});

$button4.on('click', () => {
    divide();
})