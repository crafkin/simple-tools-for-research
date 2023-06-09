# JS code
Here are some simple Javascript hacks I regularly use to improve
Qualtrics surveys. They should be copy-pasted to include between the 

```
Qualtrics.SurveyEngine.addOnload(function() {
});
```
unless otherwise clear from the code. 

Thanks to my coauthors (especially Jenna Anders) and ChatGPT for these. 

## Checklist
Before launching a survey, I run through [this checklist](checklist.md) to make sure I'm not forgetting any details. 

## Visualizing percentages
It is often useful to produce a dynamic visualization of a percentage
(out of 100), as in the following: 


![](/q-js/screenshots-for-readme/dynamic-pct.png "Dynamic Percentage")

You must do the following three-step process: 
1. Add [this code](dynamic-pct-css.css) to your Custom CSS. 
2. Add [this code](dynamic-pct-js.js) to the question you want,
   adding units at the indicated section. 
3. Make the question type "Text Entry" and include the following raw text where you want the box to appear: 
*Div1 (Do not delete)*. 

All credit goes to Jenna Anders for figuring this one out. 

## Dynamic computations
Default Qualtrics computations need one page to load. For example, if you
generate an embedded data field based on a question, you cannot have
another text populate with math based on the original question on the
same page. 

You can have the math be instantaneous by using the following two-step process: 
1. Include the following text in the question: *Div1 (Do not delete)*. This text will be what automatically updates with the math. 

2. Let `QIDREF` refer to the QID of the reference question you want to do
math to. Change `randomfunction` to be whatever math you want to do to
the `QID`. The text should update in the place where *Div1 (Do not
delete)* is. 

[Code here](instant-math.js). 

## Animations 
[This code](animation.js) enables you to cycle through several pictures on one Qualtrics
screen, like a GIF. This can be useful for examples or survey instructions. Probably similar to creating and uploading the GIF from the images directly. 

## Converting percentages to plain-English proportions for confirmation checks

If you ask participants to enter a percentage, it can be useful to
include a confirmation check that repeats a more intuitive, "plain-English" proportion
back to them. For example, if the participant states that "20% of people do X", you can ask them to
confirm that they meant "1 in 5 people do X."

[This code](odds.js) generates an embedded data field called `proportion`, converted from a number (assumed to be out of 100). `proportion` contains the "reduced" "plain-English" proportion; e.g., if the number selected is 20, `proportion` stores the string "1 in 5". Add the code
to a question that elicits a percentage as a slider from 0 to 100. You
need to change the `QIDXXX` in the code to your question ID number. The subsequent
screen can encode the proportion. 

## Embedding timers
Qualtrics automatically stores the survey start and stop time but does not
keep track of the time when someone started a given question. This
means that it’s impossible to tell ex post if people were skipping
through the task. 

To create an embedded data variable that will export with your data and contains the time when someone starts a task, use [this code](pageload.js). 

This sets a variable called `PageLoad` that gives a javascript time,
in milliseconds since January 1, 1970, when they loaded the page
for the first time. You will want to generate two of these (e.g., also
when the subsequent page loads). The difference between the two timers will therefore correspond to the
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

<img src="/q-js/screenshots-for-readme/rent.png" alt="Rent without units" style="width:30%;">

While the question is fairly precise, it’s better for the question to look like this: 

<img src="/q-js/screenshots-for-readme/rent_units.png" alt="Rent with units" style="width:30%;">

because the latter reduces risk of inconsistencies across subjects and
makes the units clear. 

Using [this code](units.js) will add the "dollars per month" units into the form
field. You can update the units directly in the code for your
purposes. 

## Add text to "other" options in multiple choice
Super minor formatting tweak.  Qualtrics' default "add text" response to other options makes it
slightly ambiguous what the text box refers to:

<img src="/q-js/screenshots-for-readme/text-default.png" alt="Rent without units" style="width:40%;">

You can disambiguate with [this code](disambiguate-text.js): 

<img src="/q-js/screenshots-for-readme/text-updated.png" alt="Rent without units" style="width:40%;">


## Properly formatting a phone number
Often you want a phone number to format properly *when it is entered*, so
that the view is natural to the research participant:

<img src="/q-js/screenshots-for-readme/phone-number.png" alt="Phone" style="width:20%;">

[This code](phone-numbers.js) will achieve that. It can also be used to format dates as
`1/1/2023`, for instance. 





