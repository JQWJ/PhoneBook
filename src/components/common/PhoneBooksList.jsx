import React from 'react';
import styled from 'styled-components';
import PhoneBookInfo from './PhoneBookInfo';

const Styled = {
    Body : styled.div`
        display: flex;
        width: 600px;
        margin: 30px auto;
        flex-direction: column;
    `,
    PhoneBookInfoWrapper : styled.div`
        display: flex;
        width: 100%;
        margin-bottom: 15px;
        :last-child {
            margin-bottom: 0;
        }
    `
}

const PhoneBookList = (props) => {

    const {infos, onChange, onClickEditButton} = props
    
    const list = infos.map((res, i) => {
        return (
            <Styled.PhoneBookInfoWrapper
                key={i}
            >
                <PhoneBookInfo 
                    info={res}
                    onChange={onChange}
                    onClickEditButton={onClickEditButton}
                />
            </Styled.PhoneBookInfoWrapper>
        )
    })

    return (
        <Styled.Body>
            {list}
        </Styled.Body>
    )
}

export default PhoneBookList;