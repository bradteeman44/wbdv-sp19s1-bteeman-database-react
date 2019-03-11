import React from 'react'
import ModuleListItem from "./ModuleListItem";
import ModuleService from "../services/ModuleService";

class ModuleList extends React.Component {
    constructor(props) {
        super(props)
        this.moduleService = new ModuleService();
        this.state = {
            module: {
                title: 'New Module', lessons: [{title: '', topics: [{title: '', widgets: [{title: ''}]}]}]
            },
            modules: this.props.modules,
            updateModuleFld: ''
        };

        this.titleChanged = this.titleChanged.bind(this);
        this.createModule = this.createModule.bind(this);
    }

    componentDidMount() {
        console.log(this.state.modules)
        this.findModules()
        console.log(this.state.modules)
    }

    componentWillReceiveProps(prevProps) {
        console.log(this.state.modules)
        console.log(this.props.modules)
        if (this.props.modules !== this.state.modules) {
            console.log("update")
            this.findModules();
        }
    }

    createModule = () => {
        this.props.createModule(this.state.module)
        this.setState({
            updateModuleFld: ''
        })
    }

    findModules = () => {
        this.moduleService.findAllModules(this.props.courseId).then(modules => {
            this.setState({
                modules: modules
            })});;
    }

    updateModule = module => {
        module.title = this.state.updateModuleFld;
        this.moduleService.updateModule(module);
        this.setState({
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
                                        deleteModule={this.props.deleteModule}
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