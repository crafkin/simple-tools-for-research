# JS code
Here are some simple Javascript hacks I regularly use to improve
Qualtrics surveys. They should be copy-pasted to include between the 

```
Qualtrics.SurveyEngine.addOnload(function() {
});

```
Thanks to my collaborators (especially Jenna Anders) and ChatGPT for these. 

## Visualizing percentages
It is often useful to produce a dynamic visualization of a percentage
(out of 100), as in the following: 


![](/q-js/screenshots-for-readme/dynamic-pct.png "Dynamic Percentage")

You must do the following three-step process. 
1. Add [this code](dynamic-pct-css.css) to your Custom CSS. 
2. Add [this code](dynamic-pct-js.js) to the question you want,
   adding units at the indicated section. 
3. Make the Question a Text Entry and include the following raw text where you want the box to appear: 
*Div1 (Do not delete)*. 

All credit goes to Jenna Anders for figuring this one out. 

## Dynamic computations
Default Qualtrics computations need one page to load. For example, if you
generate an embedded data field based on a question, you cannot have
another text populate with math based on the original question on the
same page. 

You can have the math be instantaneous in the following two-step process: 
1. Include the following text in the question: *Div1 (Do not delete)*. This will be what automatically updates with the math. 

2. Let `QIDREF` refer to the QID of the reference question you want to do
math to. Change `randomfunction` to be whatever math you want to do to
the `QID`. The text should update in the place where *Div1 (Do not
delete)* is, if you use [this code](instant-math.js). 

## Animations 
[This code](animation.js) enables you to cycle through several pictures on one Qualtrics
screen, like a GIF, but where you can control the timing. This can be
useful for examples or survey instructions. 

## Converting percentages to proportions
If you ask participants to enter a percentage, it can be useful to
include a confirmation check that repeats a more intuitive proportion
back to them. For example, if they say 20%, you can ask them to
confirm that they meant 1 in 5. 

[This code](odds.js) generates an embedded data field called `proportion`. Add it
to a question that elicits a percentage as a slider from 0 to 100. You
need to change the `QIDXXX` to your question ID number. The subsequent
screen can elicit a proportion. 

## Properly formatting a phone number
Often you want a phone number to format properly *when it is entered*, so
that the view is natural to the research participant:

<img src="/q-js/screenshots-for-readme/phone-number.png" alt="Phone" style="width:20%;">

[This code](phone-numbers.js) will achieve that. It can also be used to format dates as
`1/1/2023`, for instance. 

## Embedding timers
Qualtrics automatically indicates survey start and stop but does not
keep track of the time when someone started a given question. This
means that it’s impossible to tell ex post if people were skipping
through the task. 

To create an embedded data variable that will export with your data,
use [this code](pageload.js). 

This will set a variable called `PageLoad` that gives a javascript time,
in milliseconds since January 1, 1970, of when they loaded the page
for the first time. You will want to generate two of these (e.g., also
when the subsequent page loads). The difference corresponds to the
number of milliseconds elapsed on the given page. 

## Back buttons
Sometimes you want to stop a participant from going backward in the
survey. Participants can never go backward to a previous block, but it
can be inconvenient sometimes to split up blocks. Including [the line](backbutton.js):
```
jQuery("#PreviousButton").hide()
```
hides the back button. 

## Adding units to form fields
Consider the following question: 

![](/q-js/screenshots-for-readme/rent.png "Rent without units")

While the question is fairly precise, it’s better for the question to look like this: 

![](/q-js/screenshots-for-readme/rent_units.png "Rent without units")

because the latter reduces risk of inconsistencies across subjects and
makes the units clear. 

Using [this code](units.js) will add the "dollars per month" units into the form
field. 

## Add text to "other" options in multiple choice
Super minor formatting tweak.  Qualtrics' default "add text" response to other options makes it
slightly ambiguous what the text box refers to:

<img src="/q-js/screenshots-for-readme/text-default.png" alt="Rent without units" style="width:40%;">

You can disambiguate with [this code](disambiguate-text.js): 

<img src="/q-js/screenshots-for-readme/text-updated.png" alt="Rent without units" style="width:40%;">






