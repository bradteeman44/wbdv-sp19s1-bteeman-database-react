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
            prevModules: this.props.modules,
            updateModuleFld: ''
        };

        this.titleChanged = this.titleChanged.bind(this);
        this.createModule = this.createModule.bind(this);
    }

    componentDidMount() {
        console.log(this.state.modules)
        this.findModulesUpdate()
        console.log(this.state.modules)
    }

    /*
    componentWillReceiveProps(prevProps) {
        console.log(this.state.modules)
        console.log(this.props.modules)
        if (this.state.modules !== this.state.prevModules) {
            console.log("updateChangeState")
            this.findModules();
        } else if (this.props.modules !== prevProps.modules) {
            console.log("updateChangeProps")
            this.findModules();
        }
    }
     */

    componentDidUpdate(prevProps) {
        console.log(this.state.modules)
        console.log(this.props.modules)
        if (this.state.modules !== this.state.prevModules) {
            console.log("updateChangeState")
            this.findModulesUpdate();
        } else if (this.props.modules !== prevProps.modules) {
            console.log("updateChangeProps")
            this.findModulesUpdate();
        }
    }

    createModule = () => {
        this.moduleService.addModule(this.props.courseId, this.state.module)
            .then(this.findModules)
        this.props.setCourse()
        this.setState({
            updateModuleFld: ''
        })
    }

    deleteModule = module => {
        this.moduleService.deleteModule(module)
            .then(this.findModules())
        this.props.setCourse()
    }

    findModulesUpdate = () => {
        this.moduleService.findAllModules(this.props.courseId).then(modules => {
            this.setState({
                modules: modules,
                prevModules: modules
            })});
    }

    findModules = () => {
        this.moduleService.findAllModules(this.props.courseId).then(modules => {
            this.setState({
                modules: modules
            })});
    }

    updateModule = module => {
        module.title = this.state.updateModuleFld;
        this.moduleService.updateModule(module)
            .then(this.findModules());
        this.setState({
            updateModuleFld: ''
        })
        this.props.setCourse()
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