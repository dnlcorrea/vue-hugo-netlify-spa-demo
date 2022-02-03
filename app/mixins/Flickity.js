
const flick = {
  data() {
    return {
      id: 0
    }
  },
  mounted() {
    this.id = this._uid;
    
    setTimeout(() => {
      this.flicker = new Flickity('.flickity-mobile-' + this._uid, {
        wrapAround: true,
        cellAlign: 'left',
        groupCells: window.innerWidth > 959 ? 3 : 1,
      })
    }, 500);

  },
}
export default flick;