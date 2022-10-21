// 蛇类
class Snake {

    //表示蛇头的元素
    head: HTMLElement

    //蛇的身体（包括蛇头）
    bodies: HTMLCollection

    //获取蛇的容器
    element: HTMLElement

    constructor() {
        this.element = document.getElementById("snake")!
        this.head = document.querySelector('#snake > div') as HTMLElement
        this.bodies = this.element.getElementsByTagName("div")
    }

    //获取蛇的X坐标（蛇头坐标）
    get X() {
        return this.head.offsetLeft
    }

    //获取蛇的Y坐标（蛇头坐标）
    get Y() {
        return this.head.offsetTop
    }

    //设置蛇的X坐标（蛇头坐标）
    set X(v: number) {

        //如果新值和旧值一样，则不修改
        if (this.X === v) {
            return
        }

        //撞墙
        if (v < 0 || v > 290) {
            //进入判断说明蛇撞墙，抛出错误
            throw ("蛇撞墙了")
        }

        //修改X时，是在修改水平坐标，蛇在左右移动，蛇向左移动时，不能向右掉头，反之亦然
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === v) {

            //如果发生了掉头，让蛇向反方向继续移动
            if (v > this.X) {

                //如果发生了掉头，让蛇向反方向继续移动
                v = this.X - 10
            } else {

                //向左走
                v = this.X + 10
            }

        }

        // 移动身体
        this.moveBody()

        this.head.style.left = v + 'px'

        //检查有没有撞到自己
        this.checkHeadBody()
    }

    //设置蛇的Y坐标（蛇头坐标）
    set Y(v: number) {

        //如果新值和旧值一样，则不修改
        if (this.Y === v) {
            return
        }

        //撞墙
        if (v < 0 || v > 290) {
            //进入判断说明蛇撞墙，抛出错误
            throw ("蛇撞墙了")
        }

        //修改y时，是在修改垂直坐标，蛇在上下移动，蛇向上移动时，不能向下掉头，反之亦然
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === v) {

            //如果发生了掉头，让蛇向反方向继续移动
            if (v > this.Y) {

                //如果发生了掉头，让蛇向反方向继续移动
                v = this.Y - 10
            } else {

                //向下走
                v = this.Y + 10
            }

        }

        // 移动身体
        this.moveBody()

        this.head.style.top = v + 'px'

        //检查有没有撞到自己
        this.checkHeadBody()
    }

    //蛇增加身体的方法
    addBody() {

        //向element添加一个div
        this.element.insertAdjacentHTML("beforeend", "<div></div>")
    }

    //回到原来的位置
    SnakeReturn() {
        this.head.style.top = 0 + 'px'
        this.head.style.left = 0 + 'px'
    }

    //移动身体
    moveBody() {
        for (let i = this.bodies.length - 1; i > 0; i--) {
            /*
                将后边身体设置为其那边身体
            */

            //获取前边身体的位置
            let X: number = (this.bodies[i - 1] as HTMLElement).offsetLeft;
            let Y: number = (this.bodies[i - 1] as HTMLElement).offsetTop;

            //将值设置到当前身体上
            (this.bodies[i] as HTMLElement).style.left = X + 'px';
            (this.bodies[i] as HTMLElement).style.top = Y + 'px';
        }
    }

    //检查是否撞到自己
    checkHeadBody() {

        //获取所有的身体，检查其是否和蛇头的坐标重叠
        for (let i = 1; i < this.bodies.length; i++) {
            let bd = this.bodies[i] as HTMLElement
            if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {

                //进入判断说明蛇头撞到身体了，游戏结束
                throw ("撞到自己了")
            }

        }
    }
}
export default Snake