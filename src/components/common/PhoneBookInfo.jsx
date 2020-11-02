import React from 'react';
import styled from 'styled-components';

const Styled = {
    Body : styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        flex-direction: column;
        border: 1px solid #000000;
        padding: 24px; 
    `,
    Col : styled.div`
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
        margin-bottom: ${props=>props.bottom}px;
    `,
    Row : styled.div`
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
    `
}

const PhoneBookInfo = (props) => {

    const {info, onChange, onClickEditButton} = props

    const {title, name, value, isEditing} = info

    return (
        <Styled.Body>
            <Styled.Row bottom="30">
                <Styled.Col width="50">
                    {title}    
                </Styled.Col>
                <Styled.Col width="50">
                    {isEditing ? (
                        <input 
                        type="text"
                        name={name}
                        value={value}
                        onChange={onChange}
                    />
                    ) : value}
                </Styled.Col>
            </Styled.Row>
            <Styled.Row>
                <button
                    onClick={e=>{
                        e.preventDefault()
                        onClickEditButton(name)}}
                >
                    {isEditing ? '저장하기' : '수정하기'}
                    </button>
            </Styled.Row>
        </Styled.Body>
    );
};

PhoneBookInfo.defaultProps = {
    info : {
        title : '-',
    }
}

export default PhoneBookInfo;