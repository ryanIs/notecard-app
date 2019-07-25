var fs = require("fs");
var jsonCourses = JSON.parse(fs.readFileSync("Courses.json").toString());

var courses = jsonCourses["courses"];

function addNotecard(course, question, answer) {
    var newNotecard = {
        "question" : question,
        "answer" : answer
    };
    var courseNameError = true;
    for (var c = 0; c < courses.length; c++) {
        if (courses[c].courseName.toLowerCase() === course.toLowerCase()) {
            courses[c].notecards.push(newNotecard);
            fs.writeFile("Courses.json", JSON.stringify(jsonCourses, null, 4));
            courseNameError = false;
        }
    }
    if (courseNameError) {
        console.log("Error: addNotecard()\nInvalid course name.");
    }
}

function deleteNotecard(course, question) {
    var courseNameError = true;
    for (var c = 0; c < courses.length; c++) {
        if (courses[c].courseName.toLowerCase() === course.toLowerCase()) {
            courseNameError = false;
            var notecards = courses[c].notecards;
            var notecardQuestionError = true;
            for (var notecard in notecards) {
                if (notecards[notecard].question === question) {
                    var notecardIndex = notecards.indexOf(notecards[notecard].question);
                    notecards.splice(notecardIndex, 1);
                    fs.writeFile("Courses.json", JSON.stringify(jsonCourses, null, 4));
                    notecardQuestionError = false;
                }
            }
            if (notecardQuestionError) {
                console.log("Error: deleteNotecard()\nInvalid notecard question.");
            }
        }
    }
    if (courseNameError) {
        console.log("Error: deleteNotecard()\nInvalid course name.");
    }
}

function replaceQuestion(course, question, newQuestion) {
    var courseNameError = true;
    for (var c = 0; c < courses.length; c++) {
        if (courses[c].courseName.toLowerCase() === course.toLowerCase()) {
            courseNameError = false;
            var notecards = courses[c].notecards;
            var notecardQuestionError = true;
            for (var notecard in notecards) {
                if (notecards[notecard].question === question) {
                    notecards[notecard].question = newQuestion;
                    fs.writeFile("Courses.json", JSON.stringify(jsonCourses, null, 4));
                    notecardQuestionError = false;
                }
            }
            if (notecardQuestionError) {
                console.log("Error: replaceQuestion()\nInvalid notecard question.");
            }
        }
    }
    if (courseNameError) {
        console.log("Error: replaceQuestion()\nInvalid course name.");
    }
}

function replaceAnswer(course, question, newAnswer) {
    var courseNameError = true;
    for (var c = 0; c < courses.length; c++) {
        if (courses[c].courseName.toLowerCase() === course.toLowerCase()) {
            courseNameError = false;
            var notecards = courses[c].notecards;
            var notecardQuestionError = true;
            for (var notecard in notecards) {
                if (notecards[notecard].question === question) {
                    notecards[notecard].answer = newAnswer;
                    fs.writeFile("Courses.json", JSON.stringify(jsonCourses, null, 4));
                    notecardQuestionError = false;
                }
            }
            if (notecardQuestionError) {
                console.log("Error: replaceAnswer()\nInvalid notecard question.");
            }
        }
    }
    if (courseNameError) {
        console.log("Error: replaceAnswer()\nInvalid course name.");
    }
}

function getNotecard(course, question) {
    var courseNameError = true;
    for (var c = 0; c < courses.length; c++) {
        if (courses[c].courseName.toLowerCase() === course.toLowerCase()) {
            courseNameError = false;
            var notecards = courses[c].notecards;
            var notecardQuestionError = true;
            for (var notecard in notecards) {
                if (notecards[notecard].question === question) {
                    return notecards[notecard];
                }
            }
        }
    }
}

// addNotecard('calculus', 'a', 'b');
// deleteNotecard('calculus', 'not a');
// replaceQuestion('calculus', 'a', 'not a');
// replaceAnswer('calculus', 'a', 'not b');
// 
