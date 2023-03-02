import { AfterViewInit, Component } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {

    this.renderBook();

  }

  renderBook() {

    $('#magazine').turn({
      display: 'double',
      acceleration: true,
      gradients: !$.isTouch,
      elevation:50,
      when: {
        turned: function(e:Error, page: any) {
          /*console.log('Current view: ', $(this).turn('view'));*/
        }
      }
    });


    $(window).bind('keydown', function(e:KeyboardEvent){

      if (e.keyCode==37)
        $('#magazine').turn('previous');
      else if (e.keyCode==39)
        $('#magazine').turn('next');

    });

  }
}
