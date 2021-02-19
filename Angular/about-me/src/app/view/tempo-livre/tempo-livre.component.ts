import { TempoLivreService } from './tempo-livre.service';
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-tempo-livre',
  templateUrl: './tempo-livre.component.html',
  styleUrls: ['./tempo-livre.component.css'],
})
export class TempoLivreComponent implements OnInit {
  toolTipGameText: string = "click :)"
  primary: string = '#673ab7'
  position = "right"
  path = ""
  posterBaseUrl: string = "https://www.themoviedb.org/t/p/original"
  movies: string[] = ["807", "155", "346364", "68718", "515001"]
  moviesDetails: any = []
  series: string[] = ["60625", "76479", "1399", "67744", "82856"]
  seriesDetails: any = []
  books: string[] = ["0007637705", "9788598078397", "853251166X", "0451159276", "8562936529"]
  booksDetails: any = []



  changeWallpaper(wallpaper: string, linkToGif: string): void {
    const nameImg = wallpaper
    // ========= To Pic =========
    document.querySelector<HTMLElement>(
      '.navbar-sidenav-content'
    ).style.backgroundImage = `url("../../../assets/img/${nameImg}")`

    document.querySelector<HTMLElement>(
      '.navbar-sidenav-content'
    ).style.backgroundRepeat = "no-repeat"

    document.querySelector<HTMLElement>(
      '.navbar-sidenav-content'
    ).style.backgroundSize = "cover"
    // ========= To Pic =========

    // ========= To Gif =========
    this.path = linkToGif
    // ========= To Gif =========

  }

  restoreWallpaper() {

    document.querySelector<HTMLElement>(
      '.navbar-sidenav-content'
    ).style.backgroundImage = ""

  }


  onTabClick(event) {
    if (event.index !== 0) {
      this.restoreWallpaper()
    }
  }

  constructor(private service: TempoLivreService) {
  }

  getMovies() {
    this.movies.forEach(movie => {
      this.service.getMovie(movie, 'movie').subscribe(movieReturned => {

        this.moviesDetails.push({
          title: movieReturned.title,
          subtitle: movieReturned.tagline,
          titleTag: this.returnTitleTag(movieReturned.tagline),
          overview: movieReturned.overview,
          posterPath: this.posterBaseUrl + movieReturned.poster_path

        })

      })
    })
  }

  getSeries() {
    this.series.forEach(serie => {
      this.service.getMovie(serie, 'tv').subscribe(serieReturned => {

        this.seriesDetails.push({
          title: serieReturned.name,
          subtitle: serieReturned.tagline != "" ? serieReturned.tagline : "No Tagline",
          overview: serieReturned.overview,
          titleTag: this.returnTitleTag(serieReturned.tagline),
          posterPath: this.posterBaseUrl + serieReturned.poster_path

        })

      })
    })
  }

  getBook() {
    let bookRetruned
    this.books.forEach(book => {
      this.service.getBooks(book).subscribe(bookDetail => {
        bookRetruned = bookDetail[`ISBN:${book}`]
        this.booksDetails.push({
          title: bookRetruned.title,
          author: bookRetruned["authors"][0]['name'],
          cover: bookRetruned.cover.large,
          numpags: "Total de páginas: " + bookRetruned.number_of_pages
        })
      })
    })
    console.log(this.booksDetails)
  }

  returnTitleTag(tagline: string) {
    if (tagline.split('').length > 37) {
      return true
    } else {
      return false
    }
  }



  ngOnInit(): void {
    this.getMovies()
    this.getSeries()
    this.getBook()
  }
}
