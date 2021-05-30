import '../css/app2.css'
import $ from 'jquery'

const $tabBar = $('.app2 > .tab-bar');
const $tabConent = $('.app2 > .tab-content');

$tabBar.on('click', 'li', (event) => {
    const $li = $(event.currentTarget);
    // 找到用户所选的节点
    const index = $li.index();
    $tabConent.children().eq(index).addClass('active')
        .siblings().removeClass('active');
    $tabBar.children().eq(index).addClass('selected')
        .siblings().removeClass('selected');
});

//通过代码触发第一个孩子的click事件
$tabBar.children().eq(0).trigger('click');