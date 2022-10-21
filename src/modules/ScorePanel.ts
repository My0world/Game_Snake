import Snake from './Snake';
//分数牌
class ScorePanel {

    //蛇
    snake : Snake

    //score和level用来记录分数和等级
    score = 0
    level = 1

    //分数和等级所在的元素，在构造函数中进行初始化
    scoreEle: HTMLElement
    levelEle: HTMLElement

    //设置一个变量限制等级
    maxLevel: number

    //设置一个变量表示多少分时升级
    upScore: number

    constructor(maxLevel = 270, upScore = 10) {
        this.snake = new Snake()
        this.scoreEle = document.getElementById("score")!
        this.levelEle = document.getElementById("level")!
        this.maxLevel = maxLevel
        this.upScore = upScore
    }

    //加分的方法
    AddScore() {
        if (this.score <= 99999) {
            //使分数自增
            this.scoreEle.innerHTML = ++this.score + ""
            if (this.score % this.upScore === 0) {
                this.UpLevel()
            }
        } else {
            alert("你真闲")
            this.score = 0
            this.scoreEle.innerHTML = ++this.score + ""
            this.level = 0
            this.levelEle.innerHTML = ++this.level + ""
        }

    }

    //提升等级的方法
    UpLevel() {
        if (this.level < this.maxLevel) {
            this.levelEle.innerHTML = ++this.level + ""
            this.snake.addBody()
        }
    }
}
export default ScorePanel