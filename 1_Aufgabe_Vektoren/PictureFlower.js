    function PictureFlower(x, y, img){
       this.x = x;
       this.y = y;
       this.img = img;

        this.display = function(){
            image(this.img, this.x, this.y);
        }
    }