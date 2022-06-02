// ==UserScript==//
// @name           Replace image
// @match          https://catwar.su/cw3/
// @run-at         document-start
// @require        https://greasyfork.org/scripts/12228/code/setMutationHandler.js
// ==/UserScript==

setMutationHandler({
    processExisting: true,
    selector: 'img[src*="odoroj/232.png"]',
    handler: images => images.forEach(img => {
        img.src = 'https://catwar.su/cw3/odoroj/306.png';
    })
});