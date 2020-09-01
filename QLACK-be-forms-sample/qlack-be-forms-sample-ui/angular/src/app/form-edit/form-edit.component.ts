import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.scss']
})
export class FormEditComponent implements OnInit {
  iframeSrcEdit: any;
  queryParams: ParamMap;

  constructor(public activatedRoute: ActivatedRoute, private sanitizer: DomSanitizer) {
    this.activatedRoute.paramMap.subscribe(params => {
      this.queryParams = params;
      console.log(this.queryParams);
    });

    this.iframeSrcEdit = this.sanitizer.bypassSecurityTrustResourceUrl(
      'http://localhost:8081/fr/' + this.queryParams.get('app') + '/' + this.queryParams.get(
      'form') + '/edit/' + this.queryParams.get('id'));
    console.log(this.iframeSrcEdit);
  }

  ngOnInit() {

  }

}
