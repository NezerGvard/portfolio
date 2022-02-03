let ladder = {
    step: 0,
    up: function (){
        this.step++
    },
    down: function (){
        this.step--
    },
    showStep: function (){
        alert(this.step)
    }
}
