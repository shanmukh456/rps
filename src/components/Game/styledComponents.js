import styled from 'styled-components'

export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background-color: #223a5f;
  padding: 12px;
`

export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  align-items: center;
  background-color: #223a5f;
  width: 90%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const ScoreContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border: 2px solid #ffffff;
  border-radius: 8px;
  padding: 12px;
  padding-left: 28px;
  padding-right: 28px;
  align-items: center;
  width: 100%;
  max-width: 940px;
  @media screen and (max-width: 768px) {
    max-width: 520px;
  }
`
export const ScoreChoiceList = styled.div`
  display: flex;
  flex-direction: column;
`
export const Heading = styled.h1`
  font-family: 'Bree Serif';
  font-size: 18px;
  font-weight: 600px;
  color: #ffffff;
  padding: 0px;
  margin: 0px;
`

export const ScoreCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  border-radius: 12px;
  height: 100px;
  width: 140px;
  @media screen and (max-width: 768px) {
    height: 120px;
    width: 100px;
  }
`
export const ScoreDescription = styled.p`
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: 700px;
  color: #223a5f;
  text-align: center;
  margin-bottom: 0px;
`
export const ScoreHeading = styled.p`
  margin-top: 0px;
  font-size: 38px;
  font-family: 'Roboto';
  font-weight: 800px;
  color: #223a5f;
  text-align: center;
`
export const PlayingButtonImagesContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0px;
  margin: 0px;
  padding-top: 48px;
  padding-bottom: 48px;
  width: 50%;
  max-width: 400px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`
export const PopupButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
`

export const PopupButton = styled.button`
  font-family: 'Bree Serif';
  font-size: 14px;
  background-color: #ffffff;
  padding: 8px;
  padding-left: 12px;
  padding-right: 12px;
  border-radius: 4px;
`
export const RulesImageContainer = styled.div``

export const CloseLineContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

export const CloseLineButton = styled.button`
  border: 0;
  background-color: transparent;
  cursor: pointer;
  font-size: 25px;
`

export const RulesImage = styled.img`
  width: 100%;
  background-size: cover;
  height: 100%;
`
export const ResultPageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`
export const ResultViewContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 48px;
  padding-bottom: 12px;
  margin-bottom: 0px;
`
export const ResultPersonHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 22px;
  font-weight: 500px;
  color: #ffffff;
`
export const ResultImage = styled.img`
  height: 140px;
  width: 140px;
`

export const ResultHeadinBottom = styled.p`
  font-family: 'Roboto';
  font-size: 28px;
  font-weight: 600px;
  color: #ffffff;
`

export const PlayAgainButton = styled.button`
  background-color: #ffffff;
  border: none;
  outline: none;
  border-radius: 8px;
  padding: 12px;
  padding-left: 18px;
  padding-right: 18px;
  cursor: pointer;
`
