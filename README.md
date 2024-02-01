# Premove.ai

Has your brain ever been stuck buffering in the middle of an interview? The interviewer asks a straightforward 
question, and you forget everything you've ever learned and all the details about your experiences.

Because we all have.

We wanted to solve this issue with **Premove.ai**, a tool inspired by the neverending grind of 
searching for a job. Premove.ai was designed to help you answer your interview questions with confidence 
using information from your own technical experiences. Users can upload their resumes and Premove.ai 
will remember all the details. The companion is in the form of a Chrome Extension and with the click of a button,
it will provide a sample answer to the question of an interviewer in a Google Meets call. We were able to learn about 
*Chrome Extensions*, how to use the *OpenAI API*, *cross-origin resource sharing* between the frontend and backend, 
and full-stack web development using *React* and *Express*.

## Stack and Implementation
Premove.ai was built using *React* for the webpage where users upload their resumes, *Express* for communicating
with the *OpenAI API* and parsing the response, and a *Chrome Extension* as the tool that listens in Google Meets. 
React was used for its ability to responsively update the webpage when viewing the uploaded PDF and for testing
responses from the OpenAI API during testing. It was built as a Chrome Extension to easily access the web
contents of Google Meets calls and potentially other conferencing apps in the future.

## Usage
The React application and the Express application must be run simultaneously (local host).
Ensure the Chrome Extension is loaded into your browser.

- Chrome Extension:
  - While in Google Meets click on the action icon
  - The Premove.ai client will pop up
  - Click on the **Gear** icon to be redirected to upload your resume

- Webpage:
  - Upload your resume in PDF format and hit **"Upload"** or
  - Input all information in plain text format in the text field and hit **"Submit"**

- In a Google Meets call:
  - Turn on **Closed Captions** for the call
  - After a question is asked, wait 1 second and click the **Brain** icon
  - Wait for an answer to be generated and voila! 

## What's Next
We plan to fully implement the ability to upload resumes in PDF format and add the functionality
of generating mock interview questions.
