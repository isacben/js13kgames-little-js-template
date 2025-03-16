'use strict';

class Menu
{
    constructor(cameraPos, bgColor)
    {
        this.cameraPos = cameraPos;
        this.bgColor = bgColor;
        this.active = false;
    }

    show() {
        this.render();
        this.active = true;
    }

    hide()
    {
        console.log("hide the menu");
        this.active = false;
    }

    isActive() {
        return this.active;
    }

    render() {
        drawRect(this.cameraPos, vec2(10,10), this.bgColor);
    }
}