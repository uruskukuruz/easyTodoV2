import React from "react";
import './Modal.css'

export default class Modal extends React.Component {
    state = {
        isOpen: false
    }

    render() {
        return (
            <React.Fragment>
                <button onClick={() => this.setState({ isOpen: true})}>What is it? Что это?</button>

                {this.state.isOpen && <div className='modal'>
                    <div className='modal-body'>
                        <h1>Список Дел или To Do List</h1>
                        <p>Это "ToDo List", "Список Дел".
                        Здесь вы можете добавлять, вычеркивать завершенные и удалять дела, задачи и пр.
                        (todoProjectOnReact v1. Litovkin K.) </p>
                        <button onClick={() => this.setState({ isOpen: false})}>Закрыть окно</button>
                    </div>
                </div>}
            </React.Fragment>
        )
    }
}