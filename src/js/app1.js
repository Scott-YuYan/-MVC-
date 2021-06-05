import '../css/app1.css'
import $ from 'jquery'

const eventBus = $({});

//数据相关的放在M中
const m = {
    data: {
        num: parseInt(localStorage.getItem('num') || 100)
    },
    create(){},
    delete(){},
    update(data){
        Object.assign(m.data,data);
        eventBus.trigger('updated');//触发updated事件
    },
    select(){}
};


//视图相关的放在V中
const v = {
    el: null,
    html: `
    <div class="output">
        <span id='num'>{{n}}</span>
    </div>
    <div class="actions">
        <button id="add1">+1</button><button id="minus1">-1</button>
        <button id="multiply2">*2</button><button id="divide2">/2</button>
    </div>
`,
    init(el) {
        this.el = $(el);
    },
    render(n) {
        if (v.el.children.length !== 0) {
            v.el.empty();
        }
        $(v.html.replace('{{n}}', n)).appendTo($(v.el));
    },
};

//其他放在c中
const c = {
    init(el) {
        v.init(el);
        v.render(m.data.num);
        c.autoBindEvents();
        eventBus.on('updated',()=>{
            v.render(m.data.num);
            localStorage.setItem('num',m.data.num.toString())
        })
    },
    events: {
        'click #add1': 'add',
        'click #minus1': 'minus',
        'click #multiply2': 'multiply',
        'click #divide2': 'divide'
    },
    add() {
        m.update({num:m.data.num +1});
    },
    minus() {
        m.update({num:m.data.num -1});
    },
    multiply() {
        m.update({num:m.data.num *2});
    },
    divide() {
        m.update({num:m.data.num /2});
    },
    autoBindEvents() {
        for (let key in c.events){
            let value = c[(c.events[key])];
            let array = key.split(" ");
            v.el.on(array[0],array[1],value);
        }
    }
};
export default c;





