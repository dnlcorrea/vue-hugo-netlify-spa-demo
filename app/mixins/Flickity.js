
const flick = {
  data() {
    return {
      id: 0
    }
  },
  methods: {
    makeFlickity() {
      
      this.flicker = new Flickity('.flickity-mobile-' + this.id, {
        wrapAround: true,
        cellAlign: 'left',
        groupCells: true
        
      })
    }
  },
  mounted() {
    this.id = this._uid;
    
    setTimeout(() => {
      let ableToFlick;
      
      if (innerWidth > 1904) {
        ableToFlick = this.itemsCount > 4
      }else if (innerWidth > 1264) {
        ableToFlick = this.itemsCount > 3
      } else if (innerWidth > 960) {
        ableToFlick = this.itemsCount > 2
      } else {
        ableToFlick = this.itemsCount > 1
      }
      console.log(this.doFlick, this.cursos, this.itemsCount)
      
      if (ableToFlick && this.doFlick) {
        this.makeFlickity();
        
        setTimeout(() => {
          document.querySelectorAll('.flickity-slider .flex').forEach(element => {
            element.style.height = '100%'
          })
        }, 800);
        
        addEventListener('resize', this.makeFlickity)
      }
    }, 1000);
    
  },
}
export default flick;