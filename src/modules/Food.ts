//食物类
class Food {
    //定义一个属性表示食物所对应的元素
    ele: HTMLElement
    constructor() {

        // 获取food元素并将其赋值给ele
        this.ele = document.getElementById("food")!
    }

    //定义一个获取食物X轴坐标的方法
    get X() {
        return this.ele.offsetLeft
    }

    //定义一个获取食物Y轴坐标的方法
    get Y() {
        return this.ele.offsetTop
    }

    //修改食物位置的方法
    change() {
        //生成一个随机数
        //食物的位置最小是0，最大是300
        //蛇移动一次就是一个，一格大小就是10，所以就要求食物必须是整10

        // 修改X轴坐标
        let left = Math.round(Math.random() * 29) * 10
        this.ele.style.left = left + 'px'

        // 修改Y轴坐标
        let top = Math.round(Math.random() * 29) * 10
        this.ele.style.top = top + 'px'
    }
}
export default Food