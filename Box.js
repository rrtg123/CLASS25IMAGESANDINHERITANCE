class Box extends baseC{
  constructor(x, y, width, height) {
    super(x,y,width,height);
     this.image=loadImage("sprites/wood1.png");
  }
}
//super=super is used to transfer all the properties of parent class to child class through the parent class constructor