Node.js is a platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.

It enables developers to use Javascript for the client side (front end) and the server side.

This tutorial is a reference on how I got started with it

Install Node.js - there are installers and packages for all the common operating systems which can be downloaded from here - http://nodejs.org/
If you are on windows I would suggest still using the 32bit version as some packages that you may need in the future may not work with the 64bit version.

Once installed to check it has installed open a command prompt window and run the following:

<h3>node --version</h3>

This should give you the current version of Node.js which is installed

You should also check to see if NPM (Node Package Manager - more on this later) has also installed, so run the following:

<h3>npm --version</h3>

Again this should give you the version of npm which is installed.

In order to build web applications we can use Express which is a web framework for Node.js. So we need to install Express and its counterpart Express-Generator.

To install these packages we can use the Node Package Manager (NPM). There are tens of thousands of packages/modules that people have written and released which means we have to write less code!!

So to install Express there are two ways to install it. The first will install it to the local working folder.

<h3>npm install express</h3>

But we can also install it globally so that we can call on Express from whichever folder we are working in.

npm install -g express

Once these packages have been installed we can now run the app by running:

App Start

npm start

Open a web browser and type the following address:

http://localhost:4000/

<h1>About the project</h1>

Inside this project I have passing the simple JSON response by using node.js .

And after that I have created Dockerfile to build the docker image by using this command

<b> docker build -t <image_name> . </b>

After that to create a container for that image, so we can run that image, we need to use the below command

<b>docker run -d -p 4000:4000 --name <container_name> <image_name> </b>

Output of my Express web application

myoutput

![myoutput](https://user-images.githubusercontent.com/90633510/192213946-b58dcdee-e09f-4cb6-80fc-6f4ba5f7d581.png)

