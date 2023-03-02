import { AfterContentInit, AfterViewInit, Component, ElementRef, inject } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, AfterContentInit {
  private readonly hostElementRef = inject(ElementRef);

  ngAfterContentInit(): void {
    console.log('[ngAfterContentInit]', (this.hostElementRef.nativeElement as HTMLElement).textContent);
    
  }

  async ngAfterViewInit(): Promise<void> {

    await import('../assets/js/jquery-1.7.1.min.js');
    await import('../assets/js/turn.min.js');

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
