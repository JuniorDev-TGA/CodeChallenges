# CodeChallenges
The home of the JuniorDev coding challenges! These challenges are posted regularly to our Slack channel, so make sure you're on there and get involved!

## What is this?

JuniorDev TGA is a group of developers from the Bay of Plenty region in New Zealand who are keen on learning. We come in all ages and experiences, from those who are just starting out, to those who are in their first developer role, and those who have been in their role for a while - the one thing we all have in common is that we are here to learn and help bring others up to our knowledge levels.

We have put together these challenges for each other, taken from around the web, to help us learn and work as a team to test, solve, and refactor. 

### These challenges aren't in the language I know!

We take all the help we can get at JuniorDev TGA and anyone is welcome to write up a challenge for the group, so understand that not everyone is going to know or even be comfortable using the same language yet. If the challenge isn't in the language you're learning, then you can use this as an opportunity to contribute to the community by rewriting the challenge in the language you know for others to reference as well (i.e. if the challenge is code in JS, you can rewrite it in Python) or just go ahead and write your solution in the language you want.

### These challenges are too easy!

Great! However, we want to be able to cater to all the different experience levels our members are at so we like to keep the challenges so everyone can learn something. If you're breezing through the challenges then you can step up and do a code review of the solutions sent in, or help out by writing unit tests for the challenges to make sure everything works.

### I can make better challenges than this!

Awesome! You won't mind contributing then :) See the steps below on contributing; challenges can be a written problem, practicing a design pattern, badly written code that needs to be refactored, or just code infested with bugs.

## Getting Started

### It's my first time

Obviously, you need a Github account... Then follow:

1. Click the FORK button in the top right. This essentially copies this entire repo in it's current state to your account, so you can make changes and additions privately without affecting the original. You'll now be in your copy of the repo.
2. Click the green Clone or Download button and copy that link. We're going to use the command line to save this onto your computer :)
3. Open your chosen command line application of choice! Use the 'cd' command to navigate to the chosen directory of your choice (i.e. a folder in your Documents for all the challenges you're going to solve). << another method of cloning locally? >>
4. Clone the repo here using 'git clone ' and copy and paste the link.
5. All set! You have the repo on your machine locally to work on. Now, you want to create a branch to work on instead of Master. In the command line, type git checkout -b [your name] - this will create the branch and put you on it. Then find the folder with the challenge you want to solve and in the Solutions folder, create your solutions file.

### It's not my first rodeo

If you have the repo locally and the challenge you want is there, then just follow step 5 from above and solve away! However, if it's a new challenge, you'll have to do a pull to get it...

1. In your command line application of choice, navigate to the repo folder (i.e. cd documents/juniordev/challenges)
2. Use the git pull origin master command - this is pulling all the changes from the master repo (the JuniorDevTGA one) to your local one.
3. Follow step 5 from above, making sure you're on your own branch.

### Let's submit

You're done and dusted and ready to submit your solution! Now you need to push it and make the request to pull it into the master repo...

1. In the command line, do a git add . to stage your files. Any files changed or added will be included here.
2. Use git commit -m "[your message]" to commit the staged files. It's good practice to write a message, even if it is just that you tried!
3. Now's the time to push your changes from your local (your computer) to your remote (github). Use git push for this.
4. Yay! Done! Now you need to make the pull request so we can add your solution; go to the repo on *your* github page.
5. Click the NEW PULL REQUEST button. This is going to take you to a page to show all your changes and confirm your want to pull your changes from your branch to the master branch of the master (JuniorDevTGA) repo. Click through the green buttons to confirm this.
6. All done! Now onto the next challenge..

## Contributing

You want to submit a challenge? These can be a written problem, practicing a design pattern, badly written code that needs to be refactored, or just code infested with bugs - if you're taking the challenge from somewhere else on the web, just make sure you're creditting the source :)

To contribute, just copy the steps from above to make sure you have the latest version of the repo on your local so you can add your stuff and then follow the submitting steps to send it through. Follow the format that's already there with challenges each having their own folder within the challenges folder, and a folder for solutions. You can submit challenges in any language you want or you can keep it generic by just having the challenge written in sudo code in a readme.md file - but try to add as much information as possible; we don't want handholding but we want to learn something on what we need to do and what we're going to be learning. Feel free to even add in links to resources for people to learn more if they want if it's a design pattern or basic fundamental.

## Resources

Where are we getting the challenges from?