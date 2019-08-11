import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link ,Switch } from "react-router-dom";
import PesonnelContainer from '../container/PesonnelContainer/PesonnelContainer';
import TeamContainer from '../container/TeamContainer/TeamContainer';
import Home from '../component/Home/Home';

import ThongKe from '../component/ThongKe/ThongKe';
import profileComponent from '../component/Profile/profileComponent'; 

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

//
import PositionContainer from '../container/PositionContainer/PositionContainer';
import DetailPosition from '../container/PositionContainer/component/Detail';
import ModalCreatePosition from '../container/PositionContainer/component/ModalCreate';
import ModalEditPosition from '../container/PositionContainer/component/ModalEdit';

//quan ly du an

import ProjectContainer from '../container/ProjectContainer/ProjectContainer';
import ProjectCreate from '../container/ProjectContainer/component/ModalCreate';
import ProjectEdit from '../container/ProjectContainer/component/ModalEdit';
import ProjectDetail from '../container/ProjectContainer/component/Detail';
//review
import ReviewContainer from '../container/ReviewContainer/ReviewContainer';


//Notification
import NotificationDetail from '../container/NotificationContainer/component/NotificationDetail';
export default class RouterURL extends Component {
    render(){
        return (
                <div>
                    <Switch >
                   
                    {/* <Route exact path="/trang-chu" component={Home} /> */}
                    {/* <Route exact path="/" component={Home} /> */}
                        {/* quan ly nhan su */}
                        <Route exact path="/trang-chu/nhan-su-chinh-thuc" component={PesonnelContainer} />
                        
                        <Route exact path="/trang-chu/nhan-su-chinh-thuc/them"  component={ModalCreate}/>}/>
                        <Route exact path="/trang-chu/nhan-su-chinh-thuc/chi-tiet/:id" component={Detail} />
                        <Route exact path="/trang-chu/nhan-su-chinh-thuc/sua/:id"  component={ModalEdit}/>}/>

                         {/* quan ly team */}
                        <Route exact path="/trang-chu/nhom" component={TeamContainer} />
                        <Route exact path="/trang-chu/nhom/them"  component={ModalCreateTeam}/>}/>
                        <Route exact path="/trang-chu/nhom/chi-tiet/:id" component={Detail} />
                        <Route exact path="/trang-chu/nhom/sua/:id"  component={ModalEditTeam}/>}/>
                        <Route exact path="/trang-chu/chuyen-nhom"  component={RedirectTeam}/>}/>
                       

                        {/* quan ly cong viec */}
                        <Route exact path="/trang-chu/cong-viec" component={TaskContainer} />
                        <Route exact path="/trang-chu/nhom/them"  component={ModalCreateTask}/>}/>
                        <Route exact path="/trang-chu/nhom/chi-tiet/:id" component={DetailTask} />
                        <Route exact path="/trang-chu/cong-viec/sua/:id"  component={ModalEditTask}/>}/>
                        <Route exact path="/trang-chu/giao-viec"  component={ModalCreateTask}/>}/>

                        {/* quan ly Project */}
                        <Route exact path="/trang-chu/du-an/danh-sach-du-an" component={ProjectContainer} />
                        <Route exact path="/trang-chu/du-an/them"  component={ProjectCreate}/>}/>
                        <Route exact path="/trang-chu/du-an/chi-tiet/:id" component={ProjectEdit} />
                        <Route exact path="/trang-chu/du-an/sua/:id"  component={ProjectEdit}/>}/>
                        
                        <Route exact path="/trang-chu/du-an/them"  component={ModalCreateTask}/>}/>
                        <Route exact path="/trang-chu/du-an/chi-tiet/:id" component={DetailTask} />
                        <Route exact path="/trang-chu/du-an/sua/:id"  component={ModalEditTask}/>}/>
                        <Route exact path="/trang-chu/tat-ca-thong-bao" component={NotificationDetail} />

                           {/* Position  */}
                           <Route exact path="/trang-chu/chuc-vu" component={PositionContainer} />
                        
                        <Route exact path="/trang-chu/chuc-vu/them"  component={ModalCreatePosition}/>}/>
                        <Route exact path="/trang-chu/chuc-vu/chi-tiet/:id" component={DetailPosition} />
                        <Route exact path="/trang-chu/chucvu/sua/:id"  component={ModalEditPosition}/>}/>
                        

                        <Route exact path="/trang-chu/danh-gia" component={ReviewContainer} />
                         {/* profile */}
                         <Route exact path="/trang-chu/ho-so/:profileId" component={profileComponent} />
                        {/* //thongke */}
                        <Route exact path="/trang-chu/thong-ke" component={ThongKe} />
                       
                        {/* trang chu */}
                        <Route exact path="/trang-chu" component={Home} />
                        
                        <Route component={Home} />
                        {/* Notification  */}
                      
                        
                    </Switch>
                </div>
        )
    }
}
