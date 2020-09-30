function update()
{
    var delta = clock.getDelta(); // seconds.
    var moveDistance = 50 * delta; // 200 pixels per second
    var rotateAngle = Math.PI / 2 * delta * 2;   // pi/2 radians (90 degrees) per second

    if (keyboard.pressed("left"))
        player1.turnLeft(rotateAngle);
        badAngle = Math.round((rotateAngle * 20) % 2)

        //if (badAngle == 1)
        //    bad1.turnLeft(rotateAngle);
        //else {
        //    bad1.turnRight(rotateAngle);
        //}
    if (keyboard.pressed("right"))
        player1.turnRight(rotateAngle);
        badAngle = Math.round((rotateAngle * 20) % 2)
        //if (badAngle == 0)
        //    bad1.turnRight(rotateAngle);
        //else {
        //    bad1.turnLeft(rotateAngle);
        //}
    if (keyboard.pressed("up"))
        player1.accelerate(moveDistance);
    if (keyboard.pressed("down"))
        player1.decelerate(moveDistance);


    player1.move();
    bad1.move()
    controls.update();
}
