import React from 'react';
import './styles/extra.css';

const Home = () => {
    return (
        <div className="backgrd">
            <h1> Welcome to Quizophile </h1>
            <img src="https://www.psd.gov.sg/images/default-source/challenge-library/lifestyle/trivia-quiz/quiz-trivia-edm/trivia-quiz-yellow-main-720x400.jpg" alt='nothing' height='350px' width="600px" className="center"></img>

            <div>
                <h1> About us </h1>
                <p> This Quizophile is a great platform where you can take the quizes and test your knowledge with respective to that category.We have many different and distinct categories like GK,cartoons,Politics,Historical etc., you can get on spot answers if you select the wrong choice and the final score will be showed after all the questions are completed.You can take the quiz and test you knowledge. Good Luck !!</p>
                <h2> Take the Quiz --------------- <input type="button" class="button" value="Take Quiz >>" align="center"></input> </h2>
            </div>
        </div>
    )
}

export default Home;