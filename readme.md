# technology will using:

-> mongoDB
-> reactJS
-> nodeJS
-> ExpressJS



# will have:

-> teacher panel
-> asisstant-teacher panel
-> student panel
-> quiz maker









# teacher panel will have

-> login option with jwt token

-> a teacher can login from one ip adress only at a time, and when he/she do login from one ip adress, then logout from previous login.

-> can able to reset password after giving otp which is send to his email and after clicking submit newPassword will be stored in database

-> a teacher can add, manage, remove asisstant-teacher

-> teacher can copy assistant teacher's password to share with them for logging which is auto-generated and will save into the mongoDB

-> a teacher can add, manage, remove qustions from quiz-maker option

-> a teacher can manage, remove student with their profile which will be updated from student panel

-> an teacher can able to give access students to their selected courses

-> in teacher dashboard, make sure to showcase all the exams with the feature of shorting

-> a teacher can show, print every students result with their profile which will be updated from student panel

-> teacher can log out too














# assistant-teacher panel

-> login-logout system with the password is auto-generated when teacher is created a assistant-teacher

-> a assistant-teacher can login from one ip adress only at a time, and when he/she do login from one ip adress, then logout from previous login.

-> can able to reset password after giving otp which is send to his email and after clicking submit newPassword will be stored in database

-> can able to manage, remove student with their profile which will be updated from student panel

-> can able to add, manage, remove qustions from quiz-maker option

-> in assistant-teacher dashboard, make sure to showcase all the exams with the feature of shorting

-> an assistant-teacher can show, print every students result with their profile which will be updated from student panel

-> an assistant-teacher can able to give access students to their selected courses

-> assistant-teacher can log out too












# student panel

-> can register and login with jwt token, otp verification and reset password with full of authentication

-> a student can login from one ip adress only at a time, and when he/she do login from one ip adress, then logout from previous login.

-> after doing all this things, he need to be select the options either he is a first-timer or second timer, he can edit it from his profile also.

-> after registering successfully he get a rollNumber. The rollNumber will be like this formate: "first4LettersOfCourseName-random generated unique 4 digit numbers

-> can able to copy the rollNumber

-> he have to login with the generated rollNumber and password absolutely.

-> in student dashboard he can show the courses names and the link to course detail page

-> in course detail page student can show all the links with the 03 different filter section: one for select course, another for select subject and the last one for select chapter.

-> after doing the filtering he will showed the all exam links created for that filterings with beautiful card sections

-> after doing the exams, he can able to see his performance meaning the correct incorrect answers in the showPerformance page

-> in showPerformance page student can show all the links with the 03 different filter section: one for select course, another for select subject and the last one for select chapter.

-> after doing the filtering he will showed the all exam links created for that filterings with beautiful card sections

-> can log out from the system















# quiz maker

-> in both teacher and assistance-teacher panel members are able to create question

-> in student panel members are only able to give exams












# create-question

-> option to add image, text as question body

-> option to add 04 options for taking mcq exams

-> select the option number as the corrected answer

-> option to select the number will get a student after giving a correct answer

-> option to add multiple questions

-> option to add timer on whole question paper
















# give-exams

-> when a student click the link of exam, he will show a pop up message where will showed the exam instructions

-> if he is a second timer, then he will start exam with negetive 05 marks

-> if he is a first-timer, then there will be 0 negative marks to start with

-> questions will show on after another as a list, with their options

-> student can select the option of a question only a once. after clicking randomly one option in 4 options, he can not able to click another option of the question again.

-> he attemps an exam only a once, when he again click the exam link, it will directed to the resultPage where he can see his performance on that exam.

-> when he giving exam, the time will be shown must all the time. get the time of the timer from teacher/assistant-teacher panel, who sets the timer for the exam

-> there will be submit button to submit the exam, and the redirect to the resultPage to see his performance on that result.

-> when the time of timer will 00:00:00:00, then the exam automatically been submitted, either the user press submit button or not...
 