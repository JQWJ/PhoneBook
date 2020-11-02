import React, { useState } from 'react';
import styled from 'styled-components';
import PhoneBookList from './components/common/PhoneBooksList';

const Styled = {
	Body: styled.div`
    display: flex;
	flex-direction: column;
    width: 100%;
  `,
	Container: styled.div`
    display: flex;
    width: 1000px;
	min-height: 1000px;
    margin: auto;
    flex-direction: column;
	background-color: skyblue;
  `,
	Wrapper: styled.div`
	display: flex;
	width: 100%
	`
}

function App() {

	const [phoneBookInfos, setPhoneBookInfos] = useState([
		{
			title: 'hi',
			name: 'hello2',
			value: '',
			isEditing : false,
		},
		{
			title: 'hi',
			name: 'hello3',
			value: '',
			isEditing : false,
		},
		{
			title: 'hi',
			name: 'hello4',
			value: '',
			isEditing : false,
		},
	])

	const handleOnChangePhoneBookInfo = (e) => {
		console.log(e.target.value, e.target.name)
		setPhoneBookInfos((prevState) => {
			return prevState.map((res) => {

				if (e.target.name === res.name) {
					return {
						...res,
						value: e.target.value
					}
				}
				return res
			})
		})
	}

	const handleOnClickPhoneBookInfoEditButton = (name) => {
		setPhoneBookInfos((prevState) => {
			return prevState.map((res) => {

				if (name === res.name) {
					return {
						...res,
						isEditing : !res.isEditing
					}
				}
				return res
			})
		})
	}

	return (
		<Styled.Body>
			<Styled.Container>
				<Styled.Wrapper>
					<PhoneBookList
						infos={phoneBookInfos}
						onChange={handleOnChangePhoneBookInfo}
						onClickEditButton={handleOnClickPhoneBookInfoEditButton}
					/>
				</Styled.Wrapper>
			</Styled.Container>
		</Styled.Body>
	);
}

export default App;
