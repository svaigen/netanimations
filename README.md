# Welcome to the NetAnimations project!

NetAnimations is an accessible [Learning Object Repository](http://www.din.uem.br/netanimations) of Computer Networking discipline. It is an accessible mobile app built with [Ionic Framework](http://ionicframework.com/).

Here you will find some animations that simulate complex and difficult process about the discipline of Computer Network.

These animations were developed in order to facilitate student's understanding and stimulate student interest in the discipline, including visually impaired students.

This repository was built with the purpose of providing the animations in the public domain. You can contribute with suggestions, corrections and ideas for new animations via e-mail (lafmartimiano@uem.br) or pull-requests.

NetAnimations is a project of Informatics Department ([DIN](http://www.din.uem.br)) of State University of Maringá ([UEM](http://www.uem.br)).

### Kept by

Luciana Andréia Fondazzi Martimiano: Founder of the project.

Alisson Renan Svaigen: Collaborated with the the accessibility mobile app.

Jonathan Rodrigues de Oliveira: Collaborated with the mobile app.

Danilo Camargo Bueno: Collaborated with repository creation and animations: Domain Name System, Hierarchical Routing and Subnets

Elton Tanamati: Collaborated with the animations: The Hybrid Model, the process of three-way TCP handshake, the Pure Aloha Protocol, the Protocol Ethernet, TCP - sequence number and acknowledgment


## How to build this project with the Ionic tool:

Got to [Ionic Framework website](http://ionicframework.com/) and follow the steps to get Ionic running.

You will need node.js to install Cordova and Ionic.

```bash
$ sudo npm install -g ionic
$ sudo npm install -g cordova
```

Then, to run it, cd into `netanimations-app` directory and run:

```bash
$ ionic platform add android
$ ionic build android
$ ionic emulate android
```

You will also need android sdk properly configured.

Substitute 'android' for 'ios' if on a Mac.

## Issues
If you do find an issue or an error please go to [issues](https://github.com/jorool/netanimations-app/issues).
On the other hand, pull requests are aways welcome here!