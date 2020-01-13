import styled from 'styled-components';

export const StandingContainer = styled.div`
    width: 70%;
    margin: 0 auto;
`;

export const Title = styled.div`
    font-size: 14px;
    font-weight: bold;
    color: #FFFD5E;
    padding: 5px 3px;
`;

export const Table = styled.table`
    background-color: #3e1964;
    padding: 5px 10px;
    text-align: center;
    margin: 5px;
    width: 100%;
    table-layout: fixed;
    border: 2px solid #3e1964;
`;

export const TableRow = styled.tr`
    &:nth-child(even) {background-color: #321450}
    &:nth-child(odd) {background-color: #3e1964}
`;

export const TableHeader = styled.th`
    padding: 10px 20px;
    width: 10%;
`;

export const TableData = styled.td`
    width: 8%;
    padding: 5px 10px;
`;

export const TableTeamHeader = styled.th`
    width: 30%
`;

export const TableIndexHeader = styled.th`
    width: 5%
`;

// tr:nth-child(even) {background-color: $main-color;}
// tr:nth-child(odd) {background-color: $sub-color;}

// .standings {
//     .standing-table {
//         width: 1000px;
//         text-align: center;
//         .standing-header-row {
//             height: 35px;
//         }

//         .standing-row {
//             width: 31px;
//             height: 49px;

//             .team {
//                 width: 200px;
//                 text-align: left;
//             }

//             td {
//                 font-size: 20px;
//                 width: 31px;
//             }

//             .points {
//                 font-weight: bold;
//             }

//         }
//         .icon {
//             width: 30px;
//             height: 30px;
//             margin-right: 10px;
//             display: inline-block;
//             vertical-align: middle;
//         }
//     }
// }