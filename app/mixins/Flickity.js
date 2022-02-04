
const flick = {
  data() {
    return {
      id: 0
    }
  },
  methods: {
    makeFlickity() {
       this.flicker = new Flickity('.flickity-mobile-' + this._uid, {
        wrapAround: true,
        cellAlign: 'left',
      })
    }
  },
  mounted() {
    this.id = this._uid;
    if (innerWidth < 769) {
      setTimeout(() => {
        this.makeFlickity();
      }, 500);
    }
     
    addEventListener('resize', this.makeFlickity)
  },
}
export default flick;