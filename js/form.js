class Form{
    constructor(){

    this.sel = createSelect();

    this.playButton = createButton("Play!");

    }

    display(){
        var title = createElement('h2','HangMan Game');
        title.position(width/2 - 25, height/5 - 115 );

        this.sel.position(width/2 - 25 ,height/2);
        this.sel.option('Seven Wonders Of The World');
        this.sel.option('Programming Languages');
        this.sel.selected('Programming Languages');
        this.playButton.position(width/2 + 50,height/2 + 150);

        this.playButton.mousePressed(()=>{
            this.sel.hide();
            this.playButton.hide();
            //console.log("working")
            lang.display();
        })

    }
}