# calculator
TOP calculator project

feedbacks to fix:
definitely a few things i can find wrong in the calculator.

- Chaining doesn't work. From the spec on the odin site: For example, 12 + 7 - 5 * 3 = should yield 42. but if I try this on yours, I get an answer of 36. i suspect this is because if the user enters a sequence of operations, you're only ever using the first and last numbers along with w/e the last operator is -- ignoring everything in-between. but this isn't how calculators work.

- ditto for chaining after an 'equals' press. if i press 5 + 5 = i'll get 10 to the display (good) but then if i press + 9 =, i get 14. again, this isn't how calculators work. i should be getting 19 for such an operation.

- typically with a calculator, after the user presses equals and then goes to press a number, a completely new expression is started. if i press 5 + 5 = i get 10 to the display, and then without clearing, if i follow that with 7 + 7 =, i'll get 14 -- an expression completely divorced from the previous 5 + 5 stuff. yours doesn't do this. this point and the two above mean the only way to properly use your calculator is to A/C after each operation

Hi! Your calculator looks great! I tried doing equations like 1+2+3+4 and for some reason that equaled 5. I also tried dividing and was running into issues for example 6/2 equals .5 instead of 3. I'm not on this project yet and I literally just started the javascript section of TOP, so I'm can't help but thats just somethings I noticed. :PE_PandaShrug:

2.if you multiply a number with a floating number, the program breaks completely