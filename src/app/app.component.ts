import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'testserver', content: 'just a test'}];
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onServerAdded(serverData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  onChange(i: number) {
    this.serverElements[i].content = 'changed';
  }

  onDestroy(i: number) {
    this.serverElements.splice(i, 1);
  }

  OnIntervalFired(firednumber: number) {
    if (firednumber % 2 === 0) {
      this.evenNumbers.push(firednumber);
    } else {
      this.oddNumbers.push(firednumber);
    }
  }

}
