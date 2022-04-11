
const flick = {
  data() {
    return {
      id: 0,
      loaded: false,
      ableToFlick: false
    }
  },
  methods: {
    makeFlickity() {
      
      this.flicker = new Flickity('.flickity-mobile-' + this.id, {
        wrapAround: true,
        cellAlign: 'left',
        groupCells: true
        
      })
    },
    setHeight() {
      document.querySelectorAll('.flickity-slider .flex').forEach(element => {
        element.style.height = '100%'
      })
    },
    start(){
      this.makeFlickity()
      setTimeout(() => {
        this.setHeight()
      }, 800);
      this.loaded = true
      
    }
  },
  mounted() {
    this.id = this._uid;
    
    setTimeout(() => {
      
      if (innerWidth > 1904) {
        this.ableToFlick = this.itemsCount > 4
      }else if (innerWidth > 1264) {
        this.ableToFlick = this.itemsCount > 3
      } else if (innerWidth > 960) {
        this.ableToFlick = this.itemsCount > 2
      } else {
        this.ableToFlick = this.itemsCount > 1
      }
      
      if (this.ableToFlick && this.doFlick) {
        
        this.makeFlickity()
        this.start()
        
        
        setTimeout(() => {
          this.start()
        }, 2000);
        
        addEventListener('resize', () => {
          this.start()
        })
      } else {
        this.loaded = true
      }
    }, 1000);
    
  },
}
export default flick;