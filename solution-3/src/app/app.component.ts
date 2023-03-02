import { AfterViewChecked, AfterViewInit, Component, ElementRef, inject } from '@angular/core';

declare const $: any;

function addScript( src: string, callback: () => void ) {
  var s = document.createElement( 'script' );
  s.setAttribute( 'src', src );
  s.onload = callback;
  document.body.appendChild( s );
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  async ngAfterViewInit(): Promise<void> {

    addScript('/assets/js/jquery-1.7.1.min.js', () => {
      addScript('/assets/js/turn.min.js', this.renderBook);
    });

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
