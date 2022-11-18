
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


### Phase 1

It's just a simple grid that takes data like this `{x: number; y: number;}` and renders them into rows.
It does it a very dumb way at the moment, with two four loops that barely pay attention to the data.
But it does vaguely work, i've got a click event on the grid to make sure the data change is listened to.

I created it using `create-react-app pipes --template typescript` if you wanna try that for yourself.
The main difference from lit is the whole thing is just a function, almost like the `render` method of lit.
`useState` is a _hook_ which is a powerful react function, give it a google.
Also css isn't scoped automatically so even though App.css isn't imported into Tile.tsx it still uses it's styles.

The exact for loop to create the rows will obviously be changed, even to having the data as an array of arrays, but i'm just going with an anything goes attitude, and we can fix each others shit and rename variables in a very free, oppisite of work way. (though we'll still aim for very hq code cause, you know, that's who we are). Peace out.
