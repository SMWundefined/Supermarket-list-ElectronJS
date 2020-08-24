const electron = require ('electron');
const url = require('url');
const path = require('path');
const { Menu } = require('electron');

const {app, BrowserWindow} = electron;
let indexWindow;

//Listen for app to be ready
app.on('ready', function(){
    //Create a new window
    indexWindow = new BrowserWindow({});

    //load main html into window
    indexWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'indexWindow.html'),
        protocol: 'file:',
        slashes: true
    }));

    //Calling Menu from the template
    const indexMenu = Menu.buildFromTemplate(indexMenuTemplate);
    //Insert menu
    Menu.setApplicationMenu(indexMenu);
});

//Create a new Menu template

const indexMenuTemplate = [
{
    label: 'File'
}
]

