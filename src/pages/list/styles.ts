import styled from "styled-components";


export const ButtonBack = styled.button`
text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 15%;
  height: 3rem;
  border: none;
  color: black;
  border-radius: 2rem;
  cursor: pointer;
  margin:5px;
`;
export const Button = styled.button`
    /* Adapt The colors based on primary prop */
    background: palevioleTred;
    color: white;
    font-size: 1em;
    margin: 1em;
    padding: 0.15em 0.50em;
    border: 2px solid palevioleTred;
    border-radius: 3px;
    :hover{
        background-color:red;
        transition: 600ms;
    };
    :active {
        top:2px;
    }
`;

export const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: Translate(-50%, -50%);
    color:white;
`;
export const Th = styled.th`
    padding: 15px;
    background-color: rgba(255, 255, 255, 0.2);
    color: #fff;
    ext-align: left;
`;
export const Td = styled.td`
    padding: 15px;
    background-color: rgba(255, 255, 255, 0.2);
    color: #fff;
`;
export const Thead = styled.thead`
    ${`Th`} {
        background-color: #55608f;
    }
`;
export const Tbody = styled.tbody`
    TableRow {
		&:hover {
			background-color: rgba(255,255,255,0.3);
		}
	}
	td {
		position: relative;
		&:hover {
			&:before {
				content: "";
				position: absolute;
				left: 0;
				right: 0;
				top: -9999px;
				bottom: -9999px;
				background-color: rgba(255,255,255,0.2);
				z-index: -1;
			}
		}
	}
`;
export const Table = styled.table`
    width: 800px;
    border-collapse: collapse;
    overflow: hidden;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;
export const TableRow = styled.tr``;
export const TableHead = styled.th`
`;
export const TableTd =styled.td`
padding-left:40px;`
