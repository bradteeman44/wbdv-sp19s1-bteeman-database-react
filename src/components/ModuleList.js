import React from 'react'
import ModuleListItem from "./ModuleListItem";

class ModuleList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            module: {id: '', title: ''},
            modules: this.props.modules
        };

        // this.titleChanged = this.titleChanged.bind(this);
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
                module: {id: (Math.random() * 1000000000), title: event.target.value}
            });
    }

    render() {
        return (
            <div id="modules">
                <ul className="list-group">
                    <li className="list-group-item">
                        <input
                            onChange={this.titleChanged}
                            className="form-control"/>
                        <button
                            onClick={this.createModule}
                            className="btn btn-block"
                            value="ADDMODULE"
                            id="addModule">
                            <i className="fa fa-plus"></i>
                        </button>
                    </li>
                    {
                        this.state.modules.map(
                            (module) => {
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
                </ul>
            </div>
        )
    }
}

export default ModuleList;