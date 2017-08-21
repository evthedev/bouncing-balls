var canvas = document.querySelector('canvas')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

var c = canvas.getContext('2d')
c.fillStyle = "rgba(255, 122, 321, 0.4)"
c.fillRect(100, 100, 200, 200)
c.fillStyle = "rgba(192, 122, 121, 0.8)"
c.fillRect(10, 10, 20, 20)

c.beginPath()
c.moveTo(80, 100)
c.lineTo(180, 180)
c.lineTo(10, 80)
c.strokeStyle = "#333"
c.stroke()

function Circle(x, y, radius, dx, dy) {
    this.x = x
    this.y = y
    this.dy = dy
    this.dx = dx
    this.radius = radius

    this.draw = function() {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, 270, false)
        c.strokeStyle = "red"
        c.stroke()
    }
    this.update = function() {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx
        }
        this.x += this.dx

        if (this.y + this.radius > innerHeight || this.y + this.radius < 0) {
            this.dy = -this.dy
        }
        this.y += this.dy

        this.draw()
    }
}

var circleArray = []

for (var i = 0; i < 100; i ++) {
    circleArray.push(new Circle((Math.random() * window.innerWidth), (Math.random() * window.innerHeight), 30, (Math.random() * 3), (Math.random() * 3)))
}

(function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, innerWidth, innerHeight)
    
    for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].update()
    }
})()