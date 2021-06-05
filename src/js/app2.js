import '../css/app2.css'
import $ from 'jquery'

const html = `    <section class="app2">
        <ol class="tab-bar">
            <li>1</li>
            <li>2</li>
        </ol>
        <ol class="tab-content">
            <li>内容1</li>
            <li>内容2</li>
        </ol>
    </section>`;
const $app2 = $(html).appendTo($('body > .global'));

const $tabBar = $('.app2 > .tab-bar');
const $tabConent = $('.app2 > .tab-content');

$tabBar.on('click', 'li', (event) => {
    const $li = $(event.currentTarget);
    // 找到用户所选的节点
    const index = $li.index();
    localStorage.setItem('app2.index', index);
    $tabConent.children().eq(index).addClass('active')
        .siblings().removeClass('active');
    $tabBar.children().eq(index).addClass('selected')
        .siblings().removeClass('selected');
});

//通过代码触发第一个孩子的click事件
$tabBar.children().eq(localStorage.getItem('app2.index') || 0).trigger('click');