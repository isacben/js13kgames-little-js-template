'use strict';

class Player extends EngineObject
{
    /** Player object
     *  @param {Vector2} pos - World space position of the player */
    constructor(pos)
    {
        super(pos, playerSize, tile(0)); // set object position and size
        this.setCollision();
        this.color = playerColor;
    }

    collideWithObject(o) {
    }

    update() {
        this.pos.x = lerp(0.1, this.pos.x, mousePos.x); // move paddle to mouse
        
        // clamp player to level size
        this.pos.x = clamp(this.pos.x, this.size.x/2, levelSize.x - this.size.x/2);
    }
}