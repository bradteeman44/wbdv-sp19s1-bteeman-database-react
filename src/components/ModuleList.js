import React from 'react'
import ModuleListItem from "./ModuleListItem";

class ModuleList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            module: {title: 'New Module', lessons: [{topics: [{}]}]},
            modules: this.props.modules
        };

        this.titleChanged = this.titleChanged.bind(this);
        this.createModule = this.createModule.bind(this);
        this.deleteModule = this.deleteModule.bind(this);
    }

    createModule = () =>
        this.setState({
            modules: this.props.courseService.addModule(this.props.course, this.state.module)
        })

    deleteModule = module =>
        this.setState({
            modules: this.props.courseService.deleteModule(this.props.course, module)
        })

    titleChanged = (event) => {
        this.setState(
            {
                module: {title: event.target.value, lessons: [{topics: [{}]}]}
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
                                        selectedModule={this.props.selectedModule}
                                        selectModule={this.props.selectModule}
                                        deleteModule={this.deleteModule}
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