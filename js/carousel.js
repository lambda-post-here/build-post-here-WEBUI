class Carousel {
    constructor(carouselElement){
        this.carouselElement = carouselElement;

        //select right button from the carousel
        this.right = this.carouselElement.querySelector('.right-button');

        //select left button from the carousel
        this.left = this.carouselElement.querySelector('.left-button');

        //select all the images from the carousel
        this.images = this.carouselElement.querySelectorAll('img')
        
       //set currentIndex 
        this.currentIndex = 0;

        //set an image on the page initially
        this.images[this.currentIndex].style.display = "flex"

        //event listeners on the right and left button
        this.right.addEventListener('click', () => this.increment())
        this.left.addEventListener('click',() => this.decrement())
    }

    

    increment(){
        //set current image display to none
        this.images[this.currentIndex].style.display="none"

        //increment the currentIndex after the right click
        this.currentIndex +=1;
        
        //if currentIndex exceeds the length of the images set the current index to 0
        if (this.currentIndex >= this.images.length){
            this.currentIndex = 0;
        }
        
        //set the display of the current image to flex
        this.images[this.currentIndex].style.display="flex"
        
        
        
    }

    decrement(){
        //set current image display to none
        this.images[this.currentIndex].style.display="none"

        //decrement the currentIndex after the right click
        this.currentIndex--;
        
        //if currentIndex is less than 0, set the current index to the last image index
        if (this.currentIndex < 0){
            this.currentIndex = this.images.length-1;
        }

        //set the display of the current image to flex
        this.images[this.currentIndex].style.display="flex"
        // this.images[this.currentIndex].style.transiton="left 1s ease-in-out"
        // this.images[this.currentIndex].style.transitionProperty="left"
        // this.images[this.currentIndex].style.transitionDuration="2s"
        // this.images[this.currentIndex].style.transitionTimingFunction="ease-out"
        
       
    }

}

let carousel = document.querySelector('.carousel');

new Carousel(carousel)