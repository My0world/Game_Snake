import Food from './Food';
import ScorePanel from './ScorePanel';
import Snake from './Snake';

//游戏控制器，控制其他的所有类
class GameControl {

    //定义3个属性

    //蛇
    snake: Snake

    //食物
    food: Food

    //积分牌
    scorePanel: ScorePanel

    // 创建一个属性来存储蛇的移动方向（也就是按键的方向）
    direction: string = ''

    //蛇是否存活 （游戏是否结束）
    isLive = false

    constructor() {
        this.snake = new Snake()
        this.food = new Food()
        this.scorePanel = new ScorePanel()

        //开始游戏
        this.init()
    }

    //游戏的初始化方法，调用后游戏即开始
    init() {

        //绑定键盘按钮按下的事件
        document.addEventListener('keydown', this.keydownHandler.bind(this))
        this.isLive = true
        this.run()
    }

    //创建一个键盘按下的响应函数
    /*
        ArrowUp
        ArrowDown
        ArrowRight
        ArrowLeft
    */
    keydownHandler(event: KeyboardEvent) {

        //需要检查event.key的值是否合法（用户是否按了正确的按键）
        //修改direction
        this.direction = event.key
    }

    //创建一个控制蛇移动的方法
    run() {

        /*
        根据方向（this.direction）来使蛇的位置改变
        向上top减少
        向下top增加
        向左left减少
        向右left增加
        */

        //获取蛇现在坐标
        let X = this.snake.X
        let Y = this.snake.Y

        //判断是否吃到食物
        this.checkEat(X,Y)

        //根据按键方向来修改X的值和Y值
        switch (this.direction) {

            //向上移动
            case "ArrowUp": Y -= 10;
                break;

            //向下移动
            case "ArrowDown": Y += 10;
                break;

            //向左移动
            case "ArrowLeft": X -= 10;
                break;

            //向右移动
            case "ArrowRight": X += 10;
                break;
        }

        try {
            
            //修改蛇的X和Y
            this.snake.X = X
            this.snake.Y = Y
        } catch (error) {

            //撞墙弹出窗口
            alert(error)
            
            //蛇死亡，游戏结束
            this.isLive = false
        }


        //存活时开启一个定时器调用，否则游戏结束
        this.isLive && setTimeout(this.run.bind(this), 500 - (this.scorePanel.level - 1) * 5);
    }

    //定义一个方法，用来坚持蛇是否吃到食物
    checkEat(x: number , y: number){
        if(x === this.food.X && y === this.food.Y){
            this.food.change()
            this.scorePanel.AddScore()
        }
    }
}
export default GameControl