import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
const Styles = styled.div`
	padding: 1rem;
	.table-wrapper {
		margin: auto;
		overflow: auto;
		max-width: 60%;

		background: linear-gradient(to right, white 30%, rgba(255, 255, 255, 0)), linear-gradient(to right, rgba(255, 255, 255, 0), white 70%) 0 100%,
			radial-gradient(farthest-side at 0% 50%, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)), radial-gradient(farthest-side at 100% 50%, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)) 0 100%;
		background-repeat: no-repeat;
		background-color: white;
		background-size: 40px 100%, 40px 100%, 14px 100%, 14px 100%;
		background-position: 0 0, 100%, 0 0, 100%;
		background-attachment: local, local, scroll, scroll;
	}
	table {
		border-spacing: 0;
		border: 1px solid black;
		tr:nth-child(odd) {
			background-color: rgb(191, 226, 242);
		}
		tr {
			:last-child {
				td {
					border-bottom: 0;
				}
			}
		}
		th {
			background-color: rgb(3, 173, 252);
			color: #fff;
			white-space: nowrap;
		}
		th,
		td {
			margin: 0;
			padding: 0.5rem;
			border-bottom: 1px solid black;
			border-right: 1px solid black;

			:last-child {
				border-right: 0;
			}
		}
	}
`;

const Table = (props) => {
	let history = useHistory();
	return (
		<Styles>
			<div className="table-wrapper" tabIndex="0">
				<table style={{ width: "100%" }}>
					<tr>
						<th></th>
						{props.colHead.map((el, ind) => {
							return <th onClick={() => history.push({ pathname: "/date-details", state: { detail: ind } })}>{el}</th>;
						})}
					</tr>

					{props.rowHead.map((el, ind) => {
						return (
							<tr>
								<th>{el}</th>
								{props.data[ind].map((el) => {
									return <td>{el}</td>;
								})}
							</tr>
						);
					})}

					{/* <tr>
            <th></th>
            <th>Data</th>
          </tr>
          <tr>
            <td>value</td>
            <td>12</td>
          </tr> */}
				</table>
			</div>
		</Styles>
	);
};

export default Table;
