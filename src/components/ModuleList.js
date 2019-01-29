import React from 'react'
import ModuleListItem from "./ModuleListItem";

class ModuleList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            module: {id: (new Date()).getTime(), title: 'New Module', lessons: [{}]},
            modules: this.props.modules
        };

        this.titleChanged = this.titleChanged.bind(this);
        this.createModule = this.createModule.bind(this);
        this.deleteModule = this.deleteModule.bind(this);
    }

    createModule = () => {
        this.setState(
            {
                modules: [
                    ...this.state.modules,
                    this.state.module
                ]
            }
        )
    }

    filterModules = moduleToDelete =>
        this.state.modules.slice().filter(
            module => module.id !== moduleToDelete.id
        )


    deleteModule = moduleToDelete =>
        this.setState({
                modules: this.filterModules(moduleToDelete)
            })


    titleChanged = (event) => {
        this.setState(
            {
                module: {id: (new Date()).getTime(), title: event.target.value, lessons: [{topics: [{}]}]}
            });
    }

    render() {
        return (
            <div>
                <ul className="list-group">

                    {
                        this.state.modules.map(
                            (module) => {
                                if(module == null) {
                                    return null
                                }
                                return (
                                    <ModuleListItem
                                        selectModule={this.props.selectModule}
                                        deleteModule={this.deleteModule}
                                        key={module.id}
                                        module={module}/>
                                )
                            }
                        )
                    }
                    <li className="list-group-item" id="module">
                        <input
                            onChange={this.titleChanged}
                            value={this.state.module.title}
                            placeholder="New Module"
                            className="form-control"/>
                        <button
                            onClick={this.createModule}
                            className="btn btn-block"
                            value="ADDMODULE"
                            id="addModule">
                            <i className="fa fa-plus"></i>
                        </button>
                    </li>
                </ul>
            </div>
        )
    }
}

export default ModuleList;