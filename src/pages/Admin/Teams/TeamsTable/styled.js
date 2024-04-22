import styled from "styled-components";
import { ReactComponent as FilterIcon } from "../../../../assets/filter-icon.svg";

export const Table = styled.table`
  width: 1165px;
  display: table;
  border-collapse: collapse;
`;
export const TeamTableHeader = styled.thead`
  width: 100%;
  height: 40px;
  margin: 0;
  padding: 0;
  border-collapse: collapse;
`;
export const TeamTableHeaderRow = styled.tr`
  background: #f2f2f2;
  display: table-row;
  height: 40px;
  border: 2px solid #f2f2f2;
`;
export const TeamTableHeaderCell = styled.th`
  user-select: none;
  height: 40px;
  display: table-cell;
  text-align: start;
`;
export const TeamTableHeaderCell1 = styled(TeamTableHeaderCell)`
  padding-left: 35px;
  min-width: 217px;
`;

export const TeamTableHeaderCell2 = styled(TeamTableHeaderCell)`
  padding-left: 13px;
  min-width: 250px;
`;

export const TeamTableHeaderCell3 = styled(TeamTableHeaderCell)`
  padding-left: 9px;
  min-width: 169px;
`;

export const TeamTableHeaderCell4 = styled(TeamTableHeaderCell)`
  padding-left: 14px;
  min-width: 165px;
`;

export const TeamTableHeaderCell5 = styled(TeamTableHeaderCell)`
  padding-left: 14px;
  min-width: 140px;
`;
export const TeamTableHeaderCell6 = styled(TeamTableHeaderCell)`
  padding-left: 5px;
  min-width: 55px;
`;
export const TeamTableHeaderCell7 = styled(TeamTableHeaderCell)`
  padding-left: 5px;
  min-width: 55px;
`;

export const TeamTableHeaderCellText = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  color: #434c5d;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  margin: 0;
`;
export const HeaderSortButton = styled.button`
  width: 35px;
  height: 35px;
  border: none;
  background: transparent;
  margin-right: 15px;
`;
export const HeaderSortIcon = styled(FilterIcon)`
  width: 13px;
  height: 10px;
  transition: transform 0.3s ease;
  transform: ${({ $isTransform }) =>
    $isTransform ? "rotate(180deg)" : "rotate(0deg)"};
`;

export const TeamTable = styled.tbody`
  width: 100%;
  margin: 0;
  padding: 0;
  border-collapse: collapse;
`;

export const TeamTableCell = styled.td`
  user-select: none;
  padding: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: table-cell;
  padding: 0;
`;
export const TeamTableCell1 = styled(TeamTableCell)`
  padding-left: 35px;
  min-width: 217px;
`;

export const TeamTableCell2 = styled(TeamTableCell)`
  padding-left: 13px;
  min-width: 250px;
`;

export const TeamTableCell3 = styled(TeamTableCell)`
  padding-left: 9px;
  min-width: 169px;
`;

export const TeamTableCell4 = styled(TeamTableCell)`
  padding-left: 14px;
  min-width: 165px;
`;

export const TeamTableCell5 = styled(TeamTableCell)`
  padding-left: 14px;
  min-width: 140px;
`;

export const TeamTableCell6 = styled(TeamTableCell)`
  padding-left: 15px;
  min-width: 55px;
  visibility: hidden;
`;

export const TeamTableCell7 = styled(TeamTableCell)`
  padding-left: 5px;
  min-width: 55px;
  visibility: hidden;
`;

export const TeamTableRow = styled.tr`
  background: #ffffff;
  display: table-row;
  width: 100%;
  border: 2px solid #d4d9e2;
  position: relative;
  &:hover {
    border: 4px solid rgba(0, 0, 0, 0.09);
    ${TeamTableCell6} {
      visibility: visible;
    }
    ${TeamTableCell7} {
      visibility: visible;
    }
  }
`;
export const DeleteButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const TeamTableCellText = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #2b2f43;
`;

export const PaginationContainer = styled.tfoot`
  display: table-footer-group;
  width: 100%;
  background: #ffffff;
  border: 2px solid #d4d9e2;
`;

export const PaginationRow = styled.tr`
  display: table-row;
  width: 100%;
  height: 48px;
`;

export const PaginationCell = styled.td.attrs({
  colSpan: 1,
})`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;
  padding-left: 22px;
`;

export const PaginationCellText = styled.td.attrs({
  colSpan: 3,
})`
  display: table-cell;
  font-size: 15px;
  line-height: 24.93px;
  color: #b2bbc5;
`;

export const PaginationButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const PageNumber = styled.span`
  margin: 0 10px;
  color: ${(props) => (props.$isActive ? "#4F5963" : "#B2BBC5")};
  font-size: 16px;
  font-weight: bold;
  line-height: 24.93px;
`;

export const ResultCell = styled.td.attrs({
  colSpan: 1,
})`
  display: table-cell;
  text-align: end;
  padding-right: 20px;
  border-top: none;
  text-align: right;
`;
export const ResultCellText = styled.td.attrs({
  colSpan: 2,
})`
  display: table-cell;
  font-size: 15px;
  line-height: 24.93px;
  color: #b2bbc5;
  padding-left: 90px;
`;

export const ResultsPerPageDropdown = styled.div`
  position: relative;
  width: 43px;
  height: 24px;
  border: 1px solid #d9e1e9;
  border-radius: 3px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ResultItemItem = styled.p`
  padding-left: 5px;
  margin: 0;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 25px;
  color: #6f7983;
  text-align: left;
`;
export const DropdownButton = styled.button`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: none;
  background: transparent;
`;
export const DropdownIcon = styled.span`
  width: 12px;
  height: 12px;
`;

export const DropdownContent = styled.div`
  position: absolute;
  top: 100%;
  right: -1px;
  background-color: #fff;
  border: 1px solid #d9e1e9;
  border-radius: 3px;
  z-index: 1;
  width: 100%;
`;
export const DropdownItem = styled.p`
  padding-left: 5px;
  margin-bottom: 0;
  margin-top: 0;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  text-align: left;
  color: #b2bbc5;
  &:hover {
    background-color: rgba(215, 33, 48, 0.11);
  }
`;
