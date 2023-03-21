# CanIGetHome? - Get uber prices

The main idea is the possibility to me to get the estimate uber rides prices through my mi band 6.

- [x]  Get my current localization
- [x]  Use something to automatize the action with just two clicks (Destination, get prices)
- [x]  Return me through notification all ride price options from uber app
- [x]  Write a quickly resume how to use
- [x]  Publish writing and repository

# **Well**, **how the hell you did that**?

Firstly, you should know the mi band 6 don’t make all work, actually my phone and an API made by me do all work.

Ok… Right… The first question I had when I decided to do this automatization it’s how can I get uber ride estimate from a place to another place. Like, how can I access this info? How can I pass my localization pickup and where I wish drop off? And there I thought about web scraping to do that work. Ok, I’m lying if I told you it was my first thought. Actually I was searching about Uber API and I didn’t find anything very clear. So when I was sad about the idea, I thought to made a web scraping.

With a web scraping you can build any application you want. So I decided to look some Uber web application requests usually do and it was there where I found the sweet route called “graphql” who made requests sending my pick up localization and my drop off localization with an authentication cookie. Well, if I can do this request from an API that means I can do what I wish to do. Great no?

Above follow the images about the route

Payload:

![image1](https://user-images.githubusercontent.com/58860863/174215464-edb54c72-00da-42c8-bce9-8cb9d8eb4bc1.png)

Response

![image2](https://user-images.githubusercontent.com/58860863/174215492-8a7ac7ac-73e0-47fd-b05f-af75974e97b6.png)

Of course I send some info besides that above, like my authentication cookie inside headers but I don’t want to show it for you 🥵. You  know 😏, I’m dumb but not so.

WELLL. So as you see some values its returned inside an object called fares, inside fareEstimates. After made some analysis I discovered that the code attributes inside fares object is a different way to identify Uber rides types. So I discovered it 

```
20022265 = comfort
20027725 = uberx
20034913 = motocycle
```

And as you can see inside the code object has your related prices:

![image3](https://user-images.githubusercontent.com/58860863/174215528-b3516158-c98e-4fc7-967c-a252ad0a2fee.png)

All right. If I can get this data from my API that means I do the hard work. And I did it and I built an API that have a get prices route receiving two main parameters: pickup coordinates and drop off coordinates.

After built the API the next step its to configure my phone to make some requests and generate notifications from this requests. For that I used an app called “MacroDroid” to do all my stuffs on my phone. There I made a macro configured to do all I want to show uber prices through my mi band.

## **THE MACROGOD**

![image](https://user-images.githubusercontent.com/58860863/174417315-7f70bad0-a456-4455-b649-659f5c70cdd1.png)

Well as you can see my macro do the follow steps:

- The trigger happens when I enable the silent mode from my phone when he it's on my bag (for this case your proximity sensor its near, that means that I’m not with my phone in my hand, making the feature useful yet when I want to put silent mode on my phone, because he it's in my hand and not into my bag).
- When the trigger is fired my macro get my current localization.
- Make a http request with method **GET** to my API passing my current localization and drop off localization that I put into a variable inside the app
- Wait three seconds
- And make notification to show on my mi band 6.

## **RESULT**

![image](https://user-images.githubusercontent.com/58860863/174217064-7388052c-67a2-462a-b2af-7b20e099f55c.png)

Video showing how it works.
https://youtu.be/y8t5UT-AN6E

That's all, folks 🐷.
