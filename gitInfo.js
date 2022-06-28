/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
let gitDefinition = ("Git is a software for tracking changes in any set of files")
console.log(gitDefinition)
//////////////////PROBLEM 2////////////////////
/* 
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is. 
*/
let gitHubDefinition = ("a code hosting platform for version control and collaboration")
console.log(gitHubDefinition)
//CODE HERE

//////////////////PROBLEMS 3 - 8////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

//CODE HERE
let init = {properties: "git init",
 description:"This command creates an empty Git repository"
}
//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

//CODE HERE
let clone = { properties: "git clone",
description:" primarily used to point to an existing repo and make a clone or copy of that repo at in a new directory, at another location" }
//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

//CODE HERE
let status = {properties:"git status",
description:"displays the state of the working directory and the staging area"
}
//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

//CODE HERE
let add  = {properties:"git add1",
    description:"adds a change in the working directory to the staging area"
    }
//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

//CODE HERE
let commit = {properties:"git commit",
    description:"the core building block units of a Git project timeline. "
    }
console.log(commit)
//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

//CODE HERE
let push = {properties:"git push",
    description:"used to upload local repository content to a remote repository"
    }