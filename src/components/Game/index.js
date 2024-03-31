import {Component} from 'react'

import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import GetChoicesItem from '../GetChoicesItem'
import 'reactjs-popup/dist/index.css'

import {
  GameContainer,
  ResponsiveContainer,
  ScoreContainer,
  ScoreChoiceList,
  Heading,
  ScoreCardContainer,
  ScoreDescription,
  ScoreHeading,
  PopupButton,
  PlayingButtonImagesContainer,
  PopupButtonContainer,
  RulesImageContainer,
  CloseLineContainer,
  CloseLineButton,
  RulesImage,
  ResultPageContainer,
  ResultViewContainer,
  ResultsContainer,
  ResultPersonHeading,
  ResultImage,
  ResultHeadinBottom,
  PlayAgainButton,
} from './styledComponents'

class Game extends Component {
  state = {
    showResult: false,
    score: 0,

    myChoice: [],
    opponentChoice: [],
    resultMsg: '',
  }

  onSelectedButton = id => {
    const selecteButton = id
    const {choicesList} = this.props

    const number = Math.floor(Math.random() * choicesList.length)

    const myImage = choicesList.filter(
      eachChoice => eachChoice.id === selecteButton,
    )

    const {imageUrl} = myImage[0]

    const randomDetails = choicesList[number]
    const opponentId = randomDetails.id

    if (selecteButton === 'ROCK' && opponentId === 'SCISSORS') {
      this.setState(prevState => ({
        score: prevState.score + 1,
        myChoice: [selecteButton, imageUrl],
        opponentChoice: [randomDetails],
        resultMsg: 'YOU WON',
        showResult: !prevState.showResult,
      }))
    } else if (selecteButton === 'ROCK' && opponentId === 'PAPER') {
      this.setState(prevState => ({
        score: prevState.score - 1,
        myChoice: [selecteButton, imageUrl],
        opponentChoice: [randomDetails],
        resultMsg: 'YOU LOSE',
        showResult: !prevState.showResult,
      }))
    } else if (selecteButton === 'PAPER' && opponentId === 'ROCK') {
      this.setState(prevState => ({
        score: prevState.score + 1,
        myChoice: [selecteButton, imageUrl],
        opponentChoice: [randomDetails],
        resultMsg: 'YOU WON',
        showResult: !prevState.showResult,
      }))
    } else if (selecteButton === 'PAPER' && opponentId === 'SCISSORS') {
      this.setState(prevState => ({
        score: prevState.score - 1,
        myChoice: [selecteButton, imageUrl],
        opponentChoice: [randomDetails],
        resultMsg: 'YOU LOSE',
        showResult: !prevState.showResult,
      }))
    } else if (selecteButton === 'SCISSORS' && opponentId === 'ROCK') {
      this.setState(prevState => ({
        score: prevState.score - 1,
        myChoice: [selecteButton, imageUrl],
        opponentChoice: [randomDetails],
        resultMsg: 'YOU LOSE',
        showResult: !prevState.showResult,
      }))
    } else if (selecteButton === 'SCISSORS' && opponentId === 'PAPER') {
      this.setState(prevState => ({
        score: prevState.score + 1,
        myChoice: [selecteButton, imageUrl],
        opponentChoice: [randomDetails],
        resultMsg: 'YOU WON',
        showResult: !prevState.showResult,
      }))
    } else {
      this.setState({
        myChoice: [selecteButton, imageUrl],
        opponentChoice: [randomDetails],
        resultMsg: 'IT IS DRAW',
        showResult: true,
      })
    }
  }

  onGetPlayButtons = () => {
    const {choicesList} = this.props
    return (
      <PlayingButtonImagesContainer>
        {choicesList.map(eachChoice => (
          <GetChoicesItem
            key={eachChoice.id}
            onSelectedButton={this.onSelectedButton}
            details={eachChoice}
          />
        ))}
      </PlayingButtonImagesContainer>
    )
  }

  onClickPlayAgain = () => {
    this.setState({showResult: false})
  }

  getResult = () => {
    const {myChoice, opponentChoice, resultMsg} = this.state

    return (
      <ResultPageContainer>
        <ResultViewContainer>
          <ResultsContainer>
            <ResultPersonHeading>YOU</ResultPersonHeading>
            <ResultImage src={myChoice[1]} alt="your choice" />
          </ResultsContainer>
          <ResultsContainer>
            <ResultPersonHeading>OPPONENT</ResultPersonHeading>
            <ResultImage
              src={opponentChoice[0].imageUrl}
              alt="opponent choice"
            />
          </ResultsContainer>
        </ResultViewContainer>
        <ResultHeadinBottom>{resultMsg}</ResultHeadinBottom>
        <PlayAgainButton onClick={this.onClickPlayAgain} type="button">
          Play Again
        </PlayAgainButton>
      </ResultPageContainer>
    )
  }

  render() {
    const {showResult, score} = this.state
    return (
      <GameContainer>
        <ResponsiveContainer>
          <ScoreContainer>
            <ScoreChoiceList>
              <Heading>Rock Paper Scissors</Heading>
            </ScoreChoiceList>
            <ScoreCardContainer>
              <ScoreDescription>Score</ScoreDescription>
              <ScoreHeading>{score}</ScoreHeading>
            </ScoreCardContainer>
          </ScoreContainer>
          {showResult ? this.getResult() : this.onGetPlayButtons()}
        </ResponsiveContainer>
        <PopupButtonContainer>
          <Popup modal trigger={<PopupButton type="button">Rules</PopupButton>}>
            {close => (
              <RulesImageContainer>
                <CloseLineContainer>
                  <CloseLineButton type="button" onClick={() => close()}>
                    <RiCloseLine />
                  </CloseLineButton>
                </CloseLineContainer>
                <RulesImage
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </RulesImageContainer>
            )}
          </Popup>
        </PopupButtonContainer>
      </GameContainer>
    )
  }
}
export default Game
