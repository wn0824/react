import React, { useState } from 'react';
//함수형
const EventPractice = () => {
    const [form, setForm] = useState({
        username: '',
        message: ''
    });
    const { username, message} = form;
    const onChange = e => {
        const nextForm = {
            ...form,
            [e.target.name]: e.target.value
        };
        setForm(nextForm);
    };
    const onClick = () => {
        alert(username + ': ' + message);
        setForm({
            username: '',
            message: ''
        });
    };
    const onKeyPress = e => {
        if(e.key === 'Enter') {
            onClick();
        }
    };
return (
    <div>
        <h1>이벤트 연습</h1>
        <input 
            type = "text"
            name="username"
            placeholder="username"
            value={username}
            onChange={onChange}
        />
        <input
            type="text"
            name="message"
            placeholder="write there"
            value={message}
            onChange={onChange}
            onKeyPress={onKeyPress}
            />
        <button onClick={onClick}>check</button>
    </div>
    );
};
    //클래스형
// import React, { Component } from 'react';

// class EventPractice extends Component {

//     state = {
//         username: '',
//         message: ''
//     }

//     constructor(props) {
//         super(props);
//         this.handleChange = this.handleChange.bind(this);
//         this.handleClick = this.handleClick.bind(this);
//     }

//     handleChange = (e) => {
//         this.setState({
//            [e.target.name]: e.target.value
//         });
//     }

//     handleClick = () => {
//         alert(this.state.username + ': ' + this.state.message);
//         this.setState({
//             username: '',
//             message: ''
//         });
//     }

//     handleKeyPress = (e) => {
//         if(e.key === 'Enter') {
//             this.handleClick();
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <h1>이벤트 연습</h1>
//                 <input
//                     type="text"
//                     name="username"
//                     placeholder="사용자명"
//                     value={this.state.username}
//                     onChange={this.handleChange}
//                 />
//                 <input
//                     type = "text"
//                     name = "message"
//                     placeholder = "아무거나 적어보세요"
//                     value = {this.state.message}
//                     onChange = {this.handleChange}
//                     onKeyPress = {this.handleKeyPress}
//                 />
//                 <button onClick = {this.handleClick}
//                     >check</button>
//             </div>
//         )
//     }
// }


export default EventPractice;