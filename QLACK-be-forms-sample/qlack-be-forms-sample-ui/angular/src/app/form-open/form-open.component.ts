import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DomSanitizer} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';
import {WINDOW} from '../services/window.service';

@Component({
  selector: 'app-form-open',
  templateUrl: './form-open.component.html',
  styleUrls: ['./form-open.component.scss']
})
export class FormOpenComponent implements OnInit, OnDestroy {
  iframeSrc: any;

  constructor(public http: HttpClient, private sanitizer: DomSanitizer, @Inject(
    WINDOW) public window: Window,
              private router: Router) {

    (<any> window).submitDone = this.submitDone.bind(this);
  }


  ngOnInit() {
    this.iframeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(
      'http://localhost:8080/fr/qlack/myform/new?orbeon-embeddable=true');
  }

  ngOnDestroy() {
    // Unregister function
    delete (<any> window).submitDone;
  }

  submitDone(id: string, app: string, form: string) {
    // alert("Bound function: form submitted! for id: " + id + " and app/form: " + app + "/" +
    // form);
    this.router.navigateByUrl('form-edit/' + app + '/' + form + '/' + id);

  }

}
