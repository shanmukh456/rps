import {
  ChoiceItemContainer,
  ChoiceButton,
  ButtonImage,
} from './styledComponents'

const GetChoicesItem = props => {
  const {details, onSelectedButton} = props
  const {id, imageUrl} = details

  const testids = id.toLowerCase()
  const testIdName = `${testids}Button`

  const buttonClicked = () => {
    onSelectedButton(id)
  }

  return (
    <ChoiceItemContainer>
      <ChoiceButton
        data-testid={testIdName}
        onClick={buttonClicked}
        type="button"
      >
        <ButtonImage alt={id} src={imageUrl} />
      </ChoiceButton>
    </ChoiceItemContainer>
  )
}
export default GetChoicesItem
