$(document).ready(function () {
    let start = $("#start");
    let done = $("#done");
    let headr = $(".headr");
    let sec = $("#sec");
    let bdy = $("#bdy");
    let res = $("#res");

    let second = 120;
    let time;
    let nextQuestion = 0;
    let correctA = 0;
    let wrongA = 0;

    let question = [{
            q: "What was the first full length CGI movie?",
            A: "A Bug's Life",
            B: "Monsters Inc",
            C: "Toy Story",
            D: "The Lion King",
            answer: "c"
        },
        {
            q: "Which of these is NOT a name of one of the Spice Girls?",
            A: "Sporty Spice",
            B: "Fred Spice",
            C: "Scary Spice",
            D: "Posh Spice",
            answer: "b"
        },
        {
            q: "Which NBA team won the most titles in the 90s?",
            A: "New York Knicks",
            B: "Portland Trailblazers",
            C: "Los Angeles Lakers",
            D: "Chicago Bulls",
            answer: "d"
        },
        {
            q: "Which group released the hit song, 'Smells Like Teen Spirit'?",
            A: "Nirvana",
            B: "Backstreet Boys",
            C: "The Offspring",
            D: "No Doubt",
            answer: "a"
        },
        {
            q: "Which popular Disney movie featured the song, 'Circle of Life' ?",
            A: "Aladdin",
            B: "Hercules",
            C: "Mulan",
            D: "The Lion King",
            answer: "d"
        },
        {
            q: "Finish this line from the Fresh Prince of Bel-Air theme song: 'I whistled for a cab and when it came near, the license plate said...'",
            A: "Dice",
            B: "Mirror",
            C: "Fresh",
            D: "Cab",
            answer: "c"
        },
        {
            q: "What was Doug's best friend's name?",
            A: "Skeeter",
            B: "Mark",
            C: "Zach",
            D: "Cody",
            answer: "a"
        },
        {
            q: "What was the name of the principal at Bayside High in Saved By The Bell?",
            A: "Mr.Zhou",
            B: "Mr.Driggers",
            C: "Mr.Belding",
            D: "Mr.Page",
            answer: "c"
        }
    ];

    let arrL = question.length;

    let startGame = resp => {
        $.each(resp, (index, el) => {
            $("#qs").append(`
            <div>
            <h1 id="questions" class="mb-2">${el.q}</h1>
        </div>
        <div class="d-flex justify-content-around mb-3">
            <div>
                <input class="form-check-input" type="radio" name="${index}" id="label1" value="a"
                    aria-label="...">
                <label id="answerA">${el.A}</label>
            </div>
            <div>
                <input class="form-check-input" type="radio" name="${index}" id="label2" value="b"
                    aria-label="...">
                <label id="answerB">${el.B}</label>
            </div>
            <div>
                <input class="form-check-input" type="radio" name="${index}" id="label3" value="c"
                    aria-label="...">
                <label id="answerC">${el.C}</label>
            </div>
            <div>
                <input class="form-check-input" type="radio" name="${index}" id="label4" value="d"
                    aria-label="...">
                <label id="answerD">${el.D}</label>
            </div>
        </div>
            `)
        })
    }

    $(document).on("click", "input", function(){
        let inputValue = $(this).val();
        console.log(inputValue);
        console.log(question[nextQuestion].answer);
        if (question[nextQuestion].answer == inputValue) {
            correctA++;
        } else {
            wrongA++;
        }
        nextQuestion++;
    });

    start.on("click", () => {
        bdy.removeClass("d-none").addClass("d-block");
        headr.hide();
        startGame(question);
        clearInterval(time);
        time = setInterval(() => {
            second--;
            sec.html(`Time Remaining: ${second} Seconds`);
            if (second == 0) {
                bdy.removeClass("d-block").addClass("d-none");
                res.removeClass("d-none").addClass("d-block");
                clearInterval(time);
            }
        }, 1000)
    })

    done.on("click", () => {
        bdy.removeClass("d-block").addClass("d-none");
        res.removeClass("d-none").addClass("d-block");

        $("#caR").html(`Correct Answers: ${correctA}`);
        $("#waR").html(`Incorrect Answers: ${wrongA}`);
        $("#unAnswerR").html(`Unanswered: ${arrL - (correctA + wrongA)}`);
    })
})