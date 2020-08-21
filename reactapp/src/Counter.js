import React, { Component } from 'react';

class Counter extends Component {
		state = {
			number: 0,
			fixedNumber: 0
		};
	
	render() {
	const { number, fixedNumber } = this.state; //state를 조회할 때는 this.state로 조회한다.
	return (
		<div>
			<h1>{number}</h1>
			<h2>불변값: {fixedNumber}</h2>
			<button
				// onClick을 통해 버튼 클릭 시 호출될 함수 지정
			    onClick = {() => {
				//this.setState를 사용하여 state에 새로운 값을 넣을 수 있음.
					this.setState(
						{
						number: number +1
						},
						() => {
							console.log('setState 호출');
							console.log(this.state);
						}
						);
					}}
                >
                +1
                </button>
            </div>
        );
    }
}
export default Counter;
