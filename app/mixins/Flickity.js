
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
    
    if (innerWidth <= 1024) {
      setTimeout(() => {
        this.makeFlickity();
      }, 500);

      setTimeout(() => {
        document.querySelectorAll('.flickity-slider .flex').forEach(element => {
          element.style.height = '100%'
        })
      }, 800);
    }
     
    addEventListener('resize', this.makeFlickity)
  },
}
export default flick;