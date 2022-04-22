const app = new Vue({
    el: "#app",
    data:{
        watchList:[
            {
                id: 1,
                title: 'Everything Everywhere All at Once',
                director: 'Daniel Scheinert, Daniel Kwan',
                seen: false
            },
            {
                id: 2,
                title: 'Popstar: Never Stop Never Stopping',
                director: 'Akiva Shaffer, Jorma Taccone',
                seen: true
            },
            {
                id: 3,
                title: 'Fantastic Mr. Fox',
                director: 'Wes Anderson',
                seen: false
            },
            {
                id: 4,
                title: 'The Florida Project',
                director: 'Sean Baker',
                seen: false
            },
            {
                id: 5,
                title: 'Jojo Rabbit',
                director: 'Taika Waitit',
                seen: true
            },
            {
                id: 6,
                title: 'The Grand Budapest Hotel',
                director: 'Wes Anderson',
                seen: true
            },
            {
                id: 7,
                title: 'Us',
                director: 'Jordan Peele',
                seen: false
            },
        ],
        newFilmTitle: '',
        newFilmDirector:'',
    },
    methods:{
        removeFilm(index){
            this.watchList.splice(index, 1);
        },
        defineFilmId(){
            if(this.watchList.length > 0){
                filmId = this.watchList.reduce((a, item) => item.id + 1);
            } else {
                filmId = 1;
            }
            return filmId
        },
        addFilm(){
            let filmId = this.defineFilmId()
            if (this.newFilmTitle.length > 0 && this.newFilmDirector.length > 0){
                const film = {
                    id: filmId,
                    title: this.newFilmTitle,
                    director: this.newFilmDirector,
                    seen: false,
                };
                console.log(film)
                this.watchList.push(film);
                this.newFilmDirector = '';
                this.newFilmTitle = '';
            };
        },
   },
})
