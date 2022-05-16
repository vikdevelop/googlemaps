// main.js
const {app, BrowserWindow} = require('electron')
const path = require('path')

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
   width: 3840,
    height: 2160,
    icon: 'resources/com.github.vikdevelop.googlemaps.png',
    title: "Google Maps",
    autoHideMenuBar: 'true',
    webPreferences: {
      preload: path.join(__dirname, 'src/renderer/preload.js')
    }
  })


  mainWindow.loadURL('https://maps.google.com')
  
}
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {

    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

