// Harder Exercise - Upvoting users
// Make an upvote/downvote component. Upvoting emits an upvote event. Downvoting emits a downvote event.
// Now add this to your User component. Bind to the upvote in the user, such that when we click upvote, the user's voteCount property is increased. Vice-versa for downvotes.

var AppComponent = ng.core
  .Component({
    selector: "app",
    template:
    `
      <like (liked)="handleLike()">Hello</like>
      {{message}}
    `
  })
  .Class({
    constructor: function() {
      var vm = this;
      this.handleLike = function() {
        this.message = "Thanks for liking us"
      }
    }
  });


var AppModule =
  ng.core.NgModule({
    imports: [ ng.platformBrowser.BrowserModule ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ]
  })
  .Class({
    constructor: function() {}
  });


// Finally bootstrap
ng.platformBrowserDynamic
  .platformBrowserDynamic()
  .bootstrapModule(AppModule);
