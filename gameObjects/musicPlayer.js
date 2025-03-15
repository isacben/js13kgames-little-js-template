'use strict';

class MusicPlayer extends Music
{
    constructor(zzfxMusic) {
        super(zzfxMusic);
        this.isPlaying = false;
    }

    play() {
        if (!this.isPlaying) {
            super.playMusic(.5, true);
            this.isPlaying = true;
        }
    }

    stop() {
        if (this.isPlaying) {
            super.stop();
            this.isPlaying = false;
        }
    }

    playing() {
        return this.isPlaying;
    }
}