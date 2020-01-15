import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-votees',
  templateUrl: './votees.page.html',
  styleUrls: ['./votees.page.scss'],
})
export class VoteesPage implements OnInit {

  votees = [{nameE: 'Udith Gayan', nameS: 'උදිත් ගයාන්'},
            {nameE: 'Sanindu Rathnayaka', nameS: 'සනිදු රත්නායක '},
            {nameE: 'Dilini Peiris', nameS: 'දිලිනි පිරීස් '},
            {nameE: 'Roshan Chathuranga', nameS: 'රොෂාන් චතුරංග '},
            {nameE: 'Dilki Sachini', nameS: 'දිල්කි සචිනි '}
          ];

  constructor() { }

  ngOnInit() {
  }

}
