[![Netlify Status](https://api.netlify.com/api/v1/badges/5110cb68-898b-495c-863b-84fd86ace6a7/deploy-status)](https://app.netlify.com/sites/silly-keller-c34bc0/deploys)

# Tomb

This is a small app to demonstrate how I would approach a small project with Typescript, React and something like Gatsby. CD will be handled using Netlify and TSJest for testing.

## What this app is:

This is a simple message encrypting app where a user can simply type a message along with a passphrase and see their message being encrypted in real time. The user can then share the resultant string along with the passphrase to a buddy who can then decode the message.

Credit to ToRA#0857 on Devcord for the idea.

## What this app isn't:

This app isn't secure and should not be taken too seriously, maybe in the future I will put in some more algorithms and move over the client side logic to the back end.

I'm going to break down the development into stages so that the reader of this has an idea of the workflow.

# 1: Requirements

I want something fast, simple and anonymous for encrpytion. The idea is similar to Google Translate in design. With no users I decided to ditch the backend all together but I will have basic security using hashes from the front end.

No backend and client side logic really is just a static website and I've yet to discover a better tool than Gatsby and Netlify works great with it. My default language of choice is TS.

# 2: Early game

<img style="float: right; margin-left: 25px" alt="Tomb: early days" src="https://i.imgur.com/sTdcYgF.png?1">
<img>

The first major commits are all the basic stuff, setup, installing, configuring. I then get a basic css grid down and start working on the guts of the encryption component and along with it an Encryption class to handle all of the logic.

Currently everything is working as intended but I have reached major dimishing returns in productivity. Since each message is encrypted with a randomly generated key hand testing is becoming impossible and a better approch with unit testing would be more appropriate.

This would be a great time to really look at the class structure and figure out what objects should be responsible for what. It could be argued that this should be done before starting any code but I really like the method of just shoving things in God objects and then breaking them out later in refactors.
