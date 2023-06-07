# Checklist Before Launch

I run through these before I hit “publish” on any survey, to make sure I’m not forgetting something.

## General 
- [ ] Check that final changes to the survey are published. 
- [ ] You have personally taken the survey at least 10 times. 
- [ ] You have generated test data and confirmed that all randomization probabilities are accurate. 
- [ ] Any testing blocks or test embedded data have been deleted. 

## Make active survey decisions — don’t use the Qualtrics defaults by accident! 
- [ ] You have actively decided whether and when the survey should expire, using the Survey Options dropdowns. 
- [ ] You have actively decided whether the back button should be visible at every question in the survey. 
- [ ] You have actively decided about the anonymity of the survey, ballot stuffing, etc., on the Qualtrics Security preferences. 
- [ ] You have actively decided whether every question should be required or optional.
- [ ] You have actively decided whether you want to use the default end-of-survey screen. 

## Validations
- [ ] All numeric questions have sensible validations (e.g., unless you are surveying CEOs, annual salaries are restricted to be between 0 and 1 million, etc.). 
- [ ] Where sensible, questions and/or question responses are presented in random order to reduce the effects of anchoring. 
- [ ] You include units in form responses or text answers. For example, if you ask someone for their salary, you should have the words “dollars per month” appear after their question, as follows: 

<img src="/q-js/screenshots-for-readme/rent_units.png" alt="Rent with units" style="width:20%;"> 

*Note: Sample code for this appears [here](/q-js/units.js)* 

- [ ] All places where you promise to pay a participant have been checked. The total never exceeds $100 (unless this payment is approved by IRB). 

## Resets
- [ ] Reset quotas
- [ ] Reset randomizers 

## Attention Checks 
- [ ] You include at least one general attention check. 
- [ ] Where desirable, long paragraphs of text are broken up with confirmation questions. 
- [ ] You have read the survey aloud to catch typos or ambiguities. 
- [ ] Where sensible, yes or no questions repeat the question and use formatting (bold) to differentiate the responses: 
<img src="/q-js/screenshots-for-readme/bf.png" alt="Bolding" style="width:20%;">
