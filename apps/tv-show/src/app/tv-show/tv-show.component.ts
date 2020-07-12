import { Component, OnInit } from '@angular/core';
import { TvShow } from '@thirty/api-interfaces';
import { TvShowService, SnackBarService } from '@thirty/core-data';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'thirty-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.scss']
})
export class TvShowComponent implements OnInit {
  title = 'TvShow Store';
  selectedTvShow: TvShow;
  tvshowForm: FormGroup
  tvshow$: Observable<TvShow[]>;

  constructor(private tvshowService: TvShowService, private formBuilder: FormBuilder, public snackBarService: SnackBarService) { }

  ngOnInit(): void {
    this.creatFormGroup();
    this.refresh();
  }

  deleteTvShow(tvshow:TvShow) {
    this.tvshowService.deleteTvShow(tvshow)
    .subscribe( m => {
      this.refresh();
    });
  }

  saveTvShow() {
    const tvshow = this.tvshowForm.value;

    this.snackBarService.openSnackBar("TvShow Saved!", "Okay", 2000)

    if(tvshow.id !== null){
      this.tvshowService.updateTvShow(tvshow)
      .subscribe( m => {
        this.refresh();
      });
    } else {
      this.tvshowService.createTvShow(tvshow)
      .subscribe( m => {
        this.refresh();
      });
    }
  }

  refresh(){
    this.loadTvShows();
    this.resetForm();
  }

  creatFormGroup(){
    this.tvshowForm = this.formBuilder.group({
      id: [],

      name: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
      type: new FormControl('', [
        Validators.required,
      ]),
      price: new FormControl(0, [
        Validators.required,
      ]),
      stars: new FormControl(1, [
        Validators.required,
      ]),
    })
  }

  resetForm() {
    this.tvshowForm.patchValue({});
  }

  selectTvShow(tvShow: TvShow) {
    this.tvshowForm.patchValue(tvShow);
  }

  loadTvShows(): void{
    this.tvshow$ = this.tvshowService.getTvShows();
  }

}
