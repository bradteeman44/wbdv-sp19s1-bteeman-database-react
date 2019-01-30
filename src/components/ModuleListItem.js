import React from 'react'

const ModuleListItem = ({module, selectModule, selectedModule, deleteModule}) =>
    <li onClick={() => selectModule(module)}
        className={module === selectedModule? "list-group-item active":"list-group-item"}
        id="module">
        <a>
            {module.title}
        </a>
        <span
            className="float-right">
            <button
                className="btn-outline-danger"
                onClick={() => deleteModule(module)}>
                <i className="fa fa-trash"></i>
            </button>
            <button
                className="btn-outline-primary">
                <i className="fa fa-pencil"></i>
            </button>
       </span>
    </li>

export default ModuleListItem;