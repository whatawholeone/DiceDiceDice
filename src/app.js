/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */
var UI = require('ui');

var main = new UI.Card({
    title: 'Dice Dice Dice',
    // icon: 'images/menu_icon.png',
    //subtitle: '',
    body: 'Up and Down to pick a dice. Select to roll'
});

main.show();

main.on('click', 'select', function(e) {
    var menu = new UI.Menu({
        sections: [{
            items: [
            {
                title: 'D4',
                icon: 'images/four_28_42.png',
                subtitle: 'D4'
            }, {
                title: 'D6',
                icon: 'images/six_28_42.png',
                subtitle: 'D6'
            }, {
                title: 'D12',
                icon: 'images/twelve_28_42.png',
                subtitle: 'D12'
            }, {
                title: 'D20',
                icon: 'images/twenty_28_42.png',
                subtitle: 'D20'
            }]
        }]
    });
   
    menu.on('select', function(e) {
       // console.log('Selected item #' + e.itemIndex + ' of section #' + e.sectionIndex);
       // console.log('The item is titled "' + e.item.title + '"');

        switch (e.item.subtitle) {
              case "D4":

                var d4 = Math.floor((Math.random() * 4) + 1);

                menu.item(e.sectionIndex, e.itemIndex, {
                    title: d4 + " | " + e.item.title
                });

                if (e.item.title.lenght >= 8) {
                    e.item.title = e.item.title.substring(0, 6);
                }

                break;
            case "D6":

                var d6 = Math.floor((Math.random() * 6) + 1);

                menu.item(e.sectionIndex, e.itemIndex, {
                    title: d6 + " | " + e.item.title
                });

                if (e.item.title.lenght >= 8) {
                    e.item.title = e.item.title.substring(0, 6);
                }

                break;
            case "D12":

                var d12 = Math.floor((Math.random() * 12) + 1);

                menu.item(e.sectionIndex, e.itemIndex, {
                    title: d12 + " | " + e.item.title
                });

                if (e.item.title.lenght >= 8) {
                    e.item.title = e.item.title.substring(0, 6);
                }

                break;

            case "D20":

                var d20 = Math.floor((Math.random() * 20) + 1);

                menu.item(e.sectionIndex, e.itemIndex, {
                    title: d20 + " | " + e.item.title
                });

                if (e.item.title.lenght >= 8) {
                    e.item.title = e.item.title.substring(0, 6);
                }

                break;
            default:
                // default code block
                break;
        }

    });
    menu.show();
});