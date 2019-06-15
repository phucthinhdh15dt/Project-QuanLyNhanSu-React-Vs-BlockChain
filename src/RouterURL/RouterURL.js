import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link ,Switch } from "react-router-dom";

import PesonnelContainer from '../container/PesonnelContainer/PesonnelContainer';
import TeamContainer from '../container/TeamContainer/TeamContainer';
import Home from '../component/Home/Home';

import Detail from '../container/PesonnelContainer/component/Detail';
import ModalCreate from '../container/PesonnelContainer/component/ModalCreate';
import ModalEdit from '../container/PesonnelContainer/component/ModalEdit';

//quan ly team
import ModalCreateTeam from '../container/TeamContainer/component/ModalCreate';
import ModalEditTeam from '../container/TeamContainer/component/ModalCreate';
import RedirectTeam from '../container/TeamContainer/component/RedirectTeam';

//quan ly cong viec
import TaskContainer from '../container/TaskContainer/TaskContainer';
import TaskContainer1 from '../container/TaskContainer/TaskContainer';
import DetailTask from '../container/TaskContainer/component/Detail';
import ModalCreateTask from '../container/TaskContainer/component/ModalCreate';
import ModalEditTask from '../container/TaskContainer/component/ModalEdit';

//quan ly du an

import ProjectContainer from '../container/ProjectContainer/ProjectContainer';
export default class RouterURL extends Component {
    render(){
        return (
                <div>
                    <Switch >
                    
                        {/* quan ly nhan su */}
                        <Route exact path="/home/nhan-su-chinh-thuc" component={PesonnelContainer} />
                        
                        <Route exact path="/home/nhan-su-chinh-thuc/them"  component={ModalCreate}/>}/>
                        <Route exact path="/home/nhan-su-chinh-thuc/chi-tiet/:id" component={Detail} />
                        <Route exact path="/home/nhan-su-chinh-thuc/sua/:id"  component={ModalEdit}/>}/>

                         {/* quan ly team */}
                        <Route exact path="/home/nhom" component={TeamContainer} />
                        <Route exact path="/home/nhom/them"  component={ModalCreateTeam}/>}/>
                        <Route exact path="/home/nhom/chi-tiet/:id" component={Detail} />
                        <Route exact path="/home/nhom/sua/:id"  component={ModalEditTeam}/>}/>
                        <Route exact path="/home/chuyen-nhom"  component={RedirectTeam}/>}/>
                       

                        {/* quan ly cong viec */}
                        <Route exact path="/home/cong-viec" component={TaskContainer} />
                        <Route exact path="/home/nhom/them"  component={ModalCreateTask}/>}/>
                        <Route exact path="/home/nhom/chi-tiet/:id" component={DetailTask} />
                        <Route exact path="/home/cong-viec/sua/:id"  component={ModalEditTask}/>}/>
                        <Route exact path="/home/giao-viec"  component={ModalCreateTask}/>}/>

                        {/* quan ly Project */}
                        {/* <Route exact path="/home/du-an" component={TaskContainer} /> */}
                        <Route exact path="/home/du-an/tien-do-du-an" component={ProjectContainer} />
                        {/* <Route exact path="/home/du-an/them"  component={ModalCreateTask}/>}/>
                        <Route exact path="/home/du-an/chi-tiet/:id" component={DetailTask} />
                        <Route exact path="/home/du-an/sua/:id"  component={ModalEditTask}/>}/> */}
                        
                        
                        {/* trang chu */}
                        <Route path="/home" component={Home} />
                        
                        <Route component={Home} />
                        
                    </Switch>
                </div>
        )
    }
}
