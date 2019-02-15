import React from 'react'
import ModuleListItem from "./ModuleListItem";

class ModuleList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            module: {title: 'New Module', lessons: [{topics: [{widgets: [{}]}]}]},
            modules: this.props.modules,
            updateModuleFld: ''
        };

        this.titleChanged = this.titleChanged.bind(this);
        this.createModule = this.createModule.bind(this);
        this.deleteModule = this.deleteModule.bind(this);
    }

    createModule = () =>
        this.setState({
            modules: this.props.courseService.addModule(this.props.course, this.state.module),
            updateModuleFld: ''
        })

    deleteModule = module =>
        this.setState({
            modules: this.props.courseService.deleteModule(this.props.course, module)
        })

    updateModule = module => {
        module.title = this.state.updateModuleFld;
        this.setState({
            modules: this.props.courseService.updateModule(this.props.course, module),
            updateModuleFld: ''
        })
    }

    titleChanged = (event) => {
        this.setState(
            {
                module: {title: event.target.value, lessons: [{topics: [{}]}]},
                updateModuleFld: event.target.value
            });
    }
    render() {
        return (
            <div>
                <ul className="list-group">
                    {
                        this.state.modules.map(module => {
                                if(module == null) {
                                    return null
                                }
                                return (
                                    <ModuleListItem
                                        selectedModule={this.props.selectedModule}
                                        selectModule={this.props.selectModule}
                                        deleteModule={this.deleteModule}
                                        updateModule={this.updateModule}
                                        key={module.id}
                                        module={module}/>
                                )
                            }
                        )
                    }
                    <li
                        className="list-group-item"
                        id="module">
                        <input
                            onChange={this.titleChanged}
                            value={this.state.updateModuleFld}
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