<template>
  <div id="app">
    <div style="overflow: scroll; height: calc(100vh - 48px)">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </div>
  </div>
</template>

<style>
  #app {
    width: 100%;
    height: 100%;
  }
  html {
    box-sizing: border-box;
  }

  /*Yes, the universal selector. No, it isn't slow: https://benfrain.com/css-performance-revisited-selectors-bloat-expensive-styles/*/
  * {
    /*This prevents users being able to select text. Stops long presses in iOS bringing up copy/paste UI for example. Note below we specifically switch user-select on for inputs for the sake of Safari. Bug here: https://bugs.webkit.org/show_bug.cgi?id=82692*/
    user-select: none;
    /*This gets -webkit specific prefix as it is a non W3C property*/
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    /*Older Androids need this instead*/
    -webkit-tap-highlight-color: transparent;
    /* Most devs find border-box easier to reason about. However by inheriting we can mix box-sizing approaches.*/
    box-sizing: inherit;
  }

  *:before,
  *:after {
    box-sizing: inherit;
  }

  /* Switching user-select on for inputs and contenteditable specifically for Safari (see bug link above)*/
  input[type],
  [contenteditable] {
    user-select: text;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    /*We will be adding our own margin to these elements as needed.*/
    margin: 0;
    /*You'll want to set font-size as needed.*/
    font-size: 1rem;
    /*No bold for h tags unless you want it*/
    font-weight: 400;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  /*No bold for b tags by default*/
  b {
    font-weight: 400;
  }

  /*Prevent these elements having italics by default*/
  em,
  i {
    font-style: normal;
  }

  /*Mozilla adds a dotted outline around a tags when they receive tab focus. This removes it. Be aware this is a backwards accessibilty step!*/
  a:focus {
    outline: 0;
  }

  input,
  fieldset {
    appearance: none;
    border: 0;
    padding: 0;
    margin: 0;
    /*inputs and fieldset defaults to having a min-width equal to its content in Chrome and Firefox (https://code.google.com/p/chromium/issues/detail?id=560762), we may not want that*/
    min-width: 0;
    /*Reset the font size and family*/
    font-size: 1rem;
    font-family: inherit;
  }

  /* For IE, we want to remove the default cross ('X') that appears in input fields when a user starts typing - Make sure you add your own! */
  input::-ms-clear {
    display: none;
  }

  /*This switches the default outline off when an input receives focus (really important for users tabbing through with a keyboard) so ensure you put something decent in for your input focus instead!!*/
  input:focus {
    outline: 0;
  }

  input[type='number'] {
    /*Mozilla shows the spinner UI on number inputs unless we use this:*/
    -moz-appearance: textfield;
  }

  /*Removes the little spinner controls for number type inputs (WebKit browsers/forks only)*/
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    appearance: none;
  }

  /*SVG defaults to inline display which I dislike*/
  svg {
    display: inline-flex;
  }

  img {
    /*Make images behave responsively. Here they will scale up to 100% of their natural size*/
    max-width: 100%;
    /*Make images display as a block (UA default is usually inline)*/
    display: block;
  }
</style>
