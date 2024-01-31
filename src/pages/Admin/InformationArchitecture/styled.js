import styled from "styled-components";

export const IABox = styled.div`
    width: calc(100% - 200px);
    height: auto;
    display: flex;
    flex-direction: column;
    margin: 274px 165px 50px;
    padding: 2% 6px 0 6px;
    background: #FFFEFE;
    
`;

export const AddSection = styled.div`
    width: 100%;
    height: 32px;
    display: flex;
    flex-direction: row;
  gap: 59px; 
    margin-bottom: 30px;
`;

export const SportsItemsGroup = styled.div`
    width: 30%;
    max-width: 160px;
    display: flex;
    flex-direction: column;
`;
export const LeaguesItemsGroup = styled(SportsItemsGroup)`
    margin-left: 59px;
`;
export const TeamsItemsGroup = styled(SportsItemsGroup)`
     margin-left: 59px;
    
`;

export const IAItemsSection = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: row;
`;



