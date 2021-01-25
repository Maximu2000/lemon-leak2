sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    mySprite.startEffect(effects.spray, 200)
    info.changeScoreBy(1)
})
let projectile: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(10)
mySprite = sprites.create(img`
    4 4 4 . . 4 4 4 4 4 . . . . . . 
    4 5 5 4 4 5 5 5 5 5 4 4 . . . . 
    b 4 5 5 1 5 1 1 1 5 5 5 4 . . . 
    . b 5 5 f 5 1 1 5 f 1 1 5 4 . . 
    . b d 5 f 5 5 5 5 f 5 1 1 5 4 . 
    b 4 5 5 5 5 5 5 5 5 5 5 1 5 4 . 
    c d 5 5 5 f f f f 5 5 5 5 5 5 4 
    c d 4 5 5 5 5 9 5 5 5 5 5 1 5 4 
    c 4 5 5 5 d 5 9 9 5 5 5 5 5 5 4 
    c 4 d 5 4 5 d 5 9 5 5 5 5 5 5 4 
    . c 4 5 5 5 5 d d 9 5 5 5 5 5 b 
    . c 4 d 5 4 5 d 4 9 d 5 5 5 4 c 
    . . c 4 4 d 4 4 4 9 4 d d 5 d c 
    . . . c 4 4 4 4 4 4 9 4 5 5 5 4 
    . . . . c c b 4 4 4 9 b 4 5 4 4 
    . . . . . . c c c c c 9 b b 4 . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
info.startCountdown(30)
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSide(img`
        . . . . . . . 6 . . . . . . . . 
        . . . . . . 8 6 6 . . . 6 8 . . 
        . . . e e e 8 8 6 6 . 6 7 8 . . 
        . . e 2 2 2 2 e 8 6 6 7 6 . . . 
        . e 2 f 4 4 2 7 f 7 7 7 8 6 . . 
        . e 2 f 4 2 6 7 f 7 6 7 6 8 8 . 
        e 2 4 5 2 2 6 7 7 6 f 7 7 6 . . 
        e 2 4 4 2 2 6 7 6 f 2 6 7 7 6 . 
        e f f f f f f f f f 2 e 7 7 6 . 
        e 2 4 2 2 4 2 2 9 f 2 2 e 7 6 . 
        e 2 4 2 2 2 2 9 2 2 f 2 e c 6 . 
        e 2 2 2 2 2 2 2 9 e 2 e e c . . 
        e e 2 e 2 2 4 2 9 e e e c . . . 
        e e e e 2 e 2 2 9 e e c . . . . 
        e e e 2 e e c e c c c . . . . . 
        . c c c c c c c . . . . . . . . 
        `, randint(-50, 50), randint(-50, 50))
})
