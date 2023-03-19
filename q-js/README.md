# JS code

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

## 
Usually computations need one page to load. For example, if you
generate an embedded data field based on a question, you cannot have
another text populate with math based on the original question on the
same page. 


You can have the math be instantaneous in the following two-step process: 
1. Include the following text in the question: *Div1 (Do not delete)*. This will be what automatically updates with the math. 

2. Let `QIDREF` refer to the QID of the reference question you want to do
math to. Change `randomfunction` to be whatever math you want to do to
the `QID`. The text should update in the place where *Div1 (Do not
delete)* is, if you use [this code](instant-math.js). 

## Properly formatting a phone number
Often you want a phone number to format properly *when it is entered*, so
that the view is natural to the research participant:

![](/q-js/screenshots-for-readme/phone-number.png "Phone")

[This code](phone-numbers.js) will achieve that. It can also be used to format dates as
`1/1/2023`, for instance. 

## Embedding timers
Qualtrics automatically indicates survey start and stop but does not
keep track of the time when someone started a given question. This
means that it’s impossible to tell ex post if people were skipping
through the task. 

To create an embedded data variable that will export with your data,
use this code: 

```
var PageLoad = Date.now();
Qualtrics.SurveyEngine.setEmbeddedData('PageLoad', PageLoad);
```

This will set a variable called `PageLoad` that gives a javascript time,
in milliseconds since January 1, 1970, of when they loaded the page
for the first time. You will want to generate two of these (e.g., also
when the subsequent page loads). The difference corresponds to the
number of milliseconds elapsed on the given page. 

## Back Buttons
Sometimes you want to stop a participant from going backward in the
survey. Participants can never go backward to a previous block, but it
can be inconvenient sometimes to split up blocks. Including the line:
```
jQuery("#PreviousButton").hide()
```
hides the back button. 

## Adding units to form fields
Consider the following question: 

![](/q-js/screenshots-for-readme/rent.png "Rent without units")

While the question is fairly precise, it’s better for the question to look like this: 

![](/q-js/screenshots-for-readme/rent-units.png "Rent without units")

because the latter reduces risk of inconsistencies across subjects and
makes the units clear. 

Using [this code](units.js) will add the "dollars per month" units into the form
field. 





