'use strict';

const levelSize = vec2(20, 40); // size of play area
const playerSize = vec2(1.4,2);
const playerInit = vec2(18, 8); // ori: 1.5

const bgColor = new Color(0.047, 0.058, 0.039);
const playerColor = new Color(0.254, 0.917, 0.831);

// Sound effects
const deaf_sound = new Sound([0]);
const sound_button = new Sound([2.5,,113,.03,.02,.008,1,2.1,,7,141,.13,,,,.4,,.67,.02,.05,-1492]);

let state, stage, firstStage, menu, player;
const song = new MusicPlayer([[[,0,232,.01,.09,.15,2,,,,,,154.87,,,,.26],[2,0,4e3,,,.03,2,1.25,,,,,.02,6.8,-.3,,.5],[,0,232,.01,.09,.15,2,,,,,,154.87,,,,.26],[.8,0,2100,,,.2,3,3,,,-400,,,2],[,0,740,,,.15,2,.2,-.1,-.15,9,.02,,.1,.12,,.06]],[[[,-1,10,,10,,10,,10,,10,,10,,10,,10,,8,,8,,8,,8,,8,,8,,8,,8,,7,,7,,7,,7,,7,,7,,7,,7,,6,,6,,6,,6,,6,,6,,6,,6,,],[2,-.3,17,,,,,,17,,,,,,,,17,,15,,,,,,15,,,,,,,,15,,13,,,,,,13,,,,,,,,13,,12,,,,,,12,,,,,,,,12,,],[1,1,,,,,10,,,,,,,,10,,10,,,,,,8,,,,,,,,8,,8,,,,,,7,,,,,,,,7,,7,,,,,,6,,,,,,,,6,,6,,],[3,.5,22,,,,,,,,,,,,,,22,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,22,,,,,,,,,,,,,,,,,,]],[[,-1,10,,10,,10,,10,,10,,10,,10,,10,,8,,8,,8,,8,,8,,8,,8,,8,,7,,7,,7,,7,,7,,7,,7,,7,,6,,6,,6,,6,,6,,6,,6,,6,,],[2,-.3,17,,,,,,17,,,,,,,,17,,15,,,,,,15,,,,,,,,15,,13,,,,,,13,,,,,,,,13,,12,,,,,,12,,,,,,,,12,,],[1,1,,,,,10,,,,,,,,10,,10,,,,,,8,,,,,,,,8,,8,,,,,,7,,,,,,,,7,,7,,,,,,6,,,,,,,,6,,6,,],[3,.5,22,,,,,,,,,,,,,,22,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,22,,,,,,,,,,,,,,,,,,],[,,22,,,,24,,25,,,,22,,,,,,27,,,,29,,27,,,,,,,,,,22,,,,24,,25,,,,22,,,,,,27,,,,25,,24,,,,,,,,,,]],[[,-1,10,,10,,10,,10,,10,,10,,10,,10,,8,,8,,8,,8,,8,,8,,8,,8,,7,,7,,7,,7,,7,,7,,7,,7,,6,,6,,6,,6,,6,,6,,6,,6,,],[2,-.3,17,,,,,,17,,,,,,,,17,,15,,,,,,15,,,,,,,,15,,13,,,,,,13,,,,,,,,13,,12,,,,,,12,,,,,,,,12,,],[1,1,,,,,10,,,,,,,,10,,10,,,,,,8,,,,,,,,8,,8,,,,,,7,,,,,,,,7,,7,,,,,,6,,,,,,,,6,,6,,],[3,.5,22,,,,,,,,,,,,,,22,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,22,,,,,,,,,,,,,,,,,,],[,,29,,,,27,,25,,,,22,,,,,,27,,,,29,,27,,,,,,,,,,25,,,,27,,25,,,,22,,,,,,27,,,,25,,24,,,,,,,,,,]],[[,-1,10,,10,,10,,10,,10,,10,,10,,10,,8,,8,,8,,8,,8,,8,,8,,8,,7,,7,,7,,7,,7,,7,,7,,7,,6,,6,,6,,6,,6,,6,,6,,6,,],[2,-.3,17,,,,,,17,,,,,,,,17,,15,,,,,,15,,,,,,,,15,,13,,,,,,13,,,,,,,,13,,12,,,,,,12,,,,,,,,12,,],[1,1,,,,,10,,,,,,,,10,,10,,,,,,8,,,,,,,,8,,8,,,,,,7,,,,,,,,7,,7,,,,,,6,,,,,,,,6,,6,,],[3,.5,22,,,,,,,,,,,,,,22,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,22,,,,,,,,,,,,,,,,,,],[,,22,,25,,22,,25,,22,,25,,22,,25,,20,,25,,20,,25,,20,,25,,20,,25,,13,,13,,13,,13,,13,,13,,13,,13,,15,,15,,13,,15,,9,,9,,12,,9,,]]],[0,0,1,1,2,2,3,3,1,2,3,3],,{"title":"New Song","instruments":["Hall Brass","Hihat","Hall Brass","Hihat Open","Flute"],"patterns":["Pattern 0","Pattern 1","Pattern 2","Pattern 3"]}]);

function gameInit() {
    cameraPos = levelSize.scale(.5); // center camera in level
    canvasFixedSize = vec2(720, 1280); // use a 720p fixed size canvas

    menu = new Menu(cameraPos, playerColor);

    // initial configuation
    state = "title";

    player = new Player(playerInit);

    // if (!song.playing()) song.play();
}

function gameUpdate() {
    if (keyWasPressed("Enter") && !menu.isActive()) {
        menu.show();
        state = "menu";
    }
    if (keyWasPressed("KeyQ") && menu.isActive()) {
        menu.hide();
        state = "title";
    }

    switch (state) {
        case "title":
            titleScene();
            break;
    }
}

function gameUpdatePost()
{
    // called after physics and objects are updated
    // setup camera and prepare for render
}

function gameRender()
{
    // called before objects are rendered
    // draw any background effects that appear behind objects
    drawRect(cameraPos, vec2(21.1,50), playerColor); // draw external border 
    drawRect(cameraPos, vec2(21,50), bgColor); // draw black area between borders border
    drawRect(cameraPos, vec2(20.1,50), bgColor); // draw internal black border 

}

function gameRenderPost() {
    // called after objects are rendered
    // draw effects or hud that appear above all objects

    if (menu.isActive()) menu.show();

    switch (state) {
        case "title":
            break;
        case "menu":
            break;
    }
}

// Startup LittleJS Engine
engineInit(gameInit, gameUpdate, gameUpdatePost, gameRender, gameRenderPost);