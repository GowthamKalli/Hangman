class Languages{
    constructor(){
        this.lanuages=['python','java','javascript','html','ruby','swift','sql'];
        this.ans1=['p','y','t','h','o','n'];
        this.ans2=['j','a','v','a'];
        this.ans3=['j','a','v','a','s','c','r','i','p','t'];
        this.ans4=['h','t','m','l'];
        this.ans5=['r','u','b','y'];
        this.ans6=['s','w','i','f','t'];
        this.ans7=['s','q','l'];
        this.letters=[];

        for(var i = 'a'; i <= 'z'; i++){
            this.letters[i] = createButton(i);
            
        }

    }

    display(){

        for(var i = 0; i < this.letters.length; i++){
            var x = 40
            this.letters[i].position( x + 40,400);
        }




    }

}