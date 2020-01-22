import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-votees',
  templateUrl: './votees.page.html',
  styleUrls: ['./votees.page.scss'],
})
export class VoteesPage implements OnInit {

  otpid: number;

  votees = [{nameE: 'Udith Gayan', nameS: 'උදිත් ගයාන්', number: 1},
            {nameE: 'Sanindu Rathnayaka', nameS: 'සනිදු රත්නායක ', number: 2},
            {nameE: 'Dilini Peiris', nameS: 'දිලිනි පිරීස් ', number: 3},
            {nameE: 'Roshan Chathuranga', nameS: 'රොෂාන් චතුරංග ', number: 4},
            {nameE: 'Dilki Sachini', nameS: 'දිල්කි සචිනි ', number: 5}
          ];

  constructor(private activatedRoute: ActivatedRoute , private router: Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {console.log(params.get('otpid'));
                                                     
                                                      this.otpid = parseInt(params.get('otpid')); });
                                                      
  }

}
