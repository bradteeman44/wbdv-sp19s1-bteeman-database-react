import React from 'react'

const ModuleListItem = ({module, selectModule, deleteModule}) =>
    <li onClick={() => selectModule(module)} className="list-group-item">
        {module.title}
        <span className="float-right">
            <button onClick={() => deleteModule(module)}>
                <i className="fa fa-trash"></i>
            </button>
            <button>
                <i className="fa fa-pencil"></i>
            </button>
       </span>
    </li>

export default ModuleListItem;